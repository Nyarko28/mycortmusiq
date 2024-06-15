const kibab=document.querySelector('.kibab')
const mobile_nav=document.querySelector('.mobinav')
let toggled = false;

kibab.addEventListener('click', function(){
  if(toggled){
  
    mobile_nav.style.display='none';
    mobile_nav.style.height='100vh';
    mobile_nav.style.transition=' all 21s ease ';

      this.innerHTML = "&#9776"
      toggled=false;
      }
      else{
      
        mobile_nav.style.height='100vh';
        mobile_nav.style.display='block';
          
         
          mobile_nav.style.transition='all 22s ease';
          this.innerHTML = "&#x2715;"
          
         

    toggled=true;
  }
})