// el valor futuro de una inversion se calcula,
// teniendo en cuenta las siguientes variables:
// - valor presente
// - interes
// - total de periodos

// vf = vp(1+i)^n
function valor_futuro(vp, i, n) {
	return (vp * Math.pow(1 + i / 100, n)).toFixed(0);
}

// vp = vf / (1+i)^n
function valor_presente(vf, i, n) {
	return (vf / Math.pow(1 + i / 100, n)).toFixed(0);
}

// i = (vf / vp)^(1/n) - 1
function interes(vf, vp, n) {
	return Math.pow(vf / vp, 1 / n) - 1;
}

// ln(vf/vp)/ln(1+i) = n
function periodos(vf, vp, i) {
	return Math.log(vf / vp) / Math.log(1 + i);
}
