let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
titulo = document.getElementById('titulo');
titulo2 = document.getElementById('titulo2');
let caja1 = document.getElementById("caja1");
let caja2 = document.getElementById("caja2");
let caja3 = document.getElementById("caja3");
let caja_img1 = document.getElementById("caja_img1");
let caja_img2 = document.getElementById("caja_img2");
let caja_img3 = document.getElementById("caja_img3");
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

function cambiosDisplays() {
    caja_img1.style.display = "none";
    caja_img2.style.display = "none";
    caja_img3.style.display = "none";
}

function cd1() {
    cambiosDisplays();
    caja_img1.style.display = "block";
    titulo.innerText = "Starbucks Coffee";
    titulo2.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, ullam vero? Aliquam, accusamus nisi quos autem modi numquam adipisci consectetur!";
    document.querySelector('.inicio-img img').src = "img/shop1.png";
    document.querySelector('.inicio-img img').style.width = "250px"; 
    document.querySelector('.inicio-img img').style.height = "430px";
    document.querySelector('.inicio-img img').style.float = "right";
}

function cd2() {
    cambiosDisplays();
    caja_img2.style.display = "block";
    titulo.innerText = "Starbucks Coffee 2";
    titulo2.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, ullam vero? Aliquam, accusamus nisi quos autem modi numquam adipisci consectetur!";
    document.querySelector('.inicio-img img').src = "img/shop2.png";
    document.querySelector('.inicio-img img').style.width = "300px"; 
    document.querySelector('.inicio-img img').style.height = "450px";
    document.querySelector('.inicio-img img').style.float = "right";
}

function cd3() {
    cambiosDisplays();
    caja_img3.style.display = "block";
    titulo.innerText = "Starbucks Coffee 3";
    titulo2.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, ullam vero? Aliquam, accusamus nisi quos autem modi numquam adipisci consectetur!";
    document.querySelector('.inicio-img img').src = "img/shop3.png";
    document.querySelector('.inicio-img img').style.width = "250px"; 
    document.querySelector('.inicio-img img').style.height = "430px";
    document.querySelector('.inicio-img img').style.float = "right";
}

caja1.addEventListener("click", cd1);
caja2.addEventListener("click", cd2);
caja3.addEventListener("click", cd3);