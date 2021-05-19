//utilizando condicional para converter o type de Password para Text e vice-versa

document.getElementById('olho').addEventListener('click', function() {
    if (document.getElementById('senha').type == 'password'){
      document.getElementById('senha').type = 'text';
      document.getElementById('olho').src = 'olhoFechado.png';
    }
    else if (document.getElementById('senha').type == 'text') {
      document.getElementById('senha').type = 'password';
      document.getElementById('olho').src = 'olhoAberto.png';
    }
  });
    
  // Para que o password não fique exposto apos mover a imagem.
  // document.getElementById('olho').addEventListener('mousemove', function() {
  //   document.getElementById('senha').type = 'password';
  // });

  document.getElementById('olho').addEventListener('touchleave', function() {
    if (document.getElementById('senha').type == 'password'){
      document.getElementById('senha').type = 'text';
      document.getElementById('olho').src = 'olhoFechado.png';
    }
    else if (document.getElementById('senha').type == 'text') {
      document.getElementById('senha').type = 'password';
      document.getElementById('olho').src = 'olhoAberto.png';
    }
  });

  // document.getElementById('olho').addEventListener('touchend', function() {
  //   document.getElementById('senha').type = 'password';
  // });

  // document.getElementById('olho').addEventListener('touchemove', function() {
  //   document.getElementById('senha').type = 'password';
  // });

  document.getElementById('olho').ondragstart = function() { return false; };


  // atrasando focus
  setTimeout(() => this.focus(0), 1000);