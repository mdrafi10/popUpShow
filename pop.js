// Exercise 1

const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
// h1.innerHTML += userName
// h1.innerHTML += checkName
const boxContainer = document.querySelector('.boxContainer h1')
const btn = document.querySelector('button')
const boxMain = document.querySelector('.boxMain')
const colsePop = document.querySelector('.boxMain i')

let userName = prompt('Give your Name')
    if (userName != null && userName != "") {
        h1.innerHTML += userName + '<br/>'
        h2.innerHTML = 'Hello ' + userName + ' Welcome our webSite.'
    }else{
        let checkName = prompt('Please enter Your Name')
        h1.innerHTML += checkName + '<br/>'
        h2.innerHTML = 'Hello ' + checkName + ' Welcome our webSite.'
}

btn.addEventListener("click", (event) =>{
    // event.target.innerHTML = 'Click Here'
    boxMain.classList.add('popUp')
    boxContainer.innerHTML = h1.innerHTML
})

colsePop.addEventListener('click', (evnt) =>{
    boxMain.classList.remove('popUp')
})
