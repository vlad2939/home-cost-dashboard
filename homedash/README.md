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

1. Publică acest repository în GitHub, de exemplu:

   `https://github.com/vlad2939/home-cost-dashboard`

2. În Home Assistant mergi la **Settings → Add-ons → Add-on Store**.
3. Deschide meniul cu trei puncte și alege **Repositories**.
4. Adaugă URL-ul repository-ului.
5. Instalează add-on-ul **Home cost Dashboard**.
6. Pornește add-on-ul și deschide interfața din panoul Home Assistant sau din Web UI.

## Port

Add-on-ul expune intern portul `3000`. Ingress este activat, iar portul poate fi publicat și direct ca `3000/tcp`.
