// Das DOM-Element mit der ID "anchor" wird ausgewählt und in der Variablen "anchor" gespeichert
const anchor = document.getElementById('anchor')

// Mit der Methode getBoundingClientRect() wird die Position und Größe des "anchor"-Elements ermittelt und in der Variablen "rekt" gespeichert
const rekt = anchor.getBoundingClientRect();

// Mit den Berechnungen wird der Mittelpunkt des "anchor"-Elements ermittelt und in den Variablen "anchorX" und "anchorY" gespeichert
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;

// Es wird ein Event-Listener für die "mousemove"-Aktion auf das Dokument gesetzt
document.addEventListener('mousemove', (e) => {
    // Die X- und Y-Koordinaten des Mauszeigers werden ermittelt und in den Variablen "mouseX" und "mouseY" gespeichert
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Es wird der Winkel zwischen dem Mauszeiger und dem Mittelpunkt des "anchor"-Elements berechnet und in der Variablen "angleDeg" gespeichert
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    // Der Winkel wird in Grad auf der Konsole ausgegeben
    console.log(angleDeg)

    // Es werden alle Elemente mit der Klasse "eye" ausgewählt
    const eyes = document.querySelectorAll('.eye')

    // Für jedes "eye"-Element wird es um den berechneten Winkel plus 90 Grad gedreht
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    })
})

// Es wird eine Funktion definiert, die den Winkel zwischen zwei Punkten berechnet
function angle(cx, cy, ex, ey) {
    // Es wird der Abstand zwischen den Punkten in X- und Y-Richtung berechnet
    const dy = ey - cy;
    const dx = ex - cx;

    // Es wird der Winkel in Bogenmaß mithilfe von Math.atan2() berechnet
    const rad = Math.atan2(dy, dx);

    // Der Winkel in Grad wird mit der Formel 180 / Math.PI berechnet
    const deg = rad * 180 / Math.PI;

    // Der Winkel in Grad wird zurückgegeben
    return deg;
}
