//Business Logic
//Function for ordering a pizza
function orderPizza(){
    var name=$("input#name").val();
    var flavor=$("#flavor").val();
    var size=$("size").val();
    var amount=$("#amount").val();
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
    
}