
function btnMenu(){
    let menu = document.querySelector('.menu').style.transform = "translateX(0px)";
    let telaInvisivel = document.querySelector('.tela-inivisivel').style.display = 'block';
}

function telaInvisivel(){
    let menu = document.querySelector('.menu').style.transform = "translateX(150px)";
    let telaInvisivel = document.querySelector('.tela-inivisivel').style.display = 'none';
}

function btnEnviar(){
    alert('Messagem enviada com sucesso!');
}