const meqdareJvb =document.getElementById('meqdareJvb')
const jayejvb =document.getElementById('jayejvb')
const counterPlusElem = document.querySelector('.counter-plus');
const counterDisplayElem = document.querySelector('.counter-display');
const mojadad = document.getElementById('mojadad').disabled=true

// const help1 =document.getElementById('help1')
// const help2 =document.getElementById('help2')
// const help3 =document.getElementById('help3')
// const help4 =document.getElementById('help4')
// const help5 =document.getElementById('help5')
const updateInput=()=>{
    const inp = document.getElementById('inp').value
    console.log(inp);}
    // const btn =document.getElementById('btn')
    const randomNumber =Math.floor(Math.random()*(99-10)+10);
    console.log(randomNumber);
    // const helpAnswer1 =Math.floor(Math.random()*(randomNumber/-randomNumber/2)+randomNumber/2);
    // console.log(helpAnswer1);
    // const helpAnswer2 =Math.floor(Math.random()*(randomNumber/-randomNumber/2)+randomNumber/3-2+randomNumber/3);
    // console.log(helpAnswer2);
    // const helpAnswer3 =Math.floor(Math.random()*(randomNumber/2-randomNumber/2)+randomNumber/3+randomNumber/3);
    // console.log(helpAnswer3);
    // const helpAnswer4 =Math.floor(Math.random()*(randomNumber/2-randomNumber/2)+randomNumber/3+3+randomNumber/3);
    // console.log(helpAnswer4);
    // const helpAnswer5 =Math.floor(Math.random()*(randomNumber/2-randomNumber/2)+randomNumber/3+4+randomNumber/3);
    // console.log(helpAnswer5)
    // help1.innerHTML=helpAnswer1
    // help2.innerHTML=helpAnswer2
    // help3.innerHTML=helpAnswer3
    // help4.innerHTML=helpAnswer4
    // help5.innerHTML=helpAnswer5

// const number=[helpAnswer1]
//   const number=[helpAnswer1,helpAnswer2,helpAnswer3,helpAnswer4,helpAnswer5]
//   let text = ""
//   let i = 0
//   for(i = 0; i < number.length; i++) {
//     text += number[i] + " <br>"
//  }
//     meqdareJvb.innerHTML=text

// const h1=()=>{
//      help1.innerHTML=helpAnswer1
// }
// const h2=()=>{
//     help2.innerHTML=helpAnswer2
// }
// const h3=()=>{
//     help3.innerHTML=helpAnswer3
// }
// const h4=()=>{
//     help4.innerHTML=helpAnswer4
// }
// const h5=()=>{
//     help5.innerHTML=helpAnswer5
// }

//     // let myArray = new Array()
//     // myArray.push(helpAnswer3)
//     // meqdareJvb.innerHTML=myArray
//     // console.log(myArray);
let i= 0

const btn =()=>{ 
    if (inp.value === '') {
        return alert('addad vared konid')
    } else if(inp.value < randomNumber){
        jayejvb.innerHTML=('kamtar az adad asli')
    } else if( inp.value> randomNumber){
        jayejvb.innerHTML= ('bishtar az adad asli ')
    }else{
        jayejvb.innerHTML= ('you win')
    } 
    i ++
    console.log(i);
        if(i === 5){
            alert('bakhti')
            const inp= document.getElementById('inp').disabled=true
            const mojadad = document.getElementById('mojadad').disabled=false
        }
}




    // baraye 5 bar click kardan neveshtam.
    


    // let count = 0;
    
    // updateDisplay();
    
    // counterPlusElem.addEventListener("click",()=>{
    //     count++;
    //     updateDisplay();
    // }) ;


  
    // const helpAnswer2 =Math.floor(Math.random()*(randomNumber-randomNumber/2-randomNumber/2)+randomNumber/2+randomNumber/2)
    // akharesh ke yaro bazande shod in o mizaram


    // const inp = document.getElementById('inp').value
    // console.log(inp);


const Try=()=>{
     i=0
     const inp= document.getElementById('inp').disabled=false
     const mojadad = document.getElementById('mojadad').disabled=true
    console.log(i);
}