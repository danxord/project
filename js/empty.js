"use strict";

function sayHiBye(firstName, lastName) {

    // функция-помощник, которую мы используем ниже
    function getFullName() {
        return firstName + " " + lastName;
    }

    alert("Hello, " + getFullName());
    alert("Bye, " + getFullName());

}


function sayHiBye(firstName, lastName) {
    alert("Hello, " + firstName + " " + lastName);
    alert("Bye, " + firstName + " " + lastName);

}
