function preview() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const console = document.getElementById("console").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
  
    // update the preview
    document.getElementById("sellTitle").innerHTML = title;
    document.querySelector(".gridItemCategories").innerHTML = `
      <p class="buttonChategory">${category}</p>
      <p class="buttonChategory">${console}</p>
    `;
    document.querySelector(".previewImg").src = document.getElementById("image").value;
    document.querySelector(".gamesPrice").innerHTML = `$${price}`;
    document.querySelector(".gamesDescription").innerHTML = description;
  }
  
  function addCategory() {
    const category = document.getElementById("category").value;
    const categoryButton = document.createElement("p");
    categoryButton.className = "buttonChategory";
    categoryButton.innerHTML = category;
    document.querySelector(".gridItemCategories").appendChild(categoryButton);
    document.getElementById("category").value = "";
    preview();
  }
  
  function addConsole() {
    const console = document.getElementById("console").value;
    const consoleButton = document.createElement("p");
    consoleButton.className = "buttonChategory";
    consoleButton.innerHTML = console;
    document.querySelector(".itemConsole").appendChild(consoleButton);
    document.getElementById("console").value = "";
    preview();
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("title").addEventListener("keyup", preview);
    document.getElementById("category").addEventListener("keyup", preview);
    document.getElementById("console").addEventListener("keyup", preview);
    document.getElementById("description").addEventListener("keyup", preview);
    document.getElementById("price").addEventListener("keyup", preview);
    document.getElementById("image").addEventListener("change", preview);
    document.querySelector(".addBtn").addEventListener("click", addCategory);
    document.querySelectorAll(".addBtn")[1].addEventListener("click", addConsole);
  });

  
  function showPopup() {
    var popups = document.getElementsByClassName("popup");
    const redirect = document.createElement("p");
    for (var i = 0; i < popups.length; i++) {
      var popup = popups[i];
      popup.style.display = "block";
      popup.style.color = "green";
      sellBtn.style.backgroundColor = "green";
      setTimeout(function() {
        popup.style.display = "none";
        sellBtn.style.backgroundColor = "var(--bright-pink)";
        window.location.href = "profile.html";
      }, 3000);
    }
  }
  
  var sellForm = document.querySelector(".sellGameForm");
  var sellBtn = document.getElementById("sellBtn");
  
  sellBtn.addEventListener("click", function(event) {
    event.preventDefault();
    showPopup();
  });
  