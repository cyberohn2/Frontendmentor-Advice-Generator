const adviceText = document.querySelector('.advice')
window.onload = function () {
    //TO PREVENT DATA LOSS WHEN A USER RELOADS THE PAGE
    const savedAdvice = localStorage.getItem('advice')
    if (savedAdvice) {
        adviceText.innerHTML = savedAdvice;
    }

    //GETTING THE ACTUAL DATA FROM THE API PROVIDED BY FRONTEND MENTOR
    const data = getData()
    data.then( dat =>{
        adviceText.innerHTML = dat.slip.advice;
            document.querySelector('#adviceNo').innerHTML = `#${data.slip.id}`
            localStorage.setItem("advice", dat.slip.advice)
    } )}

const getData = async function () {
    const response = await  fetch(`https://api.adviceslip.com/advice`)
    const data = await response.json()
    return data
}

const clipboardBtn = document.querySelector('.clipboard')
clipboardBtn.addEventListener('click', () =>{
    navigator.clipboard.writeText(adviceText.innerHTML);
})

const whatsappBtn = document.querySelector('.whatsapp')
whatsappBtn.addEventListener('click', () =>{
    let whatsappLink = `https://api.whatsapp.com/send?text=${adviceText.innerHTML}`
    window.location.assign(whatsappLink)
})