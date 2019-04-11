function adduser(){
    alert("Adding User...");
    var email= document.getElementById('newEmailInput').value;
    var password = document.getElementById('newPasswordInput').value;
    firebase.auth().createUserWithEmailAndPassword(email,
        password).catch(function(error) {
// Handle Errors here
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("error"+ error.message);
// ...
    });
}

function signIn(){
    alert("Logging In...");

    var email= document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;
    document.getElementById("login").reset();
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        alert("Error logging in.");
// Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
// ...
    });


}

function signOut(){
    firebase.auth().signOut().then(function() {
        alert("Logged out!");
    }).catch(function(error) {
// An error happened.
    });
}


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
// User is signed in.
        alert("You are logged in. Feel free to keep browsing!");
        console.log(user.toJSON());
    } else {
// No user is signed in.
        alert("User not logged in.");
    }
});


function loggedin() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
        } else {
            window.location = "login.html";
        }
    })
}


var saigon = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.762921249076!2d-123.12704818479696!3d49.28088937933111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d541654351%3A0xcdb5b2a89316127a!2sOne+Saigon!5e0!3m2!1sen!2sca!4v1554997097685!5m2!1sen!2sca';
var guu = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.5983453808003!2d-123.12762208479691!3d49.28400757933142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671807b2fe639%3A0x82f5a468f146f17c!2sGuu+Original+Thurlow!5e0!3m2!1sen!2sca!4v1554997063052!5m2!1sen!2sca';
var chatime = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.458933847086!2d-123.13046698479678!3d49.28664887933173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867187356f684b%3A0xc1889aca64ab41cf!2sChatime+Robson!5e0!3m2!1sen!2sca!4v1554997030697!5m2!1sen!2sca';
var softpeaks = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.620312498512!2d-123.10587928479693!3d49.28359137933131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717736533f8d%3A0xdab7f442e172b002!2sSoft+Peaks+Ice+Cream!5e0!3m2!1sen!2sca!4v1554996951001!5m2!1sen!2sca';
var tako = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.868792099414!2d-123.11044608479716!3d49.278883379330885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717b9e380023%3A0x1425b0315edc6c06!2sTAKO+-+Taqueria+Korean!5e0!3m2!1sen!2sca!4v1554996992289!5m2!1sen!2sca';
var brioche = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10410.093558564358!2d-123.11607522491455!3d49.28542770868325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdc7041dc6ef90630!2sBrioche+Urban+Eatery!5e0!3m2!1sen!2sca!4v1554996810092!5m2!1sen!2sca';


function findsaigon() {
    document.getElementById("gmap_canvas").src = saigon;
}

function findguu() {
    document.getElementById("gmap_canvas").src = guu;
}

function findchatime() {
    document.getElementById("gmap_canvas").src = chatime;
}

function findsoftpeaks() {
    document.getElementById("gmap_canvas").src = softpeaks;
}

function findtako() {
    document.getElementById("gmap_canvas").src = tako;
}

function findbrioche() {
    document.getElementById("gmap_canvas").src = brioche;
}

function recommend() {
    var name = document.getElementById("nameInput").value;
    var song = document.getElementById("songInput").value;
    var artist = document.getElementById("artistInput").value;

    var data = "→ " + name + " recommended " + song + " by " + artist;
    var d1 = document.getElementById('recommendbox');
    d1.insertAdjacentHTML('beforeend', "<br>" + data);

}

function questions() {
    alert('Thank you for your submission!');
}


