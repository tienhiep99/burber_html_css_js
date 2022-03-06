function slideshow() {
    var counter = 1;
    setInterval(function(slideshow) {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 3) {
            counter = 1;
        }
    }, 2000);
}
slideshow();