"use strict";

const menuBtn = document.querySelector('#menu-icon');

const closeBtn = document.querySelector('#close-icon');

const navBar = document.querySelector('.navbar');

menuBtn.onclick = function(){
    navBar.classList.add('active');
    closeBtn.style.display = 'block';
    menuBtn.style.display = 'none';

};

closeBtn.onclick = function(){
    navBar.classList.remove('active');
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'block';

}

