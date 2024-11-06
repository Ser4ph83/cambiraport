document.getElementById('form-contato').addEventListener('submit', function(e) {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let mensagem = document.getElementById('mensagem').value;

  if (nome && email && mensagem) {
    alert('Mensagem enviada com sucesso!');
    
    document.getElementById('form-contato').reset();
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});

document.body.addEventListener('click', function() {
        const audio = document.getElementById('audio');
        audio.play(); 
    });
