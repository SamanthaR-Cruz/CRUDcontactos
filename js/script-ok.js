window.addEventListener('DOMContentLoaded', function () {
  inyectarEstilosPopup();
  mostrarPopup();
});

function inyectarEstilosPopup() {
  const estilo = document.createElement('style');
  estilo.textContent = `
    .popup-overlay {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      animation: fadeIn 0.3s ease-in-out;
    }

    .popup-box {
      background-color:rgb(27, 85, 27);
      padding: 2rem;
      border-radius: 1rem;
      text-align: center;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
      animation: scaleIn 0.3s ease;
      max-width: 90%;
      width: 300px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .popup-box .icon-check {
      font-size: 2rem;
      color: #4caf50;
      margin-bottom: 0.5rem;
      display: block;
    }

    .popup-box p {
     
      font-size: 1.1rem;
      color::rgb(167, 33, 125);
    }

    .popup-button {
      background-color: #4caf50;
      color: white;
      padding: 0.6rem 1.2rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.2s ease-in-out;
    }

    .popup-button:hover {
      background-color: #45a049;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    @keyframes scaleIn {
      from {
        transform: scale(0.9);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(estilo);
}

function mostrarPopup() {
  const overlay = document.createElement('div');
  overlay.className = 'popup-overlay';

  const popup = document.createElement('div');
  popup.className = 'popup-box';

  const icon = document.createElement('span');
  icon.className = 'icon-check';
  icon.textContent = '✔'; 

  const parrafo = document.createElement('p');
  parrafo.textContent = "Acción realizada correctamente";

  const button = document.createElement('button');
  button.textContent = 'Aceptar';
  button.className = 'popup-button';

  // Cierra manualmente
  button.addEventListener('click', function () {
    document.body.removeChild(overlay);
  });

  // Cierra automáticamente en 3 segundos
  setTimeout(() => {
    if (document.body.contains(overlay)) {
      document.body.removeChild(overlay);
    }
  }, 3000);

  popup.appendChild(icon);
  popup.appendChild(parrafo);
  popup.appendChild(button);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
}
