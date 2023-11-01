let numero = prompt('Digite um numero.');
numero = Number(numero);
let numeroTitulo = document.getElementById('numeroTitulo');
let texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero
texto.innerHTML += `<p> Raiz quadrada: ${numero ** 0.5}. </p.>`;