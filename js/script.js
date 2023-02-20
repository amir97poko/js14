let sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    elMin = document.querySelector('.minutes'),
    elHour = document.querySelector('.hours');
    elSeconds = document.querySelector('.seconds');



function clock() {
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;

    sec.style = `transform:rotate(${seconds}deg); transition;`
    min.style = `transform:rotate(${minutes}deg); transition;`
    hour.style = `transform:rotate(${(hours) + (minutes/12)}deg); transition;`


    setTimeout(() => {
        clock()
    }, 1000);


    elMin.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    elHour.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    elSeconds.innerHTML = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()  


}


clock()


let links = document.querySelectorAll('.tabsItem '),
    tabs = document.querySelectorAll('.tabsContentItem '),
    span = document.querySelector('.tabsLink__span');


for (let i = 0; i < links.length; i++) {

    links[i].addEventListener('click', function () {

        for (let x = 0; x < tabs.length; x++) {
            links[x].classList.remove('active')
            tabs[x].classList.remove('active')
            span.classList.remove('active')
            span.classList.toggle('active')
        }

        this.classList.add('active');
        tabs[i].classList.add('active')

    })

}
