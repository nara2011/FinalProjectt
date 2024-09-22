function fillProgressBar() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const targetWidth = bar.parentElement.getAttribute('aria-valuenow');
      bar.style.width = targetWidth + '%';
    });
  }

  // Вызываем функцию заполнения через 10 миллисекунд (для демонстрации)
  setTimeout(fillProgressBar, 10);