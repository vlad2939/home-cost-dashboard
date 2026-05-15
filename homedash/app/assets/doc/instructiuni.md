# Instrucțiuni HomeDash

Ghid rapid pentru actualizarea datelor, administrarea tabelului și configurarea dashboard-ului.

## Adăugarea unei înregistrări noi

1. Deschide pagina **Date**.
2. Completează cardul **Adaugă Înregistrare Nouă**.
3. Câmpurile obligatorii sunt `AN` și `LUNA`.
4. Completează valorile de cost și consum. Valorile care lipsesc pot rămâne `0`.
5. Apasă **Salvează Înregistrare**.

După salvare, noua înregistrare apare în tabel și este scrisă automat în `database.json`.

## Ștergerea unei înregistrări

1. În pagina **Date**, mergi la tabelul de date.
2. Apasă iconița de ștergere de pe rândul dorit.
3. Confirmă acțiunea în dialogul afișat.

Dialogul menționează anul și luna înregistrării, ca să fie clar ce rând urmează să fie eliminat.

## Ștergerea tuturor datelor

1. În pagina **Date**, apasă **Șterge Toate**.
2. Citește mesajul de confirmare.
3. Confirmă doar dacă vrei să golești complet tabelul de înregistrări.

Această acțiune șterge doar datele lunare. Cardurile dashboard și setările aplicației rămân păstrate.

## Configurarea calculului de impozit

În pagina **Setări**, cardul **Calcul Impozit** oferă două moduri:

- **Cash**: impozitul este afișat integral în luna în care a fost introdus sau plătit.
- **Distribuit**: totalul anual de impozit este împărțit egal pe 12 luni.

Schimbarea acestei setări afectează calculele din **Dashboard** și **Analiză**, fără să modifice valorile brute din înregistrări.

## Adăugarea unui card KPI

1. Deschide pagina **Setări**.
2. În cardul **Configurare Carduri Dashboard**, apasă **Adaugă Card Nou**.
3. La **Tip Card**, selectează **KPI Simplu**.
4. Completează titlul, metrica, agregarea, culoarea, dimensiunea și ordinea.
5. Apasă **Salvează Card**.

Cardul este salvat în `database.json` și apare în **Dashboard**.

## Adăugarea unui grafic

1. Deschide pagina **Setări**.
2. Apasă **Adaugă Card Nou**.
3. Schimbă **Tip Card** în **Grafic**.
4. Alege tipul de grafic: `bar` sau `line`.
5. Introdu metricile separate prin virgulă, de exemplu `CURENT_Cost,APA_Cost`.
6. Setează dimensiunea și ordinea.
7. Apasă **Salvează Card**.

## Adăugarea unui tabel în dashboard

1. Deschide pagina **Setări**.
2. Apasă **Adaugă Card Nou**.
3. Alege **Tabel** la **Tip Card**.
4. Completează lista de metrici separate prin virgulă.
5. Apasă **Salvează Card**.

## Backup și restaurare

Folosește **Export JSON** pentru a salva o copie completă a aplicației.

Folosește **Import JSON** pentru a restaura o copie anterioară. Importul poate suprascrie datele, cardurile și setările curente.

> Recomandare: fă un export JSON înainte de modificări mari în tabel sau în cardurile dashboard.
