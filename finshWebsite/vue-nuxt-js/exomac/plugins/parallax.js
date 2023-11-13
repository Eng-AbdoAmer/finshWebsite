import Parallax from 'parallax-js'


var scene = document.querySelectorAll('.scene');
if(scene) {
    scene.forEach((el, i) => {
        new Parallax(el);
    });
};

