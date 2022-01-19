
const cityNames = ['florida', 'jersey', 'tampa'];
let computerCityName = _.sample(cityNames);
let restCityNames = cityNames.filter((cityName) => computerCityName !== cityName);

const exceptLetters = [''];
const getLastLetter = (cityName) => {
    const LastLetter = _.last(cityName);
    if (exceptLetters.includes(LastLetter)) {
        return cityName[cityName.length -2];
    }
    return LastLetter;
}

while (true) {
    const userCityName = prompt(`Robot take a ${computerCityName}: your turn!`);

if (userCityName[0].toLowerCase() !== getLastLetter(computerCityName)) {
    alert('Your city is wrong!');
    break;
}

if (!restCityNames.includes(userCityName.toLowerCase())) {
alert('This city does not exist!');
break;
}
restCityNames = restCityNames.filter((cityName) => userCityName !== cityName);
computerCityName = restCityNames.find((cityName) => cityName[0] === getLastLetter(userCityName));
if (!computerCityName) {
    alert('Robot is annigilate');
    break;
}
restCityNames = restCityNames.filter((cityName) => computerCityName !== cityName);
}