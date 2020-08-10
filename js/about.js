let hand = document.querySelector(".wavinghand");
  let media = document.querySelector(".media")

  hand.addEventListener("click",function(){
      media.classList.remove("hidden");
    media.classList.add("unhidden");
  })