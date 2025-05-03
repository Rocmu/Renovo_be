# Renovo

Renovo sovelluksen tarkoitus on seurata käyttäjän hyvinvointia ja jaksamista analysoimalla HRV-dataa (sydämen sykevälivaihtelu).

## Sisällysluettelo
- [Yleiskatsaus](#yleiskatsaus)
- [Projektin rakenne](#projektirakenne)
- [Käytetyt tekniikat](#teknologiat-käytetty)
- [Asennus](#asennus)
- [Tietokanta](#tietokanta)
- [API-dokumentaatio](#api-documentation)
- [Luojat](#contributors)

## Yleiskatsaus

Tämä repositorio sisältää taustapalvelimen **Renovo**-sovellukselle.
Sovelluksen käyttöliittymä löytyy erillisestä repositoriosta: [Renovo_fe](https://github.com/Rocmu/Renovo_fe).

## projektin rakenne

- **Taustapalvelin**: Node.js + Express server with a MySQL/MariaDB database.

## Käytetyt tekniikat

- Node.js
- Express.js
- MySQL / MariaDB
- JWT Authentication
- Docker

## Asennus

### Taustapalvelimen asennus

Kloonaa repositorio:

```bash
git clone https://github.com/Rocmu/Renovo_be.git
cd Renovo_be
```

Asenna riippuvuudet:

```bash
npm install
```

Asenna ja käynnistä MySQL/MariaDB-palvelin.

Tuo tietokantakoodi osoitteesta:

```bash
database/renovo.sql
```

Luo `.env`-tiedosto `.env.sample`-tiedoston perusteella ja määritä muuttujat.

Käynnistä kehityspalvelin:

```bash
npm run dev
```

## Tietokanta

Tietokannan rakenne ja kuvaus:

![alt text](database/tietokanta.png)


## API Documentaatio

!Linkki apidokumentaatioon!

## Contributors

Ryhmä 2
