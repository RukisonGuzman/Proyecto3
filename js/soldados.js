
// CLASE PARA QUE CADA COCHE TENGA CUALIDADES

// class Coche {
//     constructor(modelo,marca,velocidad,peso,frenado,combustible){
//         this.modelo = modelo;
//         this.marca = marca;
//         this.velocidad = velocidad;
//         this.peso = peso;
//         this.frenado = frenado;
//         this.combustible = combustible;
//     }
//     acelerar() {
//         return this.velocidad += 30;
//     }
//     frenar() {
//         return this.velocidad = 0;
//     }
// }
// // VARIABLES DE COCHES PARA PODER CONCADENARLOS


// let coche1 = new Coche("Cordoba","Seat",250,1800,30,"Diesel");
// let coche2 = new Coche("Celica","Toyota",260,1900,20,"Gasolina");
// let coche3 = new Coche("Mustang","Ford",255,1850,25,"Diesel");
// let coche4 = new Coche("406","Peugeot",257,1950,27,"Gasolina");
// let coche5 = new Coche("Civic","Honda",245,1875,23,"Diesel");
// let coche6 = new Coche("Passat","Volkswagen",256,1925,28,"Gasolina");

// class Soldado {
//     constructor(nombre, edad, altura, peso, velocidad){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.altura = altura;
//         this.peso = peso;
//         this.velocidad = velocidad;
//     }
//     correr(){
//         return this.velocidad += 10;
//     }
//     andar(){
//         return this.velocidad +=5;
//     }
//     agacharse(){
//         return this.velocidad +=2;
//     }
// }
// class Francotirador extends Soldado{
//     constructor(nombre, edad, altura, peso, velocidad){
//         super(nombre, edad, altura, peso, velocidad, alcance)
//         this.alcance = "muy largo";
// }
// class Infanteria extends Soldado{
//     constructor(nombre, edad, altura, peso, velocidad){
//         super(nombre, edad, altura, peso, velocidad, alcance)
//         this.alcance = "medio";
// }