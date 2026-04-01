let acc = document.querySelector(".accordion");
let panel = document.querySelector('.panel')

acc.addEventListener("click", function() {
	this.classList.toggle("active");

	if (panel.style.display === "block") {
		panel.style.display = "none";
	} else {
		panel.style.display = "block";
	}
});
document.addEventListener('click', function(e) {
	let target = e.target;
	if (!target.closest(".accordion-container")) {
		acc.classList.remove('active')
		panel.style.display = "none";
	}
})

// task 2

let inputs = document.querySelectorAll('.inputs')
let fullContainer = document.querySelector('.input-container')
const form = document.querySelector('.form')
const btn = document.querySelector('#btn')
const clientName = document.querySelector('#name')
const clientSurname = document.querySelector('#surname')
const clientFullName =  document.querySelector('#fullname')

form.addEventListener('submit', function(e) {
	e.preventDefault();
	return {
		clientName,
		clientSurname,
		clientFullName,
		btn
	}
})

btn.addEventListener('click', function() {
	FullName()
})

function FullName() {
	let p = document.createElement('p');
	let div = document.createElement('div');

	p.textContent = clientName.value + ' ' + clientSurname.value + ' ' + clientFullName.value + ' ' 

	div.append(p)
	fullContainer.append(div)

	return {
		clientName,
		clientSurname,
		clientFullName,
		btn
	}
}

inputs.forEach(el => {
	el.addEventListener('keypress', (e) => {
		const RegExp = /[а-я\s-enter]/ig;
		if(!RegExp.test(e.key)) {
			e.preventDefault
		}
	})
	el.addEventListener('blur', () => {
		let step1 = el.value.replace(/[^а-я\s-]|^[^а-я]/ig, '').replace(/\s+/g, ' ').replace(/-+/g, '-');
		if (step1) {
			let result = step1[0].toUpperCase() + step1.slice(1);
			el.value = result;
		}
	})
})

inputs.forEach(ele => {
	ele.addEventListener('keypress', function() {
		var that = this;
	
		setTimeout(function() {
				var res = /[^а-яА-ЯЁё\s\-]/g.exec(that.value);
				that.value = that.value.replace(res, '');
		}, 0);
	});
})


inputs.onblur = function() {
	inputs.forEach(elem => {
		elem.addEventListener('keyup', function() {
			const  newValue = inputs.values;
			newValue = newValue.replace(/^[\s\-]+/g, '');
			newValue = newValue.replace(/\s{2, }/g, ' ');
			newValue = newValue.replace(/\-{2,}/g, '-');
		});
	})
};


var scrollToTopBtn = document.getElementById("scrollbtn")

// function scrollToTop() {
//   rootElement.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   })
// }

scrollToTopBtn.onclick = function() {
	window.scrollTo(pageXOffset, 0);
};

window.addEventListener('scroll', function() {
	scrollToTopBtn.hidden = (pageYOffset < document.documentElement.clientHeight);
});

scrollToTopBtn.addEventListener("click", scrollToTop)
