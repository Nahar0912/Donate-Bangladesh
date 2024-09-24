function addDonation(inputFieldId, addMoneyId, modalId, causeName) {
    const inputAddMoney = document.getElementById(inputFieldId);
    const AddMoney = document.getElementById(addMoneyId);
    const availableBalance = document.getElementById('Available-balance');
    const modal = document.getElementById(modalId);

    let donationAmount = parseFloat(inputAddMoney.value);
    let currentAddMoney = parseFloat(AddMoney.textContent);
    let currentBalance = parseFloat(availableBalance.textContent);

    if (isNaN(donationAmount) || donationAmount <= 0 || !Number.isInteger(donationAmount)) {
        alert("Please enter a valid positive donation amount.");
        inputAddMoney.value = '';
        return;
    }
    else if (donationAmount > currentBalance) {
        alert("Donation amount exceeds available balance.");
        inputAddMoney.value = '';
        return;
    }
    else {
        AddMoney.textContent = (currentAddMoney + donationAmount);
        availableBalance.textContent = (currentBalance - donationAmount);
        inputAddMoney.value = '';
        modal.showModal();
    }
}

document.getElementById('btn-add-money').addEventListener('click', function () {
    addDonation('input-add-money', 'noakhali-add-money', 'my_modal', 'Flood at Noakhali');
});

document.getElementById('btn-add-money-feni').addEventListener('click', function () {
    addDonation('input-add-money-feni', 'feni-add-money', 'my_modal', 'Flood Relief in Feni');
});

document.getElementById('btn-add-money-quota').addEventListener('click', function () {
    addDonation('input-add-money-quota', 'quota-add-money', 'my_modal', 'Quota Movement Injuries');
});
