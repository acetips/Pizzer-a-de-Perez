//Business Logic
//Function for ordering a pizza
function orderPizza(){
    var name=$("input#name").val();
    var flavor=$("#flavor").val();
    var size=$("#pizzasize").val();
    var amount=$("#amount").val();
    var crust=$("#crust").val();
    var toppings=[];
    
    $.each($('input[name="toppings"]:checked'),
        function(){
            toppings.push($(this).val());
        })
        
    var sizePrice;
    if(flavor==="Cheese"||flavor==="Veggie"||flavor==="Pepperoni"||flavor==="Meat"||flavor==="Margherita"||flavor==="BBQ Chicken"||flavor==="Hawaiian"||flavor==="Buffalo"){
        if(size==="Small"){
            sizePrice=500;
        }
        else if (size==="Regular"){
            sizePrice=800;
        }
        else if (size==="Large"){
            sizePrice=1500;
        }
        else if (size==="Mega"){
            sizePrice=2000;
        }
    }

    var crustPrice;
    if (crust==="Crispy"){
        crustPrice=50;
    }
    else if (crust==="Cheese-Stuffed"){
        crustPrice=100;
    }
    else if (crust==="Glutten-free"){
        crustPrice=150;
    }
    else if (crust==="Flatbread"){
        crustPrice=200;
    }

    var toppingCheckbox=$('input[name="toppings"]:checked').length;
    var toppingPrice;
    if (size==="Small"){
        toppingPrice=toppingCheckbox*50;
    }
    else if (size==="Regular"){
        toppingPrice=toppingCheckbox*100;
    }
    else if (size==="Large"){
        toppingPrice=toppingCheckbox*200;
    }
    else if (size==="Mega"){
        toppingPrice=toppingCheckbox*300;
    }
    //unchecked boxes function
    $("input[type='checkbox']:not(:checked)").prop({
        disabled:true
    });
    //function to deactivate button to avoid multiple orders
    $('placeholder').prop('disabled',true);
    //Total price function
    $("#orderfeedback").show();

    var price=(sizePrice+crustPrice);
    var totalAmount=parseInt(price*amount);

    $(".feedback").text("Hello "+name+". Here are your order details:");
    $(".pizzasize").append('<tr><td id="pizzasize">' + size);
    $(".amount").append('<tr><td id="amount">' + amount);
    $(".crust").append('<tr><td id="crust">' + crust);
    $(".flavor").append('<tr><td id="flavor">' + flavor);
    $(".price1").append('<tr><td id="price1">' + totalAmount);

    arrayAllOrders.push(totalAmount);
    if (toppings==""){
        $(".toppings").append('<tr><td id="toppings">' + "-");
    }
    if (toppings != "") {
        $(".toppings").append('<tr><td id="toppings">' + toppings);
        $(".name").text(name);
    }
    var delivery=200;
    var pickUp=0;
    var totalOnDelivery= totalAmount+delivery;

    if(document.getElementById("d").checked == true && document.getElementById("p").checked == false){
        prompt("Where are you located?");
        alert("Your order will be delivered to your location in 30 minutes. Total amount payable on delivery is Ksh." + totalOnDelivery);
    } else if (document.getElementById("d").checked == false && document.getElementById("p").checked == true){
        alert("Total amount payable on pick up is " + totalAmount);
    }
    
}

function orderDelivery(){
    $("#delivery").show();
    
    var address=$("input#address").val();
    var phone=$("input#phone").val();

    $(".location").text(location);
    $(".phone").text(phone);
    $("#location").hide();
}
//User Interface Logic

$(document).ready(function () {
    $("#orderdetails").submit(function (event) {
        event.preventDefault();
        orderPizza();
    });
    $("#deliveryAddress").submit(function (event) {
        event.preventDefault();
        orderDelivery();
    });
});
var arrayAllOrders=[];
function deliveryOptions() {
    $("#pnd").show();
    $("#pickUpDelivery").show();
    $("#finalDetails").hide();

    document.getElementById("orderdetails").reset();

    $('#placeorder').prop('disabled', false);

    var checkoutAmount = 0;
    arrayAllOrders.forEach(function (index) {
        checkoutAmount = checkoutAmount + index;
    });

    $(".amountPickUp").text(checkoutAmount);

    var checkoutAmountTotal = checkoutAmount + 200;

    $(".deliveryTotal").text(checkoutAmountTotal);
    
}
function pickUpOptions() {
    $("#pickUp").show();
    $("#pnd").hide();
    
}

function delivery() {
    $("#location").show();
    $("#pnd").hide();
}

function deliveryConfirm() {
    $("#delivery").show();
    $("#location").hide();
}
function reloadPage() {  
    location.reload();
}
function clearTextarea() {
    $("#messageForm").reset();
}
function anotherOrder() {
    $('#placeorder').prop('disabled', false); 
    $("input[type='checkbox']").prop({ 
        disabled: false
    });
    $("input[type='checkbox']").prop({
        checked: false
    });
}
