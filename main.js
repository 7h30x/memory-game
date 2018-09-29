function createCards () {
    for(let i=1 ; i<13; i++) {
        var card=document.createElement("div");
        var cover=document.createElement("div");
        card.setAttribute('id', 'card'+[i]);
        card.setAttribute('class', 'cards');
        cover.setAttribute('id', 'cover'+[i]);
        cover.setAttribute('class', 'covers');
        document.getElementById("gameBoard").appendChild(card).appendChild(cover);
    }
}
function changeColor (e) {
    if(onDeck.length<2 || !onDeck.length){
    e.target.style.border='7px red solid';
    onDeck.push(e.target);
    }
}
function randomizeImages () {
    var already=[];
    var random1 =Math.ceil(Math.random()*12);
    var random2 =Math.ceil(Math.random()*12);
    
    while(random1===random2) {
        random2=Math.ceil(Math.random()*12);
    }
    document.getElementById(`card${random1}`).style.backgroundImage= `url(${imageArray[0]})`;
    document.getElementById(`card${random2}`).style.backgroundImage= `url(${imageArray[0]})`;
    
    already.push(random1, random2);
    
    for(let j=1; j<6; j++) {
        while(already.findIndex((el)=>el===random1)!==-1 ) {
            random1 =Math.ceil(Math.random()*12);
        }
        already.push(random1);
        while(already.findIndex((el)=>el===random2)!==-1) {
            random2 =Math.ceil(Math.random()*12);
        } 
        already.push(random2);
    
        document.getElementById(`card${random1}`).style.backgroundImage= `url(${imageArray[j]})`;
        document.getElementById(`card${random2}`).style.backgroundImage= `url(${imageArray[j]})`;
        }
    }
    

function play () {
    if(onDeck.length===2 && onDeck[0]!==onDeck[1]){
        onDeck[0].style.opacity=0;
        onDeck[1].style.opacity=0;
        setTimeout(openCover,500);  
    } 
    else if (onDeck.length===2 && onDeck[0]===onDeck[1]) {
        onDeck.pop();
    }


   
}
function openCover () {
    onDeck[0].style.border='4px rgb(139, 235, 179) solid';
    onDeck[1].style.border='4px rgb(139, 235, 179) solid';
    if(onDeck[0].parentNode.style.backgroundImage===onDeck[1].parentNode.style.backgroundImage) {
        onDeck[0].style.opacity=0;
        onDeck[1].style.opacity=0;
        onDeck[0].removeEventListener('mousedown',changeColor);
        onDeck[1].removeEventListener('mousedown',changeColor);
    }
    else{
        onDeck[0].style.opacity=1;
        onDeck[1].style.opacity=1;
    }
    onDeck=[];
}


var onDeck=[];
var imageArray=['merkel.jpeg','xi.jpeg','trump.png','pusheen.jpeg','Cruz.jpg','bellucci.jpg'];
var playButton=document.getElementById('reset');
playButton.onclick= play;
document.getElementById("gameBoard").addEventListener('mousedown',changeColor);
//create divs for gamecard & covers
createCards();
randomizeImages();

//on mouseclick on any of the card, set card id










