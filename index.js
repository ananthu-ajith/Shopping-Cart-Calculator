const itemName=document.getElementById('itemName');
const cartTotal=document.getElementById('cartTotal');
const itemnum=document.getElementById('itemnum');
const itemPrice=document.getElementById('itemPrice');

let sum=0;
let total=0;

additembtn.addEventListener('click', function() {

    const text=itemName.value;
    const price = parseFloat(itemPrice.value, 10);
    const numb = parseInt(itemnum.value, 10);

    if(price>0 && numb>0 && itemName !=='')
    {

    sum=price*numb;

    total=total+sum;
    cartTotal.textContent="Total: ₹ "+total;

    alert("Added: "+text + "\n" +"Total: " + total);
}


else{
    alert("Provide valid number");
}


});