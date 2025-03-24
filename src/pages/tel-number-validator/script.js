
lucide.createIcons();

const countryCode = '^(1\\s?)?';
const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
const spacesDashes = '[\\s\\-]?';
const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
const phoneRegex = new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);
const userInput = document.getElementById('checkNum');
const result = document.getElementById('result');

userInput.addEventListener('input', ()=>{
  let res = phoneRegex.test(userInput.value);
  result.innerHTML = '';
  if(res){
    result.classList.remove('hidden');
    result.style.color = 'black';
    result.innerHTML = `${userInput.value} is a valid US phone number.`;
  }else{
    result.classList.remove('hidden');
    result.style.color = 'red';
    result.innerHTML = `${userInput.value} is not a valid US phone number.`;
  }
});
