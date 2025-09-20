export interface State {
  id: string
  name: string
  politicalDistricts: {
      id: string
      name: string
    }[]
}

export const STATES: State[] = [
  {
    id: '1', name: 'Burgenland', politicalDistricts: [
      {id: '01', name: 'Eisenstadt (Stadt)'},
      {id: '02', name: 'Rust (Stadt)'},
      {id: '03', name: 'Eisenstadt Umgebung'},
      {id: '04', name: 'Güssing'},
      {id: '05', name: 'Jennersdorf'},
      {id: '06', name: 'Mattersburg'},
      {id: '07', name: 'Neusiedl am See'},
      {id: '08', name: 'Oberpullendorf'},
      {id: '09', name: 'Oberwart'},
    ]
  },
  {
    id: '2', name: 'Kärnten', politicalDistricts: [
      {id: '01', name: 'Klagenfurt (Stadt)'},
      {id: '02', name: 'Villach (Stadt)'},
      {id: '03', name: 'Hermagor'},
      {id: '04', name: 'Klagenfurt (Land)'},
      {id: '05', name: 'Sankt Veit an der Glan'},
      {id: '06', name: 'Spittal an der Drau'},
      {id: '07', name: 'Villach (Land)'},
      {id: '08', name: 'Völkermark'},
      {id: '09', name: 'Wolfsberg'},
      {id: '10', name: 'Feldkirchen'},
    ]
  },
  {
    id: '3', name: 'Niederösterreich', politicalDistricts: [
      {id: '01', name: 'Krems an der Donau (Stadt)'},
      {id: '02', name: 'Sankt Pölten (Stadt)'},
      {id: '03', name: 'Waidhofen an der Ybbs (Stadt)'},
      {id: '04', name: 'Wiener Neustadt (Stadt)'},
      {id: '05', name: 'Amstetten'},
      {id: '06', name: 'Baden'},
      {id: '07', name: 'Bruck an der Leitha'},
      {id: '08', name: 'Gänserndorf'},
      {id: '09', name: 'Gmünd'},
      {id: '10', name: 'Hollabrunn'},
      {id: '11', name: 'Horn'},
      {id: '12', name: 'Korneuburg'},
      {id: '13', name: 'Krems (Land)'},
      {id: '14', name: 'Lilienfeld'},
      {id: '15', name: 'Melk'},
      {id: '16', name: 'Mistelbach'},
      {id: '17', name: 'Mödling'},
      {id: '18', name: 'Neunkirchen'},
      {id: '19', name: 'Sankt Pölten (Land)'},
      {id: '20', name: 'Scheibbs'},
      {id: '21', name: 'Tulln'},
      {id: '22', name: 'Waidhofen an der Thaya'},
      {id: '23', name: 'Wiener Neustadt (Land)'},
      {id: '25', name: 'Zwettl'}
    ]
  },
  {
    id: '4', name: 'Oberösterreich', politicalDistricts: [
      {id: '01', name: 'Linz (Stadt)'},
      {id: '02', name: 'Steyr (Stadt)'},
      {id: '03', name: 'Wels (Stadt)'},
      {id: '04', name: 'Braunau'},
      {id: '05', name: 'Eferding'},
      {id: '06', name: 'Freistadt'},
      {id: '07', name: 'Gmunden'},
      {id: '08', name: 'Grieskirchen'},
      {id: '09', name: 'Kirchdorf'},
      {id: '10', name: 'Linz (Land)'},
      {id: '11', name: 'Perg'},
      {id: '12', name: 'Ried'},
      {id: '13', name: 'Rohrbach'},
      {id: '14', name: 'Schärding'},
      {id: '15', name: 'Steyr (Land)'},
      {id: '16', name: 'Uhrfahr (Umgebung)'},
      {id: '17', name: 'Vöcklabruck'},
      {id: '18', name: 'Wels (Land)'}
    ]
  },
  {
    id: '5', name: 'Salzburg', politicalDistricts: [
      {id: '01', name: 'Salzburg (Stadt)'},
      {id: '02', name: 'Hallein'},
      {id: '03', name: 'Salzburg (Umgebung)'},
      {id: '04', name: 'Sankt Johann im Pongau'},
      {id: '05', name: 'Tamsweg'},
      {id: '06', name: 'Zell am See'}
    ]
  },
  {
    id: '6', name: 'Steiermark', politicalDistricts: [
      {id: '01', name: 'Graz (Stadt)'},
      {id: '03', name: 'Deutschlandsberg'},
      {id: '06', name: 'Graz (Umgebung)'},
      {id: '10', name: 'Leibniz'},
      {id: '11', name: 'Leoben'},
      {id: '12', name: 'Liezen'},
      {id: '14', name: 'Murau'},
      {id: '16', name: 'Voitsberg'},
      {id: '17', name: 'Weiz'},
      {id: '20', name: 'Murtal'},
      {id: '21', name: 'Bruck-Mürzzuschlag'},
      {id: '22', name: 'Hartberg-Fürstenfeld'},
      {id: '23', name: 'Südoststerermark'}
    ]
  },
  {
    id: '7', name: 'Tirol', politicalDistricts: [
      {id: '01', name: 'Innsbruck (Stadt)'},
      {id: '02', name: 'Imst'},
      {id: '03', name: 'Innsbruck (Land)'},
      {id: '04', name: 'Kitzbühel'},
      {id: '05', name: 'Kufstein'},
      {id: '06', name: 'Landeck'},
      {id: '07', name: 'Lienz'},
      {id: '08', name: 'Reutte'},
      {id: '09', name: 'Schwaz'}
    ]
  },
  {
    id: '8', name: 'Vorarlberg', politicalDistricts: [
      {id: '01', name: 'Bludenz'},
      {id: '02', name: 'Bregenz'},
      {id: '03', name: 'Dornbirn'},
      {id: '04', name: 'FeldKirch'}
    ]
  },
  {
    id: '9', name: 'Wien', politicalDistricts: [
      {id: '01', name: 'Innere Stadt'},
      {id: '02', name: 'Leopoldstadt'},
      {id: '03', name: 'Landstraße'},
      {id: '04', name: 'Wieden'},
      {id: '05', name: 'Margareten'},
      {id: '06', name: 'Mariahilf'},
      {id: '07', name: 'Neubau'},
      {id: '08', name: 'Josefstadt'},
      {id: '09', name: 'Alsergrund'},
      {id: '10', name: 'Favoriten'},
      {id: '11', name: 'Simmering'},
      {id: '12', name: 'Meidling'},
      {id: '13', name: 'Hiezing'},
      {id: '14', name: 'Pennzing'},
      {id: '15', name: 'Rudolfsheim-Fünfhaus'},
      {id: '16', name: 'Ottakring'},
      {id: '17', name: 'Hernals'},
      {id: '18', name: 'Währing'},
      {id: '19', name: 'Döbling'},
      {id: '20', name: 'Brigittenau'},
      {id: '21', name: 'Floridsdorf'},
      {id: '22', name: 'Donaustadt'},
      {id: '23', name: 'Liesing'}
    ]
  },
]
