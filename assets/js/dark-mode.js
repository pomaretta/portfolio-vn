const checkbox = document.querySelector('input[name=theme]');

if(document.cookie) {
	var cookie = document.cookie.split('=');

	if(cookie[1] == 'true'){
		document.documentElement.setAttribute('data-theme','dark');
		checkbox.checked = true;
	} else {
		document.documentElement.setAttribute('data-theme','light');
		checkbox.checked = false;
	}

}

checkbox.addEventListener('change', function() {
	if (this.checked) {
		trans();
		document.documentElement.setAttribute('data-theme', 'dark');
		document.cookie = "darkmode=true";
	} else {
		trans();
		document.documentElement.setAttribute('data-theme', 'light');
		document.cookie = "darkmode=false";
	}
});

let trans = () => {
	document.documentElement.classList.add('transition');
	window.setTimeout(() => {
		document.documentElement.classList.remove('transition');
	}, 1000);
};
