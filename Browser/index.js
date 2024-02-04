

// const div = document.getElementsByClassName('parent')[0]
// const childDiv = document.getElementById('item-1')
// const item = document.getElementsByTagName('h1')

// div.addEventListener("click", func)
// childDiv.addEventListener("click", func)
// item.addEventListener("click", func)


// function func(e){
//     alert("current Target :-- " + e.currentTarget.tagName +"target Name : -- " + e.target.tagName)
// }

// 'use strict'

// a = 1000
// console.log(a)




const items = document.querySelectorAll('.item');

window.addEventListener('scroll', handleScroll);
window.addEventListener('wheel', handleScroll);  //for touchpad

function handleScroll() {
    const triggerBottom = window.innerHeight;
     console.log(triggerBottom)

    items.forEach((item) => {
        const boxTop = item.getBoundingClientRect().top;
        console.log(boxTop)
        if (boxTop < triggerBottom) { // Adjusted condition
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
}

handleScroll(); // Initial check on page load

