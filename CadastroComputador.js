window.onload = iniciar;
var formulario;

function iniciar(){
    let formulario = document.getElementsByTagName('form')[0];
    formulario.addEventListener('submit', enviar);
}

function enviar(event){
    Cadastrar();
    event.preventDefault();
}
function Cadastrar(){
    let formData = new FormData(formulario);
    fetch("http://dskevin.atwebpages.com/CadastrarComputador.php",
    {
        method: 'POST',
        body:formData
    }).then(resposta => resposta.text())
      .then(texto => console.log(texto));
      return false;
}