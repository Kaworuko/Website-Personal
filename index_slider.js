const toggle = document.getElementById('toggle');
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        console.log('Switch ON');
    } else {
        console.log('Switch OFF');
    }
});