//Business Logic
//Function for ordering a pizza
function orderPizza(){
    var name=$("input#name").val();
    var flavor=$("#flavor").val();
    var size=$("size").val();
    var amount=$("#amount").val();
    var crust=$("#crust").val();
    var toppings=[];
    
    $.each($('input[name="toppings"]:checked'),
        function(){
            toppings.push($(this).val());
        })
    
    var flavorPrice;
    if(flavor==="Cheese"||flavor==="Veggie"||flavor==="Pepperoni"||flavor==="Meat"||flavor==="Margherita"||flavor==="BBQ Chicken"||flavor==="Hawaiian"||flavor==="Buffalo"){
        if(size==="Small"){
            flavorPrice=500;
        }
        else if (size==="Regular"){
            flavorPrice=800;
        }
        else if (size==="Large"){
            flavorPrice=1500;
        }
        else if (size==="Mega"){
            flavorPrice=2000;
        }
    }

    var crustPrice;
    if (crust==="Crispy"){
        crustPrice===50;
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
    $("#orderdetails").show();

    var price=(flavorPrice+crustPrice+toppingPrice);
    var totalAmount=parseInt(price*amount);

    $(".feedback").text("Hello "+name+". Here are your order details:");
    $(".size").append('<tr><td id="size">' + size);
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
}
//Delivery section
function orderDelivery(){
    $("#delivery").show();
    
    var address=$("input#address").val();
    var phone=$("input#phone").val();

    $(".location").text(location);
    $(".phone").text(phone);
    $("#location").hide();
}
//<td class="flavor"></td>
{/* <td class="size"></td>
<td class="crust"></td>
<td class="number"></td>
<td class="toppings"></td>
<td class="price1" td> */}