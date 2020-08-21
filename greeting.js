const greetingForm = document.querySelector(".js-greeting"),
     greetingInput = greetingForm.querySelector("input"),
     greetingText = greetingForm.querySelector("h1");

function handleSubmit(event){
    event.preventDefault();
    const inputValue = greetingInput.value;
    greetingText.innerText = `${inputValue}`;
}

function getGreetingText(){
    greetingForm.addEventListener("submit",handleSubmit);
}

function init(){
    getGreetingText();
}
init();