const content = [
	{
		hero_img_url_mobile: './images/mobile-image-hero-1.jpg',
		hero_img_url_desktop: './images/desktop-image-hero-1.jpg',
		heading: 'Discover innovative ways to decorate',
		text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
	},
	{
		hero_img_url_mobile: './images/mobile-image-hero-2.jpg',
		hero_img_url_desktop: './images/desktop-image-hero-2.jpg',
		heading: 'We are available all across the globe',
		text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
	},
	{
		hero_img_url_mobile: './images/mobile-image-hero-3.jpg',
		hero_img_url_desktop: './images/desktop-image-hero-3.jpg',
		heading: 'Manufactured with the best materials',
		text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
	},
];

const heroImgElement = document.querySelector('.hero-img');
const introHeadingElement = document.querySelector('.intro-heading');
const introTextElement = document.querySelector('.intro-text');
const closeBtnElement = document.querySelector('.close-btn');
const burgerBtnElement = document.querySelector('.burger-btn');
const navContainerElement = document.querySelector('.nav-container');
const sliderLeftBtnElement = document.querySelector('.slider-btn.left');
const sliderRightBtnElement = document.querySelector('.slider-btn.right');

let contentIndex = 0;

function displayContent(contentIndex) {
	introHeadingElement.innerText = content[contentIndex].heading;
	introTextElement.innerText = content[contentIndex].text;
	heroImgElement.style.backgroundImage = `url(${content[contentIndex].hero_img_url_mobile})`;

	if (window.innerWidth >= 501) {
		heroImgElement.style.backgroundImage = `url(${content[contentIndex].hero_img_url_desktop})`;
	}
}

displayContent(contentIndex);

window.addEventListener('resize', () => {
	displayContent(contentIndex);
});

sliderRightBtnElement.addEventListener('click', () => {
	contentIndex += 1;
	if (contentIndex === content.length) {
		contentIndex = 0;
	}
	displayContent(contentIndex);
});

sliderLeftBtnElement.addEventListener('click', () => {
	contentIndex -= 1;
	if (contentIndex < 0) {
		contentIndex = content.length - 1;
	}
	displayContent(contentIndex);
});

burgerBtnElement.addEventListener('click', () => {
	navContainerElement.classList.add('shown');
});

closeBtnElement.addEventListener('click', () => {
	navContainerElement.classList.remove('shown');
});
