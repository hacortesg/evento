<template>


  <!-- --------------------------------FIN DEL HEADER------------------------- -->


  <!-- --------------------------------INICIO DEL NAV------------------------- -->
  <nav class="nav">
    <ul class="main-nav">
      <li class="main-nav__item"><a href="index.html"><i class="fas fa-home"></i>Inicio</a></li>
      <li class="main-nav__item"><a href="cotizacion.html">Cotización</a></li>
      <li class="main-nav__item"><a href="registro.html">Registrarse</a></li>
      <li class="main-nav__item"><a href="#contactos">Ingrese</a></li>
      <li class="main-nav__item"><a href="#footer">Contáctenos</a></li>
    </ul>
  </nav>
  <!-- --------------------------------FIN DEL NAV------------------------- -->

  <!-- --------------------------------INICIO DEL MAIN------------------------- -->


  <!-- --------------------------------FIN DEL MAIN------------------------- -->

  <!-- --------------------------------INICIO DEL SECTION------------------------- -->
  <section>
    <p>Inmuebles sugeridos</p>
    <div>
      <img src="assets/Inmueble.jpg">
      <input type="button" value="Cotizar">
    </div>
          <label for="Ciudad">Ciudad</label>
          <select v-model="vciudad">
              <option>Seleccione la Ciudad</option>
              <option v-for="ciudadU in listaCiudades" :key="ciudadU">{{ciudad.nombre}}</option>
          </select>
    <table>
      <thead>
        <h2>Filtro de Busqueda</h2>
      </thead>
      <tbody>
        <tr>
        </tr>
        <tr>
          <td><label for="Zona">Zona</label></td>
          <td> <select name="Zona"/>
              <option value="-1">Seleccione la zona</option>
              <option value="1">Norte</option>
              <option value="2">Centro</option>
              <option value="3">Sur</option>
              <option value="4">Occidente</option>
              <option value="5">Oriente</option>
              <option value="6">NorOccidente</option>
          </td>
        </tr>
        <tr>
          <td><label for="Localidad">Localidad</label></td>
          <td> <select name="Localidad"/>
              <option value="-1">Seleccione la Localidad</option>
              <option value="1">Usaquen</option>
              <option value="2">Teusaquillo</option>
              <option value="3">Suba</option>
              <option value="4">Martires</option>
              <option value="5">Sumapaz</option>
              <option value="6">Fontibon</option>
          </td>
        </tr>
        <tr>
          <td>Estrato:</td>
          <td><input required type="number" name="estrato" placeholder="selecione el estrato"></td>
        </tr>
        <tr>
          <td><label for="Tipo Inmueble">Tipo Inmueble</label></td>
          <td><select name="Tipo Inmueble"/>
              <option value="-1">Seleccione tipo de inmueble</option>
              <option value="1">Apartaestudio</option>
              <option value="2">Bodega</option>
              <option value="3">Consultorio</option>
              <option value="4">Fabrica</option>
              <option value="5">Casa</option>
              <option value="6">Apartamento</option>
              <option value="7">edificio</option>
              <option value="8">Terreno</option>
              <option value="9">Local</option>
              <option value="10">Finca</option>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" name="Elementos[]" value="1"> Sala</td>
        </tr>
        <tr>
          <td><input required type="checkbox" name="Elementos[]" value="2"> Comedor</td>
        </tr>
        <tr>
          <td><input required type="checkbox" name="Elementos[]" value="3"> Cocina</td>
        </tr>
        <tr>
          <td><input required type="checkbox" name="Elementos[]" value="4"> Parqueadero</td>
        </tr>
        <tr>
          <td><input required type="checkbox" name="Elementos[]" value="5"> Amoblado</td>
        </tr>
        <tr>
          <td>Baños:</td>
          <td><input required type="number" name="Baños" placeholder="selecione # de baños"></td>
        </tr>
        <tr>
          <td>Alcobas:</td>
          <td><input required type="number" name="Alcobas" placeholder="Digite # alcobas"></td>
        </tr>
        <tr>
          <td>Precio Max:</td>
          <td><input required type="text" name="precio MAX" placeholder="Digite precio MAx"></td>
        </tr>
        <tr>
          <td><label for="Tipo servicio">Tipo servicio</label></td>
          <td> <select name="Tipo servicio"/>
              <option value="-1">Seleccione tipo de servicio</option>
              <option value="1">Administración de propiedad Horizontal</option>
              <option value="2">Mantenimiento y reparación de inmuebles</option>
              <option value="3">Avalúo de renta</option>
              <option value="4">Asesoría y publicidad</option>
              <option value="5">Seguro de arrendamiento</option>
              <option value="6">Servicio de Aseo</option>
              <option value="7">Servicio de seguridad</option>
          </td>
        </tr>
        <tr>
          <td><input required type="checkbox" name="Anticipo[]" value="1"> Anticipo Anual</td>
        </tr>
        <tr>
          <td><input type="radio" name="Tipo de persona" value="N"> Persona Natural
          </td>
        </tr>
        <tr>
          <td><input type="radio" name="Tipo de persona" value="J"> Persona Juridica
          </td>
        </tr>
        <tr>
          <td colspan="2"><input type="button" value="Buscar">
          </td>
        </tr>
        </tbody>
    </table>
  </section>
  <!-- --------------------------------FIN DEL SECTION------------------------- -->


  <!-- --------------------------------INICIO DEL ASIDE------------------------- -->
  <aside>
    <table>
      <thead>
        <h2>Inicio de sesión</h2>
      </thead>
      <div>
        <tr>
          <td>Usuario:</td>
          <td><input required type="text" name="usuario" placeholder="Escriba su usuario"></td>
        </tr>
        <tr>
          <td>Contraseña:</td>
          <td><input required type="password" name="password"></td>
        </tr>
        <tr>
          <td><input type="button" value="Ingresar"></td>
        </tr>
        <tr>
          <td><a href="registro.html">Registrese</a></td>
        </tr>
      </div>
    </table>
  </aside>
  <!-- --------------------------------FIN DEL ASIDE------------------------- -->


  <!-- --------------------------------INICIO DEL FOOTER------------------------- -->

  <footer id="footer">
    <div class="contenedor footer-content">
      <div class="contact-us">
        <h2 class="brand">Inmobiliaria Candelaria</h2>
        <p>Somos expertos en la búsqueda del hogar de tus sueños</p>

      </div>
      <div class="social-media">
        <a href="./" class="social-media-icon">
          <i class='bx bxl-facebook'></i>
        </a>
        <a href="./" class="social-media-icon">
          <i class='bx bxl-twitter'></i>
        </a>
        <a href="./" class="social-media-icon">
          <i class='bx bxl-instagram'></i>
        </a>
      </div>
    </div>
    <div class="line"></div>
    <div class="pie">
      <address>
        <a href="mailto:servicioalcliente@inmobiliariacandelaria.com.co">Contactenos</a>
      </address>
      <p>Avenida SiempreViva Bogotá - Colombia
      </p>
      &#169; 2021
      Derechos Reservados
    </div>
  </footer>

  <!-- --------------------------------FIN DEL FOOTER------------------------- -->

</template>

<script>
export default {
  data(){
    return{
      vciudad: "",
      listaCiudades:[
        {nombre: "Bogota"},
        {nombre: "Medellin"},
        {nombre: "Cali"}, 
        {nombre: "Bucaramanga"}]

    }
  }
  
}
</script>
