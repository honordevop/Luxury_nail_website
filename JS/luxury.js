const testimonials = [
    {
        clientName:"_Sophia",
        testimony:"Nice! I love it asperiores corporis? Numquam, sapientex beatae nisi dolorem veritatis rerum architecto, debitis libero, accusantium quisquam eum.",
       logo:"."

    },
    {
        clientName:"_Fortune K",
       testimony:"I really love my nails. It's top notch,thank you luxury effect.",
       logo:"."  
    },
   {
    clientName:"_Jayvee",
    testimony:"It feels like there are endless ways to use Evernote....Use it for school,work,life,and beyond.",
     logo:"."
   },
]

const testimony = document.querySelector(".client-stats")
const clientNames = document.querySelector(".clients")
const clientslogo = document.querySelector(".client-logo")

for (let i = 0; i < testimonials.length;i++){
    const logo = document.createElement("img")
    logo.src = testimonials[i].logo
    clientslogo.appendChild(logo)
    logo.classList.add("img")
    clientNames.classList.add("clients")

    logo.addEventListener("click",function carousel(){
        testimony.innerHTML = testimonials[i].testimony
        clientNames.innerHTML = testimonials[i].clientName
    })
}


   
    let counter= 0
    let variable = setInterval(carousel,7000)
    function carousel(){
    let imageLogo= testimonials.length[counter];
    testimony.innerHTML = testimonials[counter].testimony;
    clientNames.innerHTML = testimonials[counter].clientName;
    counter++;
      if(counter===testimonials.length){
          counter=0
      }

   }