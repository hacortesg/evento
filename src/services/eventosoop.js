class EventoService{
    eventos=[];
    eventoActual={};

    constructor(){

        this.eventoActual = {
            cliente:"",
            documento:"",
            meseros:0,
            platos:0,
            total:0,
            salon:{}
          };

        this.eventos= [
            {
              cliente: "Laura Linda",
              documento: "1030111333",
              meseros: 2,
              platos: 40,
              total: 3200000,
              salon: {
                nombre: "Normal",
                precio: 1000000,
                extra: 150000,
                plato: 50000,
                base: 2,
              }
            },
            {
              cliente: "Simjale Lenes",
              documento: "1030111888",
              meseros: 5,
              platos: 80,
              total: 9900000,
              salon: {
                nombre: "Grande",
                precio: 2000000,
                extra: 100000,
                plato: 40000,
                base: 4,
              }
            },
          ];
    };
    obtenerTodos(){
        return this.eventos;
    }

    obtenerEventoActual(){
        return this.eventoActual;
    }

}export default new EventoService();