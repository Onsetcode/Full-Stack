const convenienceFee=99;
let bagItemObject;
onload();
function onload(){
  loadBagItemObject();
  displayBagItem();
  bagSummary();
}
// items
function loadBagItemObject(){
  // bags contains the id of selected object
bagItemObject=bagitems.map(itemId => {
  for(let i=0;i<items.length;i++){
    if(itemId == items[i].id){
      return items[i];
    }
  }
})
console.log(bagItemObject);
}
function displayBagItem(){
  let containerElement=document.querySelector('.bag-items-container');
  let innerHtml='';
  bagItemObject.forEach(element => {
    console.log(element);
    innerHtml+=generateItemHtml(element);
  });
 containerElement.innerHTML=innerHtml;

}
function removeFromBag(itemId){
  console.log(bagitems); 
  bagitems = bagitems.filter(bagItemId => bagItemId != itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagitems));
  loadBagItemObject();
  displayNoOfItemIcon();
  displayBagItem();
  bagSummary();
}

function generateItemHtml(item){
  return  `<div class="bag-item-container">
  <div class="item-left-part">
  <img class="bag-item-img" src="${item.image}" alt="">
  </div>
  <div class="item-right-part">
    <div class="company">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price-container">
      <span class="current-price">Rs. ${item.current_price}</span>
      <span class="original-price">Rs. ${item.original_price}</span>
      <span class="discount-percentage">(${item.discount_percentage}% Off)</span>
    </div>
    <div class="return-period">
      <span class="return-period-day">${item.return_period} Days</span>Return Available
    </div>
    <div class="delivery-detail">
      <span class="delivery-detail-days">${item.delivery_date}</span>
    </div>
  </div>
  <div class="remove-from-cart" onclick="removeFromBag(${item.id});">X</div>
  </div>`;
}
// summary
function bagSummary(){
  let noSelectedItem=bagitems.length;
  let totalMrp=0;
  let totalDiscount=0;
  let finalPayment=0;
  bagItemObject.forEach(bagitems=>{
    totalMrp += bagitems.original_price;
    totalDiscount+= bagitems.original_price - bagitems.current_price;
  })
  finalPayment=totalMrp - totalDiscount + convenienceFee;
  let bagSummaryDetail=document.querySelector(".bag-summary");
  bagSummaryDetail.innerHTML=` <div class="bag-details-container">
        <div class="price-header">PRICE DETAIL (${noSelectedItem} Items)</div>
        <div class="price-item">
          <span class="price-item-tag">Total MRP</span>
          <span class="price-item-value">Rs ${totalMrp} </span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Discount On MRP</span>
          <span class="price-item-value">Rs ${totalDiscount} </span>
        </div>
        <div class="price-item">
          <span class="price-item-bag">Convenience Fee</span>
          <span class="price-item-value">Rs 99</span>
        </div>
        <hr>
      <div class="price-footer">
        <span class="price-item-bag">Total Amount</span>
        <span class="price-item-value">Rs ${finalPayment} </span>
      </div>
    </div>
`;
}