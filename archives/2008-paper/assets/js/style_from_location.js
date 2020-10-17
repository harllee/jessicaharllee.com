function setHover(element) {
	element.style.backgroundPositionY = "-135px";
}

function setHere(element) {
	child_tags = element.getElementsByTagName('a');
	for(cur_child in child_tags) {
		child_tags[cur_child].className = element.className + " here";
	}
}

function setThere(element) {
	element.style.backgroundPositionY = "-45";
}

function styleNavFromLocation() {
	cur_location = document.location.href;
	cur_location_directories = cur_location.substring(0,cur_location.lastIndexOf('/'));
	
	if(cur_location_directories.indexOf('portfolio') != -1) { // in the portfolio
		setHere(document.getElementById('header_nav_portfolio'));
	} else if(cur_location_directories.indexOf('blog') != -1) { // in the blog
		setHere(document.getElementById('header_nav_blog'));
	} else if(cur_location_directories.indexOf('about') != -1) { // in the about page
		setHere(document.getElementById('header_nav_about'));
	}
}