# Renovo

## Backendin pystytys

navigoi kansioon cd backend

asennetaan paketit npm i

ajetaan node-projekti npm run dev

## KUBIOS LOGIN, testaus ja käyttöohjeet (LUE!!!!)

1. Aja komennot: `npm install node-fetch` ja `npm install axios uuid` bashissa. Nämä asentaa tarvittavat kirjastot, jotka pistää API- pyynnöt Kubiokselle toiminaan. Ilman niitä sisäänkirjautuminen ei toimi.

2. Luo tietokanta Renovo omalle koneelle `source <reitti_omalta_koneella/renovo.sql>`

3. Anna itselle oikeudet tietokantaan. Rosa tehnyt ohjeet create-user-example.sql- tiedostossa. Täytä ohjeiden mukaisesti ja copy paste terminaaliin.

4. Päivitä oma .env- tiedosto vastaamaan .env.example-tiedoston rakennetta ja täyttäkää .env:n tarvittavat kohdat. Osa (Kubiosta koskevista) täytettävistä kohdista löytyy Matin aineistosta viime kurssin [kurssimateriaalista](https://github.com/mattpe/hyte-web-dev/blob/main/12-kubios.md) --> "Implement Login Using Kubios Cloud" --> "2. Add Kubios settings to `.env` file (and to .env-sample)". Kubioksen Client Id saatiin Saken kurssilla periodissa 3. Kubios User Agent voi valita itse ja jwt_secret saa luoda parhaakseen näkemällä tavalla. Backend url ja Backend port voi jättää tyhjiksi. HUOM! EI MITÄÄN NÄISTÄ TIEDOISTA .env.sampleen!

.env- tiedosto on jo .gitignoressa, se ei siis hyppää Gittiin tai Githubiin.

5. Serveri pyörimään `npm run dev`.

6. Mene test-request.http- tiedostoon, ja syötä oikeille paikoille username ja password. Ohjeet täyttöön löytyvät sieltä.
HUOM!!!!!!!! Älä IKINÄ add, commit tai push omia käyttäjätietoja (käyttäjänimi ja/tai salasana). Testien jälkeen joko palautat tiedoston sen alkuperäiseen muotoon, tai jätä täytettävät kohdat tyhjäksi, mutta omia tietoja ei ikinä Gittiin tai Githubiin.

7. Kun olet täyttänyt kohdat test-request.http tiedostossa, Paina --> Send request
