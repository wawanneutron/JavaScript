/* Recomendasi
Bedakan antara default dan named, karena jika digabungkan kadang akan membingungkan ketika melakukan import
Sebisa mungkin selalu gunakan export named dibandingkan export default 
*/
export default class {
  constructor(firstName, lastName) {
    (this.firstName = firstName), (this.lastName = lastName);
  }

  sayHello(name) {
    console.log(
      `Hello ${name} my full name is ${this.firstName} ${this.lastName}`
    );
  }
}
