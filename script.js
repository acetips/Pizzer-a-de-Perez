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
}