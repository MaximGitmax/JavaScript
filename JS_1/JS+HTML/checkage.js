// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке


    age_1 = prompt("How old are you?");
    
    if (age_1 === 0){
        age_1 = age_1.toString();   //if 0 => "0"
    }
    if (typeof(age_1) == "string"){
        age_1 = age_1.trim();           //if "    " => ""
    }
    if (!isNaN(age_1) && age_1 ){
        age_2 = 18;
        age_3 = 60;
        if (age_1 < age_2){
            document.getElementById("h2").innerHTML = `You don't have access cause your age is ${age_1} It's less then required`;
        } else if (age_1 >= age_2 && age_1 < age_3) {
            document.getElementById("h2").innerHTML = `Welcome  !`;
        } else if (age_1 >= age_3){
            document.getElementById("h2").innerHTML = `Keep calm and look Culture channel`;
        } 
    } else {
        document.getElementById("h2").innerHTML = `Error`;
    }