
const items = document.querySelectorAll('.item');
const parent = document.querySelector('.parent')

window.addEventListener('wheel', (e) => {
        let height = window.innerHeight*0.9;

        let scrollHeight = document.documentElement.scrollHeight
let heightt = document.documentElement.scrollTop

console.log(heightt+"  "+scrollHeight)
        
        items.forEach((item) => {
           let itemTop = item.getBoundingClientRect().bottom;

           if(height > itemTop){
             item.classList.add('show')
           }
           else
              item.classList.remove('show')
        })

})

let scrollHeight = document.documentElement.scrollHeight
let height = document.documentElement.scrollTop

console.log(height+"  "+scrollHeight)