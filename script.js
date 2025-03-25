document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
  
    // Guarda el nombre en el navegador
    localStorage.setItem("usuarioNombre", nombre);
  
    // Redirige a la página de bienvenida
    window.location.href = "bienvenida.html";
  });
  
