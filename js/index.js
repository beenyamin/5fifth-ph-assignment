
function itemClick(target){
    const selectItem = document.getElementById('selectItem')
    const itemName = (target.childNodes[3].innerText);
    const li = document.createElement('li');
    li.innerText = itemName;
    selectItem.appendChild(li);

    const itemPrice = (target.childNodes[5].innerText.split(" ")[0]);
    const priceNumber = parseFloat(itemPrice);


    const totalPrice = document.getElementById('totalPrice');
    const priceString = totalPrice.innerText;
    const priceTotal = parseFloat(priceString);


    const price = priceTotal + priceNumber ;

    totalPrice.innerText = price;




    if(price > 0) {
        btnPurchase.removeAttribute('disabled') 
    }

     if( price > 200){
        applyCopse.removeAttribute('disabled')

    }


    const discount =20;
    const discountPrice = document.getElementById('discount'); 
    const finalPrice = document.getElementById('total')


    document.getElementById('applyCopse').addEventListener('click',function(){
      
        const couponCode = document.getElementById('couponCode')
        const coupon = couponCode.value;


        const discountFinal = price * discount/100;
        const totalFinal = price - discountFinal;

        discountPrice.innerText = discountFinal;
        finalPrice.innerText = totalFinal;

        console.log(totalFinal)