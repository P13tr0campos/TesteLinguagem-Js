document.addEventListener("DOMContentLoaded", function () {
    const clickButton = document.getElementById("clickButton");
    const scoreElement = document.getElementById("score");
    const timeElement = document.getElementById("time");

    let score = 0;
    let timeLeft = 30;

    clickButton.addEventListener("click", function () {
        if (timeLeft > 0) {
            score++;
            scoreElement.textContent = score;
        }
    });

    function updateTimer() {
        if (timeLeft > 0) {
            timeLeft--;
            timeElement.textContent = timeLeft + " segundos";
        } else {
            alert("Tempo esgotado! Sua pontuação final é: " + score);
            clickButton.disabled = true;
        }
    }

    // Iniciar o contador regressivo a cada segundo
    setInterval(updateTimer, 1000);
});