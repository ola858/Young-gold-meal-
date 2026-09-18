const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
toggle?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const form=document.getElementById("reservation-form");
const msg=document.getElementById("form-message");
form?.addEventListener("submit",(e)=>{
  e.preventDefault();
  const data=new FormData(form);
  msg.textContent=`Thanks ${data.get("name")} — your reservation request has been received. We'll confirm shortly.`;
  form.reset();
});

