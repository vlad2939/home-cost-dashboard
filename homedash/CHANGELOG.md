# Changelog

## 17.3.1

- Fix pornire pe Home Assistant base images cu s6-overlay v3 prin `init: false`.
- Păstrează numele, slug-ul, URL-ul și porturile configurate pentru repository-ul `vlad2939/home-cost-dashboard`.

## 17.3.0

- Conversie Home cost Dashboard în add-on Home Assistant.
- Persistență în `/data/database.json`.
- Activare Ingress și Web UI.
- Include aplicația curentă cu editare date, confirmări, scroll în tabel și documentație Markdown.
- Adăugat `init: false` pentru compatibilitate cu s6-overlay v3 din imaginile Home Assistant base.
