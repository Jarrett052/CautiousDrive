function timeStart() {
    document.getElementById('timer').innerHTML = "Time left = " +
        2 + ":" + 00;
    startTimer();

    function startTimer() {
        var presentTime = document.getElementById('timer').innerHTML;
        //var timeArray = presentTime.split(/[:]+/);

        //Time left = 1:59
        var orginalData = presentTime.split(" = ");

        var timeArray = orginalData[1].split(":");

        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if (s == 59) {
            if (m > 0) {
                m = m - 1;
            } else {
                m = 1;
            }
        }
        //if(m<0){alert('timer completed')}

        //document.getElementById('timer').innerHTML =
        //    m + ":" + s;

        document.getElementById('timer').innerHTML = "Time left = " +
            m + ":" + s;

        setTimeout(startTimer, 1000);
    }

    function checkSecond(sec) {
        if (sec < 10 && sec >= 0) {
            sec = "0" + sec
        }; // add zero in front of numbers < 10
        if (sec < 0) {
            sec = "59"
        };
        return sec;
    }

}




//timeStart();

// var btn = document.createElement("BUTTON");
// btn.innerHTML = "CLICK ME";
// document.body.appendChild(btn);

function myFunction() {
    var myobj = document.getElementById("startButton");
    myobj.remove();
    var tips = document.getElementById("container1");
    tips.remove();
    makeBox();
    timeStart();
}




function getRandomColor() {

    var letters = "0123456789ABCDEF".split('');
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    } //ends for loop 
    return color;


} // ends getRandomColor Function


var clickedTime;
var createdTime;
var reactionTime;

function makeBox() {
    var time = Math.random();
    time = time * 3000;

    setTimeout(function() {

        if (Math.random() > 0.5) {

            document.getElementById("box").style.borderRadius = "100px";

        } else {

            document.getElementById("box").style.borderRadius = "0";
        }

        var top = Math.random();
        top = top * 300;
        var left = Math.random();
        left = left * 500;

        document.getElementById("box").style.top = "30px";
        //top + "px";
        document.getElementById("box").style.left = "20%";
        //left + "px"; 

        document.getElementById("box").style.backgroundColor = getRandomColor();

        document.getElementById("box").style.display = "block";

        createdTime = Date.now();

    }, time);

}

var occur = 0;
var resT = [];
document.getElementById("box").onclick = function() {

    clickedTime = Date.now();
    //document.getElementById("startButton").style.visibility = 'hidden';
    reactionTime = (clickedTime - createdTime) / 2500;
    resT.push(reactionTime);
    localStorage.setItem("resT", resT);

    occur = occur + 1;
    localStorage.setItem("occur", occur);


    //document.getElementById("printReactionTime").innerHTML = "Your Reaction Time " + " is: " + reactionTime + " seconds";

    this.style.display = "none";

    makeBox();


    setTimeout(function() { window.open("./form5.html", "_self"); }, 110000);

}


// makeBox();
// timeStart();




//document.getElementById("time").innerHTML="REACTION TIME are"+ resT;