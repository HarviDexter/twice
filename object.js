const myCity = {
  city: "New York",
};

myCity.popular = true;

console.log(myCity);

myCity.country = "USA";

console.log(myCity);

myCity["Kz"] = "Semey";

console.log(myCity);

const semeyUlica = "Ulica";

myCity[semeyUlica] = "2-Naberejnii";

console.log(myCity);

// Использование переменных //

const atim = "Ruslan";
const age = 23;

const userProfile = {
  name: atim,
  age: age,
  gorod: "Semey",
};
console.log(userProfile);
// Сокращенный формат записи свойств //

const userProfilee = {
  atim,
  age,
  gorod: "Semey",
};
console.log(userProfilee);
