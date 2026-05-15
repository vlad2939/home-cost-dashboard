# HomeDash

HomeDash este o aplicație locală pentru urmărirea și compararea cheltuielilor lunare ale casei: curent, gaze, apă, internet, gunoi, telefon și impozit.

Aplicația păstrează datele într-o bază de date locală în format JSON, afișează un dashboard configurabil și permite analizarea costurilor pe ani, luni și metrici.

## Pagini principale

- **Dashboard**: afișează carduri configurabile cu KPI-uri, grafice și tabele.
- **Analiză**: compară costuri și consumuri folosind filtre pentru ani, lună și metrici.
- **Date**: permite adăugarea de înregistrări noi și administrarea tabelului de date.
- **Setări**: permite configurarea calculului de impozit, backup/restore și personalizarea cardurilor din dashboard.

## Persistența datelor

Datele sunt păstrate în fișierul `database.json`.

Fișierul conține:

- `rawData`: înregistrările lunare ale utilităților.
- `cards`: configurația cardurilor din dashboard.
- `settings`: setările generale ale aplicației.

La pornire, aplicația citește baza de date din `database.json`. Când se adaugă o înregistrare, se șterge o înregistrare, se modifică un card sau se schimbă o setare, fișierul este actualizat automat.

> Pentru ca salvarea în fișier să funcționeze, aplicația trebuie pornită prin serverul local inclus în proiect.

## Pornire aplicație

Din folderul aplicației se rulează:

`npm start`

Apoi aplicația se deschide în browser la:

`http://localhost:3000`

## Flux de date

1. Aplicația citește `database.json`.
2. Pagina **Date** adaugă sau elimină înregistrări.
3. Salvarea actualizează imediat `database.json`.
4. **Dashboard** și **Analiză** folosesc datele curente din baza JSON.
5. Configurația cardurilor din **Setări** este salvată tot în baza JSON.

## Tehnologii folosite

- HTML, CSS și JavaScript.
- Tailwind local pentru stilizare.
- Chart.js local pentru grafice.
- Node.js pentru serverul local care citește și scrie `database.json`.

## Backup și restaurare

Pagina **Setări** include opțiuni pentru export și import JSON. Exportul descarcă o copie completă a aplicației, iar importul poate restaura datele, cardurile și setările.

## Autor

@ concept și realizare vlad39
