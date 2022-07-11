let a = 0;
let b = 0;
let c = 0;
let d = 0; 
let e = 0;
let f = 0;
let g = 0;

const dateObject = new Date ();
let year = dateObject.getFullYear();
let month = dateObject.getMonth() + 1;
let day = dateObject.getDate();
let time = dateObject.toLocaleTimeString();

let date = "Today's date is " + day + "/" + month + "/" + year;



function FrightNight(){
    const tracklist = document.getElementsByClassName('StratFrightNight');
    if (tracklist[0].style.display == 'none') {
        tracklist[0].style.display = 'block';
        tracklist[0].style.maxHeight = tracklist[0].scrollHeight + "px";
    }
    else {
        tracklist[0].style.display = 'none';
        tracklist[0].style.maxHeight = null;
    }
}

function Twilight(){
    b+= 1;
    const tracklist = document.getElementsByClassName('StratTwlight');
    if (b % 2 != 0){
        tracklist[0].style.display = 'block'
        tracklist[0].style.maxHeight = tracklist[0].scrollHeight + "px";
    }
    else {
        tracklist[0].style.display = 'none';
        tracklist[0].style.maxHeight = null;
    }
}

function Dreamspace(){
    c += 1;
    const tracklist = document.getElementsByClassName('StartDreamspace');
    if (c % 2 != 0) {
        tracklist[0].style.display = 'block'
        tracklist[0].style.maxHeight = tracklist[0].scrollHeight + "px";
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        
    }
    else {
        tracklist[0].style.display = 'none';
        tracklist[0].style.maxHeight = null;
    }
}

function Fourth(){
    d += 1;
    const tracklist = document.getElementsByClassName('StratFourth')
    if (d % 2 !=0)  {
        tracklist[0].style.display = 'block'
        tracklist[0].style.maxHeight = tracklist[0].scrollHeight + "px";
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
    else {
        tracklist[0].style.display = 'none';
        tracklist[0].style.maxHeight = null;
    }
}

function FrightNight2 (){
    a += 1;
    const tracklist = document.getElementsByClassName('StratFrightNight');
    if (a % 2 != 0){ tracklist[0].style.display = 'block';
    tracklist[0].style.maxHeight = tracklist[0].scrollHeight + "px";
} else {
    tracklist[0].style.display = 'none';
    tracklist[0].style.maxHeight = null;
}
    
}

function button6() {
    f +=1;
    const tracklist = document.getElementById('StratVisions');
    if (f % 2 != 0){ tracklist.style.display = 'block';
    tracklist.style.maxHeight = tracklist.scrollHeight + "px";
} else {
    tracklist.style.display = 'none';
    tracklist.style.maxHeight = null;
}   
}

function Episodes() {
    e +=1;
    const tracklist = document.getElementsByClassName('StratEpisodes');
    if (e % 2 != 0){ tracklist[0].style.display = 'block';
    tracklist[0].style.maxHeight = tracklist[0].scrollHeight + "px";
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
} else {
    tracklist[0].style.display = 'none';
    tracklist[0].style.maxHeight = null;

}
}

document.getElementById('dateid').addEventListener('click', function(){
    document.getElementById('dateid').innerHTML = date;
});

document.getElementById('timeid').addEventListener('click', function(){
    document.getElementById('timeid').innerHTML = time;
});

 function2(){
    g +=1;
    const tracklist = document.getElementsByClassName('StratDestiny');
    if (g % 2 != 0){ tracklist[0].style.display = 'block';
    tracklist[0].style.maxHeight = tracklist[0].scrollHeight + "px";
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
} else {
    tracklist[0].style.display = 'none';
    tracklist[0].style.maxHeight = null;

}};

