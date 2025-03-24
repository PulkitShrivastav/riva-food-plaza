//-------Section Refrences--------//
const continueSection = document.getElementById("continue");
const loginSection = document.getElementById("login");
const signupSection = document.getElementById("signup");
const forgetPassSection = document.getElementById("forgetPass");
const changePassSection = document.getElementById("changePass");
const passChangedSection = document.getElementById("passChanged");
//-------Section Refrences--------//

//---------Back Button Refrence----------//
const backButton = document.getElementById("backButton");
//---------Back Button Refrence----------//

//----------Continue Section Elements---------//
const emailBtn = document.getElementById("email-link");
//----------Continue Section Elements---------//

//-----------Login Section Elements------------//
const emailInput = document.getElementById("emailInput");
const signUpBtn = document.getElementById("SignUp");
const forgetButton = document.getElementById("forgetButton");
//-----------Login Section Elements------------//

//-------------Sign Up Section Elements-------------//
const signUpButton = document.getElementById("signUpButton");
const firstName = document.getElementById("firstname");
//-------------Sign Up Section Elements-------------//

//---------------Forget Password Section Elements--------------//
const forget1 = document.getElementById("forget-1"); //Sub Section takes email Input
const forget2 = document.getElementById("forget-2"); //Sub Section takes verification code input also used to Verify email while sign up Process
const continueButton1 = document.getElementById("continueButton-1"); //continue button for email input
const continueButton2 = document.getElementById("continueButton-2"); //continue button for verification code Input
const inputEmail = document.getElementById("inputEmail");
const veriCode = document.getElementById("veri-code");
//---------------Forget Password Section Elements--------------//

//-----------Change Password Section Elements------------//
const continueButton3 = document.getElementById("continueButton-3");
const newPassword = document.getElementById("newPassword");
//-----------Change Password Section Elements------------//

//--------------Password Changed Section Elements--------------//
const okayButton = document.getElementById("okayButton");
//--------------Password Changed Section Elements--------------//

//--------Local Variables-----------//
const hiddenClass = "hidden";
const backgroundClass = "background";
let wasInSignUpSec = false;
//--------Local Variables-----------//

function hide(elem) {
	elem.classList.remove(backgroundClass);
	elem.classList.add(hiddenClass);
}

function show(elem) {
	elem.classList.remove(hiddenClass);
	elem.classList.add(backgroundClass);
}

function backButtonOff() {
	backButton.classList.add("hid");
	backButton.classList.remove("vis");
}

function backButtonOn() {
	backButton.classList.add("vis");
	backButton.classList.remove("hid");
}

window.onload = () => {
	emailBtn.onclick = function (e) {
		e.preventDefault();
		show(loginSection);
		emailInput.focus();
		hide(continueSection);
		backButtonOn();
	};
	signUpBtn.onclick = function () {
		show(signupSection);
		firstName.focus();
		hide(loginSection);
	};
	backButton.onclick = function () {
		if (loginSection.classList.contains(backgroundClass)) {
			// Check for Login Section
			show(continueSection);
			backButtonOff();
			hide(loginSection);
		} else if (signupSection.classList.contains(backgroundClass)) {
			show(loginSection);
			hide(signupSection);
		} else if (forgetPassSection.classList.contains(backgroundClass)) {
			if (wasInSignUpSec) {
				show(signupSection);
				hide(forgetPassSection);
				document.getElementById("veri-head").textContent =
					"Don't worry! We have your back.";
				forget1.classList.remove(hiddenClass);
				forget2.classList.add(hiddenClass);
				wasInSignUpSec = false;
			} else if (forget1.classList.contains(hiddenClass)) {
				forget2.classList.add(hiddenClass);
				forget1.classList.remove(hiddenClass);
			} else {
				show(loginSection);
				hide(forgetPassSection);
				forget1.classList.remove(hiddenClass);
				forget2.classList.add(hiddenClass);
			}
		} else if (changePassSection.classList.contains(backgroundClass)) {
			show(forgetPassSection);
			hide(changePassSection);
		} else if (passChangedSection.classList.contains(backgroundClass)) {
			show(changePassSection);
			hide(passChangedSection);
		}
	};
	forgetButton.onclick = function () {
		hide(loginSection);
		show(forgetPassSection);
		inputEmail.focus();
		continueButton1.onclick = function () {
			forget1.classList.add(hiddenClass);
			forget2.classList.remove(hiddenClass);
			veriCode.focus();
		};
		continueButton2.onclick = function () {
			hide(forgetPassSection);
			show(changePassSection);
			newPassword.focus();
			forget1.classList.remove(hiddenClass);
			forget2.classList.add(hiddenClass);
		};
		continueButton3.onclick = function () {
			hide(changePassSection);
			show(passChangedSection);
		};
		okayButton.onclick = function () {
			hide(passChangedSection);
			show(continueSection);
			backButton.classList.add("hid");
			backButton.classList.remove("vis");
		};
	};
	signUpButton.onclick = function () {
		hide(signupSection);
		show(forgetPassSection);
		document.getElementById("veri-head").textContent = "Verify Your Email.";
		forget1.classList.add(hiddenClass);
		forget2.classList.remove(hiddenClass);
		veriCode.focus();
		wasInSignUpSec = true;
		continueButton2.onclick = function () {
			forget1.classList.remove(hiddenClass);
			forget2.classList.add(hiddenClass);
			hide(forgetPassSection);
			show(continueSection);
			backButtonOff();
			document.getElementById("veri-head").textContent =
				"Don't worry! We have your back.";
			wasInSignUpSec = false;
		};
	};
};
