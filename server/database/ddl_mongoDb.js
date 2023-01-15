import {MongoClient} from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
console.log("#1")
await client.connect();
console.log("#2")

const funchDBDelete = client.db("funch");
funchDBDelete.dropDatabase();
const funchDB = client.db("funch");

const isInDeleteMode = true;

if(isInDeleteMode){
    const collections = await funchDB.listCollections().toArray()
    collections.forEach((existingCollection) =>{
    funchDB.dropCollection(existingCollection.name)
    funchDB.createCollection("music")
    funchDB.createCollection("tickets")
    funchDB.createCollection("comments")
    funchDB.createCollection("products")
    funchDB.createCollection("users")
})
}

if(isInDeleteMode){
    const musicCollection = funchDB.collection("music")
    const productsCollection = funchDB.collection("products")
    const commentCollection = funchDB.collection("comments")
    const ticketCollection = funchDB.collection("tickets")

    ticketCollection.insertMany([
        {
            location: "København",
            dato: "ooooooooo",
            price: 222,
            link: "aaaaaaaa"
        

    },{
            location: "Esbjerg",
            dato: "jjjjjj",
            price: 222,
            link: "wewww"
    }
    ])

    commentCollection.insertMany([
        {
            forum: "hadeklubben",
            subject: "drake",
            createdSubjectTimeStamp: "22/4-22",
            posts: [
                {
                userWhoWrote: "admin",
                text: "JEG HADER DRAKE FOR REALS!",
                postCreated: "dengang"
            }, {
                userWhoWrote: "peter",
                text: "Synes faktisk han er meget sød hihi",
                postCreated: "nu"
            }
        ],   
        }, 
        {
            forum: "hadeklubben",
            subject: "pop",
            createdSubjectTimeStamp: "22/4-22",
            posts: [{
                userWhoWrote: "michael",
                text: "Hiphop til jeg dør!!!!!",
                postCreated: "dengang"
            },{
                userWhoWrote: "jens",
                text: "Er pop og rap ikke det samme nu om dag???",
                postCreated: "dengang"
            }],
            
        },
        {
            forum: "bars",
            subject: "Den her linje er for syg: Vi sejlede op af ååeeeen!",
            createdSubjectTimeStamp: "22/4-22",
            posts: [{
                userWhoWrote: "Mille",
                text: "ej den minder mig om den gang landsholdet vandt!! :)",
                postCreated: "før"
            },{
                userWhoWrote: "Erin",
                text: "Det er jo ikke en bar!!! Kom nu med nogle linjer",
                postCreated: "dengang"
            }],
        }, {
            forum: "bars",
            subject: "giv mig din bedste linje",
            createdSubjectTimeStamp: "22/4-22",
            posts: [{
                userWhoWrote: "Nulla",
                text: "ælle bælle mig for tælle",
                postCreated: "dengang"
            },{
                userWhoWrote: "lars",
                text: "åh jeg synes det er så svært at rime",
                postCreated: "dengang"
            }],
        },  {
            forum: "merch",
            subject: "Har du noget merch?",
            createdSubjectTimeStamp: "22/4-22",
            posts: [{
                userWhoWrote: "mogens",
                text: "Ja jeg har din røde hoodie! Mega fed. ",
                postCreated: "dengang"
            },{
                userWhoWrote: "mogens",
                text: "Nej, men ville gerne købe nogle!",
                postCreated: "dengang"
            },{

            }],
        }, {
            forum: "merch",
            subject: "alternative bud?",
            createdSubjectTimeStamp: "22/4-22",
            posts: [{
                userWhoWrote: "mogens",
                text: "gule t-shirts kunne være mega fedt!",
                postCreated: "dengang"
            },{
                userWhoWrote: "mogens",
                text: "tror du skal droppe t-shirts! De sælger ikke",
                postCreated: "dengang"
            }, {
                userWhoWrote: "slija",
                text: "måske lav skateboards med dit logo",
                postCreated: "nu"
            }, {
                userWhoWrote: "magnus",
                text: "ville være mega sejt med plakater!",
                postCreated: "nu"
            }
        ]},  
    ])

    productsCollection.insertMany([
        {
            type: "vinyl",
            color: "Hot pink",
            price: 200,
            stock: 3,
            imageFrontside: "https://cdn.shopify.com/s/files/1/0197/5966/1120/products/Product2_2c1fecf5-0db1-4be4-909a-efb32b539918_540x.jpg?v=1652183853",
            imageBackside: "https://cdn.shopify.com/s/files/1/0197/5966/1120/products/Product2_2c1fecf5-0db1-4be4-909a-efb32b539918_540x.jpg?v=1652183853"
        },
        {
            type: "vinyl",
            color: "Neon gul & Hot pink",
            price: 200,
            stock: 4,
            imageFrontside: "https://cdn.shopify.com/s/files/1/0197/5966/1120/products/Product3_ca111f09-6358-4f39-ac20-8b492d95a256_540x.jpg?v=1652183853",
            imageBackside: "https://cdn.shopify.com/s/files/1/0197/5966/1120/products/Product3_ca111f09-6358-4f39-ac20-8b492d95a256_540x.jpg?v=1652183853"
        }, 
        {
            type: "vinyl",
            color: "Obi Hot pink",
            price: 250,
            stock: 10,
            imageFrontside: "https://cdn.shopify.com/s/files/1/0197/5966/1120/products/Product1_b882ef3f-e7d8-4bc6-a054-26542f82cd47_540x.jpg?v=1652183850",
            imageBackside: "https://cdn.shopify.com/s/files/1/0197/5966/1120/products/Product1_b882ef3f-e7d8-4bc6-a054-26542f82cd47_540x.jpg?v=1652183850"
        },
        {
            type: "clothing",
            category: "tshirt",
            price: "150",
            image: "No image yet",
            color: "black",
            sizes: [{
                xs: 5,
                s: 4,
                l: 10,
                xl: 2
            }]
        },
        {
            type: "clothing",
            category: "hoodie",
            price: "300",
            image: "No image yet",
            color: "black",
            sizes: [{
                xs: 222,
                s: 133,
                l: 1034,
                xl: 2212
            }]
        },
        {
            type: "clothing",
            category: "hoodie",
            price: "300",
            image: "No image yet",
            color: "red",
            sizes: [{
                xs: 2,
                s: 1,
                l: 0,
                xl: 12
            }]
        },
        {
            type: "clothing",
            category: "hoodie",
            price: 300,
            image: "No image yet",
            color: "blue",
            sizes: [{
                xs: 22,
                s: 31,
                l: 30,
                xl: 412
            }]
        },
        {
            type: "clothing",
            category: "bag",
            price: "75",
            image: "No image yet",
            color: "black",
        }
    ])

    musicCollection.insertMany([
        {
            albumTitle: "flytilstand",
            title: "Hanekamp ft. Trepac",
            releaseDate: "24/01-2020",
            image: "https://i.scdn.co/image/ab67616d0000b27357544a6021dc3a6b88ab8860",
            length: "3:59",
            description: "Hiphop Slask",
            producer: "Xeren",
            lyrics: `
            [Intro: Trepac]
            Zoomer ind, puster ud
            Suger livet ned i lungerne og hoster blod
            Ved ikk' hvad vi sætter kurs i mod
            Men du ville sikkert gi' en fuck hvis ellers du forstod
            Forstår du? Vi står og puster ud
            Mens vi spytter dem i fjæset til vi hoster blod
            Vi snakker lort som om vi skylder penge
            Men vi' stadig ikk' til at stik' i eller skyde igennem
                            
            [Vers 1: Funch]
            Yaw, må ha' mit afløb, det nye skud på blokken
            Nu' det ude for dem, for jeg' færdig med at sulte i grotten
            Der' intet sul på kroppen, står midt i ulveflokken
            Det' så sort ud, men jeg' kommet for at slut' på toppen
            Det har jeg troet før, en smule skør under hovedet spøger
            [?] husets ryger til usle køer når rullen kører, yeah
            En gammel film med helt nye skuespillere
            For bag kulissen står en usikker musiker
            Usikre udsigter, tak for' du har udset mig
            Takter fra en fuld digter, rapper til min puls svigter
            Ikk' bankerot, vi har investeret i en udgået vare
            Bare ring så leverer vi, det' en stjerne af kvalitet
            Med hjerne kapacitet til at fjerne en wack MC
            Om dagen og om natten i ve'
            Der' ingen der [?] ingen techno stil der virker hård
            Vi ved du graver lortet som en nekrofil på kirkegården
            
            [Omkvæd: Trepac]
            Zoomer ind, puster ud
            Suger livet ned i lungerne og hoster blod
            Ved ikk' hvad vi sætter kurs i mod
            Men du ville sikkert gi' en fuck hvis ellers du forstod
            Forstår du? Vi står og puster ud
            Mens vi spytter dem i fjæset til vi hoster blod
            Vi snakker lort som om vi skylder penge
            Men vi' stadig ikk' til at stik' i eller skyde igennem
            
            [Vers 2: Funch]
            For både i slud og i regn er jeg ude med min' drenge
            Det' en buldrende vibe når vi' fulde og i vejen
            Du' ikk' forfulgt af din egne, vi sender skudende på egn
            Statuerer et par eksempler helt uden at beregne
            Hundrede pro garanti jeg hader deres yndlingskunstner
            For de pynter drikker gin med mynt' og sukker
            Og det synd uffer, mindre snak vil pynte på dig
            Løber lukker, jeg ryger pibe og spiser hønsesuppe og
            Sådan går det dagen lang, lytter til svane sang
            Tænker hvem er den største kylling i en hanekamp
            Vil intet sige til dig hvis ellers vi ku' tale sammen
            Tilbage i rammen, sat til vægs i en svalegang
            Overhæler hver en dummernik i sneglefart og
            Har et kryds der slår mig selv i regnearket
            Vi' de unge knægte, træner med de tunge vægte
            tæt, legen er startet, Funch og X på tegnebrætte

            [Omkvæd: Trepac]
            Zoomer ind, puster ud
            Suger livet ned i lungerne og hoster blod
            Ved ikk' hvad vi sætter kurs i mod
            Men du ville sikkert gi' en fuck hvis ellers du forstod
            Forstår du? Vi står og puster ud
            Mens vi spytter dem i fjæset til vi hoster blod
            Vi snakker lort som om vi skylder penge
            Men vi' stadig ikk' til at stik' i eller skyde igennem`
        },
        {
            albumTitle: "flytilstand",
            title: "Høj Kurs ft. DJ FMD",
            releaseDate: "24/01-2020",
            image: "https://i.scdn.co/image/ab67616d0000b27357544a6021dc3a6b88ab8860",
            length: "3:22",
            description: "Hiphop Slask",
            producer: "Xeren",
            lyrics: `
            [Vers 1]
            Slipset er sat, ved ikk' om jeg finder min plads
            Det hænder for tit at jeg ikk' er tilfreds
            For der' for lidt i mit glas og min konto sejler
            Pakker tasken med et headset og en håndfuld bajer
            Jeg har et ben i hver lejr og forventer det jeg plejer
            Mindreværdet sejrer gennem vintervejrets sprækker
            Jeg' - jeg en skuffelse i sidste ende
            Jeg fandt pointen og har snuppet den med spisepinde
            Der' sorte rander under øjnene fra hashrusen
            Stor brandert, jeg har svært ved at anskue det
            Løfter børsten op fra tandgruset
            Manden i spejlet stirrer på mig som om det var galehuset
            Håret halvsjusket, men en cap på hovedet det får sagen sluttet
            Hva' fanden laver en rapper på finans studiet
            Jeg skriver det tæt, ikk' en chance jeg misser
            Men burde læse op på mine balance principper
            [Omkvæd]
            Det sætter sig i tanken på mig
            Vi veksler hvad vi har og håber
            Så vi satser vel på at tallene taler for sig selv
            Jeg' ikk' en idiot
            Mange nuller får os til at ligne en million
            Så vi satser vel på at tallene taler for sig selv
            
            [Vers 2]
            Ska' ikk' ta' pis på nogen, men føler mig lidt skizofren
            Jeg lever livet rimelig simpelt ligesom 1-2-3
            Men hey, det' lettere for nogen
            Så jeg pjækker fra skole for at sæt' mig i solen
            Det gik pludselig stærkt, ved ikk' hvordan jeg endte så go'
            Jeg har plantet frø som jeg forventer vil gro
            Jeg veksler mellem studie, rabalder
            En usikker datter, studierabatter, sene nætter
            Pudsler på taster indtil kuglepennen falder
            Jeg dagdrømmer om at træde ud af rollen og blive fuldtidsforfatter
            Jeg' rimeligt splittet, dele vandene når jeg dividerer
            Skriver linjer [?] mens jeg mailer dine værdipapirer
            Om aftenen spiller shows og sælger varerne i kvarteret
            Det' uafgjorte regnskaber, drengene jeg krediterer
            Men jeg ka' ikk' la' vær' at gøre honnør, sender hilsen
            Kommet for at brække spillet ligesom Britta Nielsen
            
            [Omkvæd]
            Det sætter sig i tanken på mig
            Vi veksler hvad vi har og håber
            Så vi satser vel på at tallene taler for sig selv
            Jeg' ikk' en idiot
            Mange nuller får os til at ligne en million
            Så vi satser vel på at tallene taler for sig selv
            
            [Outro: DJ FMD]
            Jeg lever livet rimelig simpelt ligesom 1-2-3
            Hvis du spør' hvordan det går, ka' du regne med et kort svar
            Jeg lever livet rimelig simpelt ligesom 1-2-3
            Hvis du spør' hvordan det går
            Hvis du spør' hvordan det går, ka' du regne med et kort svar
            Jeg lever livet rimelig simpelt ligesom 1-2-3
            1-2-3
            Ska' ikk' ta' pis på nogen, men føler mig lidt skizofren
            Lever livet rimelig simpelt ligesom 1-2-3
            Hvis du spør' hvordan det går, ka' du regne med et kort svar
            Jeg lever livet rimelig simpelt ligesom 1-2-3
            Hvis du spør' hvordan det går, ka' du regne med et kort svar`
        }, 
        {
            albumTitle: "flytilstand",
            title: "Voliere",
            releaseDate: "24/01-2020",
            image: "https://i.scdn.co/image/ab67616d0000b27357544a6021dc3a6b88ab8860",
            length: "3:20",
            description: "Lovey Lovey",
            producer: "Xeren",
            lyrics: `
            [Intro: Nota Bene]
            Smed kæben da jeg så dig, måt' se dig tættere på
            Nu bor du i mine lunger, nu' det for sent og gå
            Nu' det for sent og gå
            Smed kæben da jeg så dig, måt' se dig tættere på
            Nu bor du i mine lunger, nu' det for sent og gå
            Nu' det for sent og gå
            
            [Vers 1: Funch]
            Vi' på det samme hold, sigter mod noget større
            Jeg har aldrig været så sikker på noget før
            For hver gang du tar' et skridt fra min hoveddør
            Har jeg det som om du svigter mere end mit hoved gør
            Så det bedst jeg skrider, hun får ingen vente tider
            Lad os skrive historie, læs videre på de næste sider
            Ikk' den ædle ridder, holder på din' hemmeligheder
            Stadig på ryggen som en hjælpeløs bænkebidder
            Kærlighed gør blind, men fremhæver alle de simple glæder
            Det' hele er i mit hoved, ka' ikk' fjerne det med viskelæder
            Mit sind er fastlåst, smuk i alt tøj for helvede
            Drengene sir' jeg' kærestekedelig, jeg' si'r jeg' møgforelsket
            En af de sene nætter, fandt dig på en bar i byen
            Helt forvirret pige, mine sanser mangler klarsyn
            For sommerfugle flokken, holder skjul i kroppen
            Når du stanser under paraplyen og danser med din parfume
            Så jeg smider kæben, når hun bider læben
            Har så mange planer hvor du end går, jeg må videre med dem
            Tilstår blankt - at det har været slid og slæben
            Gode minder myldrer frem, baby det tar' tid at slet' dem
            Men nu skrider knægten langt over Bakkedal
            Kom hjem til smadret porcelæn, regnede med en takketal'
            Og det' det sidste jeg kan magt' i dag
            Mit hoved har det ærlig talt som om jeg' hoppet ud af trettende sal
            Det hele er nyt for hende, selvfølgelig vil jeg lyt' igen
            Så længe du krediterer med din kærlighed i byttepenge
            Ring efter et par flyttemænd, nu prøver hun at ringe til mig
            Jeg var klar på at smide en ring på din ringefinger
            For sammen med dig, så føler jeg det kører for mig
            Verden lukket ude og jeg render rundt med ørepropper
            Burde besøge dig ofter', bare forsøg at stop' mig
            Sir' jeg ikk' ka' tale om følelser, ka' ikk' beskrive det jeg føler for dig`
        },
        {
            albumTitle: "flytilstand",
            title: "Skovbrynet",
            releaseDate: "24/01-2020",
            image: "https://i.scdn.co/image/ab67616d0000b27357544a6021dc3a6b88ab8860",
            length: "3:20",
            description: "Interlude",
            producer: "Xeren",
            lyrics: `Not existing`
        },
        {
            albumTitle: "flytilstand",
            title: "Fri fugl",
            releaseDate: "24/01-2020",
            image: "https://i.scdn.co/image/ab67616d0000b27357544a6021dc3a6b88ab8860",
            length: "3:36",
            description: "Story Time",
            producer: "Xeren",
            lyrics: `
            [Vers 1: Funch]
            Hun startede som en af de simple vaner
            Kortene på bordet, enkle spilleregeler
            Kan kun gå to veje, det' som at læg' kabaler
            Vil ha' mit fulde fokus, men har travlt med at tælle damer
            Hun ka' se noget mere, men ka' ikk' sidde stille
            Jeg ville gerne, har ikk' tid til det
            Jeg vidste det godt for hun har fulgt en agenda
            Hun er sulten og slentrer, pulsen den ændres
            Hun hvisker i mit øre, hun har skjulte talenter
            Hun ved hvad hun vil ha', hun er fuld og forventer
            At vi er ude og hun venter ikk' på bussen ka' hente os
            Problemer med sin far, ka' se tusind tendenser
            Jeg eskorterer hende ud fra hendes ni til fem
            Hun er fanget af mig, pludselig vil hun ses igen
            Jeg dresser up, sushi og spisepinde
            Har så meget jeg gerne vil ku' se og vise hende
            Hendes øjne de' slørede, kan ikk' se igennem
            Rykker jeg ikk' på det, så fortryder jeg det sener' hen
            Der' kun fæle tanker, når to sjæle vandrer
            Ind i mørket, hun har slukket for sine senge lamper
            Hun smider undertøjet, så' Funch fornøjet
            Man kan roligt sig' jeg slap igennem nåleøjet
            Blir' aldrig overrasket, det var sjovt at snakke
            Gud ske tak og lov, takker ja til morgenkaffe
            Sulten og skal sove, så jeg tar' min overfrakke
            Pustende og flov, vælter ned af fortrappen
            Homie i røret, så går snakken om hård klappen
            Hun fik ren besked, men hun så bort fra den
            Hvad jeg tænker lige nu? Jeg regner med du troede på mig
            Det her jeg står, lige fra kraniet til min' fodsåler
            Hun siger jeg brænder broer, og ikk' gider mine rodebunker
            Lukker ikk' døre, nej jeg smækker dem i hovedet på dig
            Det' ikk' en magtkamp der igen har gjort vi skabt' rammen
            Det' ikk' det der gjorde at vi to ikk' kan snak' sammen
            Ikk' meget til overs, ingen ord du kan fremstamme
            Ingen forandringer her, så tag dine ting og pak sammen
            Hvis du ku' være så go', for du' på tværs lige nu
            Vi' færdige so, fri fugl, vær så go'
            Jeg' frisindet, men går op i det sjette bud
            Der' masser' fisk i havet og har hele fucking nettet ude
            Længselsfuld året rundt, jeg ringede til et andet stykke skåret kunst
            Som ville elske mig til morgenstunden
            Går efter struben, sætter kniven til mit stemmebånd
            Og du havde ret, det behøvede ikk' at ende såd'n`
        },
        {
            albumTitle: "flytilstand",
            title: "100 gram ft. psoriakriz",
            releaseDate: "24/01-2020",
            image: "https://i.scdn.co/image/ab67616d0000b27357544a6021dc3a6b88ab8860",
            length: "3:58",
            description: "Hiphop Slask",
            producer: "Xeren",
            lyrics: `
            [Vers 1: Funch]
            Lommerne er pakket, med hundrede gram
            Ud med det samme, igennem lokalet, albuer frem
            Og vil du slås, jeg tror det summer lidt
            Den eneste chance for at du gir' mig en på hovedet er hvis du stempler mig som nummer ét
            Du’ våget knægt hvis du er kommet for at få respekt
            Kørte dig over, men homie - ja jeg så dig ikk'
            Du ka' ikk’ se min logik, det mener du ikk'
            Tak fordi du kom, det var fedt da du gik
            Og vil du lære mig at kende så har jeg vers jeg kan sende
            Har tabt gnisten, du' ude til jeg mærker den igen
            Jeg har brug for væske - hælder sprut i fjæset
            Lovede at komme til tiden, og jeg stod der næsten
            Jeg smider linen ud og fodrer Xeren må ha' krudt i næsen
            Jeg' ude' forstod prinsessen, det' ikk' en so for Kevin
            Ikk’ meget til historien, ku’ ikk' sige det er nemmer’
            Hver en weekend ender med en pige jeg ikk' kender
            [Omkvæd]
            [?]
            Kom nu, vi nogle haters og snotunger
            Claimer vores postnummer
            Bruger tænder som oplukker'
            Sender en flok på dig
            Haters og snotunger
            Claimer vores postnummer
            Bruger tænder som oplukker'
            Sender en flok på dig
            
            [Vers 2: PsoriaKriz]
            Yo lommerne er pakket med hundrede gram
            Cruiser rundt i mit hood, boozer og suger mig lam
            Sætter skure i brænd
            Smadrer jams, battler fans og gir’ publikum kram
            De ka' ikk' stave til PsoriaKriz, de Googler sig frem
            Digger lortet med en rendegraver
            Forguder vores ord, vi burde gå med præstekraver
            Maui-waui det' hvad jeg kalder flower power
            Trimmet topskud, barberer geden og tar' en skraver
            Tyrannosauer, struggler i en kold verden
            Holder varmen, ligger tæt, finder skills i lommelærken (Kriz)
            Bumpy kriminel slår et beat ihjel
            Kører altid hårdt på som et biluheld
            Flækker dem og lægger dem på spækbrættet
            Får dem henrettet, bænkpresset
            Og det kører godt som Subaru
            Slår suckers hårdt med Nunchakus
            Losser deres balls som Lukaku
            Muchaho
            [Omkvæd]
            [?]
            Kom nu, vi nogle haters og snotunger
            Claimer vores postnummer
            Bruger tænder som oplukker'
            Sender en flok på dig
            Haters og snotunger
            Claimer vores postnummer
            Bruger tænder som oplukker'
            Sender en flok på dig`
        },
        {
            albumTitle: "flytilstand",
            title: "Havmåge",
            releaseDate: "24/01-2020",
            image: "https://i.scdn.co/image/ab67616d0000b27357544a6021dc3a6b88ab8860",
            length: "3:20",
            description: "Abstrakt",
            producer: "Xeren",
            lyrics: `
            [Vers 1]
            Jeg' helt fucked, det tyder på jeg mener det
            Svært at træk’ tilbage når det flyder gennem venerne
            Nyder det i scenerne som lyden jeg skal te' mig til
            Du ser igennem mig, sort syn for en seerske
            Tunge skridt, der' modvind i sandstorm
            Dum knægt der slog lejr da han fandt skoven
            De siger at jeg kommer til alting halvsovende
            For det meste har røven hængende i vandskorpen
            De’ sikre på at jeg en dag mærker alvoren
            Har ikk' talt tårerne, de skal ikk' salt' sårene
            Finder fred med det, det giver sindet ro
            Der findes intet held uden risiko
            Så skal du vide hvor'n landet ligger
            Ser på timeglasset, sander triller
            Til møde med mig selv, med munden fyldt med halspastiller
            Gør maskineriet rent og fabriksindstiller, yeah
            [Omkvæd]
            Er det, er det, er det, er det
            Er det værd at dømme og træde på en syg mand
            Man kan ikk, man kan ikk', man kan ikk', man kan ikk'
            Man kan ikk’ lære at svømme uden at være på dybt vand
            Er det, er det, er det, er det
            Er det værd at dømme og træde på en syg mand
            Man kan ikk, man kan ikk’, man kan ikk', man kan ikk’
            Man kan ikk' lære at svømme uden at være på dybt vand
            
            [Vers 2]
            Mit hoved er et andet sted, led efter et landingssted
            Højt at flyve, langt til jorden, haft svært ved at falde ned
            Hviler i mig selv, men har jeg sovet for længe?
            Sikkert ikk' den eneste der har svært ved at kom' ud af sengen
            Og jeg ikk’ ,meget bedre, der' ikk' mange glæder
            Svært at komme videre når man hænger på de samme steder
            Masser af problemer som man ikk' lige kan flyt' fra
            Jeg stresser, stadig sygt rart med en ny start
            Kørt af sporet så jeg prøver at finde ny baner
            Væk fra de syge vaner, læg' hele byen bag mig
            Intet varer evigt, tror det stopper brat, nok er sagt
            Hvordan vil du komme til toppen uden det har været op af bak'
            Kærlighed er gratis, og alle kan sæt' pris på den
            Træder i pedalerne, går Bjarne Riis på den
            Om igen, tror jeg nyder tilråbene
            Jeg må tilstå det, håbe på ingen så det[Omkvæd]
            Er det, er det, er det, er det
            Er det værd at dømme og træde på en syg mand
            Man kan ikk, man kan ikk', man kan ikk', man kan ikk'
            Man kan ikk' lære at svømme uden at være på dybt vand
            Er det, er det, er det, er det
            Er det værd at dømme og træde på en syg mand
            Man kan ikk, man kan ikk', man kan ikk', man kan ikk'
            Man kan ikk' lære at svømme uden at være på dybt vand`
        }, 
        {
            albumTitle: "flytilstand",
            title: "Det går",
            releaseDate: "24/01-2020",
            image: "https://i.scdn.co/image/ab67616d0000b27357544a6021dc3a6b88ab8860",
            length: "3:46",
            description: "Abstrakt",
            producer: "Xeren",
            lyrics: `
            [Intro]
            Det går sådan cirka sådan her
            Taber pusten og holder vejret
            Det går sådan cirka sådan her
            
            [Vers 1]
            Hovedet hælder på trapper til en rodet kælder
            Nu sparrer jeg energien ligesom solceller
            Og ind imellem burde jeg kigge på mit eget indre
            Jeg' ligesom jer for jeg har travlt med at pege fingre
            Startede høj i hatten, endte meget mindre
            Jeg' tempereret, ingen lampefeber
            Så se mig, se mig gå hele vejen
            Ender alt for ofte med at komme ingen vejne
            Vil skal videre i teksten, vi gider ikk' læse den
            Ingen overraskede miner når jeg skrider fra festen
            Det' tid til at teste dem, prøver bare at få lov at være
            Det' grove sager, så mit ego det forårsager
            Jeg' broke motherfucker, har en 10'er i mit soveværelse
            Tror jeg' først i køen, ikk' sikker, står jeg bagerst?
            Jeg ved ikk' hvad jeg overværer
            Trækker stikket, vender skuden, drager fordel af jer
            [Omkvæd]
            Det går sådan cirka sådan her
            Taber pusten og holder vejret
            Det går sådan cirka sådan her
            Sådan cirka sådan her
            Det går sådan cirka sådan her
            Taber pusten og holder vejret
            Det går sådan cirka sådan her
            Sådan cirka sådan her
            Det går
            
            [Vers 2]
            Ikk' så sjældent jeg ender det gale sted
            Tit alene, men har altid en at tale med
            Stirrer mod papiret når jeg skriger på hjælp
            Man sælger ikk' ud ved at sæt' pris på sig selv
            Jeg må skrive nu, for jeg' in for det lange løb
            Graciøs, der' mange ting jeg vil fremskynde
            Krølle papiret sammen, send afsted i en slangebøs'
            Blæse hovedet af dem ligesom varme skyts
            Jeg har samme lyst, fedt du står med armene i mængder
            Skaffer biletter til så skarpe finesser
            Fraser der ændrer den retning jeg slentrer
            Tænker til tider, ville være rart ikk' at kende mig
            Har fundet min plads ved bordet, inde i konsortiet
            Presset på ydersiden men nu står fortet
            La' mig forkorte det, så du forstår det
            Du' ikk' en spiller hvis du ikk' er på holdkortet
            
            [Omkvæd]
            Det går sådan cirka sådan her
            Taber pusten og holder vejret
            Det går sådan cirka sådan her
            Sådan cirka sådan her
            Det går - sådan cirka sådan her
            Taber pusten og holder vejret
            Det går sådan cirka sådan her
            Sådan cirka sådan her
            Det går`
        },
        {
            albumTitle: "raptus",
            title: "Gode stunder",
            releaseDate: "31/03-2022",
            image: "https://i.scdn.co/image/https://cdn.shopify.com/s/files/1/0197/5966/1120/products/funch_926x.png?v=1648717716",
            length: "2:57",
            description: "Hiphop Slask",
            producer: "Xeren",
            lyrics: `
            [Omkvæd]
            Egentlig svært at stop' mig
            Se mine fodsåler
            Ved du, hvad jeg koster
            For en time af de gode stunder?
            Rimelig svært at såre mig
            Ik' mit blod på mig
            Ville vær' hjerneforsker
            Nu' jeg ind' i hovedet på dig
            
            [Vers 1]
            Målet er færdigt
            Bare gi' mig bolden, jeg hugger den gerne
            Bare Funch på en blæret ting
            Skal væk herfra, før jeg drukner i jeres ting
            Rejs ik' alene, ta' min' kufferter - bær dem!
            Skuffer enhver kvinde, yo
            Har brugt mine lærerpenge, tag instrukser og lær dem!
            Har ik' rum til en lærling
            Der er ingen at bearbejde, når de ser mit benarbejde
            Jeg ik' til rådighed, så find dig en, der gider lege med
            De siger, jeg er flyvsk, men er ik' så utilregnende
            Min rider siger: "En escortpige på husets regning"
            Flå rødderne op, ude med riven
            Min brødre, min flok, fulde eller stive
            Ingen af os, der tar' sulten for givet
            På en mission, holder pulsen i live
            Handler med ting, går igen med kvittering
            På den der selvmedicinering
            Har ik' hørt dig før, kan ik' kende den levering
            Rul for dit liv, det ik' held med en terning!
            Jeg er sikker på, at du ka' fucke med de flest'
            Vil du ha' det, vi har - ja, så koster det lidt
            Tro mig, bror - vi kommer her tit
            Mine drenge er på gaden: Det er blokpolitik
            Ved ik', om det er helbredende eller selvskadende
            Sikkerheden stillet, sælger vi det, har vi selv taget det
            [Omkvæd]
            Egentlig svært at stop' mig
            Se mine fodsåler
            Ved du, hvad jeg koster
            For en time af de gode stunder?
            Rimelig svært at såre mig
            Ik' mit blod på mig
            Ville vær' hjerneforsker
            Nu' jeg ind' i hovedet på dig
            
            [Vers 2]
            Selvfølgelig har jeg lært det, ik' født til at skrive det, de siger
            Funch spørger: "Død eller levende?"
            "De rap-parodier har jo ret" La' nu vær!
            Ruller højt på de taksonomier
            Når jeg pragtekssemplere, hvorn' rappen ska' skæres
            Original fri fragt: Der leveres
            Sniksnak i kvarteret, min membran aktiveres
            "Tillykke med din årsdag"
            Din dame var væk for længe siden
            Lytter ik' til dine forslag
            Skredet, får lidt tænketid
            Det' ingen hemmelighed
            At jeg gør det, du gør - bare lidt bedre
            Har du ik' set mig før, må du kig' bedre
            Gør det jeg gør, og hun gør sig i hvidt læder
            Dumt, at du spørger - hun er vildt lækker
            Siger, hun har afsat en time til mig
            Hun er nede med en spiller, ka' li' det, jeg indspiller
            Shots på bordet - 1, 2 som en mic-tjekker
            1, 2 mod dine venner
            Ingen bro mod min vinder
            Ka' li det spor [?] sætter
            Sig det, bror - go' flækker
            Soleklart [?] slået som Mozart
            Forhold, som ik' er brugbare
            En rodet start, holder hovedet klart
            Du' enten med eller mod mig
            Tro mig, for det' fuld fart
            Ud herfra for en truet art
            Ik' kommet for et modsvar
            Du' kommet for at stå skoleret!`
        },
        {
            albumTitle: "raptus",
            title: "Skal du med i byen",
            releaseDate: "31/03-2022",
            image: "https://cdn.shopify.com/s/files/1/0197/5966/1120/products/funch_926x.png?v=1648717716",
            length: "2:07",
            description: "Story time",
            producer: "Xeren",
            lyrics: `
            [Vers]
            Det ska' ikk' lyder propert
            Det her liv ska' ikk' nydes sobert
            Så jeg ta'r det ind i flydende doser
            Ska' vi i byen broder? Jeg har snydekoder
            Sygt gode og jeg sværger der ska' flyve hoveder
            En pose senere, jeg begynder at føle sager
            Har aldrig følt mig værre, som havde jeg tømt et lager
            Skønt vi aer København på en sommer nat
            Gammel rutchebane, ryger fra hvis jeg ikk' holder fat
            Hundene jagter gårdsdagens copycats
            Det' de eneste gange jeg faktisk er morgenfrisk
            Jeg' ligeglad hvad de siger i gården
            Banker på din dør klokken fire om morgenen
            Og det startede som et porno plot endte op i gråd og snot
            Har ikk' tid, jeg skal videre mod en broget flok
            Hvis vi' færdige her, så går jeg nok
            Lover hun er skåret godt
            Sku' væk herfra, men nu har hun sat håret op
            Hun si'r der' en dag i morgen, jeg ved der' en nat i nat
            Alt faldt på plads, stoler ikk' på halve glas
            Hun har hele pakken, som manden jeg ringer til sent om aftenen
            Inden jeg når at tænke tanken
            Det' ikk' så svært du kan set når den unge flyver
            Bare bange for at gå glip af sin' unge tyvere
            En weekend der ender i mandagsskrig
            Og som sædvanlig en dag du ikk' ska' blande dig i`
        },
        {
            albumTitle: "raptus",
            title: "Uge 27 ft. Manus Bell",
            releaseDate: "31/03-2022",
            image: "https://cdn.shopify.com/s/files/1/0197/5966/1120/products/funch_926x.png?v=1648717716",
            length: "3:21",
            description: "Abstrakt",
            producer: "Xeren",
            lyrics: `
            [Vers 1: Funch]
            Jeg' væk som var jeg efterlyst
            Min krop ryster af kulde og min kæbe syrer
            Vi går langt for en enkelt ryger
            Vi går langt før en enkelt ryger
            Ku' ha' skrevet bøger, så nu ta'r jeg hvad det medførerg`
        },
        {
            albumTitle: "raptus",
            title: "Tendenserne",
            releaseDate: "31/03-2022",
            image: "https://cdn.shopify.com/s/files/1/0197/5966/1120/products/funch_926x.png?v=1648717716",
            length: "2:49",
            description: "Story time",
            producer: "Xeren",
            lyrics: `
            [1. VERS]
            Mit hjerte det banker men ik på den gode måde 
            Set lyset kastet anker i en solstråle 
            Ved ik hvad der mangler men tror jeg skal bruge noget 
            Tror min holdbarhed er udgået 
            
            effektive æskestive Stik mig bare et ekstra hiv
            Træder fra og så vi ses i det næste liv 
            Jeg har det fint i hovedet lad være det pege det ud
            Du tror ik på det før du mærker det på egen hud 
            Jeg fyrer kanonen af leder efter tegn derude
            Ser hvordan den daler gennem regn og slud 
            og sidder tænker på hvordan man flytter et bjerg
            stirre fra en sten mens jeg lytter til havet
            svarer ik’ i dag selv min søster har skrevet 
            Der ik’ så meget at komme efter ligsom myg på en dværg
            Ved ik hvem der started det ved godt hvem der ender det
            jeg skal bare lige være kommet til hægterne 
            det sjovt for jeg forstår det og benægter det
            alligevel tager chancen og slår efter sekserne 
            bryder reglerne jeg borte med blæsterne 
            Ved egentligt ik’ hvad jeg får ud af teksterne 
            Alle kigger på som står de på lægterne
            nyder modgangen gået sport tendenserne
            
            (2. VERS)
            Og de ser det som en usikker tøven 
            De ta’r i byen jeg vil i studiet og øve
            Gi et skud til forsøget Drik mig fuld og bedrøvet
            til jeg har samlet lidt mod til at prøve
            At passe foden i min støvle og gå med raske skridt
            jeg trasker lidt tilbage til den samme kritik 
            Ka’ ik’ se mening i det, brug for sceneskifte
            Har brug for hjælp, men det for sent at sige det
            De kan ik se mig, kun min kvaliteter 
            gør det på min måde ved ikke hvad de mener 	
            Kan ik’ fat en meter, leder rundt blandt alle linjer 
            en stående joke jeg kigger på mens alle griner 
            og jeg færdig med flokken 
            Følger efter en lanterne på toppen 
            let smerte i kroppen, min hjerne er proppet 
            Frisk vin på kantsten nu fjerner vi proppen 
            og jeg ta’r gerne lidt i koppen, springer vi boblen?
            Jeg må hente den, den stjerne er lokkende 
            Skal nok finde vej jeg har næse for det 
            Har taget mig tiden til at sæt mig ind i læsestoffet 
            Aflyser fest på hoffet inden sidste var gæst kommet 
            Er det det hele værd har tænkt ofte,
            meget at lære svaret er ja
            Vi ik’ der hvor plejede at være`
        },
        {
            albumTitle: "raptus",
            title: "Skipper ft. Samuel D'Connery",
            releaseDate: "31/03-2022",
            image: "https://cdn.shopify.com/s/files/1/0197/5966/1120/products/funch_926x.png?v=1648717716",
            length: "3:17",
            description: "Party",
            producer: "Xeren",
            lyrics: `Ingen lyrics`
        },
        {
            albumTitle: "raptus",
            title: "Syng for mig",
            releaseDate: "31/03-2022",
            image: "https://cdn.shopify.com/s/files/1/0197/5966/1120/products/funch_926x.png?v=1648717716",
            length: "3:00",
            description: "Tryhard",
            producer: "Xeren",
            lyrics: `Ingen lyrics`
        },
        {
            albumTitle: "raptus",
            title: "Afsted",
            releaseDate: "31/03-2022",
            image: "https://cdn.shopify.com/s/files/1/0197/5966/1120/products/funch_926x.png?v=1648717716",
            length: "3:47",
            description: "Lovey lovey",
            producer: "Xeren",
            lyrics: `
            (VERS 1)
            Kigger ind i spejlet jeg færdig med mig single 
            du fjerne presset og forsimpler tingene 
            ser hende på afstand og smiler dumt og vinker til hende 
            Prøv at finde et tema men du er hele min fucking indgangsvinkel
            Hun er en gulddame det bagside af skinnebenet 
            Selv hvis du ik’ er mig så kan du sikkert se det
            Har vejen hendes hjerte håber jeg kan finde derhen 
            Hvis du følges med den rette så går tingene nemt 
            Siger det med en sikker stemme vigtig for mig ik’ at glemme 
            det her er egentligt bare hvad jeg tænker når du ik’ er hjemme 
            leger med tanken hun skal føde min - død fin 
            på en dårlig dag jeg ta'r jeg det sure med et sødt smil 
            som med problemerne jeg plejede at trække 
            nu står planeterne står på rad og række 
            meget at bearbejde stadig meget at lære 
            yeah vi bygger fundamentet på en barriere 
            
            (Omkvæd)
            Hvornår ta’r vi afsted? Hvornår kommer vi frem? 
            Jeg ved ik’ hvor du skal hen. 
            Så hvornår ta’r vi afsted? Hvornår kommer vi frem? 
            Jeg ved at jeg skal med.
            
            (VERS 2)
            Bl’ir genert når vi hilser ved dit dørtrin og 
            det sitre når hun rør ved mig 
            Ro i sjælen når jeg hviler gennem de mørke nætter 
            Jeg ik’ i tvivl for jeg smiler når de spørger til dig 
            jeg bliver nød til at sige det højt 
            Har været en skod dag det sitre inde i mine øjne
            Dulmer nerverne skænker mig lidt vin og røg 
            indtil jeg skifter garderobe i hendes smiletøj 
            Har du det dårligt kan jeg mærke det i mine fingerled 
            Gør det ik’ er sikkert på jeg forstår mig på tid og sted
            Den eneste grund til jeg ku komme ind og side
            Jeg har dig tæt på kroppen trives ved din sikkerhed 
            Artemis - Ord - i - ånd, tror hun bli’r min visse død 
            Når hun slanger sig i sengetøjet og spiller sød 
            jeg holder varmen når jeg går vintern i møde 
            Temperaturen stiger kan mærke min kinder blir røde
            
            (Omkvæd)
            Hvornår ta’r vi afsted? Hvornår kommer vi frem? 
            Jeg ved ik’ hvor du skal hen. 
            Så hvornår ta’r vi afsted? Hvornår kommer vi frem? 
            Jeg ved at jeg skal med.
            (C-STYKKE)
            x2//Hvad skal jeg være så nervøs for? 
            Hun er gude smuk og vanedannede
            Hoved på blokken gi’r mig noget der værd at dø for 
            Køber hele pakken uden en salgstale //x2`
        },
        {
            albumTitle: "collabs",
            album: "intet album",
            type: "collab",
            artist: "Binær",
            title: "KBH ZOO ft. Pede B, Funch, StrudsiGallop, Machacha",
            releaseDate: "09/6-2022",
            image: "https://t2.genius.com/unsafe/307x307/https%3A%2F%2Fimages.genius.com%2Fd862c2334f2bd6d977d8ef83edf053de.640x640x1.jpg",
            length: "4.22",
            description: "Hiphop Slask",
            producer: "Xeren",
            lyrics: `
            [Intro: Pede B]
            Yeah, yeah
            Okay, okay, okay
            
            [Vers 1: Pede B]
            Du ved en isbjørn har store poter (Yeah)
            En rigtig stærk hånd som var jeg god til poker
            Så du ka' mærke når den rør' din kind, bare mit naive børnesind
            Et barn eller skarn holder sig varm i pels og bjørneskind
            Så du' på glat is hvis du ska' ha' et lille foto
            Kald det iskold musik promo
            I en hvid polo med en lille kroko
            Skud til Anker jeg' på toppen af verden som Nordisk Film's logo
            Så der' en slem kulde i min dagligstue
            Pænt fulde rowdy crew til sæl, hunde barbeque
            [?] en smulе for sent at ændre retning nu
            Hvorfor tror du jеg har den dyreste hule i København Zoo
            [Omkvæd: Trepac og Mund de Carlo]
            De ikk' kommet for at se giraffen
            De' kommet for at tjek' hele parken
            De prøvede at bure os inde
            Men nu' det spisetid, København Zoo
            
            [Vers 2: Trepac]
            Intet hensyn til nogen som helt
            Når den her ene elefant kommer marcherende igennem byen
            Med et tændt lyn i gabet, ude for at gøre regnskabet op
            Tro ikk' jeg taler om at tælle gryn ([?] fentanyl)
            Det ka' ikk' bli'e mere dope
            Jeg' elefanten i rummet når de diskuterer goats
            Svær at overse, det' så vanvittigt
            Hvordan jeg vokser på dem, elefantitis
            Stor snabel, ikk' en elefant i en glas butik
            Men en ronkedor i gamet når vi snakker rap musik
            Det' sandt nok, vifter ørerne som Van Gogh
            Og blæser det der sticky icky shit, elefant snot
            
            [Vers 3: Strudsigallop]
            Jeg' et fly uden brændstof så hyrderne kan rende mig
            Støt din by og fyld i bylten som din bank gør
            Flygtig som i en lambada sang og tryg som en branddør
            Typen der jagter byttet fra vinyler, kald det put and take
            Tyrker tro, lyst rytter, myrder for en guldkæde
            Rul selv, der' tobak nok i bøtten
            Jeg har det lange næb fremme hvis de vil snak' om at mødes
            Jeg ka' forklare dem om døden hvis de kan fange mig i stødet
            Det' primært skind og ben, dåseskjul
            Ingen vinger, grå hud, forsinket som en frugtkurv
            Med gevær som tindingen som gåsedun
            Binær og ung struds, lige her, så åh gud
            Prepare for [?]
            
            [Omkvæd: Trepac og Mund de Carlo]
            De ikk' kommet for at se giraffen
            De' kommet for at tjek' hele parken
            De prøvede at bure os inde
            Men nu' det spisetid, København Zoo
            
            [Vers 3: Funch]
            I syden hele vinteren, mit slæng flyver forud
            Synger de for højt bli'r de sendt mod en forrude
            Daffer hurtigt hvis lortet går i hårknude
            Et omspændende ordforråd, guldkorn i overflod (SKRRR)
            Hun lugter af fisk, det' en havudsigt
            Vinder hvert et staredown, lever på et machotrip
            Ude og claime turf, opdatere solen
            Sværmer kun i flok og holder formation
            Havmågen har travlt i tågen, ude og er fløjet
            Eftersøgt, de si'r jeg har skudt papegøjen
            Vi' i luftrummet, minder dem om tyskerne
            Ses på grillen, vi' på havnen nede ved cyklerne
            
            [Omkvæd: Trepac og Mund de Carlo]
            De ikk' kommet for at se giraffen
            De' kommet for at tjek' hele parken
            De prøvede at bure os inde
            Men nu' det spisetid, København Zoo
            [Vers 4: Mund de Carlo]
            Summer ikk' bare i dit øre, jeg går all in
            Mit shit flyder lækkert, de har hørt om min honning
            Skod rappere vil ta' brodden af mig, forsøger' hold det buzzin'
            Stikker ikk' en homie, dør for min dronning
            Vi' på vej i det fjerne, strejfer dit ærm', ejer din hjern'
            Du kan ikk' værn' dig mod mig og min sværm
            Holder branchen om bollerne, der' langt mellem blomsterne
            Hopper ikk' på det sukker avlerne kommer med
            Skiller døgnfluerne fra arbejderbierne
            Flyver med [?] fra kolonierne, bare for at cirkle
            De lavere luftlag er knapt så charmerende
            Så flyver den her bi forbi jer
            Så Binær or be square
            
            [Vers 5: Machacha]
            Gennem ild og vand, vin og malt
            
            [Omkvæd: Trepac og Mund de Carlo]
            De ikk' kommet for at se giraffen
            De' kommet for at tjek' hele parken
            De prøvede at bure os inde
            Men nu' det spisetid, København Zoo
            
            [Omkvæd: Trepac og Mund de Carlo]
            De ikk' kommet for at se giraffen
            De' kommet for at tjek' hele parken
            De prøvede at bure os inde
            Men nu' det spisetid, København Zoo`
        },
        {
            albumTitle: "collabs",
            album: "gods",
            type: "collab",
            artist: "Binær",
            title: "Højt ft. Funch, Wolff",
            releaseDate: "25/10-2019",
            image: "https://t2.genius.com/unsafe/307x307/https%3A%2F%2Fimages.genius.com%2Fd862c2334f2bd6d977d8ef83edf053de.640x640x1.jpg",
            length: "6:02",
            description: "Abstrakt",
            producer: "Xeren",
            lyrics: `
            [Trepac]
            Jeg skjuler intet på plade - fortæller nok mer’ end jeg bør
            Der konsekvenser ved komplet eksponering
            Så mange mennesker der ser en, når man har gemt camoufleringen, jeg mener;
            Ta’r jeg mig selv ud med selvudleveringen, jeg ved det ik’
            Men jeg ta’r mig i agt
            Måske jeg aldrig sku’ ha’ bragt det op og lagt det på lak
            Måske jeg aldrig sku’ ha’ skabt et så nøjagtigt portræt
            Men måske de ik’ ka’ se at Steffen faktisk er pac
            Det ka’ de nok – der ingen radiokontakt
            Men min familie og kolleger hør’ hver bar der bli’r sagt
            Og jeg er klar på en snak - om fobier, men jeg
            Ka’ ik’ bar’ forandre mig for andre, det en kamp der er tabt, desværre
            Vil ik’ foregi’ jeg intet har gjort, beklager
            At jeg ofte gør problemet for stort, beklager
            At jeg altid maler vinklerne sort
            Men jeg må sig’ det højt for ik’ at brænde inde med det lort – ey
            Men måske sku’ jeg ha’ holdt mig fra at sige det højt
            Jeg måtte sige det højt
            Jeg ku’ ik’ holde min fede kæft lortet fløj bare
            Ud imellem tænderne og op – op – op
            [Wolff]
            Se, det si’r mig ik’ så meget, så jeg snakker med mig selv
            Og for mig selv og i den boble er der rigeligt at fortælle
            Det min største passion, stadig i første person
            Har aldrig set det som en form for magtposition
            Så jeg la’ andre om at kæmpe med deres rim og deres flow
            For jeg prøver egentlig bare at finde ind gennem sproget
            Og det sker ik’ i den ring med andre mænd der spiller macho
            Fuck at putte nye boller på en suppe der’ koldere end gazpacho
            Men hva’ tænker folk når jeg tænker tanker højt og
            Når til nye højder?
            Springer ud ligesom ’grib mig’, men de vender deres blikke
            Sku’ jeg holde munden lukket, følge trop og la’ det ligge
            Bare smile og nikke og tale folk efter munden
            Som alle I andre I gør, har været helt nede på bunden
            Det klart jeg sigter mod toppen, flyder over med koppen
            Sir’ min tanker højt indtil jeg får dem helt ud af kroppen, ligesom..
            Måske sku’ jeg ha’ holdt mig fra at sige det højt
            Jeg måtte sige det højt
            Jeg ku’ ik’ holde min ffff… lortet fløj bare
            Ud imellem tænderne og op – op – op
            
            [Funch]
            Yaw, lyt nu nøje efter - jeg siger det én gang
            Træder helt frem, vil vise vidden af mit vingefang
            Viserne ses lange, det svært at skrive på 16 linjer
            Er det værd at leve når man aldrig mærker gejsten i sig?
            Drikker dus med skrækken i mig, sigtet inden for rækkevidder
            Må ha’ rejsefeber men jeg vil ik’ rejse mig senere
            Sagt det jeg håbede, vi drak og vi skålede
            Brændt mig på bålet, lagt mig på gulvet, ik’ tabt for at bli’ fundet
            Det klart jeg er skuffet over mig selv, mine tanker har vundet
            Ankler er bundet, mangler et ståsted – rasler i rummet - træt da jeg vågnede
            Langt nede i hullet - der andre der så med
            Det utroligt hvor langt man kan gå ned
            Så nu var nok nok, min egen fucking stopklods, det tuff love
            Jeg skrider fra det hele og la' mit folk slås
            Du kan ik’ se det for dig men det gik simpelt for sig
            Må ha' det ud af hovedet tror ik’ det for sent det stopper
            Sikke en sommer - tænkte det spillede ingen roller
            Intet sidste ord men talte højst da den klikkede for mig
            Yeah, måske sku’ jeg ha’ holdt mig fra at sige det højt
            Jeg måtte sige det højt
            Jeg ku’ ik’ holde min fede kæft lortet fløj bare
            Ud imellem tænderne og op – op – op
            
            [Mund de Carlo]
            Jeg var kun et barn da det started', var ik' som de andre jeg legede med
            For det jagede inde bag pupillerne, det prikkede i mine fingre
            Som om al logik indeni mig var erstattet med instinkter
            Jeg var lammet af træthed, vidst' aldrig hvor lang tid det varede ved
            Hva' fanden sku' det til for når jeg bandede midt i timerne
            Måtte af med de her linjer der var printet i mine gener
            Virkede max uforskammet, når læren sku' snak' og jeg afbrød
            En dag der sagde det click og midt i vanviddet der forsvinder
            De sociale dynamikker, bomber springer når de tikker
            Lige på grænsen til sammenstød men blev bremset og lagt ned
            De sagde jeg var en ener, men jeg fattede hva' de mente og
            Blev sat i lokale alene, så var de af med det problembarn
            Og min nakke den krampede, sagde lyde hver gang jeg var presset
            Fik spat af de der grin når folk på gaden de gik forbi mig
            Bakkede bagud på mig ligesom "ey der aben den kan bid' dig"
            T-t-tankerne samlede sig kun om svarene jeg manglede
            Dagene de gik og jeg måtte ha’ noget medicin for de her anormaliteter
            Ville ik' la' dem definere mig, nej
            Så snart psykologen ku' bekræfte symptomer
            På tourette-syndrom faldt jeg langsomt til ro
            Rart at jeg kunne sige det højt uden at være bange for nogen
            Og flå tvangstankedæmonen fra sin magtposition, jeg har dig nu
            Måske sku’ jeg ha’ holdt mig fra at sige det højt
            Jeg måtte sige det højt
            Jeg ku’ ik’ holde min fede kæft lortet fløj bare
            Ud imellem tænderne og op – op – op`
        },
        {
            albumTitle: "collabs",
            album: "mega",
            type: "collab",
            artist: "Trepac",
            title: "Lithosfæren ft. Funch",
            releaseDate: "17/7-2020",
            image: "https://t2.genius.com/unsafe/364x364/https%3A%2F%2Fimages.genius.com%2F16a4653693d0cd2c1139478d5a4ddb2a.640x640x1.jpg",
            length: "4.11",
            description: "Abstrakt",
            producer: "Swab",
            lyrics: `
            [Intro]
            Jeg synker lige ned i lithosfæren homie
            Jeg kommer nok ik' op igen desværre homie
            Jeg synker lige ned i lithosfæren homie
            Hvor fanden sku' jeg ellers være homie
            
            [Vers 1: Trepac & Funch]
            Føler mig fanget i en fremmed dimension, eller noget der ligner
            Som om en hemmelig dør ind til mig sind er åbnet i mig
            Jeg ik' til stedе, ik' til nogen hjælp hvis Funch besvimer
            Har ik' bevæget mig overhovedet i næsten otte timer
            Jeg nedsunket, blevet bombet
            Hukommelsen er hullet, flyder gennem tid og rum
            Og munden den blir’ ved at mumble, tungen virker indskrumpet
            Helt rundt på gulvet med et klart syn der virker grumset
            Gulvene de stirrer, forsøger bli’ intime for
            Hvis man skærer ind til benet, vejer skridtende tungt
            Har råd til mit fix, jeg en velsignet ung
            Har det fedt med at ha’ det skidt, ad libitum
            Op på hesten, Kevin mangler et par stigbøjler
            Føler mig skyldig, der noget jeg skal bevis’ for jer
            Har det vildt noia, pak jer på de team tror jeg
            Der ingen næste episode, ingen vild spøj
            [Omkvæd]
            Jeg synker lige ned i lithosfæren homie
            Jeg kommer nok ik' op igen desværre homie
            Jeg synker lige ned i lithosfæren homie
            Hvor fanden sku' jeg ellers være homie
            
            [Vers 3: Funch & Trepac]
            Du kender følelsen, du mærker presset på dig
            Kan man købe frælse til de rette summer
            En stærk psykisk svag på en række punkter
            Paradoksal, de fleste spytter liv ind som akvarie pumper
            Hovedet er sort mens jeg prøvet at være nytænkende
            Så ærligt talt er der langt imellem lysglimtene
            Ingen snak, det sådan jeg bedst kan nyde mennesket
            Sygt ætsende, håber ik’ jeg får det til at lyde spændende
            Jorden kalder Pac
            Men jeg kan ik’ løfte fonen op for øjeblikket homie, du må tale med Swab
            Jeg sat i skak, ingen form for handlekraft
            Men tænker ingen alligevel gider lytte til en gal mand snak
            Tror der er nogen der har slukket for mig
            Mine hænder er vist groet fast i mine bukselommer
            Kroppen er af bly, hovedet svæver ligesom luftballoner
            Kommer ingen vegne, nej, vi er verdens værste flugt hold
            
            [Omkvæd]
            Jeg synker lige ned i lithosfæren homie
            Jeg kommer nok ik' op igen desværre homie
            Jeg synker lige ned i lithosfæren homie
            Hvor fanden sku' jeg ellers være homie`
        },
        {
            albumTitle: "collabs",
            album: "tragedier og triumf",
            type: "collab",
            artist: "Trepac",
            title: "Vild Type ft. Funch, Nøx",
            releaseDate: "09/6-2022",
            image: "https://t2.genius.com/unsafe/368x368/https%3A%2F%2Fimages.genius.com%2Fe4520afef2db016e1d71b16b97fbdcae.628x628x1.png",
            length: "4:02",
            description: "Hiphop Slask",
            producer: "Hobgoblin",
            lyrics: `
            [Tekst til "Vild Type" ft. Funch og Nøx]
            [Vers 1: Trepac]
            Ægte snak, nej tag det ikk' personligt men
            Jeg hustlede mig til to procent af ArtigeArdits KODA penge
            Sorry bro, jeg ved det sucks men det var super nemt
            Sværger ved min mamma at du nok skal få dit lort igen
            Sort samvittighed, får den hvidvasket
            I et kæmpe spin af løgne der er fintmasket
            Vini vidi vici homie, terningerne de' kastet
            Fuldt blus, helt ristet, pænt blæst, vildt basket
            Puffer [?] magi og passer dragеn
            Halvfordrukken dagdrømmer, livsnydendе natteravn
            Super skarp cat med et wack rap navn
            Hård i munden og kort lunte ligesom Skagen smackdown (HEY!)
            Milimeter fra et sammenbrud
            Så fylder mig med piller før jeg rammer puden
            Den ægte nummer ét og der' mange om buddet
            Efterhånden gammel, men årtier fra at brænde ud
            Vildt doven, men i fin form, smiler skævt
            Og griner af tragedien, ja det' vildt sjovt, trist klovn
            Det' vilkårene når man vader i en shitstorm
            Og triller rundt med virkelig tung bagage som en ligvogn
            [Vers 2: Nøx]
            Motorsav, hockeystav, cribwalk på kirkegulvet
            Undergrund som corpsebride, sød men er lige vågnet
            Drømte om at bli' et våben, mere griseri
            Med benzin til ligbålet, vild og våd, beskidt i sproget
            Jeg' en skarnsunge
            Til tyroler bal, til cowboyshorts og svenskerhår
            Jeg flyver ikk', jeg' tæt på ækvator som Equador
            Smiler som en kniv mens du rådner som et efterår
            Mit slæng er blæste veninder på hestepiller
            Mødre med lægekitler og æblekinder
            Væmmes vi ved dig får du på munden ligesom læbestift
            Og åh du vil følge med os, ser du stønner som en tennisspiller
            Arbejder hjemme fra
            "Årh det' så hårdt at fornuften den knækker
            [?] med speederen i bund indtil gulvet forsvinder
            Jeg' gammel hud, nye læber, scorereplikker
            Mor hænger ud på Hellerups botoxklinikker
            Og de kalder mig en vild type fordi intet andet rækker
            Fremad march som førstefødte, øjne flade som brevsprækker
            Dolk i ryggen, spejder danser med et brækket ben
            Følelser ude på tøjet og en hjerne ude af rendestenen
            
            [Vers 3: Funch]
            Pac han råbte op, jeg mærkede kaldet i mig
            De vil være som mig, må nøjes med deres fantasier
            Tegner stregen op, leverer ikk' de halve linjer
            Knækker om dagen, fissetyv i nattetimer
            Ska' du bruge mig er jeg altid væk
            Ude og igang, fik nys om en mandagsfest
            Stik mig et par flasker, jeg skal vise dem hvem der danser bedst
            Jeg går ingen fucking vegne som et salsa skridt
            [?] næse med et par tøser, intet vildt i det
            Men dealeren han er fan og det hjælper lidt på priserne
            Lever på sekundet, kigger ikk' på viserne
            Hun si'r jeg er for meget og jeg syn's det er smigrende
            Til mit niveau har du mer' end et par mil i vente
            Jointen den er røget færdig, men havde lige tændt den
            Ryger et par gram om dagen og skruer op i weekenden
            Der' en pris på mit fjæs, følger [?] tæt
            En forskruet knægt, jeg' fra en rodet slægt
            Ikk' så kriminel men ude efter selvtægt
            Møder op til kameraet som var jeg Uffe Elbæk`
        }, 
        {
            albumTitle: "collabs",
            album: "asbestose 3",
            type: "collab",
            artist: "Asbestose",
            title: "ATV ft. Funch",
            releaseDate: "28/10-2022",
            image: "https://t2.genius.com/unsafe/368x368/https%3A%2F%2Fimages.genius.com%2Fe4520afef2db016e1d71b16b97fbdcae.628x628x1.png",
            length: "2:56",
            description: "Hiphop Slask",
            producer: "IngrediJens",
            lyrics: `
            Kører spillet rundt, a til b
            Ruller op i ATV
            Gi'r dig noia og stress med røg og bass
            Og de slipper aldrig af med det
            
            [Vers 1: Lars Virkli]
            Yeah, hænger som et snotgardin
            Gi'r ikk' en fuck for din dobbelt platin
            Ærligt, ingen fucker med min
            
            Cruiser rundt og gi'r en pucker for svin
            Din flok er ti lgrin
            Stop
            Yo min krop den er clean indtil vi popper vin i crogs
            Det' run Harry Potter magi
            
            Man kan se det hele fra Faaborg til Vig
            
            Vi la'r dig være nu, for ingen mobber et lig`
        },
        {
            albumTitle: "collabs",
            album: "intet album",
            type: "single",
            artist: "Funch",
            title: "Højresving",
            releaseDate: "14/8-2020",
            image: "https://t2.genius.com/unsafe/364x364/https%3A%2F%2Fimages.genius.com%2F16a4653693d0cd2c1139478d5a4ddb2a.640x640x1.jpg",
            length: "3:31",
            description: "Hiphop Slask",
            producer: "Xeren",
            lyrics: `
            [Vers 1]
            Den er ikk' blot spolet, den er top tunet
            Selv på en kold rute kan du aldrig stop’ hjulene
            Cykelkurven er fyldt med vin nede fra Skjold Burne
            Jeg har et cykel slæng som man ikk' kan køb for peng'
            Du burde flygt fra dem, så snart de får deres lygter tændt
            Så flyt dig ven, tror det bedst du cykler hjem
            Her er en flok som jeg lover man ikk’ psyker nemt
            Det' bare еn kæp i hjulet, ingen stopper for bеnene
            Rejser du dig op ja så kommer jeg svingende
            Med det er det en postgang for sent til
            For at rulle med os skal man holde fart i svingene
            Ingen grove hændelser, vi synes det sjovt du vælter
            Det' svært at følge med fra de forreste felter
            Ka' ikk' fortæl' dig hvad der sker hvis du overhæler
            Det' ikke sikkert dine kære de får lov at se dig
            [Refræn]
            Grøn energi, sædet er i synligt læder
            Det kører bedre, homie hent din nøglering
            Står kun af for at måle cykelkæder
            Kørte af sporret, røde øjne i et højresving
            
            [Omkvæd]
            Kæden hoppede af
            Der var en der var to (der var tre)
            De drenge trodsede et stop signal
            Kæden hoppede af
            Der var en der var to (okay)
            Der' stadigvæk et helt hold tilbage
            Kæden hoppede af
            Der var en der var to (der var tre)
            De drenge trodsede et stop signal
            Kæden hoppede af
            Der var en der var to (okay)
            Der’ stadigvæk et helt hold tilbage
            
            [Vers 2]
            Må håbe den er beskyttet, vi ikk’ gået fra din hybel
            Får et nyt medlem når du ikk' låser din cykel
            Ud af gården, laver hjulspind - sjældent ved mine fulde fem
            Pifter dit ride med en kuglepen
            Du kender det, vågner uden luft i dækkene
            Endnu et besøg fra de unge knægte
            Jeg’ egentlig med dig, jeg har aldrig set lignende
            Du ser ikk' vi trasker, for det er det for sent til
            Vi har sadlet op og sparker i benene
            Skal væk herfra, det var en strafbar forseelse
            Der' musik i ørene, fuld og forførende
            Ægte københavner, se mig suse om søerne
            Ser jeg noget kvindeligt, så må hun møde et smil
            Der' medvind når jeg samler damer op på cykelstien
            Det føles fint, sindsro, syv i timen
            Aldrig nogen ulykker, men jeg regner med at dø i en
            
            [Mellemstykke]
            Kæden hoppede af
            Der var en der var to
            De drenge trodsede et stop signal
            
            [Refræn]
            Grøn energi, sædet er i synligt læder
            Det kører bedre, homie hent din nøglering
            Står kun af for at måle cykelkæder
            Kørte af sporret, røde øjne i et højresving
            
            [Refræn]
            Grøn energi, sædet er i synligt læder
            Det kører bedre, homie hent din nøglering
            Står kun af for at måle cykelkæder
            Kørte af sporret, røde øjne i et højresving
            
            [Omkvæd]
            Kæden hoppede af
            Der var en der var to (der var tre)
            De drenge trodsede et stop signal
            Kæden hoppede af
            Der var en der var to (okay)
            Der’ stadigvæk et helt hold tilbage
            Kæden hoppede af
            Der var en der var to (der var tre)
            De drenge trodsede et stop signal
            Kæden hoppede af
            Der var en der var to (okay)
            Der' stadigvæk et helt hold tilbage`
        }
    ])
}

