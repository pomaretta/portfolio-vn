/* Selectores */
const burger = document.querySelector('.burger');
const links = document.querySelector('.links');

/* 
Añadimos la interacción
Cuando hagamos click en el elemento "burger", se va activar al función
que hace que el elemento "links" donde tenemos la navegación se le añada
la clase .active, que en el CSS, hace que ocurra una animación.
*/

burger.addEventListener('click', () => {
	console.log('Burger opens!');
	if (links.classList.contains('active')) {
		links.classList.remove('active');
		burger.classList.remove('toggle');
	} else {
		links.classList.add('active');
		burger.classList.add('toggle');
	}
});
