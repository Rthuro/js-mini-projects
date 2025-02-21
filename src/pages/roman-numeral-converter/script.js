
lucide.createIcons();

const convertNum = document.getElementById('convertNum');
const result = document.getElementById('result');
let errMsg = "", err=false;

function convertToRoman (n, numerals){
    let roman = "";
    numerals.forEach( arr =>{
        while (n >= arr[1]) {
            roman += arr[0];
            n -= arr[1];
          }
    });
    return roman;
}

const romanNumerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

convertNum.addEventListener('input' ,()=>{
    if(convertNum.value == ""){
        errMsg = "Please enter a valid number";
      }else if(convertNum.value < 1){
          errMsg = "Please enter a number greater than or equal to 1";
      }else if ( convertNum.value > 4000){
        errMsg  = "Please enter a number less than or equal to 3999"
      }else{
        errMsg = "";
      }

    if(errMsg){
        result.classList.remove("hidden");
        result.style.color = "red";
        result.innerHTML = errMsg;
    }else{
        result.classList.remove("hidden");
        result.style.color = "black";
        result.innerHTML = convertToRoman(convertNum.value, romanNumerals);
    }
});