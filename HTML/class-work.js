import { getData } from "../HTML/getDataNew.js";
import { classWorkProductComnent } from "../HTML/classWorkCardProduct.js";

// calling fuction
const productData = await getData("products");
console.log(productData);

// render products
let container = document.getElementById("card-continer");

productData.map((products) => {
  container.innerHTML += classWorkProductComnent(products);
});
