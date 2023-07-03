


function validateForm() {

	let sb = document.querySelector("#Submit");
	let flname = document.querySelector('#flname');
	let email = document.querySelector('#email');
	let message = document.querySelector('#message');

	let Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


	let Data = {};
	let errors = [];



	if (flname.value.trim() !== '') {

		Data.flname = flname.value.trim();
	  } else {
		errors.push('Full name is required');
	  }
	  

	if (email.value.trim() !== '') {
		if (Regex.test(email.value.trim())) {
            Data.email = email.value.trim();
		} else {
		  errors.push('Invalid email format');
		}
	  } else {
		errors.push('Email is required');
	  }
	  



	if (message.value.trim() !== '') {
		Data.message = message.value.trim();
	  } else {
		errors.push('Message is required');
	  }
	  

	if (errors.length > 0) {
	
		console.log('Errors:', errors);
		return false;
	  } else {
	
		console.log('Form data:', Data);
	
		flname.value = '';
		email.value = '';
		message.value = '';
		return false;
	  }

	sb.addEventListener("click", variable);

}

let variable = function () {
  for(let i = 0; i < flname.length; i++){
      console.log(flname[i].innerText);
  }
};



  


