function bloomFlower() {
    var flower = document.getElementById('flower');

    // Toggle the 'hidden' class to show/hide the flower
    flower.classList.toggle('hidden');

    // Reset the flower state after animation ends
    setTimeout(function () {
        flower.classList.toggle('hidden');
    }, 1000);
}
