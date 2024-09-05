let progress = 0;
const progressBar = document.getElementById("progress-bar");

function updateProgress() {
    if (progress <= 100) {
        progressBar.style.width = progress + '%';
        progress += 1;
        setTimeout(updateProgress, 100);  // Atualiza a cada 100ms
    }
}

updateProgress();