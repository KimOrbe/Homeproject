# Mine hjemmeprojekter

Et lille begynderprojekt med HTML, CSS og JavaScript. Hold styr på projekter i hjemmet, forventede budgetter og status.

## Åbn projektet i VS Code

1. Installér Git og Visual Studio Code på din computer.
2. Vælg **Clone Repository** i VS Code (via kommandopaletten), og indsæt `https://github.com/KimOrbe/Homeproject.git`.
3. Vælg en lokal mappe, og åbn det klonede projekt.
4. Installér udvidelsen **Live Server** af Ritwick Dey. Højreklik på `index.html`, og vælg **Open with Live Server**.

Alternativt, hvis Python 3 er installeret, kan du åbne terminalen i projektmappen og køre:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

På Windows kan kommandoen være `py -m http.server 8000 --bind 127.0.0.1`. Åbn derefter localhost på port 8000 i din browser. Stop serveren med Ctrl+C. Ingen pakker eller byggetrin er nødvendige.

## Filerne

- `index.html`: sidens indhold og formular.
- `style.css`: farver, layout og mobilvisning.
- `app.js`: tilføjelse, status, filtrering, sletning og lagring.

Listen er tom ved første besøg. Prøv at tilføje “Male stuen” med budget 1500 kr., skifte status til “I gang” og genindlæse siden. Projektet skal stadig være der. Oplysninger gemmes lokalt i browseren, ikke på GitHub. En anden browser eller serveradresse har sit eget lager. Der er endnu ingen eksport eller synkronisering.

## Din første ændring med Git

Git holder styr på filernes historie. GitHub opbevarer repositoryet online; VS Code er værktøjet, hvor du redigerer filerne.

1. Ret fx overskriften i `index.html`, og gem filen.
2. Kontrollér resultatet i browseren.
3. Åbn **Source Control** i VS Code, og gennemgå ændringen.
4. Klik på **+** ved filen for at vælge den til dit commit (stage).
5. Skriv en kort besked, fx `Tilpas sidens overskrift`, og vælg **Commit**.
6. Vælg **Push** eller **Sync Changes** for at sende dit commit til GitHub. VS Code kan bede dig logge ind på GitHub.

Et commit gemmer en lokal version; push sender den til GitHub. Hvis Git beder om navn og e-mail ved første commit, skal du konfigurere din egen identitet efter VS Codes anvisninger. Brug eventuelt din private GitHub noreply-adresse.

## Næste øvelser

- Ændr farverne i `style.css`.
- Tilføj et felt til projektets rum eller kategori.
- Opret en branch til en ændring, push den, og åbn en pull request på GitHub.

Del ikke adgangskoder eller private oplysninger i repositoryet.
