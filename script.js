let name = "Alex"
let money = 10000
let password = 7777

let whatName = prompt(' Как вас зовут ? ')
    if (whatName === name) {
        let pin = +prompt("Номер счёта ?")
            if (pin === password){
                let howObnal = +prompt("Сколько обналичить ?")
                if (money >= howObnal){
                    let result = money - howObnal
                        let conf = confirm("Точно   " + howObnal)
                            if (conf === true){
                                alert("Все отлично! Вы можете обналичить сумму " + howObnal + " рублей.");
                                alert("У вас осталось" + ' ' + (money - howObnal))
                                alert("Процедура прошла успешно !")
                            } else {
                                let howObnal = +prompt("Сколько обналичить ?")
                                let result = money - howObnal
                                alert("Все отлично! Вы можете обналичить сумму " + howObnal + " рублей.");
                                +alert("У вас осталось" + ' ' + (money - howObnal))
                            }       
                    } else {
                alert("Недостаточно средств на счете")
                        ("Процедура не прошла успешно !");

            }
        } else {
        alert("Неправильный номер счета.");
    }
} else {
    alert("Пользователь не найден.");
}