// BACK TOP TOP
window.onscroll = () => {
	let backToTop = document.querySelector(".back-to-top");
	if (
		document.body.scrollTo > 500 ||
		document.documentElement.scrollTop > 500
	) {
		backToTop.style.display = "flex";
	} else {
		backToTop.style.display = "none";
	}
};

// HEADER
let navItems = document.querySelectorAll(".nav-item");
navItems.forEach((navItem) => {
	navItem.addEventListener("click", (e) => {
		document.querySelector(".nav-item.active").classList.remove("active");
		e.target.classList.add("active");
	});
});

// FOOD
let btnFoodMenus = document.querySelectorAll(".food-menu-item button");
let foodItemList = document.querySelector(".food-item-list");

btnFoodMenus.forEach((btnFoodMenu) => {
	btnFoodMenu.addEventListener("click", (e) => {
		document
			.querySelector(".food-menu-item button.active")
			.classList.remove("active");
		e.target.classList.add("active");

		let typeFood = e.target.getAttribute("type-food");
		foodItemList.classList = "food-item-list " + typeFood;
	});
});

// PLAY ON SCROLL
let scroll =
	window.requestAnimationFrame ||
	function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};

let elToShow = document.querySelectorAll(".play-on-scroll");

isElInViewPort = (el) => {
	let rect = el.getBoundingClientRect();
	let viewHeight = window.innerHeight || document.documentElement.clientHeight;

	return (
		(rect.top <= 0 && rect.bottom >= 0) ||
		(rect.bottom >= viewHeight && rect.top <= viewHeight) ||
		(rect.top >= 0 && rect.bottom <= viewHeight)
	);
};

function loop() {
	elToShow.forEach((item) => {
		if (isElInViewPort(item)) {
			item.classList.add("start");
		} else {
			item.classList.remove("start");
		}
	});

	scroll(loop);
}

loop();


// MOBILE NAV
let mobileNavItems = document.querySelectorAll('.mb-nav-item')
let mobileNavBar = document.querySelector('.mb-nav-bar')
mobileNavItems.forEach( (item, index) => {
    item.addEventListener('click', (e) => {
        document.querySelector('.mb-nav-item.active').classList.remove('active')
        item.classList.add('active')

        mobileNavBar.style.left = index * 25 + '%'
    })
})