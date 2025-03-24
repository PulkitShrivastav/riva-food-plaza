const continueSection = document.getElementById("continue")
const loginSection = document.getElementById("login")
const backButton = document.getElementById("backButton")
const emailBtn = document.getElementById("email-link")  //Continue With email in Continue Section
const signUpBtn = document.getElementById("SignUp")  // Sign Up button in log In Section
const signupSection = document.getElementById("signup")
const emailInput = document.getElementById("emailInput")  //Enter Email Field in Log In Section
const firstName = document.getElementById("firstname")  
const forgetButton = document.getElementById("forgetButton")  //forget password button in login section
const forgetPassSection = document.getElementById("forgetPass")
const continueButton1 = document.getElementById("continueButton-1")  //continue button in forget password section for entering email
const continueButton2 = document.getElementById("continueButton-2")  //continue button in forget password section for verification code
const forget1 = document.getElementById("forget-1")  //sub section in forget password section asking to enter email
const forget2 = document.getElementById("forget-2")  //sub section in forget password section askinf for verification code
const changePassSection = document.getElementById("changePass")
const continueButton3 = document.getElementById("continueButton-3")
const passChangedSection = document.getElementById("passChanged")
const okayButton = document.getElementById("okayButton")
const inputEmail = document.getElementById("inputEmail")  // Enter Email field  in Forget Password Section
const veriCode = document.getElementById("veri-code")  // verfication feild in forget password section
const newPassword = document.getElementById("newPassword")
let hiddenClass = "hidden"
let backgroundClass = "background"

function hide(elem) {
    elem.classList.remove(backgroundClass)
    elem.classList.add(hiddenClass)
}

function show(elem) {
    elem.classList.remove(hiddenClass)
    elem.classList.add(backgroundClass)
}

window.onload = () => {
    emailBtn.onclick = function(e) {
        e.preventDefault()
        show(loginSection)
        emailInput.focus()
        continueSection.classList.add(hiddenClass)
        backButton.classList.add("vis")
        backButton.classList.remove("hid")
    }
    signUpBtn.onclick = function() {
        show(signupSection)
        firstName.focus()
        loginSection.classList.add(hiddenClass)
    }
    backButton.onclick = function() {
        if (loginSection.classList.contains(backgroundClass)) { // Check for Login Section
            show(continueSection)
            backButton.classList.add("hid")
            backButton.classList.remove("vis")
            hide(loginSection)
        }
        else if (signupSection.classList.contains(backgroundClass)) {
            show(loginSection)
            hide(signupSection)
        }
        else if (forgetPassSection.classList.contains(backgroundClass)) {
            if (forget1.classList.contains(hiddenClass)) {
                forget2.classList.add(hiddenClass)
                forget1.classList.remove(hiddenClass)
            }
            else {
                show(loginSection)
                hide(forgetPassSection)
                forget1.classList.remove(hiddenClass)
                forget2.classList.add(hiddenClass)
            }
        }
        else if (changePassSection.classList.contains(backgroundClass)) {
            show(forgetPassSection)
            hide(changePassSection)
        }
        else if (passChangedSection.classList.contains(backgroundClass)) {
            show(changePassSection)
            hide(passChangedSection)
        }
    }
    forgetButton.onclick = function() {
        hide(loginSection)
        show(forgetPassSection)
        inputEmail.focus()
        continueButton1.onclick = function () {
            forget1.classList.add(hiddenClass)
            forget2.classList.remove(hiddenClass)
            veriCode.focus()
        }
        continueButton2.onclick = function() {
            hide(forgetPassSection)
            show(changePassSection)
            newPassword.focus()
            forget1.classList.remove(hiddenClass)
            forget2.classList.add(hiddenClass)
        }
        continueButton3.onclick = function() {
            hide(changePassSection)
            show(passChangedSection)
        }
        okayButton.onclick = function() {
            hide(passChangedSection)
            show(continueSection)
            backButton.classList.add("hid")
            backButton.classList.remove("vis")
        }
    }
}