const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const btnSomar = document.querySelector("#btnSomar");
const resultado = document.querySelector("#resultado");

btnSomar.addEventListener('click', function (){
    const soma = Number (n1.value) + Number(n2.value);
    resultado.textContent =soma;
});
