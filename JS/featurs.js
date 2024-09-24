document.getElementById('btn-history').addEventListener('click', function () {
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('Donation-section').classList.add('hidden');

    document.getElementById('btn-donation').classList.remove('bg-lime-300');
    document.getElementById('btn-history').classList.add('bg-lime-300');
});

document.getElementById('btn-donation').addEventListener('click', function () {
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('Donation-section').classList.remove('hidden');

    document.getElementById('btn-donation').classList.add('bg-lime-300');
    document.getElementById('btn-history').classList.remove('bg-lime-300');
});