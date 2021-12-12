if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

var elem = document.getElementById("logo");

window.onload = function () {
    elem.style.marginRight = "0px";
}