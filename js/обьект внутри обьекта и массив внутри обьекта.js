"use strict";

//const answers = [];

//answers[0] = prompt("Как вас зовут?");
//answers[1] = prompt("Сколько вам лет?");
//answers[2] = prompt("Где вы живете?");
//answers[3] = prompt("Хотите переехать в Кэнэду?");

////console.log(answers);


//обьект внутри обьекта и массив внутри обьекта
//и вывод одной строчкой(в двух вариациях старый вариант и новый)
//и двумя строчками(одна сверху другая снизу)
const obj = {
  test1: {
    test2: 'strsds',
    test3: 322,
    test4: 666
  },
  massive: [23, 53, 24]
};

console.log(obj.test1, obj.massive);
//console.log(obj['test1'], ['massive']);
//console.log(obj.massive);
