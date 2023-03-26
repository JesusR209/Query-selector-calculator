



function calculate() {
    let numberone = parseInt(document.querySelector('#number-one').value);
    let numbertwo = parseInt(document.querySelector('#number-two').value);
    const operator = document.getElementById('operators').value;

    if(operator === '+') 
    {
        document.getElementById('result').value = numberone + numbertwo;
    }
    if(operator === '-') 
    {
        document.getElementById('result').value = numberone - numbertwo;
    }
    if(operator === '*') 
    {
        document.getElementById('result').value = numberone * numbertwo;
    }
    if(operator === '/')
    {
        document.getElementById('result').value = numberone / numbertwo;
    } 
}