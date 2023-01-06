function intro2(paramName) {
    let varName = "SuperCoder"
    console.log("Hi, "+ varName + ". Mein Name ist "+paramName+" .")

}

function intro() {
    let a = 1+3
    console.log("hello world");
    console.log("1+ 3 ="+a);
}
function intro3(name, alter, stadt) {
    console.log(`Hallo ich bin ${name}, ich bin ${alter} Jahre alt und komme aus ${stadt}`);
}

function math(number1, number2) {
    console.log(number1 * number2);
    console.log(number1 / number2);
}
math(10,2)
math(30,20)
math(100,100)
math(5,0)
math(45,173)
math(1,1000)
intro3("Lando", 31, "Herford")
intro2("Lando")
intro()