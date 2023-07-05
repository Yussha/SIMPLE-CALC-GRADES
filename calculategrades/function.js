const calcBtn = document.querySelector('.calc-btn');
const resetBtn = document.querySelector('.reset-btn');

 const inputElement1 = document.querySelector('.eng');
 const inputElement2 = document.querySelector('.math');
 const inputElement3 = document.querySelector('.fil');
 const inputElement4 = document.querySelector('.mapeh');
 document.querySelector('.greet-container').style.display = 'none'; 

function calculate(){
    const sub1 = Number(inputElement1.value);
    const sub2 = Number(inputElement2.value);
    const sub3 = Number(inputElement3.value);
    const sub4 = Number(inputElement4.value);
  
     let avg = (sub1 + sub2 + sub3 + sub4) / 4;
     avg = Number(avg.toFixed(2));

     let descriptors ='';
     let remarks = '';

      
     if(inputElement1.value === '' && inputElement2.value === '' && inputElement3.value === '' && inputElement4.value === ''){
          document.querySelector('.validation').innerHTML = 'Please Enter a Number!';

          document.querySelector('.average').style.display = 'block';
          document.querySelector('.descriptors').style.display = 'block';
          document.querySelector('.remarks').style.display = 'block';
     }
     else if(inputElement1.value === ''){
          document.querySelector('.validation').innerHTML = 'Please Enter a Number in English subject';
     }
     else if(inputElement2.value === ''){
          document.querySelector('.validation').innerHTML = 'Please Enter a Number in Math subject';
     }
     else if(inputElement3.value === ''){
          document.querySelector('.validation').innerHTML = 'Please Enter a Number in Filipino subject';
     }
     else if(inputElement4.value === ''){
          document.querySelector('.validation').innerHTML = 'Please Enter a Number in MAPEH subject';
     }
     else if(isNaN(inputElement1.value) || isNaN(inputElement2.value) || isNaN(inputElement3.value || isNaN(inputElement4.value))){
          document.querySelector('.validation').innerHTML = 'Please Enter a Number Only!';

          document.querySelector('.average').style.display = 'block';
          document.querySelector('.descriptors').style.display = 'block';
          document.querySelector('.remarks').style.display = 'block';
     }
     else{
          if(avg >= 90 && avg <= 100){
               descriptors = 'Outstanding';
               remarks = 'Passed';
               document.querySelector('.greet').innerHTML = `Congrats Student, you got a high grade of ${avg}. Keep it up!`
          }

          else if(avg >= 80 && avg <= 89){
               descriptors = 'Very Satisfactory';
               remarks = 'Passed'
               document.querySelector('.greet').innerHTML = `Congrats Student you got an avegrage of ${avg}. Keep it up!`
          }
          else if(avg >= 75 && avg <= 79){
               descriptors = 'Satisfactory';
               remarks = 'Passed'
               document.querySelector('.greet').innerHTML = `Congrats Student you got an avegrage of ${avg}. Keep it up!`
          }
          else if(avg >= 61 && avg <= 74){
               descriptors = 'Fairly Satisfactory';
               remarks = 'Failed'
               document.querySelector('.greet').innerHTML = `Student you got an avegrage of ${avg} you failed. But still keep it up! don't lose hope and  do better next time good luck.`
          }
          else if(avg <= 60){
               descriptors = 'Did not meet expectations';
               remarks = 'Failed';
               document.querySelector('.greet').innerHTML = `Student you got an avegrage of ${avg} you failed. But still keep it up! Everyone fails at some point. Plenty of other people in our class are in the same position as you, and I know that you will all get through it.`
          }
          
          document.querySelector('.average').innerHTML = `Average: ${avg}`;
          document.querySelector('.descriptors').innerHTML = `${descriptors}`;
          document.querySelector('.remarks').innerHTML = `Remarks: ${remarks}`;
          document.querySelector('.greet-container').style.display = 'grid'; 
       }
       
     }
  
function reset(){
    document.querySelector('.eng').value = '';
    document.querySelector('.math').value = '';
    document.querySelector('.fil').value = '';
    document.querySelector('.mapeh').value = '';

    document.querySelector('.average').innerHTML = '';
    document.querySelector('.descriptors').innerHTML = '';
    document.querySelector('.remarks').innerHTML = '';
    document.querySelector('.validation').innerHTML = '';
    document.querySelector('.greet-container').style.display = 'none';
    
}
calcBtn.addEventListener("click", () => calculate());
resetBtn.addEventListener("click", ()  => reset());




