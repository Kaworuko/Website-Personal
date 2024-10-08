function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('real_time_clock').textContent = currentTime;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();