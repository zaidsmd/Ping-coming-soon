let emailRex = /^\w+@\w+\.\w+$/i
document.querySelector('#notify').addEventListener('mouseover',()=>{
    if (!emailRex.test(document.querySelector('#email').value)){
        document.querySelector('#email').classList.add('error')
        document.querySelector('#error').classList.add('show')
    }else  {
        document.querySelector('#email').classList.remove('error')
        document.querySelector('#error').classList.remove('show')
    }
})