var h = [];
var s = [];
var l = [];
var root = document.documentElement;

for (var i = 0; i < 360; i++) {
    h.push("hsl(" + (i + 1) + ", " + 100 + "%, " + 50 + "%)");
}
for (var i = 0; i < 100; i++) {
    s.push("hsl(" + inp1.value + ", " + i + "%, 50%)");
    l.push("hsl(" + inp1.value + ", 100%, " + i + "%)");
}

inp1.style.background = "linear-gradient(to right, " + h.join(", ") + ")";
inp2.style.background = "linear-gradient(to right, " + s.join(", ") + ")";
inp3.style.background = "linear-gradient(to right, " + l.join(", ") + ")";


function update() {
    s = [];
    l = [];
    for (var i = 0; i < 100; i++) {
        s.push("hsl(" + inp1.value + ", " + i + "%, 50%)");
        l.push("hsl(" + inp1.value + ", 100%, " + i + "%)");
    }
    inp2.style.background = "linear-gradient(to right, " + s.join(", ") + ")";
    inp3.style.background = "linear-gradient(to right, " + l.join(", ") + ")";
    view.style.background = `hsl(${inp1.value}, ${inp2.value}%, ${inp3.value}%)`;
    root.style.setProperty("--color1", "hsl(" + inp1.value + ", 100%, 50%)");
    root.style.setProperty(
        "--color2",
        "hsl(" + inp1.value + ", " + inp2.value + "%, 50%)"
    );
    root.style.setProperty(
        "--color3",
        "hsl(" + inp1.value + ", 100%, " + inp3.value + "%)"
    );
    //inp2.value = `hsl(${inp1.value}, ${inp2.value}%, ${inp3.value}%)`;
}

inp1.oninput = update;
inp2.oninput = update;
inp3.oninput = update;


update();


//----------------------------------  Nav   --------------------------------------------


function pop(div) {
    document.getElementById(div).style.display = 'block';
}
function hide(div) {
    document.getElementById(div).style.display = 'none';
}
//To detect escape button
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        hide('popDiv');
    }
};