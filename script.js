let unseen = document.querySelectorAll(".unseen"),
    counter = document.getElementById("notiCount"),
    markAll = document.querySelector(".mark");
    
counter.textContent = unseen.length;

markAll.addEventListener("click", () => {
    unseen.forEach(e => e.classList.remove("unseen"));
    unseen = document.querySelectorAll(".unseen");
    counter.textContent = unseen.length;
});


