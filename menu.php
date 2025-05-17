<nav>
<?php
if (isset($_SESSION["rol"])) {
    if ($_SESSION["rol"] == "1") {
        // Administrador
        ?>
        <ul>
            <li><a href="inicio.php" class="menu">Inicio</a></li>
            <li><a href="muestraContactos.php" class="menu">Mis Contactos</a></li>
            <li><a href="contactosUsuario.php" class="menu">Todos los Contactos</a></li>
            <li><a href="logout.php" class="menu">Cerrar Sesión</a></li>
        </ul>
        <?php
    } elseif ($_SESSION["rol"] == "2") {
        // Visualizador
        ?>
        <ul>
            <li><a href="inicio.php" class="menu">Inicio</a></li>
            <li><a href="muestraContactos.php" class="menu">Ver Mis Contactos</a></li>
            <li><a href="logout.php" class="menu">Salir</a></li>
        </ul>
        <?php
    }
} else {
    ?>
    <ul>
        <li><a id="menu-btn" href="index.php" class="menu">Iniciar Sesión</a></li>
    </ul>
    <?php
}
?>
</nav>
