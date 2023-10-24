function openNav() {
    document.getElementById("main-nav").style.height = "100%";
    document.getElementById("burger").style.display = "none";
}

function closeNav() {
    document.getElementById("main-nav").style.height = "0%";
    document.getElementById("burger").style.display = "revert";
}

window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );