//Setting up the image map for the menu.
function newImage(arg) {
    if (document.images) {
        rslt = new Image();
        rslt.src = arg;
        return rslt;
    }
}

function changeImages() {
    if (document.images && (preloadFlag == true)) {
        for (var i=0; i<changeImages.arguments.length; i+=2) {
            document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
        }
    }
}

var preloadFlag = false;
function preloadImages() {
    if (document.images) {
        menu_01_ImageMap_01_over = newImage("images/menu_01-ImageMap_01_over.png");
        menu_01_ImageMap_02_over = newImage("images/menu_01-ImageMap_02_over.png");
        menu_01_ImageMap_03_over = newImage("images/menu_01-ImageMap_03_over.png");
        menu_01_ImageMap_04_over = newImage("images/menu_01-ImageMap_04_over.png");
        preloadFlag = true;
    }
}

//SNPsnap code.
var counter = 0;
var step = 0;
var progress = 0;
var objectives = ["Objective: ", "Save patient", "Learn about the hospital", "Learn about patient", "GOOD JOB!"];
var heroname= "";
var n = 0;
var map = 0;
var alldone = 0;
var done = [0,0,0];
var answer = "";
var roomprogress= 0;
var room = 0;

function setScreen(key) {
    switch(key) {
        //Case 0 is home screen
        case 0:
            $('#cast').removeClass();
            $('#backdrop').removeClass();
            $('#backdrop').addClass('hosp');
            $('#op1-text').html("New Game");
            $('#op2-text').html("Load Game");
            $('#op3-text').html("Credits");
            $('#op4-text').html("Main Menu");
            $('#hero-text').html("'SNPsnap: The Game' is in version 1.0. Beware of general bugginess.");
            break;

        //Case 1 is prologue screen: backward/forward.
        case 1:
            $('#op1-text').html("Backward");
            $('#op2-text').html("Map");
            $('#op3-text').html("Forward");
            $('#op4-text').html("Menu");
            break;

        //Case 3 is Map screen.
        case 2:
            $('#op2-text').html("Library");
            $('#op3-text').html("Lab");
            $('#op4-text').html("Hallway");
            $('#op1-text').html("Room 114");
            break;
    }
}

function fail() {
    room = 0;
    $('#stacy-text').html("Looks like you need to brush up! Go explore a little, and come back.");
    setScreen(2);
    map = 1;
    roomprogress = 0;
    room = 0;

}


//Phew, you have successfully passed the story and substories. Now for the rest of the code.
function useMenu() {

    document.getElementById('op1').onclick = function () {
        if (step === 0) {
            setScreen(1);
            step = 1;
            story(step);
        }
        else if (step === 1){
            var sb = window.confirm("You will return to the game menu. Is that okay?");
            if (sb === true) {
                step=0;
                document.location.reload(true);
            }
        }
        else if (step===14) {
            if (room === 1) {
                map = 0;
                if (roomprogress === 0) {
                    window.alert("Aren't you ready?! D:");
                }
                else {
                    roomprogress--;
                    room(roomprogress);
                }
            }

            else if (map === 1 && alldone === 1) {
                roomprogress=0;
                room = 1;
                changeBG(2);
                map = 0;
                setScreen(1);
                goRoom(roomprogress);
            }

            else if (map === 1) {
                window.alert("You're not quite ready to help your patient. You should do a bit more research.");
            }
            else if (progress===0) {

                    window.alert("You can't go back now. You just got here!");
            }
            else {
                map=0;
                progress--;
                exploration(n, progress);
            }
        }

        else {
            step--;
            story(step);
        }
    }

    document.getElementById("op2").onclick = function () {
        switch (true) {
            case ( step === 0):
                var keyword = window.prompt("Please enter level access code:", "");
                if (keyword === 'thal') {
                    window.alert("Beginning level one.");
                    step = 0;
                }
                else if (keyword === 'mpsii') {
                    window.alert("Beginning level two.");
                    step = 0;
                }
                else {
                    window.alert("The keyword you entered is not valid. Please try again.");
                }
                story(step);
                break;

            case (step < 7):
                window.alert("You don't know where you're going. Not a good idea.");
                break;
            case (step < 9):
                window.alert("You don't want to risk getting lost. Straight to room 114. Let's go!");
                break;
            case (step < 14):
                window.alert("You're right where you need to be.");
                break;
            case (step === 14):
                if (map === 0) {
                    setScreen(2);
                    map = 1;
                }
                else {
                    map = 0;
                    n = 1;
                    progress = 0;
                    exploration(n, 0);
                }
                break;
            default :
                $('#hero-text').html(step);
                window.alert("Houston, we have a problem.");
                break;
        }
    }


    document.getElementById('op3').onclick = function () {
        if (step === 0) {
            $('#hero-text').html("This game was made for CSC431 by Team DR. JOB. We get the job done!");
        }
        else if (step === 14) {

            if (map === 1) {
                n = 3;
                map = 0;
                progress = 0;
                roomprogress = 0;
                exploration(n, progress);
            }
            else if (room === 1) {
                roomprogress++;
                goRoom(roomprogress);
            }
            else {
                progress++;
                exploration(n, progress);
            }
        }

        else {
             step++;
             story(step);
             }
    }

    document.getElementById('op4').onclick = function () {
        if (step === 0) {
            window.open("index.php", "_self");
        }
        else if (step === 14 && map === 1) {
            map = 0;
            n = 0;
            progress = 0;
            exploration(0, progress);
        }
        else {
            var qtm = window.confirm("You will return to the game menu. If you are in the middle of a chapter, " +
            "you will lose any progress in the chapter. Is that okay?");
            if (qtm === true) {
                step=0;
                document.location.reload(true);
            }
        }
    }
}

function changeBG(key) {
    //Changes main image.
    //Map: 0: Hallway 1
    //     1: Library
    //     2: Patient room
    //     3: Lab
    //     4: Blood
    //     5: Lab work
    //     6: Puzzle
    //     7: Celebration

        $('#backdrop').removeClass();
        switch(key) {
            case 0:
                $('#backdrop').addClass('hw1');
                break;
            case 1:
                $('#backdrop').addClass('lib');
                break;
            case 2:
                $('#backdrop').addClass('pat');
                break;
            case 3:
                $('#backdrop').addClass('lab');
                break;
            case 4:
                $('#backdrop').addClass('blood');
                break;
            case 5:
                $('#backdrop').addClass('labwork');
                break;
            case 6:
                $('#backdrop').addClass('puzzle');
                break;
            case 7:
                $('#backdrop').addClass('celebration');
                break;
            default:
                window.alert("We done did screw up.");
        }
    }

function checkdone(done) {
    if (done[0] === 1 && done[1] === 1 && done[2] === 1) {
        alldone = 1;
        $('#objective-text').html(objectives[0]+objectives[1]);
        return ("Looks like you're all done and ready to save the patient!");
    }
    else {
        return("But you have some more research to do!");
    }
}

useMenu();
