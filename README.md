# Home cost dashboard - Home Assistant Add-on Repository

Acest repository conține add-on-ul **Home cost Dashboard** pentru Home Assistant.

## Repository GitHub

`https://github.com/vlad2939/home-cost-dashboard`

## Instalare în Home Assistant

1. În Home Assistant, mergi la **Settings → Add-ons → Add-on Store**.
2. Deschide meniul cu trei puncte și alege **Repositories**.
3. Adaugă URL-ul:

   `https://github.com/vlad2939/home-cost-dashboard`

4. Instalează add-on-ul **Home cost Dashboard**.
5. Pornește add-on-ul și deschide interfața din panoul Home Assistant sau din Web UI.

## Add-on inclus

- Folder add-on: `homedash`
- Slug: `homecost`
- Versiune: `17.3.1`
- Ingress: activ
- Port intern: `3000`
- Port host configurat: `3040`
- Bază persistentă: `/data/database.json`

## Actualizare

La fiecare versiune nouă:

1. Actualizează aplicația din `homedash/app`.
2. Crește versiunea din `homedash/config.yaml`.
3. Publică schimbările în GitHub.
4. Actualizează add-on-ul din Home Assistant.
