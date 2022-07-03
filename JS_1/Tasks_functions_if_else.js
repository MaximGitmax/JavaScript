// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

console.log("--- task 1 ---");

const checkAge = function(age_1){
    age_2 = 18;
    age_3 = 60;
    if (age_1 < age_2){
        console.log(`You don't have access cause your age is ${age_1} It's less then required`);
    } else if (age_1 >= age_2 && age_1 < age_3) {
        console.log("Welcome  !");
    } else if (age_1 > age_3){
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
};
checkAge(17);
checkAge(18);
checkAge(61);


// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

console.log("--- task 2 ---");

const checkAge2 = function(age_1){
    if (!isNaN(age_1)){
    age_2 = 18;
    age_3 = 60;
    if (age_1 < age_2){
        console.log(`You don't have access cause your age is ${age_1} It's less then required`);
    } else if (age_1 >= age_2 && age_1 < age_3) {
        console.log("Welcome  !");
    } else if (age_1 > age_3){
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
} else console.log("Error")
};
checkAge2('aaa');
checkAge2(25);

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

console.log("--- task 3 ---");

const checkAge3 = function(age_1){
    if (age_1 === 0){                                                       
        age_1 = age_1.toString();   //if 0 => "0"                           
    }                                                                       
    if (typeof(age_1) == "string"){
        age_1 = age_1.trim();           //if "    " => ""
    }
    if (!isNaN(age_1) && age_1 ){     //Check on all possible input data in "age_1", as a result only numbers (for example: 25, "25") return "true"
        age_2 = 18;
        age_3 = 60;
        if (age_1 < age_2){
            console.log(`You don't have access cause your age is ${age_1} It's less then required`);
        } else if (age_1 >= age_2 && age_1 < age_3) {
            console.log("Welcome  !");
        } else if (age_1 > age_3){
            console.log("Keep calm and look Culture channel");
        } else {
            console.log("Technical work");
        }
    } else console.log("Error")
};
checkAge3('');
checkAge3('   ');
checkAge3('aaa');
checkAge3('2');
checkAge3(0);
checkAge3(18);
checkAge3(25);
checkAge3(60);
checkAge3(61);

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

    // In folder JS+HTML
