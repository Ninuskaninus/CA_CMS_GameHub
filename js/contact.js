const contactForm = document.querySelector(".contactForm");
const sendBtn = document.querySelector(".button4");

sendBtn.addEventListener("click", function(){
    const popup = document.createElement("div");
    const popupMessage = document.createElement("p");
    popup.classList.add("popupBuy");
    popup.style.backgroundColor = "green";
    popupMessage.textContent = "Message sent!";
    contactForm.appendChild(popup);
    popup.appendChild(popupMessage);

    setTimeout(function (){
        popup.remove();
        window.location.href = "index.html";
    }, 3000);
});