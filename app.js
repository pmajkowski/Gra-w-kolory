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
let usersList=[];
let player;
let playersList=[];
// let result=0;
function addUser(event){
    let userName = document.querySelector('#user').value;
    let checkUser = usersList.find((user)=>user == userName);
    // console.log(checkUser);
    if(checkUser !== userName){
    usersList.push(userName);
    player = {name:userName,score:0}
    playersList.push(player);
    document.querySelector('#player').innerText=`${userName}: ${player.score} pkt.`;
    } else{
        document.querySelector('#player').innerText=`${userName}: ${player.score} pkt.`;
    }
    document.querySelector('#user').value='';
    console.log(usersList);
    console.log(player);

}
const startRandom=()=>
{
let val1 = Math.floor(Math.random()*8)
let val2 = Math.floor(Math.random()*8)

document.querySelector('#nazwa-koloru').innerText=palette[val1];

document.querySelector('#nazwa-koloru').style.color=palette[val2];

document.querySelector('#start-text').innerText=' ';


}
const startClick=(target)=>{
    result=0;
    setTimeout(()=>{
        document.querySelector('#start-text').innerText=`Koniec gry! Twój wynik to ${result}`;
        document.querySelector('#but1').style.display='none';
        document.querySelector('#but2').style.display='none';
        document.querySelector('#but3').style.display='none';
        document.querySelector('#summary').innerText=' ';
        document.querySelector('#nazwa-koloru').innerText=' ';
        document.querySelector('#but4').style.display='inline-block';
        player.score+=result;
        document.querySelector('#player').innerText=`${player.name}: ${player.score} pkt.`;
        console.log(playersList);
    },20000)
    document.querySelector('#but2').style.display='inline-block';
    document.querySelector('#but3').style.display='inline-block';
        document.querySelector('#summary').innerText=' ';
        document.querySelector('#start-text').innerText='Rozpoczynamy grę!';
        startRandom();
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
 
    }
    document.querySelector('#summary').innerText=result;
    document.querySelector('#start-text').innerText=' ';
    startRandom();
}
const returnClick=(target)=>{
    document.querySelector('#but1').style.display='inline-block';
        document.querySelector('#but2').style.display='inline-block';
        document.querySelector('#but3').style.display='inline-block';
        document.querySelector('#but4').style.display='none';
        document.querySelector('#start-text').innerText=' ';
        document.querySelector('#nazwa-koloru').innerText='Zagraj w grę, w której Twoim zadaniem będzie odgadnięcie jak największej liczby kolorów w ciągu 20 sekund. Be a champ!';
        document.querySelector('#nazwa-koloru').style.color='black';
        document.querySelector('#summary').innerText=0;
        document.querySelector('#player').innerText=' ';
}