/* export default function penamaan ketika diimport menggunakan alias 
export default tidak boleh lebih dari satu di satu module
*/

/* Recomendasi
Bedakan antara default dan named, karena jika digabungkan kadang akan membingungkan ketika melakukan import
Sebisa mungkin selalu gunakan export named dibandingkan export default 
*/
export default function (firstName, lastName) {
  console.log(`Hello my name is ${firstName} ${lastName}`);
}

// tapi bisa menggunakan export
export let name = "Yulia Syaputri";

let secondName = "lim_yulia";

export { secondName };
