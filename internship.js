//1
var people = [
	{
		name: 'алексей',
		age: 35
	},
	{
		name: 'максат',
		age: 18
	},
	{
		name: 'Айгуль ',
		age: 15
	},
	{
		name: 'Жайна ',
		age: 20
	},
	{
		name: ' алишер',
		age: 17
	}
];

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

for(let i = 0; i < people.length; i++){
    people[i].name = people[i].name.trim();
    people[i].name = capitalizeFirstLetter(people[i].name);
    if(people[i].age < 18){
        people.splice(i, 1);
    }
}

console.log(people);

//2
function sumOfAngles(n){
    return n <= 2 ? null : (n - 2) * 180;
}

let answer = sumOfAngles(4);
console.log(answer);

//3
var person = {
    name: 'Margo', 
    age: 25
}

var arr = [];

for (let i = 0; i < 5; i++){
    arr[i] = Object.assign({}, person);
    if(i === 0){
        arr[i].name = 'John';
    }
}
console.log(arr);