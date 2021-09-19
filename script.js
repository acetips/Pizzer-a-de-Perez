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
    
    var price;
}