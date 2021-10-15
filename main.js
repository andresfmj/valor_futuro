const form = document.querySelector('#inversion-form');
const input = document.querySelectorAll('input');

const vp = form.elements['vp'];
const vf = form.elements['vf'];
const i = form.elements['i'];
const n = form.elements['n'];

let x = null;

const handleSubmit = (e) => {
	e.preventDefault();

	let c = loopInputs(input);
	if (c > 1) {
		alert('No puedes calcular mas de una variable');
		return;
	}

	if (vp.value.trim() == '') {
		if (!x) {
			x = 'vp';
		}
	}

	if (vf.value.trim() == '') {
		if (!x) {
			x = 'vf';
		}
	}

	if (i.value.trim() == '') {
		if (!x) {
			x = 'i';
		}
	}

	if (n.value.trim() == '') {
		if (!x) {
			x = 'n';
		}
	}

	if (x) {
		calculate(x);
	} else {
		alert('No hay variables para calcular');
		return;
	}
};

const calculate = (v) => {
	// console.log(v);
	let result = null;
	if (v == 'vp') {
		result = valor_presente(vf.value, i.value, n.value);
	} else if (v == 'vf') {
		result = valor_futuro(vp.value, i.value, n.value);
	} else if (v == 'i') {
		result = (
			(Math.pow(vf.value / vp.value, 1 / n.value) - 1) *
			100
		).toFixed(0);
	} else if (v == 'n') {
		result = (
			Math.log(vf.value / vp.value) / Math.log(1 + i.value / 100)
		).toFixed(0);
	}
	form.elements[x].value = result;
};

const loopInputs = (inputs) => {
	let c = 0;
	inputs.forEach((item) => {
		if (item.value.trim() == '') {
			x = item.name;
			c++;
		} else {
			x = null;
		}
	});
	return c;
};

form.addEventListener('submit', handleSubmit);

input.forEach((item) => {
	item.addEventListener('change', (e) => {
		if (e.target.value.trim() == '') {
			x = e.target.name;
		} else {
			x = null;
		}
	});
});
