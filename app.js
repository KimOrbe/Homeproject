const storageKey = 'homeproject.projects.v1';
const statuses = ['Idé', 'I gang', 'Færdig'];
const currency = new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK' });
const message = document.querySelector('#message');
let projects = [];

// Browserens lokale lager bevarer projekterne mellem besøg.
try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
  if (!Array.isArray(saved) || !saved.every(project =>
    project && typeof project.id === 'string' && typeof project.name === 'string' &&
    typeof project.description === 'string' && Number.isFinite(project.budget) &&
    project.budget >= 0 && statuses.includes(project.status))) {
    throw new Error('Ugyldige gemte projekter');
  }
  projects = saved;
} catch {
  message.textContent = 'Gemte projekter kunne ikke læses. Listen starter tom; nye ændringer erstatter de gemte data.';
}

function save() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(projects));
    message.textContent = '';
  } catch {
    message.textContent = 'Browseren kunne ikke gemme ændringen. Den findes kun, indtil du genindlæser siden.';
  }
  render();
}

// textContent viser brugerens tekst sikkert som tekst, også hvis den indeholder HTML.
function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function render() {
  document.querySelector('#total').textContent = projects.length;
  document.querySelector('#active').textContent = projects.filter(p => p.status === 'I gang').length;
  document.querySelector('#budget').textContent = currency.format(projects.reduce((sum, p) => sum + p.budget, 0));
  const list = document.querySelector('#projects');
  list.replaceChildren();
  const filter = document.querySelector('#filter').value;
  const visible = projects.filter(p => filter === 'Alle' || p.status === filter);
  if (!visible.length) list.append(element('p', projects.length ? 'Ingen projekter med denne status.' : 'Din første idé starter her. Tilføj et projekt ovenfor.'));
  for (const project of visible) {
    const card = element('article', undefined, 'project');
    card.append(element('h3', project.name), element('p', project.description), element('p', `Forventet budget: ${currency.format(project.budget)}`));
    const actions = element('div', undefined, 'project-actions');
    const label = element('label', `Status for ${project.name}`);
    const select = element('select');
    for (const status of statuses) {
      const option = element('option', status);
      option.value = status;
      option.selected = status === project.status;
      select.append(option);
    }
    select.addEventListener('change', () => { project.status = select.value; save(); });
    label.append(select);
    const remove = element('button', 'Slet', 'delete');
    remove.type = 'button';
    remove.setAttribute('aria-label', `Slet ${project.name}`);
    remove.addEventListener('click', () => {
      if (!confirm(`Vil du slette projektet “${project.name}”?`)) return;
      projects = projects.filter(p => p.id !== project.id);
      save();
    });
    actions.append(label, remove);
    card.append(actions);
    list.append(card);
  }
}

document.querySelector('#project-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = data.get('name').trim();
  if (!name) { message.textContent = 'Skriv et projektnavn.'; return; }
  projects.push({ id: crypto.randomUUID(), name, description: data.get('description').trim(), budget: Number(data.get('budget')), status: data.get('status') });
  save();
  form.reset();
  form.elements.name.focus();
});
document.querySelector('#filter').addEventListener('change', render);
render();
