//paggination
const tabs = document.getElementById('pages');
const contents = document.getElementById('tariffs');

const changeClass = el => {
	for(let i=0; i < tabs.children.length; i++) {
		tabs.children[i].classList.remove('actives');
	}
	el.classList.add('actives');
}

tabs.addEventListener('click', event=> {
	const currTab = event.target.dataset.btn
	changeClass(event.target);
	for(let i=0; i < contents.children.length; i++) {
		contents.children[i].classList.remove('actives');
		if(contents.children[i].dataset.content == currTab) {
			contents.children[i].classList.add('actives');
		}
	}
})
