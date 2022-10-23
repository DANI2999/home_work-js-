 //var seyahet = [
 //    ["Tebiet",
 //        ["Deniz","Hava limani"],"Ismayilli","Almaniya","Elm"
 //    ],
 //    ["Aytac","Gultac","Sema","Nubar","Azima-Esmira"],
 //    ["Revan","Sebuhi","Rza","Deyanet"],
 //    [
 //        "Shah dag",["Yay","Qis"],"Mandarin",
 //    ],
 //    ["","Baki."]
 //];


//"ashagida ve yuxarida olan komentleri silerek kodlarin kimin terefinden yazildigini gore bilersiz"
 //console.log("Menim adim "+ seyahet[0][1][0][0]+seyahet[1][4][6]+seyahet[3][1][0][0]+seyahet[1][0][0]+seyahet[1][3][0]+seyahet[0][4][0]+seyahet[0][0][0]+seyahet[1][4][5]+seyahet[3][2][3]+seyahet[4][1][3]+seyahet[1][4][10])


function chBg(){
    
  document.getElementById("main").style.animationName = "go";
}
function changeColor(){
    var olchu = document.getElementById('color').value
    document.getElementById("main").style.color =color
}

function aniStop(){
    
    document.getElementById("main").style.animationName = "";
}

function changeWidht(){
    var widht = document.getElementById('widht').value
    var olchu = document.getElementById('size').value 
    document.getElementById("main").style.width = widht+size
}

function changeWidhtDefault(){
    document.getElementById("main").style.width = "500px"
}
function changeWidhtFrame(){
document.getElementById(widht).style.width = "150px"
}
