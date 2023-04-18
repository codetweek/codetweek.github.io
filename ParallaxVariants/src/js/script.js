let mt1 = document.getElementsByClassName('par2')[0];
let mt2 = document.getElementsByClassName('par3')[0];
let mt3 = document.getElementsByClassName('par4')[0];
let tr1 = document.getElementsByClassName('par5')[0];
let tr2 = document.getElementsByClassName('par6')[0];
let hero = document.getElementsByClassName('hero')[0];
let txbg = document.getElementsByClassName('text-content')[0];

let scene = document.querySelectorAll('.bg-par');

let imag = document.querySelectorAll('.img-par');

window.addEventListener('scroll',()=> {

    let value = window.scrollY;
    mt1.style.top = value*0.5 + 'px';
    mt2.style.top = value*0.4 + 'px';
    mt3.style.top = value*0.3 + 'px';
    tr1.style.top = value*0.2 + 'px';
    tr2.style.top = value*0.1 + 'px';
    hero.style.top = (value*0.6)+100 + 'px';
    hero.style.textShadow = "0px 0px "+ (8-(value*0.05))+ "px rgba(255, 255, 255, 0.75)";
    //.log(hero.style.textShadow);
    mt1.style.left = value*0.0 + 'px';
    mt2.style.left = value*0.1 + 'px';
    mt3.style.left = value*-0.1 + 'px';
    tr1.style.left = value*0.05 + 'px';

    scene.forEach((item)=>{
        item.style.filter="brightness(" +(1-(value*0.001))+ ")";
        
    });
    // console.log((1-(value*0.001)));
    // console.log((13-(13*(value*0.0008))));
    txbg.style.backgroundColor="hsl(171, 76%, "+ (13-(13*(value*0.001))) + "%)";
    

    imag.forEach((item)=>
    {
    if(isPartlyInViewport(item))
    {
        item.style.objectPosition = (-(value/10))+"px 0px";
    }
});


});

function isPartlyInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
    const vertInView = rect.top <= windowHeight && rect.bottom >= 0;
    const horInView = rect.left <= windowWidth && rect.right >= 0;
    
    return vertInView && horInView;
  }