const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "~!@#$%^&*()_+/";

const totalChar = document.getElementById("totalChar");
const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const button = document.querySelector(".btn")
const box1 = document.querySelector("#box1")



const getRandomData=(dataSet)=>{
    return dataSet[Math.floor(Math.random()*dataSet.length)]
}

const getPassword=(password="")=>{
    
    if(upperCase.checked){
        password+=getRandomData(upperSet)
    }
    if(lowerCase.checked){
        password+=getRandomData(lowerSet)
    }
    if(numbers.checked){
        password+=getRandomData(number)
    }
    if(symbols.checked){
        password+=getRandomData(symbol)
    }
    if(password.length<totalChar.value){
        return getPassword(password)
    }
    box1.value=(truncateString(password,totalChar.value))
    
}


button.addEventListener("click", function(){
    getPassword()
})
function truncateString(str, maxLength) {
    if (str. length>maxLength) {
    return str. substring(0, maxLength) ;
    } else {
    return str;
    }
    }




