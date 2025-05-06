var checkbox = document.querySelector('input[name=mode]')
checkbox.addEventListener('change', function() {
    if(this.checked) {
        document.body.classList.add("dark")
        var moon = document.getElementById('moon')
        moon.innerHTML = feather.icons['sun'].toSvg({'fill': 'var(background-color)'})
    } else {
        document.body.classList.remove("dark")
        var moon = document.getElementById('moon')
        moon.innerHTML = feather.icons['moon'].toSvg({'fill': 'var(background-color)'})
    }
})