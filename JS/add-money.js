document.getElementById('btn-add-money').addEventListener('click', function () {
    const inputAddMoney = document.getElementById('input-add-money');
    const noakhaliAddMoney = document.getElementById('noakhali-add-money');
    const availableBalance = document.getElementById('Available-balance');
    const modal = document.getElementById('my_modal');

    let donationAmount = parseFloat(inputAddMoney.value);
    let currentNoakhaliMoney = parseFloat(noakhaliAddMoney.textContent);
    let currentBalance = parseFloat(availableBalance.textContent);

    if (isNaN(donationAmount) || donationAmount <= 0) {
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
        noakhaliAddMoney.textContent = (currentNoakhaliMoney + donationAmount).toFixed(2);
        availableBalance.textContent = (currentBalance - donationAmount).toFixed(2);

        inputAddMoney.value = '';
        modal.showModal();
    }
});

// Feni add money 
document.getElementById('btn-add-money-feni').addEventListener('click', function () {
    const inputAddMoney = document.getElementById('input-add-money-feni');
    const noakhaliAddMoney = document.getElementById('feni-add-money');
    const availableBalance = document.getElementById('Available-balance');
    const modal = document.getElementById('my_modal');

    let donationAmount = parseFloat(inputAddMoney.value);
    let currentNoakhaliMoney = parseFloat(noakhaliAddMoney.textContent);
    let currentBalance = parseFloat(availableBalance.textContent);

    if (isNaN(donationAmount) || donationAmount <= 0) {
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
        noakhaliAddMoney.textContent = (currentNoakhaliMoney + donationAmount).toFixed(2);
        availableBalance.textContent = (currentBalance - donationAmount).toFixed(2);
        
        inputAddMoney.value = '';
        modal.showModal();
    }
});

// Quota  add money 
document.getElementById('btn-add-money-quota').addEventListener('click', function () {
    const inputAddMoney = document.getElementById('input-add-money-quota');
    const noakhaliAddMoney = document.getElementById('quota-add-money');
    const availableBalance = document.getElementById('Available-balance');
    const modal = document.getElementById('my_modal');

    let donationAmount = parseFloat(inputAddMoney.value);
    let currentNoakhaliMoney = parseFloat(noakhaliAddMoney.textContent);
    let currentBalance = parseFloat(availableBalance.textContent);

    if (isNaN(donationAmount) || donationAmount <= 0) {
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
        noakhaliAddMoney.textContent = (currentNoakhaliMoney + donationAmount).toFixed(2);
        availableBalance.textContent = (currentBalance - donationAmount).toFixed(2);
        
        inputAddMoney.value = '';
        modal.showModal();
    }
});
