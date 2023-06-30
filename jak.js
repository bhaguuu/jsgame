let players = {

       Name:"bhagu",
       chips:"120 "
}
let lists=[]


let sum=0

let withdraw = false
let isALive = true
let message = ""
let msg = document.getElementById('message-El')
let s = document.getElementById("sum-El")
let card = document.getElementById("card-El")
let player=document.getElementById("pl-El")
player.textContent=players.Name +" $" + players.chips
function randomm(){
    let renadomnumber= Math.floor(Math.random()*13)+1
    if(renadomnumber>10){
        return 10
    }else if(renadomnumber===1){
        return 11;
    }else{
    return renadomnumber
    }
}

function start() {
    isALive=true
    let firstcard = randomm();
let secondcard = randomm();
lists.push(firstcard)
lists.push(secondcard)
sum = firstcard + secondcard


    startN()
}
function startN() {
    card.textContent = 'Card : '
    for( let i=0;i<lists.length;i++){
        card.textContent+= " "+lists[i]
   }
    s.textContent = `sum :${sum}`
    if (sum <= 20) {
        message = " you want to add new card"

    } else if (sum === 21) {
        message = "won"
        withdraw = true
    } else {
        message = "lost"
        isALive = false

    }
    msg.innerText = message

}

function New() {
    if(withdraw===true||isALive===false){
        for(let i=0;i<lists.length;i++){
            lists.pop()
        }
        startN()
    }else{
    let c = randomm()
    sum += c
    lists.push(c)
    startN()
    }
}