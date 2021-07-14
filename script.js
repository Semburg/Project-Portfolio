const themeDot = document.getElementsByClassName('theme-dot')


// Theme change with save 

let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

for (let i = 0; i < themeDot.length; i++) {
    themeDot[i].addEventListener('click', function () {
        const mode = this.dataset.mode
        console.log('events working', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'main.css'
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode)
}

// Email Sending form


const form = document.getElementById('contact-form')

form.addEventListener('submit', formSend)


async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form)

    let formData = new FormData(form)

    if (error===0) {
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        })

        if (response.ok) {
           let result = await response.json() 
           alert(result.message)
           formPreview.innerHTML = ''
           form.reset()
        } else {
            alert('Error')
        }

    } else {
        alert('Form not complete')
        console.log(error)
    }

}


function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('.input-field')

    for (let i = 0; i < formReq.length; i++) {
        const element = formReq[i];

        formRemoveError(element)

        if (element.classList.contains('email')) {
            if (validateEmail(element)) {
                formAddError(element)
                error++
            }
        } else if (element.value === '') {
            formAddError(element)
            error++
        }

    }
    return error
}

function formAddError(input) {
    input.parentElement.classList.add('_error')
    input.classList.add('_error')
}

function formRemoveError(input) {
    input.parentElement.classList.remove('_error')
    input.classList.remove('_error')
}

function validateEmail(email) {
    return  re = !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
}