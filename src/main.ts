import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

import {
  BasicProduct,
  Product1,
  Product2,
  ProductDataset,
  Test1,
} from "@/tasks/task";

// Task 1
const baseProduct = new BasicProduct();
console.log(
  "product name: ",
  baseProduct.setProductName("Book").getProductName()
);

const product1 = new Product1();
console.log(
  "product name title: ",
  product1.setProductName("Table").getProductNameTitle()
);

// Task 2
const test1 = new Test1();
console.log(
  "Values added and increased: ",
  test1.addValue(1).addValue(4).increaseAll1().getValues()
);
console.log("Values added and increased: ", test1.increaseAll2().getValues());
console.log("Values added and increased: ", test1.increaseAll3().getValues());

// Task 3
const product2 = new Product2(1000, 2000);
console.log("Product stock: ", product2.getStock());
console.log("Product sku: ", product2.getSku());

const productDataset = new ProductDataset();
console.log(
  "Product added and Stock value set: ",
  productDataset.addProduct(product2).setProductStockValue(1000, 2000)
);
