class SalonService{

    salon = [];

    constructor(){
        this.salon = [ 
            {
              nombre: "Normal",
              precio: 1000000,
              extra: 150000,
              plato: 50000,
              base: 2
            },
          {
            nombre: "Grande",
            precio: 2000000,
            extra: 100000,
            plato: 40000,
            base: 4
          }
          ];
    };

    obtenerTodos(){
        return this.salon;
    };
    
}export default new SalonService();