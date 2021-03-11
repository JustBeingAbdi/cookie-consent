var data = (localStorage.getItem("agree")) || (localStorage.setItem("agree", false));

if(localStorage.getItem("agree") === 'true'){
    let urlparams = new URLSearchParams();
    let location = urlparams.get("redirect") || "https://superquickemail.cf";
    window.location.assign(location + '?cookies=true');
} else {
    document.getElementById("consent").style.visibility = "visible";
}

function Accept() {
    localStorage.setItem("agree", true);
    let urlparams = new URLSearchParams();
    let location = urlparams.get("redirect") || "https://superquickemail.cf";
    window.location.assign(location + '?cookies=true');
}

