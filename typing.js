const setOfWords=[
    " If it seems easy, you’re doing it wrong",
    "My laziness is like 8 when I lie down it becomes infinity",
    "Good Morning. Let the stress Begin",
    "80% of boys have girlfriends… Rest 20% are having the brain"
];
const msg=document.getElementById("msg");
const myWords=document.getElementById("mywords");
const btn=document.getElementById("btn");
let startTime,endTime;






btn.addEventListener("click",function(){
    if(this.innertext=="Start"){
    typeWords.disabled=false;
    }
    playGame();
    
})