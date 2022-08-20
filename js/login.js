const login_button = document.querySelector(".login-button");
const log_space = document.querySelector(".log-space");
const account_space = document.querySelector(".account-space");

const account_name = document.querySelector(".account-name");
const account_lastname = document.querySelector(".account-lastname");
const account_image = document.querySelector(".account-image");


const only_login = document.querySelectorAll(".only-login");



const provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().useDeviceLanguage();

async function GoogleLogin() {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log(result);
            // showAccount();

        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(error);
        });
}

function Logout() {
    firebase.auth().signOut().then(() => {
        console.log("Sign out");
        // hideAccount();
    });
}

function showLogin() {
    login_button.classList.remove("hide");

}

function hideLogin() {
    login_button.classList.add("hide");

}


function LoggedIn(user) {

    [user.name, user.lastName] = user.displayName.split(" ");
    console.log(user.name);
    console.log(user.lastName);

    showElements();

    showAccount(user);
}

function LoggedOut() {
    hideElements();
    hideAccount();
    returnToIndex();
}

function returnToIndex() {
    setTimeout(() => {
        if (window.location.pathname != "index.html" && window.location.pathname != "/") {
            document.location.href = "/";
        }
    }, 400);

}

function showAccount(user) {
    hideLogin();
    account_space.classList.remove("hide");
    log_space.classList.add("logged");
    account_name.innerHTML = user.name;
    account_lastname.innerHTML = user.lastName;
    account_image.style.backgroundImage = "url(" + user.photoURL + ")";
}

function hideAccount() {
    account_space.classList.add("hide");
    log_space.classList.remove("logged");
    showLogin();
}


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        // ...
        console.log("logged in");
        LoggedIn(user);
    } else {
        // User is signed out
        // ...
        LoggedOut();
    }
});


function showElements() {
    only_login.forEach(element => {
        element.classList.remove("hide");
    });
}

function hideElements() {
    only_login.forEach(element => {
        element.classList.add("hide");
    });
}
