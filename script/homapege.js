const first=document.querySelectorAll('.counter h1')[0];
const second=document.querySelectorAll('.counter h1')[1];

const  third =document.querySelectorAll('.counter h1')[2];
const  fouth =document.querySelectorAll('.counter h1')[3];
const counter_container=document.querySelector('.impact_container')

first.style.background='red';
let i=0;
let hovered=true;
counter_container.addEventListener('mouseover',function(){
    if (!hovered){
    hovered=true;
}
setInterval(() => {
if(i<=70){
    first.innerHTML=i;
    i++;
}
}, 100);
setInterval(() => {
if(i<=70){
    second.innerHTML=i ;
    i++;
}
}, 100);
setInterval(() => {
if(i<=18){
    third.innerHTML=i;
    i++;
}
}, 300);
setInterval(() => {
if(i<=70){
    fouth.innerHTML=i;
    i++;
}
}, 300);
});

const progress_container=document.querySelector('.progress_container');
    
    
const practice=document.querySelector('.practice');
const understanding=document.querySelector('.understanding');

const believe =document.querySelector('.believe');
const believefigure=document.querySelector('.believefigure');
const practicefigure=document.querySelector('.practicefigure');
const underfigure=document.querySelector('.underfigure');


let prog=0;

       const observer= new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting) {
                setInterval(() => {
                    if(prog<=90){
                        practice.value=prog;
                        practicefigure.textContent=prog+"%";
                        
                       practicefigure.style.left=prog + "%";
                    
                prog++;}
                }, 150);
                setInterval(() => {
                    if(prog<=80){
                       underfigure.textContent=prog+"%";
                       underfigure.style.left=prog + "%"
                        understanding.value=prog;
                      
                prog++;}
                }, 120);
                setInterval(() => {
                    if(prog<=98){
                        
                believefigure.textContent=prog+"%";
                believefigure.style.left=prog-3 + "%"
                    believe.value=prog;
                    
                prog++;}
                }, 100);
                observer.disconnect();
            }
        });
       },{threshold: 0.5})
       observer.observe(progress_container)
            
              
            
                
          
       
   




