const mail1 = document.getElementById('email1');
const pass1 = document.getElementById('password1');
const button1 = document.getElementById('log');


button1.addEventListener('click' , onsubmit);

function onsubmit (e) {
	e.preventDefault();
	if (mail1.value === '' || pass1.value === '') {
		alert('Poora likh maa daya');
	}else if ((mail1.value === localStorage.getItem('email') && pass1.value === localStorage.getItem('Password'))) {
		alert('Agay O');
		window.location.href = "index.html";
	}else{
		alert('Halay likhya c fair galt');
	}
}