document.getElementById('donate-now-1').addEventListener('click', function(){
    //    const inputDonate = parseFloat(document.getElementById('donate-input-1').value)
    const donateMoney = getPowerfulSystem('donate-input-1')
    const bankAccount = textTONumber('bank-account')
    const donateAmount = textTONumber('donate-amount-1')
    
    const presentAmount = bankAccount - donateMoney
    const totalDonateAmount = donateAmount + donateMoney
    
    document.getElementById('bank-account').innerText = presentAmount
    document.getElementById('donate-amount-1').innerText = totalDonateAmount

    
})

document.getElementById('donate-now-2').addEventListener('click',function(){
    const donateMoney = getPowerfulSystem('donate-input-2')
    const bankAccount = textTONumber('bank-account')
    const donateAmount = textTONumber('donate-amount-2')

    const presentAmount = bankAccount - donateMoney
    const totalDonateAmount = donateAmount + donateMoney
    
    document.getElementById('bank-account').innerText = presentAmount
    document.getElementById('donate-amount-2').innerText = totalDonateAmount


})

document.getElementById('donate-now-3').addEventListener('click',function(){
    const donateMoney = getPowerfulSystem('donate-input-3')
    const bankAccount = textTONumber('bank-account')
    const donateAmount = textTONumber('donate-amount-3')

    const presentAmount = bankAccount - donateMoney
    const totalDonateAmount = donateAmount + donateMoney
    
    document.getElementById('bank-account').innerText = presentAmount
    document.getElementById('donate-amount-3').innerText = totalDonateAmount


})

