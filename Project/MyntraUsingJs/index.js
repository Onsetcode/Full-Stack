let bagitems;
onload();
function onload(){
  let bagitemsStr=localStorage.getItem('bagitems');
  bagitems= bagitemsStr ? JSON.parse(bagitemsStr): [];
  displayUi();
  displayNoOfItemIcon();
}

// push item or the Add items into bag 
function addToBag(itemId){
  bagitems.push(itemId);
  localStorage.setItem('bagitems', JSON.stringify(bagitems));  
  displayNoOfItemIcon();
}
function displayNoOfItemIcon(){
  let itemCount = document.querySelector(".bag-item-count");
  if(bagitems.length > 0){
    itemCount.style.visibility = 'visible';
    itemCount.innerText = bagitems.length;
  }
  else{
    // not working
    itemCount.style.visibility = 'hidden';
}
}
function displayUi(){
  let itemsContainerElement=document.querySelector('.items-container');
  if( ! itemsContainerElement){
    return;
  }
  let innerHtml='';
  items.forEach(item => {
    innerHtml+=`
            <div class="item-container">
            <img class="item-image" src="${item.image}" alt="image">
            <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
            </div>
            <div class="company-name">${item.company}
            </div>
            <div class="item-name"> ${item.item_name}
            </div>
            <div class="pricing">
              <span class="current-price">Rs. ${item.current_price}</span>
              <span class="original-price">Rs. ${item.original_price}</span>
              <span class="discount">(${item.discount_percentage}% off)</span>
            </div>
            <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
          </div>`
  });
  itemsContainerElement.innerHTML=innerHtml;
}
