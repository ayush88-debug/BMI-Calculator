

const form =document.querySelector("form")

form.addEventListener('submit',function(e){
    e.preventDefault()
    
    const height=Number(document.querySelector("#height").value)
    console.log(height);
    
    const weight=Number(document.querySelector("#weight").value)
    const result =document.querySelector("#result")
    
    form.addEventListener('reset',function(ev){
        result.innerHTML="";
    })

    function checkHeight(h){
        if(height<0 || height=="" || isNaN(height)){
            return true;
        }
    }
    function checkWeight(h){
        if(weight<0 || weight=="" || isNaN(weight)){
            return true;
        }
    }

    if(checkHeight(height) && checkWeight(weight)){
        result.innerHTML="<span>Please Enter valid Inputs</span>"
        result.querySelector("span").style.color='red'
    }
    else if(checkHeight(height)){
        result.innerHTML="<span>Please Enter valid Height</span>"
        result.querySelector("span").style.color='red'
    }
    else if(checkWeight(weight)){
        result.innerHTML="<span>Please Enter valid Weight</span>"
        result.querySelector("span").style.color='red'
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML=`<h3>BMI: ${bmi}</h3>`
        if(bmi<18.5){
            const msg=document.createElement('p')
            msg.appendChild(document.createTextNode("You are Underweight"))
            result.appendChild(msg)
            msg.style.color='red'
        }
        else if(bmi>=18.5 && bmi<=24.9){
            const msg=document.createElement('p')
            msg.appendChild(document.createTextNode("You are Normal"))
            result.appendChild(msg)
            msg.style.color='green'
        }
        else{
            const msg=document.createElement('p')
            msg.appendChild(document.createTextNode("You are Overweight"))
            result.appendChild(msg)
            msg.style.color='red'
        }

    }


})