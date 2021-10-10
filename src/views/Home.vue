<template>
  <header>
    <h1>{{ titulo }}</h1>
  </header>
  <main>
    <div>
      <h2>Registrar Evento</h2>
      <form id="fevento" name="ipevento" action="#" method="post"></form>
      <label for="nombre">Nombre</label>
      <input id="idnombre" type="text" name="nombre" v-model="vcliente"/>
      <label for="documento">Documento</label>
      <input id="iddocumento" type="text" name="documento" v-model="vdocumento"/>
      <label for="salon">Salon</label>
      <div>
        <input id="idsalon1" type="radio" name="salon" value="0" v-model="vsalon"/>Normal
        <input id="idsalon1" type="radio" name="salon" value="1" v-model="vsalon"/>Grande
      </div>
      <input id="idcbextra" type="checkbox" name="extra" value="Si" v-model="vextra"/>
      <label for="extra">Agregar meseros extra</label>
      <label v-if="vextra" for="cantidad-meseros">Cantidad de meseros</label>
      <input v-if="vextra" id="idextra" type="number" name="cantidad-meseros" v-model="vmeseros"/>

      <input id="idcbplato" type="checkbox" name="platos" value="Si" v-model="vcomida"/>
      <label for="platos">Agregar Platos al evento</label>
      <label v-if="vcomida" for="cantidad-platos">Cantidad de platos</label>
      <input v-if="vcomida" id="idplato" type="number" name="cantidad-platos" v-model="vplatos"/>

      <label for="servicio">Servicios Extras</label>
      <select name="servicio" id="idservicio" v-model="elegido"> <!--onchange="addExtra()"-->
        <option>Seleccione un servicio</option>
        <option v-for="extraU in listaExtras" :key="extraU" >{{extraU.nombre}} ${{extraU.precio[vsalon]}}</option>
      </select>

      <button @click="clearForm" entype="reset">Limpiar</button>
      <button v-on:click.prevent="procesaInfo" type="button">Agregar evento</button>
      <h4>salon: {{ elegido }}</h4>
    </div>
    <div>
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
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import EventoService from "@/services/eventosoop.js"
import SalonService from "@/services/salonesoop.js"


export default {
  mounted(){
    document.title="";
    this.listaEventos = EventoService.obtenerTodos();
    this.listaSalon = SalonService.obtenerTodos();
    this.evento = EventoService.obtenerEventoActual();
    if(this.evento!=""){
      this.clearForm();
//validar usuario
  }
  },
  data() {
    return {
      definir: "Datos harcodeados",
      titulo: "Gestion de eventos OnLine",

      elegido: "Seleccione un servicio",
      listaEventos: [],
      listaSalon:[],
      evento: {},
      vcliente:"",
      vdocumento: "",
      vsalon:0,
      vextra:false,
      vcomida:false,
      vmeseros:0,
      vplatos:0,
      listaExtras:[
        {id:0, nombre:"Ninguno", precio: [0,0]},
        {id:1, nombre:"Animador", precio: [100000,50000]},
        {id:2, nombre:"DJ", precio: [200000,150000]},
        {id:3, nombre:"Banda en Vivo", precio: [300000,250000]}
        ],
    }
  },
  methods:{
    procesaInfo(){
      this.evento.cliente = this.vcliente;
      this.evento.documento = this.vdocumento;
      this.evento.salon = this.listaSalon[this.vsalon];
      let precioMeseros = 0;
      let precioPlatos = 0;
      if (this.vextra){
        this.evento.meseros = this.vmeseros;
        precioMeseros = this.evento.salon.extra * this.evento.meseros;
      }
//      this.evento.platos=0;
      if(this.vcomida){
        this.evento.platos = this.vplatos;
        precioPlatos = this.evento.salon.plato * this.evento.platos;
      }

      this.evento.total = this.evento.salon.precio + precioMeseros + precioPlatos;
      this.evento.meseros += this.evento.salon.base;
      this.listaEventos.push(this.evento);
      this.clearForm();

    },
    aPagina(){
      this.$router.push("/filtro");
//      this.$router.push({name:'Home'})
//      this.$router.push(params:{datos:this.listaEventos});
      
    },
    eliminar(pos){
      this.listaEventos.splice(pos, 1);
    },
    clearForm(){
      this.vcliente = "";
      this.vdocumento = "";
      this.vsalon = 0;
      this.vextra = false;
      this.vmeseros = 0;
      this.vcomida = false;
      this.vplatos = 0;
      this.evento = {
        cliente:"",
        documento:"",
        meseros:0,
        platos:0,
        total:0,
        salon:{}
      }

    },
  }
};
//  name: 'Home',
//  components: { HelloWorld},
</script>

<style scope >
body {
  padding: 2rem;
}

#g-evento {
  display: grid;
  grid-template-columns: 5rem 10rem;
  row-gap: 2rem;
  column-gap: 0.5rem;
}

main {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
main th {
  background-color: lightseagreen;
  padding: 0.2rem auto 0.2rem auto;
  border: 0.0625rem auto auto auto solid white;
  text-align: center;
}
main td {
  background-color: lightskyblue;
  padding: 0.2rem;
  border: 0.0625rem auto auto auto solid white;
  text-align: center;
}
</style>
