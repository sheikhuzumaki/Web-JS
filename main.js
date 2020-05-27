const fName = document.getElementById('first');
const lName = document.getElementById('last');
const mail = document.getElementById('email');
const pass = document.getElementById('password');
const cpass = document.getElementById('confirmpassword');
const button = document.getElementById('sign');

button.addEventListener('click' , func);

	function func(e) {
	e.preventDefault();

	if (fName.value === '' || lName.value === '' || mail.value === '' || pass.value === '' || cpass.value === '' ) {
		alert('Mehnat kitti ay Poora likh');
	}
	else if (pass.value.length < 5) {
		alert('Password 6 to uthay rakh');
	}
	else if (pass.value != cpass.value) {
		alert('Chawla marun to baaz na ae , dono password ik vargay likh');
	}
	else {
		alert('Hun sahi hoya he');
		window.location.href = "login.html";
	}

	window.localStorage.setItem('First Name' , fName.value);
	window.localStorage.setItem('Last Name' , lName.value);
	window.localStorage.setItem('email' , email.value);
	window.localStorage.setItem('Password' , pass.value);
	window.localStorage.setItem('Confirm Password' , cpass.value);
	
}






