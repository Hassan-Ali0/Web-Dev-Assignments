import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, googleProvider } from "../../firebaseconfig.js"
import { db, onSnapshot, query, orderBy, collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "../../firebaseconfig.js"

let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
let passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
let emailInput = document.querySelector("#email")
let passInput = document.querySelector("#pass")
let showBtn = document.querySelector("#visible")
let hideBtn = document.querySelector("#hide")
let signUpBtn = document.querySelector("#signUpBtn")
let googleSignInBtn = document.querySelector("#google_signIn")
let dModeBtn = document.querySelector("#dark_mode");
let lModeBtn = document.querySelector("#light_mode");
let logo = document.querySelector(".logo");


let themeSelectore = (e) => {
  if (e.target.id === "dark_mode") {
    document.documentElement.style.setProperty("--bgcolor", "#171719")
    document.documentElement.style.setProperty("--txtcolor", "#ffff")
    document.querySelector("body").style.backgroundImage = "url(../../assets/darkBG.png)"
    // showBtn.style.backgroundImage = "../../assets/SVGs/visibleD.svg"
    // hideBtn.style.backgroundImage = "../../assets/SVGs/hideD.svg"
    console.log(showBtn.style.color )
    logo.style.color = "#fff"
    dModeBtn.style.display = "none"
    lModeBtn.style.display = "inline"
    return
  }
  document.documentElement.style.setProperty("--bgcolor", "#ffff")
  document.documentElement.style.setProperty("--txtcolor", "black")
  document.querySelector("body").style.backgroundImage = "none"
  showBtn.style.backgroundImage = "../../assets/SVGs/visible.svg"
  hideBtn.style.backgroundImage = "../../assets/SVGs/hide.svg"
  logo.style.color = "#0008ff"

  lModeBtn.style.display = "none"
  dModeBtn.style.display = "inline"

}

dModeBtn.addEventListener("click", themeSelectore)
lModeBtn.addEventListener("click", themeSelectore)

let inputValidation = (e) => {

  if (e.target.type === "email") {
    let emailError = document.getElementById('email_error')
    let inputValue = e.target.value;

    if (inputValue.match(emailRegex)) {
      emailError.innerText = '';
      e.target.className = 'fokus';

    } else if (inputValue === '') {
      emailError.innerText = '';
      e.target.className = 'fokus';
    }
    else {
      emailError.innerText = 'Invalid';
      e.target.className = ' input-focus';
    }
    return

  } else {
    let passError = document.querySelector("#pass_error");
    let inputValue = e.target.value;

    if (inputValue.match(passRegex)) {
      passError.innerText = '';
      e.target.className = ' fokus';

    } else if (inputValue === '') {
      passError.innerText = '';
      e.target.className = 'fokus';
    }
    else {
      passError.innerText = 'include capital, number & symbol';
      e.target.className = ' input-focus';
    }

  }


}

emailInput.addEventListener("input", inputValidation)
passInput.addEventListener("input", inputValidation)

let passwordVisiblity = (e) => {
  e.preventDefault();
  if (e.target.id === "visible") {
    showBtn.style.display = "none"
    passInput.type = "text"
    hideBtn.style.display = "inline"
    return
  }
  hideBtn.style.display = "none"
  passInput.type = "password"
  showBtn.style.display = "inline"

}

showBtn.addEventListener("click", passwordVisiblity)
hideBtn.addEventListener("click", passwordVisiblity)

let rejerterUser = async (e) => {
  e.preventDefault();
  try {

    const response = await createUserWithEmailAndPassword(auth, emailInput.value, passInput.value)
    let user = response.user
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: user?.email,
        displayName: user?.displayName,

      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  } catch (error) {
    console.error(error.code)
  }


}

signUpBtn.addEventListener("click", rejerterUser)

let signInWithGoogle = async (e) => {
  e.preventDefault()
  try {
    const result = await signInWithPopup(auth, googleProvider)
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
    window.location.replace("../dashboard/dashboard.html")


  } catch (error) {
    console.error(error.code);
    console.error(error.message);

  }
}

googleSignInBtn.addEventListener("click", signInWithGoogle)
