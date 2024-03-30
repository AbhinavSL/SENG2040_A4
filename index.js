console.log('hello world')

const testEL = document.getElementById('test-el')

testEL.textContent = 'bye bye'

testEL.addEventListener('click', ()=>{
    console.log('clicked')
    testEL.innerHTML = "<b>clicked</b>"
})

testEL.addEventListener('mouseover',()=>{
    console.log('on')
})

testEL.addEventListener('mouseout',()=>{
    console.log('off')
})

document.addEventListener('scroll', ()=>{
    const postitionY = window.scrollY
    console.log(postitionY)
})





