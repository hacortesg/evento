<template>
<main>
  <div>
    <h1>This is an about page</h1>
      <h2>Listado de eventos</h2>
      <table>
        <thead>
          <tr>
            <th>CLIENTE</th>
            <th>SALON</th>
            <th>MESEROS</th>
            <th>PLATOS</th>
            <th>TOTAL</th>
            <th>OPCIONES</th>
          </tr>
        </thead>
        <tbody id="deventos">
          <tr v-for="eventoU, i in listaEventos" :Key="eventoU">
            <td>{{ eventoU.cliente }} ({{eventoU.documento}})</td>
            <td>{{ eventoU.salon.nombre }}</td>
            <td>{{ eventoU.meseros }}</td>
            <td>{{ eventoU.platos }}</td>
            <td>{{ eventoU.total }}</td>
            <td><button @click.prevent="eliminar(i)" >Eliminar</button> </td>
          </tr>
        </tbody>
      </table>
  </div>
</main>
<footer>
  <router-link to="/">Ir a home</router-link>
</footer>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
import EventoService from "@/services/eventosoop.js"

export default {
  mounted(){
    document.title="Acerca de..",
    //this.listaEventos = this.$route.params.data;
    this.listaEventos = EventoService.obtenerTodos();
  },
  data(){
    return{
      listaEventos:[]
    }
  },
  setup() {
    
  },
}
</script>
