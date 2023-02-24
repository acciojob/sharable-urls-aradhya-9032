// your code here
var nameElement = document.quertSelector(#name);
var yearElement = document.quertSelector(#year);
var btn = document.quertSelector(#button);

function handleSubmit(event){
	event.preventDefault();
	var h3Value = 'https://localhost:8080/';
	var name = nameElement.value;
	var year = yearElement.value;
	
	if(name && year){
		h3Value += '?name=' + name + '&year+' + year;
	}
		
	else if(name && !year){
		h3Value += '?name='+ name;
	}
			
	else if(!name && year){
		h3Value += '?year='+ year;
	}
	
	h3textContent = h3Value;
}
form.addEventListener('submit',handleSubmit)