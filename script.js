var box1 = document.querySelector('#caixa1')
var preco1 = document.querySelector('#preco1')

var box2 = document.querySelector('#caixa2')
var preco2 = document.querySelector('#preco2')

var box3 = document.querySelector('#caixa3')
var preco3 = document.querySelector('#preco3')

box1.addEventListener('click', ()=>{
    box1.style.backgroundColor = "#FFAF1F";
    preco1.style.backgroundColor = '#FFAF1F'

    preco2.style.backgroundColor = '#A7A6A6'
    preco3.style.backgroundColor = '#A7A6A6'

})


box2.addEventListener('click', ()=>{
    preco2.style.backgroundColor = "#FFAF1F";

    box1.style.backgroundColor = "#A7A6A6";
    preco1.style.backgroundColor = '#A7A6A6'

    preco3.style.backgroundColor = '#A7A6A6'

})

box3.addEventListener('click', ()=>{
    preco3.style.backgroundColor = '#FFAF1F'

    box1.style.backgroundColor = "#A7A6A6";
    preco1.style.backgroundColor = '#A7A6A6'

    preco2.style.backgroundColor = '#A7A6A6'
})



console.log(box1)

var box2 = document.getElementById("caixa2")
var box3 = document.getElementById("caixa3")


