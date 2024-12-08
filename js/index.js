document.getElementById('donate-now-1').addEventListener('click', function () {
    //    const inputDonate = parseFloat(document.getElementById('donate-input-1').value)
    const donateMoney = getPowerfulSystem('donate-input-1')

    if (isNaN(donateMoney) || donateMoney <= 0) {
        alert('please valid me input number')
        return;
    }

    const bankAccount = textTONumber('bank-account')
    const donateAmount = textTONumber('donate-amount-1')

    const presentAmount = bankAccount - donateMoney
    const totalDonateAmount = donateAmount + donateMoney

    document.getElementById('bank-account').innerText = presentAmount
    document.getElementById('donate-amount-1').innerText = totalDonateAmount

    // history
    const instantDonate = document.getElementById('instant-donate-1')
    instantDonate.innerText = donateMoney
    
    document.getElementById('my_modal_1').showModal();

})

document.getElementById('donate-now-2').addEventListener('click', function () {
    const donateMoney = getPowerfulSystem('donate-input-2')

    if (isNaN(donateMoney) || donateMoney <= 0) {
        alert('please valid me input number')
        return;
    }

    const bankAccount = textTONumber('bank-account')
    const donateAmount = textTONumber('donate-amount-2')

    const presentAmount = bankAccount - donateMoney
    const totalDonateAmount = donateAmount + donateMoney

    document.getElementById('bank-account').innerText = presentAmount
    document.getElementById('donate-amount-2').innerText = totalDonateAmount

    // history
    const instantDonate = document.getElementById('instant-donate-2')
    instantDonate.innerText = donateMoney

    document.getElementById('my_modal_2').showModal();
})

document.getElementById('donate-now-3').addEventListener('click', function () {
    const donateMoney = getPowerfulSystem('donate-input-3')

    if (isNaN(donateMoney) || donateMoney <= 0) {
        alert('please valid me input number')
        return;
    }

    const bankAccount = textTONumber('bank-account')
    const donateAmount = textTONumber('donate-amount-3')

    const presentAmount = bankAccount - donateMoney
    const totalDonateAmount = donateAmount + donateMoney

    document.getElementById('bank-account').innerText = presentAmount
    document.getElementById('donate-amount-3').innerText = totalDonateAmount

    // history
    const instantDonate = document.getElementById('instant-donate-3')
    instantDonate.innerText = donateMoney

    document.getElementById('my_modal_3').showModal();

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
    document.getElementById('history-but').classList.remove('hidden')

})