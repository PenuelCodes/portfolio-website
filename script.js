

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

const themeDots = document.querySelectorAll('div.theme-dot');

const handleThemeClick = (e) => {
	const el = e.target;
	let mode = el.dataset.mode
        setTheme(mode)
}
function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}
themeDots.forEach(themeDot => {
	themeDot.addEventListener('click',handleThemeClick)
})
