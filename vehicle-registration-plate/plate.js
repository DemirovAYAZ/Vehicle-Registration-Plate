let regions = {
    '01': 'Abşeron',
    '26': 'Xankəndi',
    '50': 'Sumqayıt',
    '02': 'Ağdam',
    '27': 'Xaçmaz',
    '51': 'Samux',
    '03': 'Ağdaş',
    '28': 'Xocavənd',
    '52': 'Salyan',
    '04': 'Ağcabədi',
    '29': 'Xızı',
    '53': 'Siyəzən',
    '05': 'Ağstafa',
    '30': 'İmişli',
    '54': 'Sabirabad',
    '06': 'Ağsu',
    '31': 'İsmayıllı',
    '55': 'Şəki',
    '07': 'Astara',
    '32': 'Kəlbəcər',
    '56': 'Şamaxı',
    '08': 'Balakən',
    '33': 'Kürdəmir',
    '57': 'Şəmkir',
    '09': 'Bərdə',
    '34': 'Qax',
    '58': 'Şuşa',
    '10': 'Bakı',
    '90': 'Bakı',
    '77': 'Bakı',
    '35': 'Qazax',
    '59': 'Tərtər',
    '11': 'Beyləqan',
    '36': 'Qəbələ',
    '60': 'Tovuz',
    '12': 'Biləsuvar',
    '37': 'Qobustan',
    '61': 'Ucar',
    '14': 'Cəbrayıl',
    '38': 'Qusar',
    '62': 'Zaqatala',
    '15': 'Cəlilabad',
    '39': 'Qubadlı',
    '63': 'Zərdab',
    '16': 'Daşkəsən',
    '40': 'Quba',
    '64': 'Zəngilan',
    '17': 'Dəvəçi',
    '41': 'Laçın',
    '65': 'Yardımlı',
    '18': 'Şirvan',
    '42': 'Lənkəran',
    '66': 'Yevlax',
    '19': 'Füzuli',
    '43': 'Lerik',
    '67': 'Babək',
    '20': 'Gəncə',
    '44': 'Masallı',
    '68': 'Şərur',
    '21': 'Gədəbəy',
    '45': 'Mingəçevir',
    '69': 'Ordubad',
    '22': 'Goranboy',
    '46': 'Naftalan',
    '70': 'Naxçıvan',
    '23': 'Göyçay',
    '47': 'Neftçala',
    '71': 'Şahbuz',
    '24': 'Hacıqabul',
    '48': 'Oğuz',
    '72': 'Culfa',
    '25': 'Xanlar',
    '49': 'Saatlı',
    '85': 'Naxçıvan'
  };

let letters = 'ABCDEFGHJKLMNOPRSTUVXYZ'

function generateRandomNumber(){
    const randomNumber = Math.floor(Math.random() * 999) + 1;
    const formattedNumber = randomNumber.toString().padStart(3, '0');
    document.getElementById("number").innerHTML = formattedNumber;
};

function getRandomLetters(){
    let series = ''
    for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        series += letters[randomIndex];
    }
    document.getElementById("serie").innerHTML = series;
};

function getRandomRegion(){
    const keys = Object.keys(regions)
    const randomIndexOfRegion = Math.floor(Math.random() * keys.length)
    document.getElementById("region").innerHTML = keys[randomIndexOfRegion]
    document.getElementById("region-name").innerHTML = regions[keys[randomIndexOfRegion]].toString()
}

function  createRandomPlate(){
    generateRandomNumber();
    getRandomLetters();
    getRandomRegion();
}
  


  


  
  