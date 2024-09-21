document.addEventListener('DOMContentLoaded', (event) => {
    const floatingButton = document.getElementById('floating-button');

    floatingButton.addEventListener('click', () => {
        window.location.href = '#header';
        // or window.location.href = '/';
    });
});