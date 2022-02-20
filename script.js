const formBtn = document.querySelector('.form-button');
const emailInput = document.querySelector('#email-input');

formBtn.addEventListener('click', e => {
    if (emailInput.value < 1) {
        document.querySelector('.container-form--input input').style.border = '1px solid red';
        document.querySelector('.img-error').style.display = 'flex';
        document.querySelector('.error-message').style.display = 'flex';
        document.querySelector('.error-message').innerHTML = 'The field cannot be empty.';
    }
    else {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regex.test(emailInput.value.toLowerCase()) == false) {
            document.querySelector('.container-form--input input').style.border = '1px solid red';
            document.querySelector('.img-error').style.display = 'flex';
            document.querySelector('.error-message').style.display = 'flex';
            document.querySelector('.error-message').innerHTML = 'Invalid email format.';
        }
        else {
            alert('OK');
            document.querySelector('.container-form--input input').style.border = '1px solid hsl(0, 36%, 70%)';
            document.querySelector('.img-error').style.display = 'none';
            document.querySelector('.error-message').style.display = 'none';
        }
    }
    
    
})