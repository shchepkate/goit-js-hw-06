const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);
function handleSubmit (event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    
    if (!email || !password) {
        return alert ('Будь ласка, заповніть всі поля!')} 
        
        else {
        const formObj = {email, password};
        console.log(formObj);

        event.currentTarget.reset();
        }
}
