const flag = document.getElementById('flag');
const dog_face = document.querySelector('.perfil-dog')
const country = document.querySelector('.p2')
const title = document.querySelector('.name')
let random_number = Math.floor(Math.random() * 2);

const dogs = {
    raza:['DALMATA','ROOTWILER']
}

dog_choosed = dogs.raza[random_number]



function random_pick() {
    title.innerHTML = `${dog_choosed}`
    if (dog_choosed == 'ROOTWILER') {
        country.innerHTML = 'GERMANY'
        dog_face.style.backgroundImage = "url('./img/rootwiler.jpg')";
        flag.style.backgroundImage = "url(./flag/germany.png)";
    }else if (dog_choosed == 'DALMATA') {
        country.innerHTML = 'CROATIA'
        dog_face.style.backgroundImage = "url('./img/dalmata.jpg')";
        flag.style.backgroundImage = "url(./flag/croatia.png)";
    }
}