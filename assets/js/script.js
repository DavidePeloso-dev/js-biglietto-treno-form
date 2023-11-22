const generate_tiket = document.getElementById('submit');
console.log(generate_tiket); 

const full_name = document.getElementById('name')

const kilometers = document.getElementById('kilometers')

const age = document.getElementById('age')

const cost = 0.21;

const tiket_wrapper = document.querySelector('.tiket_wrapper').classList;

const modal = document.querySelector('.bg_modal').classList;


generate_tiket.addEventListener('click', function() {

    if(kilometers.value == "" || age.value == "" || full_name.value == "") {
        modal.remove('invisible');
        const close = document.querySelector('.close');
        close.addEventListener('click', function(){
            modal.add('invisible')
        })
    } else{
    

    const tiket_price = kilometers.value * cost;

    let tiket_discount;
 
    if(Number(age.value) < 18){
        tiket_discount = tiket_price * 20 / 100
        document.querySelector('.tiket_tipe').innerHTML = 'Discounted'

    } else if(Number(age.value) > 65){
        tiket_discount = tiket_price * 40 / 100
        document.querySelector('.tiket_tipe').innerHTML = 'Discounted'

    } else {
        tiket_discount = 0.00
        document.querySelector('.tiket_tipe').innerHTML = 'Standard'

    };

    const total_price = (tiket_price - tiket_discount).toFixed(2);
    console.log(total_price);

    document.querySelector('.full_name').innerHTML = full_name.value;

    document.querySelector('.wagon').innerHTML = Math.floor(Math.random() * 10 + 1);

    document.querySelector('.tiket_price').innerHTML = total_price + ' \u20AC';

    document.querySelector('.cp_code').innerHTML = Math.floor(Math.random() * (100000 -10000) + 1) + 10000;




    tiket_wrapper.remove('invisible');
    }
})

const empty =document.getElementById('canc');

empty.addEventListener('click', function(){
    full_name.value = "";
    kilometers.value = "";
    age.value = "";

    tiket_wrapper.add('invisible');

    
})
