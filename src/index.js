import "./styles/main.css";
import './js/main';

// import image from "./assets/img/tovar.jpg";

// var products = [
//   { productId: 1, productName: "Товар 1", categoryId: 1 },
//   { productId: 2, productName: "Товар 2", categoryId: 2 },
//   { productId: 3, productName: "Товар 3", categoryId: 3 },
//   { productId: 4, productName: "Товар 4", categoryId: 4 },
//   { productId: 5, productName: "Товар 5", categoryId: 5 },
//   { productId: 6, productName: "Товар 6", categoryId: 1 },
//   { productId: 7, productName: "Товар 7", categoryId: 2 },
//   { productId: 8, productName: "Товар 8", categoryId: 3 },
//   { productId: 9, productName: "Товар 9", categoryId: 4 },
//   { productId: 10, productName: "Товар 10", categoryId: 5 },
//   { productId: 11, productName: "Товар 11", categoryId: 1 },
//   { productId: 12, productName: "Товар 12", categoryId: 2 },
//   { productId: 13, productName: "Товар 13", categoryId: 3 },
//   { productId: 14, productName: "Товар 14", categoryId: 4 },
//   { productId: 15, productName: "Товар 15", categoryId: 5 },
//   { productId: 16, productName: "Товар 16", categoryId: 1 },
//   { productId: 17, productName: "Товар 17", categoryId: 2 },
//   { productId: 18, productName: "Товар 18", categoryId: 3 },
//   { productId: 19, productName: "Товар 19", categoryId: 4 },
//   { productId: 20, productName: "Товар 20", categoryId: 5 },
//   { productId: 21, productName: "Товар 21", categoryId: 1 },
//   { productId: 22, productName: "Товар 22", categoryId: 2 },
//   { productId: 23, productName: "Товар 23", categoryId: 3 },
//   { productId: 24, productName: "Товар 24", categoryId: 4 },
//   { productId: 25, productName: "Товар 25", categoryId: 5 },
//   { productId: 26, productName: "Товар 27", categoryId: 6 },
// ];

// var categories = [
//   { categoryId: 1, categoryName: "Футболки" },
//   { categoryId: 2, categoryName: "Майки" },
//   { categoryId: 3, categoryName: "Носки" },
//   { categoryId: 4, categoryName: "Джинсы" },
//   { categoryId: 5, categoryName: "Брюки" },
//   { categoryId: 6, categoryName: "Брюки2" },
// ];

// const navbar = document.querySelector(".navbar");
// const content = document.querySelector(".content");


// window.addEventListener("DOMContentLoaded", () => {   

//   function renderList(tabs, elems) {
//     Object.values(tabs).forEach(cat => {

//     const tab_item = document.createElement('div');
//     tab_item.classList.add("tab_item");
//     tab_item.innerHTML = `${cat.categoryName}`;
//     navbar.appendChild(tab_item);    

//     const section = document.createElement('section');
//     section.classList.add("section");
//     content.appendChild(section);

//     Object.values(elems).forEach((product) => {
//       if (cat.categoryId == product.categoryId) {        
//         const item = document.createElement('div');
//         item.classList.add("item");
//         item.innerHTML = 
//           `<div class="item-img">
//             <a href="#image">
//               <img src="${image || "https://via.placeholder.com/100"}">
//             </a>
//             <a
//               id="${product.productId}"
//               href="#"
//               class="full"
//               style="background-image:url(${
//                 image || "https://via.placeholder.com/100"
//               })">
//             </a>
//           </div>
//           <div class="item-title">${product.productName}</div>           
//         `;
//         section.appendChild(item);
//         }    
//       })
//     })
//   }

//   renderList(categories, products);
  
//   const container = document.querySelectorAll('.section');
//   const tabs = document.querySelectorAll('.tab_item');

//   function hideTabContent() {    
//     container.forEach((item) => {
//       item.style.display = "none";
//     });
//     tabs.forEach((item) => {
//       item.classList.remove('active');
//     });
//   }
//   function showTabContent(i = 1) {
//     container[i].style.display = 'flex';
//     tabs[i].classList.add('active');
//   }
//   hideTabContent();
//   showTabContent();

//   navbar.addEventListener("click", (e) => {
//     let target = e.target;    
//     tabs.forEach((item, index) => {
//       if (target == item || target.parentNode == item) {
//         hideTabContent();
//         showTabContent(index);
//       }    
//     });    
//   });
// })
