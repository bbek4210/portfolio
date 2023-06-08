{/* <span id="charge" class="fa"></span> */}

const chargeLoad =()=>{
    let charge = document.getElementById("charge");
    charge.innerHTML= '&#xf244';

    setTimeout(()=>{
        charge.innerHTML= '&#xf243';
        charge.style.color= 'yellow';
    },1000);

    setTimeout(()=>{
        charge.innerHTML= '&#xf242';
    },2000);

    setTimeout(()=>{
        charge.innerHTML= '&#xf241';
    },3000);

    setTimeout(()=>{
        charge.innerHTML= '&#xf240';
        charge.style.color= 'red';
    },4000);





}
chargeLoad();
setInterval(chargeLoad,5000);

