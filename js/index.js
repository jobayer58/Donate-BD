// donation-1
document.getElementById('donate-now-1').addEventListener('click', function () {
    const donateMoney = getPowerfulSystem('donate-input-1')

    if (isNaN(donateMoney) || donateMoney <= 0) {
        alert('Please donate your money.what you are doing makes no sense')
        return;
    }

    if (donateMoney >= 50000) {
        alert('you are going beyond your means')
        return;
    }

    const bankAccount = textTONumber('bank-account')
    const donateAmount = textTONumber('donate-amount-1')
    const instantDonate = textTONumber('instant-donate-1')

    const presentAmount = bankAccount - donateMoney
    const totalDonateAmount = donateAmount + donateMoney
    const historyAmount = donateMoney + instantDonate

    document.getElementById('bank-account').innerText = presentAmount
    document.getElementById('donate-amount-1').innerText = totalDonateAmount
    document.getElementById('instant-donate-1').innerText = historyAmount

    // current time
    const currentTimeElement = document.getElementById('current-time-1')
    const now = new Date();
    const formattedTime = now.toString();
    currentTimeElement.textContent = `Date: ${formattedTime}`

    document.getElementById('my_modal_1').showModal();
    document.getElementById('donate-input-1').value = '';

})

// donation-2
document.getElementById('donate-now-2').addEventListener('click', function () {
    const donateMoney = getPowerfulSystem('donate-input-2')

    if (isNaN(donateMoney) || donateMoney <= 0) {
        alert('Please donate your money.what you are doing makes no sense')
        return;
    }

    if (donateMoney >= 50000) {
        alert('you are going beyond your means')
        return;
    }

    const bankAccount = textTONumber('bank-account')
    const donateAmount = textTONumber('donate-amount-2')
    const instantDonate = textTONumber('instant-donate-2')

    const presentAmount = bankAccount - donateMoney
    const totalDonateAmount = donateAmount + donateMoney
    const historyAmount = donateMoney + instantDonate

    document.getElementById('bank-account').innerText = presentAmount
    document.getElementById('donate-amount-2').innerText = totalDonateAmount
    document.getElementById('instant-donate-2').innerText = historyAmount

    // current time
    const currentTimeElement = document.getElementById('current-time-2')
    const now = new Date();
    const formattedTime = now.toString();
    currentTimeElement.textContent = `Date: ${formattedTime}`

    document.getElementById('my_modal_2').showModal();
    document.getElementById('donate-input-2').value = '';
})

// donation-3
document.getElementById('donate-now-3').addEventListener('click', function () {
    const donateMoney = getPowerfulSystem('donate-input-3')

    if (isNaN(donateMoney) || donateMoney <= 0) {
        alert('Please donate your money.what you are doing makes no sense')
        return;
    }

    if (donateMoney >= 50000) {
        alert('you are going beyond your means')
        return;
    }

    const bankAccount = textTONumber('bank-account')
    const donateAmount = textTONumber('donate-amount-3')
    const instantDonate = textTONumber('instant-donate-3')

    const presentAmount = bankAccount - donateMoney
    const totalDonateAmount = donateAmount + donateMoney
    const historyAmount = donateMoney + instantDonate

    document.getElementById('bank-account').innerText = presentAmount
    document.getElementById('donate-amount-3').innerText = totalDonateAmount
    document.getElementById('instant-donate-3').innerText = historyAmount

    // current time
    const currentTimeElement = document.getElementById('current-time-3')
    const now = new Date();
    const formattedTime = now.toString();
    currentTimeElement.textContent = `Date: ${formattedTime}`

    document.getElementById('my_modal_3').showModal();
    document.getElementById('donate-input-3').value = '';

})

// history functionality
const historyTab = document.getElementById('history')
const donationTab = document.getElementById('donation')
historyTab.addEventListener('click', function () {

    historyTab.classList.add('bg-[#B4F461]')
    historyTab.classList.remove('border-[1px]', 'border-[#1111114D]')
    donationTab.classList.remove('bg-[#B4F461]')
    donationTab.classList.add('border-[1px]', 'border-[#1111114D]')

    document.getElementById('donation-page').classList.add('hidden')
    document.getElementById('history-page').classList.remove('hidden')

})

document.getElementById('donation').addEventListener('click',function(){
    
    document.getElementById('history-page').classList.add('hidden')
    document.getElementById('donation-page').classList.remove('hidden')
    document.getElementById('history').classList.remove('bg-[#B4F461]')
    document.getElementById('history').classList.add('border-[1px]', 'border-[#1111114D]')
    document.getElementById('donation').classList.add('bg-[#B4F461]')
    document.getElementById('donation').classList.remove('border-[1px]', 'border-[#1111114D]')
})