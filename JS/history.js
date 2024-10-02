function addDonationHistory(causeName, amount, dateTime) {
    const historySection = document.getElementById('history-section');
    const historyList = document.createElement('div');
    historyList.classList.add('history-item', 'p-3', 'border', 'border-gray-200', 'mb-3');

    historyList.innerHTML = `
        <p><strong>Cause:</strong> ${causeName}</p>
        <p><strong>Amount Donated:</strong> ${amount} BDT</p>
        <p><strong>Date & Time:</strong> ${dateTime}</p>
    `;

    historySection.appendChild(historyList);
}

function updateDonationHistory(causeName, donationAmount) {
    const date = new Date();
    const dateTime = date.toLocaleString();
    addDonationHistory(causeName, donationAmount, dateTime);
}

function handleDonation(buttonId, inputId, causeName) {
    document.getElementById(buttonId).addEventListener('click', function () {
        const donationAmount = document.getElementById(inputId).value.trim(); // Trim whitespace
        const donationAmountInt = parseFloat(donationAmount);

        updateDonationHistory(causeName, donationAmountInt);
        document.getElementById(inputId).value = '';
    });
}

handleDonation('btn-add-money', 'input-add-money', 'Flood at Noakhali');
handleDonation('btn-add-money-feni', 'input-add-money-feni', 'Flood Relief in Feni');
handleDonation('btn-add-money-quota', 'input-add-money-quota', 'Quota Movement Injuries');
