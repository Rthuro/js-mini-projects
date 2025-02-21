
lucide.createIcons();
const form = document.querySelector('form');
const displayResult = document.getElementById('result');
const checkText = document.getElementById('checkText');

function cleanText(text){
    const removeSpecialChar  = text.replace(/[_&\/\\#,|+()$~%.'":*?<>{}-]/g,"");
    const toLowerCase = removeSpecialChar.toLowerCase();
    return toLowerCase.split(' ').join('');
}

function checkIfPalindrome(text){
    let reversedText = "";
    const cleanedText = cleanText(text);
    for(let i = text.length; i >= 0; i--){
        reversedText += cleanedText.charAt(i)
    }

    if(reversedText == cleanedText){
        return `Reversed: ${reversedText} <br> ${text} is a palindrome`;
    }else{
        return `Reversed: ${reversedText} <br> ${text} is not a palindrome`;
    }
  
}

checkText.addEventListener('input', ()=>{
    if(checkText.value !== ''){
        displayResult.innerHTML = '';
        displayResult.classList.remove('hidden');
        displayResult.style.color = "black";
        displayResult.innerHTML = checkIfPalindrome(checkText.value);
       
    }else{
        displayResult.classList.remove('hidden');
        displayResult.style.color = "red";
        displayResult.innerHTML = "Please enter a text";
    }
});