let password = "asdf_"

if (password.length > 4 && (password.includes('_') || password.includes('-') )) {
	console.log('Пароль надежен')
} else {
	console.log('Пароль ненадежен')
}

let name = "иМя"
let surname = "фАмИлИя"


let result = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
let result2 = surname.slice(0, 1).toUpperCase() + surname.slice(1).toLowerCase();

console.log(`${name} ${name === result ? 'не изменено' : `изменено на ${result}`}`);
console.log(`${surname} ${surname === result2 ? 'не изменено' : `изменено на ${result2}`}`);
