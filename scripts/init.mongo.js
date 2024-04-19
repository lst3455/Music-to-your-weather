/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. 
 * localhost:
 *   mongo music scripts/init.mongo.js
 */

db.like.remove({});  // Remove all entries in the likes collection

// Data to be inserted into the likes collection
// const likesDB = [
//     { 'track': 'Requiem: II. Dies irae', 'artist': 'Giuseppe Verdi', 'date': '2023-11-01' },
//     { 'track': 'Gal a Bubble - Raw', 'artist': 'Konshens', 'date': '2023-11-02' },
//     { 'track': 'Feed Me Diamonds - RAC Mix', 'artist': 'MNDR', 'date': '2023-11-03' },
//     { 'track': 'El Sol No Regresa', 'artist': 'La Quinta Estacion', 'date': '2023-11-04' },
//     { 'track': 'Let Me In', 'artist': 'Tarrus Riley', 'date': '2023-11-05' },
//     { 'track': 'Piano Sonata No. 20 In A Major, D.959: 4. Rondo (Allegretto)', 'artist': 'Franz Schubert', 'date': '2023-11-06' },
//     { 'track': "Split Feelin's - Remastered 1999/Rudy Van Gelder Edition", 'artist': 'Hank Mobley', 'date': '2023-11-07' },
//     { 'track': 'Háblame de Ti', 'artist': 'Pecos', 'date': '2023-11-08' },
//     { 'track': 'Ricercar No. 1 in G: Ricercar No. 1 in G', 'artist': 'Domenico Gabrielli', 'date': '2023-11-09' },
//     { 'track': 'Holding On', 'artist': 'Disclosure', 'date': '2023-11-10' },
//     { 'track': "Shadowboxin'", 'artist': 'GZA', 'date': '2023-11-11' },
//     { 'track': 'Every Morning', 'artist': "Keb' Mo'", 'date': '2023-11-12' },
//     { 'track': 'Come On In My Kitchen', 'artist': 'Robert Johnson', 'date': '2023-11-13' },
//     { 'track': 'Serenade in E Major for Strings, Op. 22: II. Menuetto', 'artist': 'Antonín Dvořák', 'date': '2023-11-14' },
//     { 'track': 'Prokofiev: Romeo and Juliet, Op. 64, Act 1, Scene 2: Dance of the Knights', 'artist': 'Sergei Prokofiev', 'date': '2023-11-15' },
//     { 'track': 'Look At The Light', 'artist': 'Sin Fang', 'date': '2023-11-16' },
//     { 'track': 'Jesus Christ', 'artist': 'Brand New', 'date': '2023-11-17' },
//     { 'track': 'Naked As We Came', 'artist': 'Iron & Wine', 'date': '2023-11-18' },
//     { 'track': 'Carbonated', 'artist': 'Mount Kimbie', 'date': '2023-11-19' },
//     { 'track': 'Wild Horses - Live / Remastered 2009', 'artist': 'The Rolling Stones', 'date': '2023-11-20' },
//     { 'track': 'Jesus Christ', 'artist': 'Brand New', 'date': '2023-11-21' },
//     { 'track': 'Prokofiev: Romeo and Juliet, Op. 64, Act 1, Scene 2: Dance of the Knights', 'artist': 'Sergei Prokofiev', 'date': '2023-11-22' },
//     { 'track': 'Cello Suite No. 1 in G Major, BWV 1007: I. Prélude', 'artist': 'Johann Sebastian Bach', 'date': '2023-11-23' },
//     { 'track': 'Only Love', 'artist': 'Ben Howard', 'date': '2023-11-24' },
//     { 'track': 'Lay Your Cards Out', 'artist': 'POLIÇA', 'date': '2023-11-25' },
//     { 'track': 'Line of Fire', 'artist': 'Junip', 'date': '2023-11-26' },
//     { 'track': 'I Feel It Coming', 'artist': 'The Weeknd', 'date': '2023-11-27' },
//     { 'track': 'Line of Fire', 'artist': 'Junip', 'date': '2023-11-28' },
//     { 'track': 'More Than Words', 'artist': 'Extreme', 'date': '2023-11-29' },
//     { 'track': 'Look at Little Sister', 'artist': 'Stevie Ray Vaughan', 'date': '2023-11-30' },
//     { 'track': 'Lingus', 'artist': 'Snarky Puppy', 'date': '2023-12-01' },
//     { 'track': 'All the Wild Horses', 'artist': 'Ray LaMontagne', 'date': '2023-12-02' },
//     { 'track': 'Hell Hound On My Trail', 'artist': 'Robert Johnson', 'date': '2023-12-03' },
//     { 'track': "Rollin' Stone", 'artist': 'Muddy Waters', 'date': '2023-12-04' },
//     { 'track': 'Girl On Fire', 'artist': 'Alicia Keys', 'date': '2023-12-05' },
//     { 'track': 'Juke - Single Version', 'artist': 'Little Walter', 'date': '2023-12-06' },
//     { 'track': 'Tzigane, M. 76 (Version for Violin & Orchestra)', 'artist': 'Maurice Ravel', 'date': '2023-12-07' },
//     { 'track': 'Caroline', 'artist': 'Aminé', 'date': '2023-12-08' },
//     { 'track': 'Carbonated', 'artist': 'Mount Kimbie', 'date': '2023-12-09' },
//     { 'track': 'Ghosts', 'artist': 'Laura Marling', 'date': '2023-12-10' },
//     { 'track': 'Drops of Jupiter (Tell Me)', 'artist': 'Train', 'date': '2023-12-11' },
//     { 'track': 'Back Door Man', 'artist': "Howlin' Wolf", 'date': '2023-12-12' },
//     { 'track': 'Pictures at an Exhibition (Orch. Ravel): Promenade 1 - Live', 'artist': 'Modest Mussorgsky', 'date': '2023-12-13' },
//     { 'track': "Don't Owe You a Thang", 'artist': 'Gary Clark Jr.', 'date': '2023-12-14' },
//     { 'track': 'For Emma', 'artist': 'Bon Iver', 'date': '2023-12-15' },
//     { 'track': 'Voodoo Child (Slight Return) - Live', 'artist': 'Stevie Ray Vaughan', 'date': '2023-12-16' },
//     { 'track': 'Caroline', 'artist': 'Aminé', 'date': '2023-12-17' },
//     { 'track': "The Ecstasy of Gold - L'Estasi Dell'oro", 'artist': 'Ennio Morricone', 'date': '2023-12-18' },
//     { 'track': 'Who Says', 'artist': 'John Mayer', 'date': '2023-12-19' },
//     { 'track': 'Skinny Love', 'artist': 'Bon Iver', 'date': '2023-12-20' },
//     { 'track': 'Carbonated', 'artist': 'Mount Kimbie', 'date': '2023-12-21' },
//     { 'track': 'Naked As We Came', 'artist': 'Iron & Wine', 'date': '2023-12-22' },
//     { 'track': 'In The Midnight', 'artist': 'Langhorne Slim', 'date': '2023-12-23' },
//     { 'track': 'Scene Five - With Ears To See and Eyes To Hear', 'artist': 'Sleeping With Sirens', 'date': '2023-12-24' },
//     { 'track': 'All Your Love - Mono', 'artist': 'John Mayall & The Bluesbreakers', 'date': '2023-12-25' },
//     { 'track': 'Fit Against the Country', 'artist': 'Horse Feathers', 'date': '2023-12-26' },
//     { 'track': 'Change It', 'artist': 'Stevie Ray Vaughan', 'date': '2023-12-27' },
//     { 'track': 'Every Morning', 'artist': "Keb' Mo'", 'date': '2023-12-28' },
//     { 'track': 'Naked As We Came', 'artist': 'Iron & Wine', 'date': '2023-12-29' },
//     { 'track': "The Times They Are A-Changin'", 'artist': 'Bob Dylan', 'date': '2023-12-30' },
//     { 'track': 'Every Morning', 'artist': "Keb' Mo'", 'date': '2023-12-31' },
//     { 'track': 'Alone Again (Naturally)', 'artist': 'Diana Krall', 'date': '2024-01-01' },
//     { 'track': 'Bewitched, Bothered, And Bewildered', 'artist': 'Ella Fitzgerald', 'date': '2024-01-02' },
//     { 'track': 'New Slang', 'artist': 'The Shins', 'date': '2024-01-03' },
//     { 'track': 'Another Brick in the Wall, Pt. 2', 'artist': 'Pink Floyd', 'date': '2024-01-04' },
//     { 'track': 'New Slang', 'artist': 'The Shins', 'date': '2024-01-05' },
//     { 'track': "Somebody's Sleeping in My Bed", 'artist': 'Buddy Guy', 'date': '2024-01-06' },
//     { 'track': 'Flaming Creatures', 'artist': 'Hrvrd', 'date': '2024-01-07' },
//     { 'track': 'Hurricane', 'artist': 'MS MR', 'date': '2024-01-08' },
//     { 'track': 'Fit Against the Country', 'artist': 'Horse Feathers', 'date': '2024-01-09' },
//     { 'track': 'Caroline', 'artist': 'Aminé', 'date': '2024-01-10' },
//     { 'track': 'New Slang', 'artist': 'The Shins', 'date': '2024-01-11' },
//     { 'track': 'Another Brick in the Wall, Pt. 2', 'artist': 'Pink Floyd', 'date': '2024-01-12' },
//     { 'track': 'Song 2 - 2012 Remaster', 'artist': 'Blur', 'date': '2024-01-13' },
//     { 'track': 'Naked As We Came', 'artist': 'Iron & Wine', 'date': '2024-01-14' },
//     { 'track': "The Times They Are A-Changin'", 'artist': 'Bob Dylan', 'date': '2024-01-15' },
//     { 'track': 'Fit Against the Country', 'artist': 'Horse Feathers', 'date': '2024-01-16' },
//     { 'track': 'Naked As We Came', 'artist': 'Iron & Wine', 'date': '2024-01-17' },
//     { 'track': "The Times They Are A-Changin'", 'artist': 'Bob Dylan', 'date': '2024-01-18' },
//     { 'track': 'My Little Brown Book', 'artist': 'Duke Ellington', 'date': '2024-01-19' },
//     { 'track': 'Goodbye Pork Pie Hat', 'artist': 'Charles Mingus', 'date': '2024-01-20' },
//     { 'track': 'Dum Dum', 'artist': 'Baauer', 'date': '2024-01-21' },
//     { 'track': 'Cool Kids', 'artist': 'Echosmith', 'date': '2024-01-22' },
//     { 'track': 'Towers', 'artist': 'Bon Iver', 'date': '2024-01-23' },
//     { 'track': "Somebody's Sleeping in My Bed", 'artist': 'Buddy Guy', 'date': '2024-01-24' },
//     { 'track': 'Carbonated', 'artist': 'Mount Kimbie', 'date': '2024-01-25' },
//     { 'track': 'Ghosts', 'artist': 'Laura Marling', 'date': '2024-01-26' },
//     { 'track': 'Carbonated', 'artist': 'Mount Kimbie', 'date': '2024-01-27' },
//     { 'track': 'Ghosts', 'artist': 'Laura Marling', 'date': '2024-01-28' },
//     { 'track': 'Naked As We Came', 'artist': 'Iron & Wine', 'date': '2024-01-29' },
//     { 'track': 'Caroline', 'artist': 'Aminé', 'date': '2024-01-30' },
//     { 'track': 'Another Brick in the Wall, Pt. 2', 'artist': 'Pink Floyd', 'date': '2024-01-31' },
//     { 'track': 'New Slang', 'artist': 'The Shins', 'date': '2024-02-01' },
//     { 'track': 'New Slang', 'artist': 'The Shins', 'date': '2024-02-02' },
//     { 'track': 'Carbonated', 'artist': 'Mount Kimbie', 'date': '2024-02-03' },
//     { 'track': 'Black and Yellow', 'artist': 'Wiz Khalifa', 'date': '2024-02-04' },
//     { 'track': 'Ghosts', 'artist': 'Laura Marling', 'date': '2024-02-05' },
//     { 'track': 'The Girl', 'artist': 'City and Colour', 'date': '2024-02-06' },
//     { 'track': 'Naked As We Came', 'artist': 'Iron & Wine', 'date': '2024-02-07' },
//     { 'track': 'Hat And Beard', 'artist': 'Eric Dolphy', 'date': '2024-02-08' },
//     { 'track': 'Fit Against the Country', 'artist': 'Horse Feathers', 'date': '2024-02-09' },
//     { 'track': 'Another Brick in the Wall, Pt. 2', 'artist': 'Pink Floyd', 'date': '2024-02-10' },
//     { 'track': 'New Slang', 'artist': 'The Shins', 'date': '2024-02-11' },
//     { 'track': 'Caroline', 'artist': 'Aminé', 'date': '2024-02-12' },
//     { 'track': 'New Slang', 'artist': 'The Shins', 'date': '2024-02-13' },
//     { 'track': "The Times They Are A-Changin'", 'artist': 'Bob Dylan', 'date': '2024-02-14' },
//     { 'track': 'Fit Against the Country', 'artist': 'Horse Feathers', 'date': '2024-02-15' },
//     { 'track': 'Naked As We Came', 'artist': 'Iron & Wine', 'date': '2024-02-16' },
//     { 'track': 'Ghosts', 'artist': 'Laura Marling', 'date': '2024-02-17' },
//     { 'track': "The Times They Are A-Changin'", 'artist': 'Bob Dylan', 'date': '2024-02-18' },
//     { 'track': 'Another Brick in the Wall, Pt. 2', 'artist': 'Pink Floyd', 'date': '2024-02-19' },
//     { 'track': 'You Got Me', 'artist': 'G-Eazy', 'date': '2024-02-20' },
//     { 'track': 'Omen - Radio Edit', 'artist': 'Disclosure', 'date': '2024-02-21' },
//     { 'track': 'Fit Against the Country', 'artist': 'Horse Feathers', 'date': '2024-02-22' },
//     { 'track': 'Carbonated', 'artist': 'Mount Kimbie', 'date': '2024-02-23' },
//     { 'track': 'Caroline', 'artist': 'Aminé', 'date': '2024-02-24' },
//     { 'track': 'Caroline', 'artist': 'Aminé', 'date': '2024-02-25' },
//     { 'track': 'Caroline', 'artist': 'Aminé', 'date': '2024-02-26' },
//     { 'track': 'Ghosts', 'artist': 'Laura Marling', 'date': '2024-02-27' },
//     { 'track': 'Ghosts', 'artist': 'Laura Marling', 'date': '2024-02-28' },
//     { 'track': 'Ghosts', 'artist': 'Laura Marling', 'date': '2024-02-29' },
//     { 'track': 'Requiem: II. Dies irae', 'artist': 'Giuseppe Verdi', 'date': '2024-03-01' },
//     { 'track': 'Gal a Bubble - Raw', 'artist': 'Konshens', 'date': '2024-03-02' },
//     { 'track': 'Feed Me Diamonds - RAC Mix', 'artist': 'MNDR', 'date': '2024-03-03' },
//     { 'track': 'El Sol No Regresa', 'artist': 'La Quinta Estacion', 'date': '2024-03-04' },
//     { 'track': 'Let Me In', 'artist': 'Tarrus Riley', 'date': '2024-03-05' },
//     { 'track': 'Piano Sonata No. 20 In A Major, D.959: 4. Rondo (Allegretto)', 'artist': 'Franz Schubert', 'date': '2024-03-06' },
//     { 'track': "Split Feelin's - Remastered 1999/Rudy Van Gelder Edition", 'artist': 'Hank Mobley', 'date': '2024-03-07' },
//     { 'track': 'Háblame de Ti', 'artist': 'Pecos', 'date': '2024-03-08' },
//     { 'track': 'Ricercar No. 1 in G: Ricercar No. 1 in G', 'artist': 'Domenico Gabrielli', 'date': '2024-03-09' },
//     { 'track': 'Holding On', 'artist': 'Disclosure', 'date': '2024-03-10' },
//     { 'track': "Shadowboxin'", 'artist': 'GZA', 'date': '2024-03-11' },
//     { 'track': 'Every Morning', 'artist': "Keb' Mo'", 'date': '2024-03-12' },
//     { 'track': 'Come On In My Kitchen', 'artist': 'Robert Johnson', 'date': '2024-03-13' },
//     { 'track': 'Serenade in E Major for Strings, Op. 22: II. Menuetto', 'artist': 'Antonín Dvořák', 'date': '2024-03-14' },
//     { 'track': 'Prokofiev: Romeo and Juliet, Op. 64, Act 1, Scene 2: Dance of the Knights', 'artist': 'Sergei Prokofiev', 'date': '2024-03-15' },
//     { 'track': 'Look At The Light', 'artist': 'Sin Fang', 'date': '2024-03-16' },
//     { 'track': 'Jesus Christ', 'artist': 'Brand New', 'date': '2024-03-17' },
//     { 'track': 'Naked As We Came', 'artist': 'Iron & Wine', 'date': '2024-03-18' },
//     { 'track': 'Carbonated', 'artist': 'Mount Kimbie', 'date': '2024-03-19' },
//     { 'track': 'Wild Horses - Live / Remastered 2009', 'artist': 'The Rolling Stones', 'date': '2024-03-20' },
//     { 'track': 'Jesus Christ', 'artist': 'Brand New', 'date': '2024-03-21' },
//     { 'track': 'Prokofiev: Romeo and Juliet, Op. 64, Act 1, Scene 2: Dance of the Knights', 'artist': 'Sergei Prokofiev', 'date': '2024-03-22' },
//     { 'track': 'Cello Suite No. 1 in G Major, BWV 1007: I. Prélude', 'artist': 'Johann Sebastian Bach', 'date': '2024-03-23' },
//     { 'track': 'Only Love', 'artist': 'Ben Howard', 'date': '2024-03-24' },
//     { 'track': 'Lay Your Cards Out', 'artist': 'POLIÇA', 'date': '2024-03-25' },
//     { 'track': 'Line of Fire', 'artist': 'Junip', 'date': '2024-03-26' },
//     { 'track': 'I Feel It Coming', 'artist': 'The Weeknd', 'date': '2024-03-27' },
//     { 'track': 'Line of Fire', 'artist': 'Junip', 'date': '2024-03-28' },
//     { 'track': 'More Than Words', 'artist': 'Extreme', 'date': '2024-03-29' },
//     { 'track': 'Look at Little Sister', 'artist': 'Stevie Ray Vaughan', 'date': '2024-03-30' },
//     { 'track': 'Lingus', 'artist': 'Snarky Puppy', 'date': '2024-03-31' },
//     { 'track': 'All the Wild Horses', 'artist': 'Ray LaMontagne', 'date': '2024-04-01' },
//     { 'track': 'Hell Hound On My Trail', 'artist': 'Robert Johnson', 'date': '2024-04-02' },
//     { 'track': "Rollin' Stone", 'artist': 'Muddy Waters', 'date': '2024-04-03' },
//     { 'track': 'Girl On Fire', 'artist': 'Alicia Keys', 'date': '2024-04-04' },
//     { 'track': 'Juke - Single Version', 'artist': 'Little Walter', 'date': '2024-04-05' },
//     { 'track': 'Tzigane, M. 76 (Version for Violin & Orchestra)', 'artist': 'Maurice Ravel', 'date': '2024-04-06' },
//     { 'track': 'Caroline', 'artist': 'Aminé', 'date': '2024-04-07' },
//     { 'track': 'Carbonated', 'artist': 'Mount Kimbie', 'date': '2024-04-08' },
//     { 'track': 'Ghosts', 'artist': 'Laura Marling', 'date': '2024-04-09' },
//     { 'track': 'Drops of Jupiter (Tell Me)', 'artist': 'Train', 'date': '2024-04-10' },
//     { 'track': 'Back Door Man', 'artist': "Howlin' Wolf", 'date': '2024-04-11' },
//     { 'track': 'Pictures at an Exhibition (Orch. Ravel): Promenade 1 - Live', 'artist': 'Modest Mussorgsky', 'date': '2024-04-12' },
//     { 'track': "Don't Owe You a Thang", 'artist': 'Gary Clark Jr.', 'date': '2024-04-13' },
//     { 'track': 'For Emma', 'artist': 'Bon Iver', 'date': '2024-04-14' },
//     { 'track': 'Voodoo Child', 'artist': 'Stevie Ray Vaughan', 'date': '2024-04-15' },
//     { 'track': 'Good Time', 'artist': 'Owl City', 'date': '2024-04-15' }
// ];

const likesDB = [
    {
        "id": "18mjTyCpqUWuF1HedQZW4s",
        "track": "Requiem: II. Dies irae",
        "artist": "Giuseppe Verdi",
        "date": "2023-11-01"
    },
    {
        "id": "2bvFZtQc3JbD5ZSA6cwvjq",
        "track": "Gal a Bubble - Raw",
        "artist": "Konshens",
        "date": "2023-11-02"
    },
    {
        "id": "2KTDXomHe7JQymlzXf7KdM",
        "track": "Feed Me Diamonds - RAC Mix",
        "artist": "MNDR",
        "date": "2023-11-03"
    },
    {
        "id": "2awKQgW88iq9jFM54VaCAp",
        "track": "El Sol No Regresa",
        "artist": "La Quinta Estacion",
        "date": "2023-11-04"
    },
    {
        "id": "67atrbdFSd7rhWH6yMj6rH",
        "track": "Let Me In",
        "artist": "Tarrus Riley",
        "date": "2023-11-05"
    },
    {
        "id": "2UEer5v08SeaipCQuO4QNb",
        "track": "Piano Sonata No. 20 In A Major, D.959: 4. Rondo (Allegretto)",
        "artist": "Franz Schubert",
        "date": "2023-11-06"
    },
    {
        "id": "3V3r5GlxyDjubv9TiZuw1s",
        "track": "Split Feelin's - Remastered 1999/Rudy Van Gelder Edition",
        "artist": "Hank Mobley",
        "date": "2023-11-07"
    },
    {
        "id": "7EWKAYWmUc1cTfEimTKvou",
        "track": "H\u00e1blame de Ti",
        "artist": "Pecos",
        "date": "2023-11-08"
    },
    {
        "id": "7MAnaswAFhCkeE7fkL1C3g",
        "track": "Ricercar No. 1 in G: Ricercar No. 1 in G",
        "artist": "Domenico Gabrielli",
        "date": "2023-11-09"
    },
    {
        "id": "3Ctlrt6kzdlo7nuh0oVR7m",
        "track": "Holding On",
        "artist": "Disclosure",
        "date": "2023-11-10"
    },
    {
        "id": "7bp5DfkdK1OAvNJ1U4HfDA",
        "track": "Shadowboxin'",
        "artist": "GZA",
        "date": "2023-11-11"
    },
    {
        "id": "6WmwvYaVSod4whIXGWEvBR",
        "track": "Every Morning",
        "artist": "Keb' Mo'",
        "date": "2023-11-12"
    },
    {
        "id": "10W125nMbncRGcXRBoACOx",
        "track": "Come On In My Kitchen",
        "artist": "Robert Johnson",
        "date": "2023-11-13"
    },
    {
        "id": "6HGzj1FMXVBAi2AtBCbhCQ",
        "track": "Serenade in E Major for Strings, Op. 22: II. Menuetto",
        "artist": "Anton\u00edn Dvo\u0159\u00e1k",
        "date": "2023-11-14"
    },
    {
        "id": "7HSs4srn1qnZhh7WRWBVOk",
        "track": "Prokofiev: Romeo and Juliet, Op. 64, Act 1, Scene 2: Dance of the Knights",
        "artist": "Sergei Prokofiev",
        "date": "2023-11-15"
    },
    {
        "id": "56aazenLnCcpAzCEgsCyYV",
        "track": "Look At The Light",
        "artist": "Sin Fang",
        "date": "2023-11-16"
    },
    {
        "id": "45hOVoUyaw7BfwqQMKQNCU",
        "track": "Jesus Christ",
        "artist": "Brand New",
        "date": "2023-11-17"
    },
    {
        "id": "2gUSIsapdX6jEJ0DvjqTt2",
        "track": "Naked As We Came",
        "artist": "Iron & Wine",
        "date": "2023-11-18"
    },
    {
        "id": "5d3qZ4xZv0inQK292Mmnhh",
        "track": "Carbonated",
        "artist": "Mount Kimbie",
        "date": "2023-11-19"
    },
    {
        "id": "7uF4MX9BEA8E7Di2I1kdij",
        "track": "Wild Horses - Live / Remastered 2009",
        "artist": "The Rolling Stones",
        "date": "2023-11-20"
    },
    {
        "id": "45hOVoUyaw7BfwqQMKQNCU",
        "track": "Jesus Christ",
        "artist": "Brand New",
        "date": "2023-11-21"
    },
    {
        "id": "7HSs4srn1qnZhh7WRWBVOk",
        "track": "Prokofiev: Romeo and Juliet, Op. 64, Act 1, Scene 2: Dance of the Knights",
        "artist": "Sergei Prokofiev",
        "date": "2023-11-22"
    },
    {
        "id": "17i5jLpzndlQhbS4SrTd0B",
        "track": "Cello Suite No. 1 in G Major, BWV 1007: I. Pr\u00e9lude",
        "artist": "Johann Sebastian Bach",
        "date": "2023-11-23"
    },
    {
        "id": "3MdYFBIzPf7lSJnI8wi3Ka",
        "track": "Only Love",
        "artist": "Ben Howard",
        "date": "2023-11-24"
    },
    {
        "id": "2NbSzyMiK2oZov8r5Yddcf",
        "track": "Lay Your Cards Out",
        "artist": "POLI\u00c7A",
        "date": "2023-11-25"
    },
    {
        "id": "0lQIZtHlrUcJEpOzTASw8q",
        "track": "Line of Fire",
        "artist": "Junip",
        "date": "2023-11-26"
    },
    {
        "id": "5GXAXm5YOmYT0kL5jHvYBt",
        "track": "I Feel It Coming",
        "artist": "The Weeknd",
        "date": "2023-11-27"
    },
    {
        "id": "0lQIZtHlrUcJEpOzTASw8q",
        "track": "Line of Fire",
        "artist": "Junip",
        "date": "2023-11-28"
    },
    {
        "id": "7z0JcZ8PQoAfUaLIXvbyTH",
        "track": "More Than Words",
        "artist": "Extreme",
        "date": "2023-11-29"
    },
    {
        "id": "5He3kbhG04jAioqHVEytHq",
        "track": "Look at Little Sister",
        "artist": "Stevie Ray Vaughan",
        "date": "2023-11-30"
    },
    {
        "id": "5P6vo51dtkBYWXswH1twvK",
        "track": "Lingus",
        "artist": "Snarky Puppy",
        "date": "2023-12-01"
    },
    {
        "id": "2X5S5NV8Bj4WNTCnur6Ylt",
        "track": "All the Wild Horses",
        "artist": "Ray LaMontagne",
        "date": "2023-12-02"
    },
    {
        "id": "5xjG7nV5ncQAHkuifsz4v3",
        "track": "Hell Hound On My Trail",
        "artist": "Robert Johnson",
        "date": "2023-12-03"
    },
    {
        "id": "7a8WbNqb0ksf9ibrWlmb4M",
        "track": "Rollin' Stone",
        "artist": "Muddy Waters",
        "date": "2023-12-04"
    },
    {
        "id": "6qOEjO2IUD7PjtpsXawq0d",
        "track": "Girl On Fire",
        "artist": "Alicia Keys",
        "date": "2023-12-05"
    },
    {
        "id": "6HHhzDzw2YlOs7FppLaUD9",
        "track": "Juke - Single Version",
        "artist": "Little Walter",
        "date": "2023-12-06"
    },
    {
        "id": "1OacCHsUQIAuUtlqv4I0c2",
        "track": "Tzigane, M. 76 (Version for Violin & Orchestra)",
        "artist": "Maurice Ravel",
        "date": "2023-12-07"
    },
    {
        "id": "5hTpBe8h35rJ67eAWHQsJx",
        "track": "Caroline",
        "artist": "Amin\u00e9",
        "date": "2023-12-08"
    },
    {
        "id": "5d3qZ4xZv0inQK292Mmnhh",
        "track": "Carbonated",
        "artist": "Mount Kimbie",
        "date": "2023-12-09"
    },
    {
        "id": "3LHg768dEKqJKht2uPTlVR",
        "track": "Ghosts",
        "artist": "Laura Marling",
        "date": "2023-12-10"
    },
    {
        "id": "2hKdd3qO7cWr2Jo0Bcs0MA",
        "track": "Drops of Jupiter (Tell Me)",
        "artist": "Train",
        "date": "2023-12-11"
    },
    {
        "id": "4ryCsPW9l4Am2aKYiJuZnJ",
        "track": "Back Door Man",
        "artist": "Howlin' Wolf",
        "date": "2023-12-12"
    },
    {
        "id": "6mo6D7Jh6guYnbcq7wZVlg",
        "track": "Pictures at an Exhibition (Orch. Ravel): Promenade 1 - Live",
        "artist": "Modest Mussorgsky",
        "date": "2023-12-13"
    },
    {
        "id": "6kHWGVOuGXaIJRB4lX7OZ8",
        "track": "Don't Owe You a Thang",
        "artist": "Gary Clark Jr.",
        "date": "2023-12-14"
    },
    {
        "id": "2RTAaSdjuoaJflDn3YKlls",
        "track": "For Emma",
        "artist": "Bon Iver",
        "date": "2023-12-15"
    },
    {
        "id": "3eZaA3p7lMJjOD3BnKsj1U",
        "track": "Voodoo Child (Slight Return) - Live",
        "artist": "Stevie Ray Vaughan",
        "date": "2023-12-16"
    },
    {
        "id": "5hTpBe8h35rJ67eAWHQsJx",
        "track": "Caroline",
        "artist": "Amin\u00e9",
        "date": "2023-12-17"
    },
    {
        "id": "68oxELAW6URbwJCKmBiNDa",
        "track": "The Ecstasy of Gold - L'Estasi Dell'oro",
        "artist": "Ennio Morricone",
        "date": "2023-12-18"
    },
    {
        "id": "0HLWvLKQWpFdPhgk6ym58n",
        "track": "Who Says",
        "artist": "John Mayer",
        "date": "2023-12-19"
    },
    {
        "id": "7fXyuQqEBwpKtCa8PomO7B",
        "track": "Skinny Love",
        "artist": "Bon Iver",
        "date": "2023-12-20"
    },
    {
        "id": "5d3qZ4xZv0inQK292Mmnhh",
        "track": "Carbonated",
        "artist": "Mount Kimbie",
        "date": "2023-12-21"
    },
    {
        "id": "2gUSIsapdX6jEJ0DvjqTt2",
        "track": "Naked As We Came",
        "artist": "Iron & Wine",
        "date": "2023-12-22"
    },
    {
        "id": "265zTxhHLziu6TdRTF403G",
        "track": "In The Midnight",
        "artist": "Langhorne Slim",
        "date": "2023-12-23"
    },
    {
        "id": "0ZGD86ANZoQT2tU57Y4gCE",
        "track": "Scene Five - With Ears To See and Eyes To Hear",
        "artist": "Sleeping With Sirens",
        "date": "2023-12-24"
    },
    {
        "id": "3FVBOuiSks5oYN5dTt0JZN",
        "track": "All Your Love - Mono",
        "artist": "John Mayall & The Bluesbreakers",
        "date": "2023-12-25"
    },
    {
        "id": "60i7EJiLEZtxp48pAhoJ2G",
        "track": "Fit Against the Country",
        "artist": "Horse Feathers",
        "date": "2023-12-26"
    },
    {
        "id": "1KrOqTsy6nTZhKq26Vomqu",
        "track": "Change It",
        "artist": "Stevie Ray Vaughan",
        "date": "2023-12-27"
    },
    {
        "id": "6WmwvYaVSod4whIXGWEvBR",
        "track": "Every Morning",
        "artist": "Keb' Mo'",
        "date": "2023-12-28"
    },
    {
        "id": "2gUSIsapdX6jEJ0DvjqTt2",
        "track": "Naked As We Came",
        "artist": "Iron & Wine",
        "date": "2023-12-29"
    },
    {
        "id": "2HQWTyTz7VRJ8g0wbXcf7A",
        "track": "The Times They Are A-Changin'",
        "artist": "Bob Dylan",
        "date": "2023-12-30"
    },
    {
        "id": "6WmwvYaVSod4whIXGWEvBR",
        "track": "Every Morning",
        "artist": "Keb' Mo'",
        "date": "2023-12-31"
    },
    {
        "id": "1UhJzLDFPPUXqC1bmNIlc0",
        "track": "Alone Again (Naturally)",
        "artist": "Diana Krall",
        "date": "2024-01-01"
    },
    {
        "id": "50k2js6trDCX2iV0KsIBGx",
        "track": "Bewitched, Bothered, And Bewildered",
        "artist": "Ella Fitzgerald",
        "date": "2024-01-02"
    },
    {
        "id": "5oUV6yWdDM0R9Q2CizRhIt",
        "track": "New Slang",
        "artist": "The Shins",
        "date": "2024-01-03"
    },
    {
        "id": "4gMgiXfqyzZLMhsksGmbQV",
        "track": "Another Brick in the Wall, Pt. 2",
        "artist": "Pink Floyd",
        "date": "2024-01-04"
    },
    {
        "id": "5oUV6yWdDM0R9Q2CizRhIt",
        "track": "New Slang",
        "artist": "The Shins",
        "date": "2024-01-05"
    },
    {
        "id": "5x43Y3cKUlwnOlRWkb2IMJ",
        "track": "Somebody's Sleeping in My Bed",
        "artist": "Buddy Guy",
        "date": "2024-01-06"
    },
    {
        "id": "6SSt8Vjw88qoV19hiFd7j0",
        "track": "Flaming Creatures",
        "artist": "Hrvrd",
        "date": "2024-01-07"
    },
    {
        "id": "35aNHKBZWXXbL9KQK7O5Nk",
        "track": "Hurricane",
        "artist": "MS MR",
        "date": "2024-01-08"
    },
    {
        "id": "60i7EJiLEZtxp48pAhoJ2G",
        "track": "Fit Against the Country",
        "artist": "Horse Feathers",
        "date": "2024-01-09"
    },
    {
        "id": "5hTpBe8h35rJ67eAWHQsJx",
        "track": "Caroline",
        "artist": "Amin\u00e9",
        "date": "2024-01-10"
    },
    {
        "id": "5oUV6yWdDM0R9Q2CizRhIt",
        "track": "New Slang",
        "artist": "The Shins",
        "date": "2024-01-11"
    },
    {
        "id": "4gMgiXfqyzZLMhsksGmbQV",
        "track": "Another Brick in the Wall, Pt. 2",
        "artist": "Pink Floyd",
        "date": "2024-01-12"
    },
    {
        "id": "1FTSo4v6BOZH9QxKc3MbVM",
        "track": "Song 2 - 2012 Remaster",
        "artist": "Blur",
        "date": "2024-01-13"
    },
    {
        "id": "2gUSIsapdX6jEJ0DvjqTt2",
        "track": "Naked As We Came",
        "artist": "Iron & Wine",
        "date": "2024-01-14"
    },
    {
        "id": "2HQWTyTz7VRJ8g0wbXcf7A",
        "track": "The Times They Are A-Changin'",
        "artist": "Bob Dylan",
        "date": "2024-01-15"
    },
    {
        "id": "60i7EJiLEZtxp48pAhoJ2G",
        "track": "Fit Against the Country",
        "artist": "Horse Feathers",
        "date": "2024-01-16"
    },
    {
        "id": "2gUSIsapdX6jEJ0DvjqTt2",
        "track": "Naked As We Came",
        "artist": "Iron & Wine",
        "date": "2024-01-17"
    },
    {
        "id": "2HQWTyTz7VRJ8g0wbXcf7A",
        "track": "The Times They Are A-Changin'",
        "artist": "Bob Dylan",
        "date": "2024-01-18"
    },
    {
        "id": "0WPHL9IRv1Nm4xu21qxgnw",
        "track": "My Little Brown Book",
        "artist": "Duke Ellington",
        "date": "2024-01-19"
    },
    {
        "id": "3PJMsxg6rz9FOo6xNiASXz",
        "track": "Goodbye Pork Pie Hat",
        "artist": "Charles Mingus",
        "date": "2024-01-20"
    },
    {
        "id": "6mOex0b8muOcZDTBAwKBXn",
        "track": "Dum Dum",
        "artist": "Baauer",
        "date": "2024-01-21"
    },
    {
        "id": "13P5rwmk2EsoFRIz9UCeh9",
        "track": "Cool Kids",
        "artist": "Echosmith",
        "date": "2024-01-22"
    },
    {
        "id": "5mMV6EaKeZWkGFvE1xg13n",
        "track": "Towers",
        "artist": "Bon Iver",
        "date": "2024-01-23"
    },
    {
        "id": "5x43Y3cKUlwnOlRWkb2IMJ",
        "track": "Somebody's Sleeping in My Bed",
        "artist": "Buddy Guy",
        "date": "2024-01-24"
    },
    {
        "id": "5d3qZ4xZv0inQK292Mmnhh",
        "track": "Carbonated",
        "artist": "Mount Kimbie",
        "date": "2024-01-25"
    },
    {
        "id": "3LHg768dEKqJKht2uPTlVR",
        "track": "Ghosts",
        "artist": "Laura Marling",
        "date": "2024-01-26"
    },
    {
        "id": "5d3qZ4xZv0inQK292Mmnhh",
        "track": "Carbonated",
        "artist": "Mount Kimbie",
        "date": "2024-01-27"
    },
    {
        "id": "3LHg768dEKqJKht2uPTlVR",
        "track": "Ghosts",
        "artist": "Laura Marling",
        "date": "2024-01-28"
    },
    {
        "id": "2gUSIsapdX6jEJ0DvjqTt2",
        "track": "Naked As We Came",
        "artist": "Iron & Wine",
        "date": "2024-01-29"
    },
    {
        "id": "5hTpBe8h35rJ67eAWHQsJx",
        "track": "Caroline",
        "artist": "Amin\u00e9",
        "date": "2024-01-30"
    },
    {
        "id": "4gMgiXfqyzZLMhsksGmbQV",
        "track": "Another Brick in the Wall, Pt. 2",
        "artist": "Pink Floyd",
        "date": "2024-01-31"
    },
    {
        "id": "5oUV6yWdDM0R9Q2CizRhIt",
        "track": "New Slang",
        "artist": "The Shins",
        "date": "2024-02-01"
    },
    {
        "id": "5oUV6yWdDM0R9Q2CizRhIt",
        "track": "New Slang",
        "artist": "The Shins",
        "date": "2024-02-02"
    },
    {
        "id": "5d3qZ4xZv0inQK292Mmnhh",
        "track": "Carbonated",
        "artist": "Mount Kimbie",
        "date": "2024-02-03"
    },
    {
        "id": "5A6OHHy73AR5tLxgTc98zz",
        "track": "Black and Yellow",
        "artist": "Wiz Khalifa",
        "date": "2024-02-04"
    },
    {
        "id": "3LHg768dEKqJKht2uPTlVR",
        "track": "Ghosts",
        "artist": "Laura Marling",
        "date": "2024-02-05"
    },
    {
        "id": "2KHFNeIuubGY26Rkx0vYL0",
        "track": "The Girl",
        "artist": "City and Colour",
        "date": "2024-02-06"
    },
    {
        "id": "2gUSIsapdX6jEJ0DvjqTt2",
        "track": "Naked As We Came",
        "artist": "Iron & Wine",
        "date": "2024-02-07"
    },
    {
        "id": "2VzRmb0GCPDBv6FddHGu7s",
        "track": "Hat And Beard",
        "artist": "Eric Dolphy",
        "date": "2024-02-08"
    },
    {
        "id": "60i7EJiLEZtxp48pAhoJ2G",
        "track": "Fit Against the Country",
        "artist": "Horse Feathers",
        "date": "2024-02-09"
    },
    {
        "id": "4gMgiXfqyzZLMhsksGmbQV",
        "track": "Another Brick in the Wall, Pt. 2",
        "artist": "Pink Floyd",
        "date": "2024-02-10"
    },
    {
        "id": "5oUV6yWdDM0R9Q2CizRhIt",
        "track": "New Slang",
        "artist": "The Shins",
        "date": "2024-02-11"
    },
    {
        "id": "5hTpBe8h35rJ67eAWHQsJx",
        "track": "Caroline",
        "artist": "Amin\u00e9",
        "date": "2024-02-12"
    },
    {
        "id": "5oUV6yWdDM0R9Q2CizRhIt",
        "track": "New Slang",
        "artist": "The Shins",
        "date": "2024-02-13"
    },
    {
        "id": "2HQWTyTz7VRJ8g0wbXcf7A",
        "track": "The Times They Are A-Changin'",
        "artist": "Bob Dylan",
        "date": "2024-02-14"
    },
    {
        "id": "60i7EJiLEZtxp48pAhoJ2G",
        "track": "Fit Against the Country",
        "artist": "Horse Feathers",
        "date": "2024-02-15"
    },
    {
        "id": "2gUSIsapdX6jEJ0DvjqTt2",
        "track": "Naked As We Came",
        "artist": "Iron & Wine",
        "date": "2024-02-16"
    },
    {
        "id": "3LHg768dEKqJKht2uPTlVR",
        "track": "Ghosts",
        "artist": "Laura Marling",
        "date": "2024-02-17"
    },
    {
        "id": "2HQWTyTz7VRJ8g0wbXcf7A",
        "track": "The Times They Are A-Changin'",
        "artist": "Bob Dylan",
        "date": "2024-02-18"
    },
    {
        "id": "4gMgiXfqyzZLMhsksGmbQV",
        "track": "Another Brick in the Wall, Pt. 2",
        "artist": "Pink Floyd",
        "date": "2024-02-19"
    },
    {
        "id": "4ztaHDRJVuQe61KVCIpgqw",
        "track": "You Got Me",
        "artist": "G-Eazy",
        "date": "2024-02-20"
    },
    {
        "id": "78EQ5LZGgviMU9k0zrqv1r",
        "track": "Omen - Radio Edit",
        "artist": "Disclosure",
        "date": "2024-02-21"
    },
    {
        "id": "60i7EJiLEZtxp48pAhoJ2G",
        "track": "Fit Against the Country",
        "artist": "Horse Feathers",
        "date": "2024-02-22"
    },
    {
        "id": "5d3qZ4xZv0inQK292Mmnhh",
        "track": "Carbonated",
        "artist": "Mount Kimbie",
        "date": "2024-02-23"
    },
    {
        "id": "5hTpBe8h35rJ67eAWHQsJx",
        "track": "Caroline",
        "artist": "Amin\u00e9",
        "date": "2024-02-24"
    },
    {
        "id": "5hTpBe8h35rJ67eAWHQsJx",
        "track": "Caroline",
        "artist": "Amin\u00e9",
        "date": "2024-02-25"
    },
    {
        "id": "5hTpBe8h35rJ67eAWHQsJx",
        "track": "Caroline",
        "artist": "Amin\u00e9",
        "date": "2024-02-26"
    },
    {
        "id": "3LHg768dEKqJKht2uPTlVR",
        "track": "Ghosts",
        "artist": "Laura Marling",
        "date": "2024-02-27"
    },
    {
        "id": "3LHg768dEKqJKht2uPTlVR",
        "track": "Ghosts",
        "artist": "Laura Marling",
        "date": "2024-02-28"
    },
    {
        "id": "3LHg768dEKqJKht2uPTlVR",
        "track": "Ghosts",
        "artist": "Laura Marling",
        "date": "2024-02-29"
    },
    {
        "id": "18mjTyCpqUWuF1HedQZW4s",
        "track": "Requiem: II. Dies irae",
        "artist": "Giuseppe Verdi",
        "date": "2024-03-01"
    },
    {
        "id": "2bvFZtQc3JbD5ZSA6cwvjq",
        "track": "Gal a Bubble - Raw",
        "artist": "Konshens",
        "date": "2024-03-02"
    },
    {
        "id": "2KTDXomHe7JQymlzXf7KdM",
        "track": "Feed Me Diamonds - RAC Mix",
        "artist": "MNDR",
        "date": "2024-03-03"
    },
    {
        "id": "2awKQgW88iq9jFM54VaCAp",
        "track": "El Sol No Regresa",
        "artist": "La Quinta Estacion",
        "date": "2024-03-04"
    },
    {
        "id": "67atrbdFSd7rhWH6yMj6rH",
        "track": "Let Me In",
        "artist": "Tarrus Riley",
        "date": "2024-03-05"
    },
    {
        "id": "2UEer5v08SeaipCQuO4QNb",
        "track": "Piano Sonata No. 20 In A Major, D.959: 4. Rondo (Allegretto)",
        "artist": "Franz Schubert",
        "date": "2024-03-06"
    },
    {
        "id": "3V3r5GlxyDjubv9TiZuw1s",
        "track": "Split Feelin's - Remastered 1999/Rudy Van Gelder Edition",
        "artist": "Hank Mobley",
        "date": "2024-03-07"
    },
    {
        "id": "7EWKAYWmUc1cTfEimTKvou",
        "track": "H\u00e1blame de Ti",
        "artist": "Pecos",
        "date": "2024-03-08"
    },
    {
        "id": "7MAnaswAFhCkeE7fkL1C3g",
        "track": "Ricercar No. 1 in G: Ricercar No. 1 in G",
        "artist": "Domenico Gabrielli",
        "date": "2024-03-09"
    },
    {
        "id": "3Ctlrt6kzdlo7nuh0oVR7m",
        "track": "Holding On",
        "artist": "Disclosure",
        "date": "2024-03-10"
    },
    {
        "id": "7bp5DfkdK1OAvNJ1U4HfDA",
        "track": "Shadowboxin'",
        "artist": "GZA",
        "date": "2024-03-11"
    },
    {
        "id": "6WmwvYaVSod4whIXGWEvBR",
        "track": "Every Morning",
        "artist": "Keb' Mo'",
        "date": "2024-03-12"
    },
    {
        "id": "10W125nMbncRGcXRBoACOx",
        "track": "Come On In My Kitchen",
        "artist": "Robert Johnson",
        "date": "2024-03-13"
    },
    {
        "id": "6HGzj1FMXVBAi2AtBCbhCQ",
        "track": "Serenade in E Major for Strings, Op. 22: II. Menuetto",
        "artist": "Anton\u00edn Dvo\u0159\u00e1k",
        "date": "2024-03-14"
    },
    {
        "id": "7HSs4srn1qnZhh7WRWBVOk",
        "track": "Prokofiev: Romeo and Juliet, Op. 64, Act 1, Scene 2: Dance of the Knights",
        "artist": "Sergei Prokofiev",
        "date": "2024-03-15"
    },
    {
        "id": "56aazenLnCcpAzCEgsCyYV",
        "track": "Look At The Light",
        "artist": "Sin Fang",
        "date": "2024-03-16"
    },
    {
        "id": "45hOVoUyaw7BfwqQMKQNCU",
        "track": "Jesus Christ",
        "artist": "Brand New",
        "date": "2024-03-17"
    },
    {
        "id": "2gUSIsapdX6jEJ0DvjqTt2",
        "track": "Naked As We Came",
        "artist": "Iron & Wine",
        "date": "2024-03-18"
    },
    {
        "id": "5d3qZ4xZv0inQK292Mmnhh",
        "track": "Carbonated",
        "artist": "Mount Kimbie",
        "date": "2024-03-19"
    },
    {
        "id": "7uF4MX9BEA8E7Di2I1kdij",
        "track": "Wild Horses - Live / Remastered 2009",
        "artist": "The Rolling Stones",
        "date": "2024-03-20"
    },
    {
        "id": "45hOVoUyaw7BfwqQMKQNCU",
        "track": "Jesus Christ",
        "artist": "Brand New",
        "date": "2024-03-21"
    },
    {
        "id": "7HSs4srn1qnZhh7WRWBVOk",
        "track": "Prokofiev: Romeo and Juliet, Op. 64, Act 1, Scene 2: Dance of the Knights",
        "artist": "Sergei Prokofiev",
        "date": "2024-03-22"
    },
    {
        "id": "17i5jLpzndlQhbS4SrTd0B",
        "track": "Cello Suite No. 1 in G Major, BWV 1007: I. Pr\u00e9lude",
        "artist": "Johann Sebastian Bach",
        "date": "2024-03-23"
    },
    {
        "id": "3MdYFBIzPf7lSJnI8wi3Ka",
        "track": "Only Love",
        "artist": "Ben Howard",
        "date": "2024-03-24"
    },
    {
        "id": "2NbSzyMiK2oZov8r5Yddcf",
        "track": "Lay Your Cards Out",
        "artist": "POLI\u00c7A",
        "date": "2024-03-25"
    },
    {
        "id": "0lQIZtHlrUcJEpOzTASw8q",
        "track": "Line of Fire",
        "artist": "Junip",
        "date": "2024-03-26"
    },
    {
        "id": "5GXAXm5YOmYT0kL5jHvYBt",
        "track": "I Feel It Coming",
        "artist": "The Weeknd",
        "date": "2024-03-27"
    },
    {
        "id": "0lQIZtHlrUcJEpOzTASw8q",
        "track": "Line of Fire",
        "artist": "Junip",
        "date": "2024-03-28"
    },
    {
        "id": "7z0JcZ8PQoAfUaLIXvbyTH",
        "track": "More Than Words",
        "artist": "Extreme",
        "date": "2024-03-29"
    },
    {
        "id": "5He3kbhG04jAioqHVEytHq",
        "track": "Look at Little Sister",
        "artist": "Stevie Ray Vaughan",
        "date": "2024-03-30"
    },
    {
        "id": "5P6vo51dtkBYWXswH1twvK",
        "track": "Lingus",
        "artist": "Snarky Puppy",
        "date": "2024-03-31"
    },
    {
        "id": "2X5S5NV8Bj4WNTCnur6Ylt",
        "track": "All the Wild Horses",
        "artist": "Ray LaMontagne",
        "date": "2024-04-01"
    },
    {
        "id": "5xjG7nV5ncQAHkuifsz4v3",
        "track": "Hell Hound On My Trail",
        "artist": "Robert Johnson",
        "date": "2024-04-02"
    },
    {
        "id": "7a8WbNqb0ksf9ibrWlmb4M",
        "track": "Rollin' Stone",
        "artist": "Muddy Waters",
        "date": "2024-04-03"
    },
    {
        "id": "6qOEjO2IUD7PjtpsXawq0d",
        "track": "Girl On Fire",
        "artist": "Alicia Keys",
        "date": "2024-04-04"
    },
    {
        "id": "6HHhzDzw2YlOs7FppLaUD9",
        "track": "Juke - Single Version",
        "artist": "Little Walter",
        "date": "2024-04-05"
    },
    {
        "id": "1OacCHsUQIAuUtlqv4I0c2",
        "track": "Tzigane, M. 76 (Version for Violin & Orchestra)",
        "artist": "Maurice Ravel",
        "date": "2024-04-06"
    },
    {
        "id": "5hTpBe8h35rJ67eAWHQsJx",
        "track": "Caroline",
        "artist": "Amin\u00e9",
        "date": "2024-04-07"
    },
    {
        "id": "5d3qZ4xZv0inQK292Mmnhh",
        "track": "Carbonated",
        "artist": "Mount Kimbie",
        "date": "2024-04-08"
    },
    {
        "id": "3LHg768dEKqJKht2uPTlVR",
        "track": "Ghosts",
        "artist": "Laura Marling",
        "date": "2024-04-09"
    },
    {
        "id": "2hKdd3qO7cWr2Jo0Bcs0MA",
        "track": "Drops of Jupiter (Tell Me)",
        "artist": "Train",
        "date": "2024-04-10"
    },
    {
        "id": "4ryCsPW9l4Am2aKYiJuZnJ",
        "track": "Back Door Man",
        "artist": "Howlin' Wolf",
        "date": "2024-04-11"
    },
    {
        "id": "6mo6D7Jh6guYnbcq7wZVlg",
        "track": "Pictures at an Exhibition (Orch. Ravel): Promenade 1 - Live",
        "artist": "Modest Mussorgsky",
        "date": "2024-04-12"
    },
    {
        "id": "6kHWGVOuGXaIJRB4lX7OZ8",
        "track": "Don't Owe You a Thang",
        "artist": "Gary Clark Jr.",
        "date": "2024-04-13"
    },
    {
        "id": "2RTAaSdjuoaJflDn3YKlls",
        "track": "For Emma",
        "artist": "Bon Iver",
        "date": "2024-04-14"
    },
    {
        "id": "3eZaA3p7lMJjOD3BnKsj1U",
        "track": "Voodoo Child (Slight Return) - Live",
        "artist": "Stevie Ray Vaughan",
        "date": "2024-04-15"
    },
    {
        "id": "5hTpBe8h35rJ67eAWHQsJx",
        "track": "Caroline",
        "artist": "Amin\u00e9",
        "date": "2024-04-16"
    },
    {
        "id": "68oxELAW6URbwJCKmBiNDa",
        "track": "The Ecstasy of Gold - L'Estasi Dell'oro",
        "artist": "Ennio Morricone",
        "date": "2024-04-17"
    },
    {
        "id": "0HLWvLKQWpFdPhgk6ym58n",
        "track": "Who Says",
        "artist": "John Mayer",
        "date": "2024-04-18"
    },
    {
        "id": "7fXyuQqEBwpKtCa8PomO7B",
        "track": "Skinny Love",
        "artist": "Bon Iver",
        "date": "2024-04-19"
    }
];

db.like.insertMany(likesDB); // Insert the data into the likes collection
const count = db.like.count(); // Count the number of documents inserted
print('Inserted', count, 'like');

db.counters.remove({ _id: 'like' }); // Remove existing counters for likes
db.counters.insert({ _id: 'like', current: count }); // Create a new counter

// Create indexes to improve query performance
db.like.createIndex({ date: 1 }); // Create an index on the date field
db.like.createIndex({ track: 1, artist: 1, date: 1 }, { unique: true }); // Create a compound index

