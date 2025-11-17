import { getData } from "../Class-work/getDataNew.js";
import { classWorkProductComnent } from "../Class-work/classWorkCardProduct.js";

// calling fuction
const productData = await getData("products");
console.log(productData);

// render products
let container = document.getElementById("card-continer");

productData.map((products) => {
  container.innerHTML += classWorkProductComnent(products);
});
