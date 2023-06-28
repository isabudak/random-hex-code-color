const buton= document.getElementById('button');
const spanInside=document.getElementById('special');

const hexValue=['0','1','2','3','4','5','6','7','8','9',
                'A','B','C','D','E','F'];

function getRandomHexValue(){
    const randomindex=Math.floor(Math.random() * hexValue.length);
    const randomHexValue= hexValue[randomindex];
    return randomHexValue;
}

function getRandomHexString(stringLength){
    let hexString='';
    for(let i=0; i<stringLength; i++){
        hexString+=getRandomHexValue();
    }
    return hexString;
}

buton.addEventListener('click',function(){
    const randomHexString='#' + getRandomHexString(6);
    // alert(randomHexString);
    document.body.style.setProperty('background-color',randomHexString);
    spanInside.textContent=randomHexString;
});

