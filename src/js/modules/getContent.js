export default class getContent {
  constructor(tabs, items, navbar, content, img, activeTab = 1) {
    this.navbar = document.querySelector(navbar);
    this.content = document.querySelector(content);
    this.tabs = tabs;
    this.items = items;
    this.img = img;
    this.activeTab = activeTab - 1;
  }

  renderList() {
    Object.values(this.tabs).forEach(cat => {

    const tab_item = document.createElement('div');
    tab_item.classList.add("tab_item");
    tab_item.innerHTML = `${cat.categoryName}`;
    this.navbar.appendChild(tab_item);    

    const section = document.createElement('section');
    section.classList.add("section");
    this.content.appendChild(section);    

    Object.values(this.items).forEach((product) => {
      if (cat.categoryId == product.categoryId) {        
        const item = document.createElement('div');
        item.classList.add("item");
        item.innerHTML = 
          `<div class="item">
            <div class="item-img">
              <a href="#image">
                <img src="${this.img || "https://via.placeholder.com/100"}">
              </a>
              <a
                id="${product.productId}"
                href="#"
                class="full"
                style="background-image:url(${
                  this.img || "https://via.placeholder.com/100"
                })">
              </a>
            </div>
            <div class="item-title">${product.productName}</div>
          </div>  
        `;
        section.appendChild(item);
        }    
      })

      
    })    

    this.hideTabContent();
    this.showTabContent();

    
  }  

  hideTabContent() {    
    const container = document.querySelectorAll('.section');
    const tabs = document.querySelectorAll('.tab_item');
    
    container.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove('active');
    });
  }

  showTabContent(i = this.activeTab) {
    const container = document.querySelectorAll('.section');
    const tabs = document.querySelectorAll('.tab_item');
    container[i].style.display = 'flex';
    tabs[i].classList.add('active');

    this.navbar.addEventListener("click", (e) => {      
      let target = e.target;  
      tabs.forEach((item, index) => {
        if (target == item || target.parentNode == item) {
          this.hideTabContent();
          this.showTabContent(index);
          console.log('index: ', index);
        }    
      });    
    });
  }  

}