/**
 * Created by Rachelle on 12/9/14.
 */
function story(step) {
    switch(step) {
        case 0:
            setScreen(0);
            break;
        case 1:
            changeBG(0);
            $('#cast').removeClass();
            $('#objective-text').html(objectives[0]+objectives[2]);
            $('#hero-text').html("Today is my first day working at Rolling Hills hospital. Although I'm excited," +
            " I'm nervous as well. My first time working with patients, my first time using what I've learned to save lives... " +
            "As I was trained as a biochemist, this all feels so weird."+
            " Also, I don't know where I'm supposed to check in... <i>*sigh*</i> The adventure begins...");
            $('#stacy-text').html("");
            break;
        case 2:
            $('#cast').addClass('stacy');
            $('#hero-text').html("Whaaa...!!!");
            $('#stacy-text').html("Oh, I'm sorry. I didn't mean to scare you. May I help you?");
            break;
        case 3:
            $('#hero-text').html("I'm a bit lost. I'm starting my work as a consultant here, and I'm supposed to check in at the main office.");
            $('#stacy-text').html("Ah, yes! We've all been talking about you. Please follow me; I'll give you a quick tour, and then you can set off to work. "
            +"We already have your first patient. My name is <strong>Stacy</strong>, by the way. What's your name?");
            heroname = window.prompt("Please enter your name, then press forward to continue:","");
            break;
        case 4:
            changeBG(0);
            $('#hero-text').html("My name's <strong>"+ heroname+"</strong>.");
            $('#stacy-text').html("Nice to meet you, <strong>"+heroname +"</strong>! I look forward to working with you! <p> Let's begin the tour, shall we?" +
            "<p>We're currently in the <strong>main hallway</strong>. Sometimes you can bump into nurses here.</p>");
            break;
        case 5:
            changeBG(1);
            $('#hero-text').html("");
            $('#stacy-text').html("This is the <strong>library</strong>. We have a decent collection, and the internet in here is quite good.");
            break;
        case 6:
            changeBG(3);
            $('#hero-text').html("Whoa!");
            $('#stacy-text').html("This is the <strong>laboratory</strong>. This is where you'll be doing most of your work." +
            " I hope you find it cozy.");
            break;
        case 7:
            changeBG(0);
            $('#cast').addClass('stacy');
            $('#objective-text').html(objectives[0]+objectives[2]);
            $('#stacy').show();
            $('#hero-text').html("Thanks for all of your help!");
            $('#stacy-text').html("That's about it. I hope you liked the tour. All of these places have been added to your <strong>map</strong>."
            +"<p>If you go down this hallway and take the first left, you'll reach <strong>rooms 110-139</strong>. " +
            "Your first patient is waiting for you in <strong>room 114.</strong></p>");
            break;
        case 8:
            changeBG(0);
            $('#cast').removeClass();
            $('#objective-text').html(objectives[0]+objectives[3]);
            $('#hero-text').html("Well, here we go! <p><i>You decide to head off to <strong>room 114</strong> and start your medical adventure!</i></p>");
            $('#stacy-text').html("<p><i> Stacy trots off while looking at her clipboard. Busy woman. </i></p>");
            break;
        case 9:
            changeBG(2);
            $('#cast').removeClass();
            $('#hero-text').html("Hello?<p><i>You look around.</i>");
            $('#stacy-text').html("");
            break;
        case 10:
            $('#cast').addClass('stan');
            $('#hero-text').html("");
            $('#stacy-text').html("Oh, you must be Dr. <strong>" + heroname + "</strong>. You're as cute as the rumors. <p>Call me <strong>Stan</strong>. Formalities" +
            " are forgotten between friends, right, <strong>"+heroname+"y</strong>? Ha! Anyways, we have a problem on our hands.</p>");
            break;
        case 11:
            $('#hero-text').html("<i>You feel just a liiiiittle bit annoyed.</i><p>What is it?</p>");
            $('#stacy-text').html("We have a toddler displaying developmental disabilities. Patient A2306, little Timmy. He has a light complexion and a normal history. " +
            "We're running some tests right now in the lab, and the parents keep lurking in the main hallway. You should get on it.");
            break;
        case 12:
            $('#cast').addClass('stan');
            $('#hero-text').html("All right, let me brush up on some things. I'll come back when I'm ready to help.");
            $('#stacy-text').html("I'll be here when you're ready. Let me go finish my rounds first. Ta-ta, ma cheri! <p><i><strong>Stan</strong> leaves the room.</i></p>");
            break;
        case 13:
            $('#cast').removeClass();
            $('#hero-text').html("<i>The map is now open, and Room 114 has been added.<p>Click forward to proceed into <strong>free-range mode</strong>.</p>" +
            "<p><strong>In free-range mode, you move throughout the map to collect clues about the current genetic disorder. The navigation will change accordingly.</strong></p></i>");
            $('#stacy-text').html("<i>When you're ready to take on the final puzzle, the objective will change to 'save the patient.' Come back to <strong>room 114</strong> to solve the final puzzle.<p><strong>Good luck!</strong></p></i>");
            break;
        case 14:
            setScreen(2);
            map = 1;
            $('#hero-text').html("");
            $('#stacy-text').html("");
            break;
        default:
            window.alert("'SNPsnap: The Game' is experiencing a problem. Sorry.");
            break;
    }
}

function goLib(progress) {
    switch(progress) {
        case 0:
            $('#cast').removeClass();
            $('#stacy-text').html("");
            $('#hero-text').html("<i>You decide to check out the library. Books are always helpful, right?</i>");
            break;
        case 1:
            $('#cast').addClass('stacy');
            $('#hero-text').html("Hi, Stacy! I came to the library to do some research on my patient.");
            $('#stacy-text').html("Nice to see you, <strong>"+heroname+"</strong>. I'm on break right now. I can help, if you'd like.");
            break;
        case 2:
            $('#hero-text').html("I'd appreciate it.");
            $('#stacy-text').html("<i>You and Stacy spend some time researching disorders that cause delayed onset developmental disabilities.</i>");
            break;
        case 3:
            $('#hero-text').html("Do you have any ideas?");
            $('#stacy-text').html("...Phenylketonuria... With the age, it makes sense...");
            break;
        case 4:
            $('#hero-text').html("I thought babies are tested for phenylketonuria during birth...");
            $('#stacy-text').html("They are, but it's always possible that there was a problem with the screening.");
            break;
        case 5:
            $('#hero-text').html("<i>You decide to do your research on phenylketonuria.</i><p>Phenylketonuria is a genetic disorder caused by mutations in the phenylalanine hydroxylase gene. " +
            "This gene encodes an enzyme that is responsible for the degradation of phenylalanine, a substance found in some foods. If phenylalanine accumulates in the body, mental" +
            "retardation and other symptoms result. As such, those with phenylketonuria must follow strict diets.</p>");
            $('#stacy-text').html("Phenylketonuria is inherited in an 'autosomal recessive' manner. That means both copies of the gene encoding phenylalanine hydroxylase " +
            "(located on the autosomal DNA that is not different between sexes)" + " must be mutated to get this disorder. <p>While Phenylketonuria is often caused by a missense mutation, 548 different " +
            "mutations are known to cause phenylketonuria. In missense mutations, a change in the DNA causes a basic building of gene product to change. You'll learn more about these later. </p>");
            break;
        case 6:
            $('#cast').addClass('stacy');
            $('#hero-text').html("Thank you so much, Stacy!");
            $('#stacy-text').html("You're welcome. Anyways, I've got to go. I'll see you later." +
            "<p><i>Stacy grabs her clipboard, smiles nervously at you, and leaves.</p><p>Busy woman.</i></p>");
            break;
        case 7:
            $('#cast').removeClass();
            $('#hero-text').html("<i>Looks like you're done with the library.</i>");
            done[0] = 1;
            $('#stacy-text').html(checkdone(done));
            break;
        default:
            window.alert("You have completed this area. You should move on.");
            break;
    }
}

function goLab(progress) {
    switch(progress) {
        case 0:
            $('#cast').removeClass();
            $('#stacy-text').html("");
            $('#hero-text').html("<i>You decide to check out the lab. Looking at the samples would be helpful, right?</i>");
            break;
        case 1:
            $('#cast').addClass('drhint');
            $('#hero-text').html("Er... hi, there. I'm Dr. <strong>"+heroname+"</strong>, and I'm here to see patient... A2306's blood samples, please.");
            $('#stacy-text').html("The name's <strong>Dr. Rintarou</strong>. Let me get them for you. I was just about to run some tests on them.");
            break;
        case 2:
            $('#hero-text').html("I'd appreciate it.");
            $('#stacy-text').html("<i>Dr. Rintarou disappears to get the samples for you.</i>");
            break;
        case 3:
            $('#hero-text').html("I'm going to run a typical newborn screening suite on the blood. It's possible that they missed something.");
            $('#stacy-text').html("Got it.");
            break;
        case 4:
            changeBG(4);
            $('#hero-text').html("<i>You take blood sample and set to work while talking to Dr. Rintarou.</i><p>It's so nice to have an independent lab here" +
            ". Most hospitals I've visited send specimens to an external lab.</p>");
            $('#stacy-text').html("The benefits of being private. So, it seems like you've been around....<p><i>A few hours pass, and you collect your results.</i></p>");
            break;
        case 5:
            changeBG(3);
            $('#cast').addClass('drhint');
            $('#hero-text').html("<i>The baby's blood looks normal. No sickle cell anemia here. " +
            "It contains normal levels of galactose sugar, and the enzyme levels are normal too. However, there is a " +
            "high level of phenylalanine in the blood.</i><p>Hm, these are some interesting results. I'll keep them in mind.</p>");
            $('#stacy-text').html("I hope you can help the baby. Good luck." +
            "<p><i>Dr. Rintarou disappears into another room with her samples, humming.</i></p>");
            break;
        case 6:
            $('#cast').removeClass();
            $('#hero-text').html("<i>Looks like you're done with the laboratory.</i>");
            done[1] = 1;
            $('#stacy-text').html(checkdone(done));
            break;
        default:
            window.alert("You have completed this area. You should move on.");
            break;
    }
}

function goHall(progress) {
    switch(progress) {
        case 0:
            $('#cast').removeClass();
            $('#hero-text').html("<i>You decide to check out the hallway. Maybe the parents will have some useful information.</i>");
            $('#stacy-text').html("");
            break;
        case 1:
            $('#cast').addClass('mom');
            $('#hero-text').html("Hello. I'm Dr. <strong>"+heroname+"</strong>, and I'm here to ask you about your son.");
            $('#stacy-text').html("Is my baby okay?<p><i>The woman looks so worried. You can't help but feel bad for her.</i></p>");
            break;
        case 2:
            $('#hero-text').html("He'll be okay soon. When did symptoms start appearing? Did you have a conventional birth?");
            $('#stacy-text').html("Yes! He was born naturally at a hospital. He was tested for common genetic disorders at birth, " +
            "and all of his results were fine. He's a beautiful baby, but I " +
            "thought it was weird that his skin and hair were so pale... his father is rather dark, you see. <p>Everything was " +
            "fine until a few weeks ago, when he started having skin... rashes... and seizures...</p>");
            break;
        case 3:
            $('#hero-text').html("Skin rashes?");
            $('#stacy-text').html("The other doctor called it... 'eczema?'");
            break;
        case 4:
            $('#hero-text').html("Thank you so much for your help. I'll come talk to you once I know more.");
            $('#stacy-text').html("Okay... Please let me know if I can help any more...<p><i>She wanders off to a seat and flips dully through a magazine.</i></p>");
            break;
        case 5:
            $('#cast').removeClass();
            $('#hero-text').html("<i>Looks like you're done with the hallway.</i>");
            done[2] = 1;
            $('#stacy-text').html(checkdone(done));
            break;
        default:
            window.alert("You have completed this area. You should move on.");
            break;
    }
}

function goRoom(roomprogress) {
    counter = 0;
    answer = "";
    switch(roomprogress) {

        case 0:
            $('#cast').removeClass();
            $('#cast').addClass('stan');
            $('#hero-text').html("I think I know what the problem is.");
            $('#stacy-text').html("Yo, " + heroname+"y! Welcome back~!<p>Oh, really now? Let's see what you know, shall we?</p>");
            break;
        case 1:
            $('#hero-text').html("");
            $('#stacy-text').html("What is the name of the compound found in high levels in the patient's blood? 3 tries, let's go!");
            while (counter <= 2 && (answer.toLowerCase()!="phenylalanine")) {
                answer = window.prompt("Submit your answer!", "");
                if (answer === '' || answer === null) {
                    fail();
                    break;
                }

                counter++;
            }
            if (counter > 2) {
                fail();
            }
            break;
        case 2:
            $('#stacy-text').html("Round two. All right! What is the mutation type that causes the patient's genetic disorder?");
            while (counter <= 2 && (answer.toLowerCase()!="missense" && answer.toLowerCase()!="mis sense" && answer.toLowerCase()!="mis-sense")) {
                answer = window.prompt("Submit your answer!", "");
                if (answer === '' || answer === null) {
                    fail();
                    break;
                }
                counter++;
            }
            if (counter > 2) {
                fail();
            }
            break;
        case 3:
            $('#stacy-text').html("One more question! What is the skin condition associated with the patient?");
            while (counter <= 2 && (answer.toLowerCase()!="eczema")) {
                answer = window.prompt("Submit your answer!", "");
                if (answer === '' || answer === null) {
                    fail();
                    break;
                }
                counter++;
            }
            if (counter > 2) {
                fail();
            }
            break;
        case 4:
            $('#stacy-text').html("So, the disease is...");
            while (counter <= 2 && (answer.toLowerCase()!="phenylketonuria")) {
                answer = window.prompt("Submit your answer!", "");
                if (answer === '' || answer === null) {
                    fail();
                    break;
                }
                counter++;
            }
            if (counter > 2) {
                fail();
            }
            break;
        case 5:
            $('#cast').addClass('stan');
            $('#hero-text').html("The disease is <strong>phenylketonuria</strong>. The child's symptoms should be relieved" +
            " by following a strict diet.");
            $('#stacy-text').html("Not bad, <strong>"+heroname+"y</strong>! Let's see if we can help the darling out, m'kay?");
            break;
        case 6:
            $('#cast').removeClass().addClass('mom');
            $('#hero-text').html("<i>You talk with the parents about possible care. You won't know the extent of the child's brain damage</i>" +
            " until later during development, but you'll just take things as they go.</i>");
            $('#stacy-text').html("Thank you so much... We'll do the best we can to take care of Timmy!");
            break;
        case 7:
            celebrate(0);
            break;
        case 8:
            celebrate(1) ;
            break;
        default:
            window.alert("You have completed this area. You should move on.");
            break;
    }
}

function exploration(n, progress) {
    map = 0;
    setScreen(1);
    changeBG(n);
    switch(n) {
        case 0:
            goHall(progress);
            break;
        case 1:
            goLib(progress);
            break;
        case 3:
            goLab(progress);
            break;
        default:
            window.alert("SNPsnap is experiencing an issue. Sorry for the inconvenience!")
            break;
    }
}

