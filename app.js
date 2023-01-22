// // Eventy
// handleClick=(target)=>{

// if(target.value === 'test2'){
//     console.dir('drugi przycisk'); 
// }else{console.dir('pierwszy przycisk')}
      
// }
// //zaokrągl
// let val = Math.round(1.8)
// //zaokr w górę
// val = Math.ceil(1.2);
// // zaokrągl w dół
// val = Math.floor(1.99);
// //wart min
// val=Math.min(1,2);
// //wart max
// val=Math.max(1,2);
// // losowa
// val=Math.random()
// // losowa do 20 i całkowita
// val=Math.ceil(Math.random()*20);
let palette =['red','green','black','pink','orange','grey','blue','yellow'];
let result = 0;
const startRandom=(target)=>
{
let val1 = Math.floor(Math.random()*8)
let val2 = Math.floor(Math.random()*8)

document.querySelector('#nazwa-koloru').innerText=palette[val1];

document.querySelector('#nazwa-koloru').style.color=palette[val2];

document.querySelector('#start-text').innerText=' ';


}
const startClick=(target)=>{
    setTimeout(()=>{
        document.querySelector('#start-text').innerText=`Koniec gry! Twój wynik to ${result}`;
        document.querySelector('#but1').style.display='none';
        document.querySelector('#but2').style.display='none';
        document.querySelector('#but3').style.display='none';
        document.querySelector('#summary').innerText=' ';
        document.querySelector('#nazwa-koloru').innerText=' ';
        document.querySelector('#but4').style.display='inline-block';
    },30000)
    document.querySelector('#but2').style.display='inline-block';
    document.querySelector('#but3').style.display='inline-block';
        document.querySelector('#summary').innerText=0;
        document.querySelector('#start-text').innerText='Rozpoczynamy grę!';
    }


const yesNoClick=(target)=>{
    if(
        document.querySelector('#nazwa-koloru').innerText
        ===   
        document.querySelector('#nazwa-koloru').style.color
&& target.value === 'yes'
    )
    {
    result++
} else if (
    document.querySelector('#nazwa-koloru').innerText
    !==   
    document.querySelector('#nazwa-koloru').style.color
&& target.value === 'no'
) {
    result++
}

else {
    result--
        // document.querySelector('#but2').style.display='none';
        // document.querySelector('#but3').style.display='none';
        // document.querySelector('#summary').innerText=' ';
        // document.querySelector('#nazwa-koloru').innerText=' ';
    }
    document.querySelector('#summary').innerText=result;
    document.querySelector('#start-text').innerText=' ';
}
const returnClick=(target)=>{
    document.querySelector('#but1').style.display='inline-block';
        document.querySelector('#but2').style.display='inline-block';
        document.querySelector('#but3').style.display='inline-block';
        document.querySelector('#but4').style.display='none';
        document.querySelector('#start-text').innerText=' ';
        document.querySelector('#nazwa-koloru').innerText='Zagraj w grę, w której Twoim zadaniem będzie odgadnięcie jak największej liczby kolorów w ciągu 20 sekund. Be a champ!';
        document.querySelector('#nazwa-koloru').style.color='black';
}