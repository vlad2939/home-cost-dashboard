# Home cost Dashboard

Home cost Dashboard este un add-on Home Assistant pentru urmărirea și compararea cheltuielilor cu utilitățile casei.

## Funcții

- Dashboard configurabil cu KPI-uri, grafice și tabele.
- Analiză pe ani, luni și metrici.
- Administrare date direct din interfață.
- Persistență în `database.json`.
- Backup și restaurare JSON.

## Persistență

În Home Assistant, baza de date este păstrată în `/data/database.json`, adică în zona persistentă a add-on-ului. La prima pornire, add-on-ul copiază baza inclusă în imagine și apoi lucrează doar cu fișierul persistent.

## Instalare din GitHub

1. În Home Assistant mergi la **Settings → Add-ons → Add-on Store**.
2. Deschide meniul cu trei puncte și alege **Repositories**.
3. Adaugă URL-ul repository-ului:

   `https://github.com/vlad2939/home-cost-dashboard`

4. Instalează add-on-ul **Home cost Dashboard**.
5. Pornește add-on-ul și deschide interfața din panoul Home Assistant sau din Web UI.

## Port

Add-on-ul rulează intern pe portul `3000`. În configurația curentă, portul host este mapat la `3040`, iar Ingress este activat.
