document.addEventListener ('DOMContentLoaded', () => {
    const user = {
        birthyear: prompt ('Рік твого народження?'),
        city: prompt('В якому місті ти живеш?'),
        faviriteSport: prompt('Який твій улюблений вид спорту?')
    };
    console.log (user);
    // age block
    Number(user.birthyear);
    const today = new Date();
    const todayYear = today.getFullYear();
    let age = todayYear - user.birthyear; 
    let ageResult;
    if (user.birthyear > todayYear) {
        ageResult = `Ти не вірно зазначив(ла) рік народження. Або ти з майбутнього!=)`
    } else if (user.birthyear) {
        ageResult = `Привіт! Тобі ${age} років.`     
    } else {
        ageResult = `Шкода, що ти не захотів(ла) ввести свій рік народження.`
    };

    // city block
    const cityCapital = {
        capitalUkraine: 'України',
        capitalUSA: 'США',
        capitalGB: 'Великобританії'
    }
    let finishResultUserCity;
    if (user.city === 'Київ') {
        finishResultUserCity = `Ти живеш у столиці України!`
    } else if (user.city === 'Лондон') {
        finishResultUserCity = `Ти живеш у столиці Великобританії!`
    } else if (user.city === 'Вашингтон') {
        finishResultUserCity = `Ти живеш у столиці США!`
    } else if (user.city) {
        finishResultUserCity = `Ти живеш у місті ${user.city}`
    } else {
        finishResultUserCity = `Шкода, що ви не зазначили місто в якому живете.`
    };  
 
    // sport block
    const sportTopPlayer = {
        box: 'Олександр Усік',
        football: 'Карім Бензема',
        chess: 'Свен Магнус Еєн Карлсен'
    };

    let finishResultSport;
    if (user.faviriteSport === 'бокс') {
        finishResultSport = `Круто! Хочеш стати як ${sportTopPlayer.box}`
    } else if (user.faviriteSport === 'футбол') {
        finishResultSport = `Круто! Хочеш стати як ${sportTopPlayer.football}`
    } else if (user.faviriteSport === 'шахи') {
        finishResultSport = `Круто! Хочеш стати як ${sportTopPlayer.chess}`
    } else if (user.faviriteSport) {
        finishResultSport = `Твій улюблений вид спорту ${user.faviriteSport}`
    } else {
        finishResultSport = `Шкода, що ви не зазначили улюблений вид спорту.`
    };

    alert (`
    ${ageResult} \n 
    ${finishResultUserCity} \n
    ${finishResultSport}
    `);
}
)

// Can you help me to fined a mistake in next code? 
/*  // city block
    const cityKyiv = 'Київ';
    const cityWashington = 'Вашингтон';
    const cityLondon = 'Лондон';
    const capitalUkraine = 'України';
    const capitalUSA = 'США';
    const capitalGB = 'Великобританії';
    let country;

    if (user.city === cityKyiv || cityWashington || cityLondon) {
        if (user.city === cityKyiv) {country = capitalUkraine}
        if (user.city === cityWashington) {country = capitalUSA}
        if (user.city === cityLondon) {country = capitalGB}
    }

    let ResultUserCityCapital = `Ти живеш у столиці ${country}`;
    let ResultUserCityOther = `Ти живеш у місті ${user.city}`;
    const ResultUserCityNonInfo = `Шкода, що Ви не захотіли ввести місто в якому живете.`;
    let finishResultUserCity;

    if (user.city === cityKyiv || cityWashington || cityLondon) {
        finishResultUserCity = ResultUserCityCapital
    } else if (user.city) {
        finishResultUserCity = ResultUserCityOther
    } else {
        finishResultUserCity = ResultUserCityNonInfo
    };
    console.log (finishResultUserCity);   
*/
