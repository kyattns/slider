function showText(element) {
    const img = element.querySelector('img');
    const textOverlay = element.querySelector('.text-overlay');
    img.style.transform = 'scale(1.1)';
    textOverlay.style.transform = 'translateY(0)';
}

function hideText(element) {
    const img = element.querySelector('img');
    const textOverlay = element.querySelector('.text-overlay');
    img.style.transform = 'scale(1)';
    textOverlay.style.transform = 'translateY(100%)';
}
