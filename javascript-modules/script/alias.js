const company = "PT Neutron Membangun Nusantara";

function sum(first, second) {
  return first + second;
}

class Company {
  constructor(firstName) {
    this.firstName = firstName;
  }

  introduction(name, company) {
    console.log(
      `Hello ${name} my name is ${this.firstName} i'm work in company ${company}`
    );
  }
}
// multiple export
// export { company as perusahaan, sum as total, Company as Perusahaan }; //alias di export
export { company, sum, Company }; //alias di export
