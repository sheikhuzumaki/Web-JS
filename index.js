var number1 = document.getElementById('num1');
var oper = document.getElementById('op');
var number2 = document.getElementById('num2');
const result = document.getElementById('res');


const showbtn = document.getElementById('show');

showbtn.addEventListener('click' , showfunc);

function showfunc (e) {
	e.preventDefault();
	const showcont = document.getElementById('showcontainer') ;
	showcont.style.display = 'block';

}

	function Add () {
		result.textContent = +number1.value + +number2.value ; 
	}
	
	function Substract () {
		result.textContent = +number1.value - +number2.value ; 
	}

	function Multiply () {
		result.textContent = +number1.value * +number2.value ; 
	}

	function Divide () {
		result.textContent = +number1.value / +number2.value ;
	}	

const calcbtn = document.getElementById('calc');
calc.addEventListener('click' , calculatefunc);

function calculatefunc (e) {
	e.preventDefault();
	window.localStorage.setItem('Operand', oper.value);
	result.textContent = number1 ;
	switch(oper.value) {
		case '+' :
			Add();
			break;
		case '-' :
			Substract();
			break;
		case '*' :
			Multiply();
			break;
		case '/' :
			Divide();
			break;			
	}
}

const resestbtn = document.getElementById('reset');
const inputs = document.getElementsByTagName('input');
const output = document.getElementsByTagName('output');

resestbtn.addEventListener('click' , resetfunc);

function resetfunc (e) {
	e.preventDefault();
	
	number1.value = "";
	oper.value = "";
	number2.value = "";
	result.value = "Null";
			
}