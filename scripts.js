//First Class 
const firstClassPlusBtn= document.getElementById("first-class-plus-button");
firstClassPlusBtn.addEventListener("click",function(){
    plusMinusBtnHandler("first-class-ticket-quantity",1);
});

const firstClassMinusBtn= document.getElementById("first-class-minus-button");
firstClassMinusBtn.addEventListener("click",function(){
    plusMinusBtnHandler("first-class-ticket-quantity",-1);
});

//Economy Class
const economyClassPlusBtn= document.getElementById("economy-class-plus-button");
economyClassPlusBtn.addEventListener("click",function(){
    plusMinusBtnHandler("economy-class-ticket-quantity",1);
});

const economyClassMinusBtn= document.getElementById("economy-class-minus-button");
economyClassMinusBtn.addEventListener("click",function(){
    plusMinusBtnHandler("economy-class-ticket-quantity",-1);
});



//Functions
function plusMinusBtnHandler(inputFieldId,sign){
        const ticketQuantity= document.getElementById(inputFieldId).value;
        const ticketQuantityNumber= parseInt(ticketQuantity);
        const finalTicketQuantity=ticketQuantityNumber+sign;
        if(finalTicketQuantity>=0){
            document.getElementById(inputFieldId).value=finalTicketQuantity;    
        }          
        calculateSubtotal("first-class-ticket-quantity","economy-class-ticket-quantity");      
        calculateVat();
}

function calculateSubtotal(firstClassQty,economyClassQty){
    const firstClassQuantity= document.getElementById(firstClassQty).value;
    const economyClassQuantity= document.getElementById(economyClassQty).value;
    const subtotal= (firstClassQuantity*150)+(economyClassQuantity*100);
    document.getElementById("subtotal").innerText=subtotal;
} 

function calculateVat(){
    const subtotal= document.getElementById("subtotal").innerText;
    const subtotalNumber= parseFloat(subtotal);
    const vat= (10/100)*subtotalNumber;
    document.getElementById("vat").innerText=vat;    
    document.getElementById("total").innerText=vat+subtotalNumber;  
}
