# Documentație Home cost Dashboard Add-on

## Pornire

După instalare, pornește add-on-ul din Home Assistant. Dacă opțiunea **Show in sidebar** este activă, HomeCost apare în meniul lateral.

## Baza de date

Fișierul activ este:

`/data/database.json`

Acest fișier este creat automat la prima pornire dacă nu există deja.

## Actualizare aplicație

Pentru actualizări prin GitHub:

1. Modifică fișierele aplicației în repository.
2. Crește versiunea din `homedash/config.yaml`.
3. Publică schimbările în GitHub.
4. În Home Assistant, reconstruiește sau actualizează add-on-ul.

## Backup

Se poate folosi backup-ul Home Assistant al add-on-ului sau funcția **Export JSON** din pagina Setări a aplicației.
