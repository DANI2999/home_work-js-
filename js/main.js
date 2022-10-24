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

function aniStop(){
    
    document.getElementById("main").style.animationName = "";
}

function changeWidht(){
    var widht = document.getElementById('widht').value
    var size = document.getElementById('size').value
    var height = document.getElementById('height').value
    var radius = document.getElementById('radius').value
    document.getElementById("main").style.width.radius.height = widht+size+height+radius
}

function changeWidhtDefault(){
    document.getElementById("main").style.width = "150px"
}

