document.getElementById('olho').addEventListener('mousedown', function() {
    document.getElementById('senha').type = 'text';
  });
  
  document.getElementById('olho').addEventListener('mouseup', function() {
    document.getElementById('senha').type = 'password';
  });
  
  // Para que o password não fique exposto apos mover a imagem.
  document.getElementById('olho').addEventListener('mousemove', function() {
    document.getElementById('senha').type = 'password';
  });


  document.getElementById('olho').addEventListener('touchstart', function() {
    document.getElementById('senha').type = 'text';
  });

  document.getElementById('olho').addEventListener('touchend', function() {
    document.getElementById('senha').type = 'password';
  });

  document.getElementById('olho').addEventListener('touchemove', function() {
    document.getElementById('senha').type = 'password';
  });

  document.getElementById('olho').ondragstart = function() { return false; };