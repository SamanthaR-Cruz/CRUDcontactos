function confirmarEliminacion(idContacto) {
  inyectarEstilosConfirmacion();

  const overlay = document.createElement('div');
  overlay.className = 'confirm-overlay';

  const popup = document.createElement('div');
  popup.className = 'confirm-box';

  const mensaje = document.createElement('p');
  mensaje.textContent = "¿Quieres eliminar este contacto?";

  const botones = document.createElement('div');
  botones.className = 'confirm-buttons';

  const btnCancelar = document.createElement('button');
  btnCancelar.textContent = "Cancelar";
  btnCancelar.className = 'btn-cancelar';
  btnCancelar.onclick = function () {
    document.body.removeChild(overlay);
  };

  const btnAceptar = document.createElement('button');
  btnAceptar.textContent = "Eliminar";
  btnAceptar.className = 'btn-aceptar';
  btnAceptar.onclick = function () {
    document.formTablaGral.txtClave.value = idContacto;
    document.formTablaGral.txtOpe.value = 'b';
    document.formTablaGral.submit();
    document.body.removeChild(overlay);
  };

  botones.appendChild(btnCancelar);
  botones.appendChild(btnAceptar);

  popup.appendChild(mensaje);
  popup.appendChild(botones);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
}

function inyectarEstilosConfirmacion() {
  if (document.getElementById('estilos-confirm-popup')) return; // evita duplicar estilos

  const estilo = document.createElement('style');
  estilo.id = 'estilos-confirm-popup';
  estilo.textContent = `
    .confirm-overlay {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      animation: fadeIn 0.3s ease-in-out;
    }

    .confirm-box {
      background-color: rgb(156, 31, 31);
      padding: 2rem;
      border-radius: 1rem;
      text-align: center;
      box-shadow: 0 15px 30px rgba(0,0,0,0.2);
      animation: scaleIn 0.3s ease;
      max-width: 90%;
      width: 320px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .confirm-box p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      color:  rgb(230, 224, 224);;
    }

    .confirm-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .confirm-buttons button {
      padding: 0.6rem 1.2rem;
      font-size: 1rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    .btn-cancelar {
      background-color: #e0e0e0;
      color: #333;
    }

    .btn-cancelar:hover {
      background-color: #d5d5d5;
    }

    .btn-aceptar {
      background-color: #e53935;
      color: white;
    }

    .btn-aceptar:hover {
      background-color: #d32f2f;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
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
