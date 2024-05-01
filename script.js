
    let search = document.getElementById("search");
    let cros = document.getElementById("cros");
    let search1 = document.getElementById("search1");

    cros.addEventListener("click",() => {
        search.value="";

    });
    window.addEventListener("keydown",() => {
        if(search.value > 0){
            cros.style.display="block";
        }
    });
    search1.addEventListener("click",() => {
        window.location.href=`https://www.google.com/search?q=${document.getElementById("search").value}`;
    });

    let modebtn = document.querySelector("button");
    let body = document.querySelector("body");
    let currentmode = "light";
    let jaddu = document.getElementsByClassName("jaadu");
    let text = document.getElementsByClassName('text');

    modebtn.addEventListener("click",() => {
        if(currentmode === "light"){
            currentmode = "dark";
            body.classList.add("dark");
            body.classList.remove("light");
        }
        else {
            currentmode = "light";
            body.classList.add("light");
            body.classList.remove("dark");
        }
        console.log(currentmode);
    })