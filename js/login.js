const btn = document.getElementById("login"),
alert = document.querySelector(".alert")

alert.style = "display:none"

btn.addEventListener("click", () =>{
    alert.style = "display: flex"
    setTimeout(() => {
        alert.style = "display: none"
    }, 2000);
})