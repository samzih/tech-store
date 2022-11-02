# TechStore inlämningsuppgift (grupp 9)

**Länk till GitHub repo** https://github.com/samzih/tech-store/

##### Beskrivning av projektet
I det här projektet har vi (Elin, Sam och Saeed) kombinerat vår kunskap inom webbutveckling genom HTML, CSS och JavaScript för att skapa den dynamiska e-handeln TechStore. TechStore är ett nystartat företag som specialiserar sig på att sälja teknikprylar.

##### Förändringar/Förbättringar
Vi har valt att visuellt ändra/förbättra nummersymbolen vid shoppingvagnen. Istället för att lägga den bredvid shoppingvagnen så harvi lagt den ovanpå inuti en orange box. Anledningen till detta var dels det visuella men även för att det såg snyggare än om den skulle ligga som en siffra bredvid "Logga in" och "Skapa konto". När vi tog detta beslutet har vi varit inspeirerade av hur andra liknande e-handelsbutiker har gjort.

Då vi fick fria händer till att välja vad vi skulle lägga "Logga in" och "Skapa konto" valde vi att lägga dessa i direkt anslutning till shoppingvagnen, även detta efter att ha inspiretats av andra e-handelsbutiker. Vi har däremot inte gjort dessa funktionella.

När kundvagnen är tom, istället för att bara ha en tom sida så har vi valt att lägga en container med text i som beskriver för användaren att kundvagnen faktiskt är tom.

I beskrivningen så stod det att vi skulle göra en popup när man tycker på "Slutför köp". I samråd med lärare har vi istället valt att använda oss av en ny HTML-sida. Så när man trycker på "Slutför köp" tar det användaren till en annan HTML-sida.

### Krav som vi utfört
##### Navigationsbar
- Hemsidan skall innehålla en fixerad navigationsbar längst upp på sidan som går hela vägen från vänster till höger.
- Till vänster i navigationsbaren skall det finnas en titel (TechStore) som skall vara klickbar, ett klick på titeln tar användaren till startsidan.
- Till höger i navigationsbaren skall det finnas en kundvagnsknapp som skall vara klickbar, ett klick på knappen tar användaren till kundvagnssidan.
- När en produkt läggs till i kundvagnen skall detta reflekteras med att det visas en siffra intill kundvagnsknappen som reflekterar antalet produkter i kundvagnen.

##### Startsida
- Startsidan skall lista produkterna som finns i products.json filen.
- Varje presentationsyta för produkterna skall ta upp ungefär hela höjden av skärmen och presentera all produktinformation.
- Det skall även, för varje produkt, finnas en knapp för att lägga till produkterna i kundvagnen.
- Produkterna som har lags till i kundvagnen skall sparas i localStorage så det är möjligt att komma åt informationen från alla sidor.

##### Kundvagnssida
- Kundvagnssidan skall lista produkterna som användaren har lagt till i kundvagnen.
- Listan skall vara horizontell och centrerad.
- Det ska gå att se flera produkter utan att behöva skrolla på sidan.
- Varje produkt i listan skall visa bilden, titeln, priset och en knapp för att ta bort produkten ur kundvagnen.
- Nedanför listan skall det finnas ett totalbelopp samt en knapp för att slutföra köpet.
- Knappen för att slutföra köpet skall, vid klickning, visa en bekräftelse på köpet i en popup.

##### Övrigt och VG-krav
- Hemsidan skall vara responsiv, dvs den skall gå att öppna på en mobil, en surfplatta och en datorskärm.
- Hemsidan skall efterlikna bilderna som finns i mockup-mappen (inklusive samtliga färger, font-typ, textstorlek osv).
- Utöka produktlistan med ett urval från årets modeller så det totalt finns 10 stycken telefoner.
- När man bekräftar ett köp skall kundvagnen tömmas.

#### Betyg
Vi satsar på G som betyg.
