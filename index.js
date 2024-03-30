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

const url = 'https://swapi.dev/api/people/' 

//1. query ajax method:

$.ajax({
    type: 'GET',
    url: url,
    success: function(response){
        console.log('jquery ajax', response)
    },
    error: function(error){
        console.log(error)
    }
})

//2. XMLHttpRequest:

const req = new XMLHttpRequest()

req.addEventListener('readystatechange', ()=>{
    if(req.readyState===4){
        console.log('xhttp', JSON.parse(req.responseText))
    }
})

req.open('GET', url)
req.send()

//3. Fetch Method:

fetch(url)
.then(resp=> resp.json()).then(data=> console. log('fetch', data))
.catch(err=> console. log(err))
