# WebStorm — jak podłączyć SQLite (krótko)

1) Otwórz Database tool: View → Tool Windows → Database (lub Alt+2).  
2) Kliknij znak "+" → Data Source → SQLite → "Data Source from File".  
3) W oknie konfiguracji:
   - Pole "File" → wybierz plik bazy: C:\Users\patry_vj6va1y\WebstormProjects\untitled\data.sqlite  
     (jeśli plik nie istnieje, uruchom serwer — kod tworzy plik automatycznie).
   - Jeśli WebStorm poprosi o sterownik SQLite → kliknij "Download" / "OK".
4) Kliknij "Test Connection" → powinno być OK → kliknij "Apply" / "OK".
5) W panelu Database rozwiń źródło → Schemas / Tables → dwuklik na tabelę otworzy widok z danymi.
   - Możesz też prawym przyciskiem → New → Console, i uruchamiać zapytania np.:
     SELECT * FROM users LIMIT 100;
6) Jeśli chcesz przeglądać DB przez HTTP w przeglądarce:
   - Uruchom serwer i otwórz: http://localhost:4000/db
   - Albo zainstaluj sqlite-web (Python/pip required) i uruchom:
     `sqlite-web C:\Users\patry_vj6va1y\WebstormProjects\untitled\data.sqlite`

Windows: "pip" not recognized — quick alternatives
- Easiest: install DB Browser for SQLite (GUI): https://sqlitebrowser.org/ — download installer, open data.sqlite.
- Or install Python (from python.org or Microsoft Store). New Python installers include pip; after install run:
  `python -m pip install --upgrade pip`
  `python -m pip install sqlite-web`
- Or use the built-in Node viewer (no Python): start your backend and open http://localhost:4000/db — this project provides a lightweight viewer.

Troubleshooting: "Cannot GET /api/db/tables"
- Make sure the backend is started from the `server` folder and you restarted it after applying changes:
  `cd server`
  `node src/index.js`
- Open exactly: http://localhost:4000/db  (browser viewer) or http://localhost:4000/api/db/tables (raw JSON).
- Test from terminal: `curl -i http://localhost:4000/api/db/tables` or use Postman.
- If 404, server may be running an older version; stop it and restart from the folder containing `src/index.js`.
