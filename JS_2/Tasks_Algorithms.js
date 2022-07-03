// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

console.log("--- task 1 ---");

for (i = 1; i <= 10; i++){
    console.log(Math.pow(2, i));
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

console.log("--- task 1* ---");

const exp = function(i){
console.log(Math.pow(2, i));
}
exp(5)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)


console.log("--- task 2 ---");

let smile = ":)";
for (i = 1; i <= 5; i++){
    console.log(smile.repeat(i))
}


// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 


console.log("--- task 2* ---");

function printSmile(string, numberOfRows){
    for (i = 1; i <= numberOfRows; i++){
        console.log(string.repeat(i))
    }
}
printSmile(":)", 3);


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'


console.log("--- task 3 ---");

function getWordStructure(word){
    arrVowels = /[aeiouy]/i;  // regular expression with vowels, case-insensitive
    regexpConsonants = /[bcdfghjklmnpqrstvwxz]/i;  // regular expression with consonants, case-insensitive
    let vowels = 0;
    let consonants = 0;
    for (i = 0; i < word.length; i++){
        if(regexpConsonants.exec(word[i]) != null) {   // compare char in "word" with regular expression of consonants
            consonants++;
        }
        if(arrVowels.exec(word[i]) != null) {   // compare char in "word" with regular expression of consonants
            vowels++;
        }
    }
    console.log(`Слово ${word} состоит из  ${vowels} гласных и ${consonants} согласных букв`)
    }
    getWordStructure("case");
    getWordStructure("Case");
    getWordStructure("Check-list");


// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'


console.log("--- task 4 ---");

function isPalindrom(word){
    opposite = word.split('').reverse().join('').toLowerCase();  //reversed string in lower case
if (word.toLowerCase() === opposite){
    console.log("Polindrom!");
} else{
    console.log("not Polindrom!");
    }
}
isPalindrom("abba");
isPalindrom("Abba");
isPalindrom("Hello");