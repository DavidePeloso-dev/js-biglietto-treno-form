const generate_tiket = document.getElementById('submit');
console.log(generate_tiket); 

const full_name = document.getElementById('name')

const kilometers = document.getElementById('kilometers')

const age = document.getElementById('age')

const cost = 0.21;

generate_tiket.addEventListener('click', function() {

    if(kilometers.value == "" || age.value == "" || full_name.value == "") {
        alert('Complete all forms')
    }
    

    const tiket_price = kilometers.value * cost;

    let tiket_discount;
 
    if(Number(age.value) < 18){
        tiket_discount = tiket_price * 20 / 100
    } else if(Number(age.value) > 65){
        tiket_discount = tiket_price * 40 / 100
    } else {
        tiket_discount = 0.00
    };

    const total_price = (tiket_price - tiket_discount).toFixed(2);
    console.log(total_price);
})

const empty =document.getElementById('canc');

empty.addEventListener('click', function(){
    full_name.value = "";
    kilometers.value = "";
    age.value = "";
})
