document.addEventListener("DOMContentLoaded", function() {
    const timeDisplay = document.getElementById("timeDisplay");
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    const resetButton = document.getElementById("resetButton");
    const datePicker = document.getElementById("datePicker");

    let intervalId;
    let seconds = 0;

    // Set the current date
    let today = new Date();
    let date = today.toISOString().substr(0, 10);
    datePicker.value = date;

    function updateDisplay() {
        const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        timeDisplay.textContent = `${hours}:${minutes}:${secs}`;
    }

    async function startTimer() {
        return new Promise((resolve) => {
            intervalId = setInterval(() => {
                seconds++;
                updateDisplay();
            }, 1000);
        });
    }

    startButton.addEventListener("click", async () => {
        if (!intervalId) {
            await startTimer();
        }
    });

    stopButton.addEventListener("click", () => {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    });

    resetButton.addEventListener("click", () => {
        clearInterval(intervalId);
        intervalId = null;
        seconds = 0;
        updateDisplay();
    });
});
