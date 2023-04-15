function changeCheckboxColors() {
    const checkboxes = document.getElementsByClassName('checkbox-container');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].style.accentColor = randomColor();
        checkboxes[i].checked = Math.random() >= 0.5;
    }
}

const NUM_CHECKS = 1015;
const checks = [];
for (let i = 0; i < NUM_CHECKS; i++) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox-container';
    checkbox.style.accentColor = randomColor();
    checkbox.checked = Math.random() >= 0.5;
    checks.push(checkbox);
    document.body.appendChild(checkbox);
}

document.addEventListener('DOMContentLoaded', function () {
    setInterval(changeCheckboxColors, 1000); // Change colors every second
});