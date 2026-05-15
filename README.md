# Home cost dashboard - Home Assistant Add-on Repository

Acest repository conține add-on-ul **Home cost Dashboard** pentru Home Assistant.

## Repository GitHub

Repository recomandat:

`https://github.com/vlad2939/home-cost-dashboard`

## Publicare în GitHub

1. Creează repository-ul `home-cost-dashboard` în contul GitHub `vlad2939`.
2. Publică toate fișierele din acest folder în acel repository.
3. În Home Assistant, mergi la **Settings → Add-ons → Add-on Store**.
4. Deschide meniul cu trei puncte și alege **Repositories**.
5. Adaugă URL-ul:

   `https://github.com/vlad2939/home-cost-dashboard`

6. Instalează add-on-ul **Home cost Dashboard**.

## Add-on inclus

- Folder add-on: `homedash`
- Versiune: `17.3.0`
- Ingress: activ
- Port intern: `3000`
- Bază persistentă: `/data/database.json`

## Actualizare

La fiecare versiune nouă:

1. Actualizează aplicația din `homedash/app`.
2. Crește versiunea din `homedash/config.yaml`.
3. Publică schimbările în GitHub.
4. Actualizează add-on-ul din Home Assistant.
