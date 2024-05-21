const navTag = document.querySelector(".nav-wrap")
const memberTag = document.querySelector(".conB .member")
const product = document.querySelectorAll(".product01, .product02, .product03")
product.forEach(tag=> {
   tag.style.opacity = '0' 
})
const devil = document.querySelectorAll(".devils img")
product.forEach(devil=> {
   devil.style.opacity = '0' 
})

document.addEventListener("scroll", function(){
    //navbar
    if (window.scrollY >= 100) {
        navTag.style.background = "rgba(255, 255, 255, 0.40)"
        navTag.style.backdropFilter = "blur(20px)";
    }
    if (window.scrollY < 100) {
        navTag.style.background = "#B00C13"
    }


    //member
    const memberTop = memberTag.getBoundingClientRect().top;
    const memberBottom = memberTag.getBoundingClientRect().bottom;

    if(memberTop < window.innerHeight && memberBottom > 0){
        memberTag.style.animation = "fadeIn 1s .3s both"
        console.log('rmfo')
    }else{
        memberTag.style.animation = "0"
    }

    //product
    let delay = 0.25;

    product.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top;
    const tagBottom = tag.getBoundingClientRect().bottom;

    if(tagTop < window.innerHeight && tagBottom > 0){
        tag.style.animation = `fadeIn .5s ${delay}s both`;
        delay += 0.15;
    }else{
        tag.style.animation = "0"
    }

    })

    //devil
    let delays = 0.25;

    product.forEach(devil => {
        const devilTop = devil.getBoundingClientRect().top;
    const devilBottom = devil.getBoundingClientRect().bottom;

    if(devilTop < window.innerHeight && devilBottom > 0){
        devil.style.animation = `fadeIn .5s ${delays}s both`;
        delays += 0.15;
    }else{
        devil.style.animation = "0"
    }

    })
    
})




