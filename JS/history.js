document.getElementById('show-history-btn').addEventListener('click', function () {
    const historySection = document.getElementById('history-section');
    const historyList = document.getElementById('history-list');

    historyList.innerHTML = '';

    donationHistory.forEach(donation => {
        const listItem = document.createElement('li');
        listItem.textContent = `Donated ${donation.amount} BDT to ${donation.cause}`;
        historyList.appendChild(listItem);
    });

    historySection.classList.remove('hidden');
});
