const themeDot = document.getElementsByClassName('theme-dot')

let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

for (let i = 0; i < themeDot.length; i++) {
    themeDot[i].addEventListener('click', function() {
        const mode = this.dataset.mode
        console.log('events working', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
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