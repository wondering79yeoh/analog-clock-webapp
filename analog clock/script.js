const hoursEl = document.getElementById('hour');
const minutesEl = document.getElementById('minute');
const secondsEl = document.getElementById('second');

const toggle = document.getElementById('toggle');
const dateEl = document.getElementById('date');
const timeEl = document.getElementById('time');

toggle.addEventListener('click',()=>{
    const html = document.querySelector('html');
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        toggle.innerHTML = 'Dark Mode'
    }else{
        html.classList.add('dark');
        toggle.innerHTML = 'Light Mode'
    }
})

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

setInterval(()=> {
    const time = new Date();
    const day = time.getDay();
    const date = time.getDate();
    const month = time.getMonth();
    const hour = time.getHours();

    const hourIn12Hours = hour % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hour >12 ? 'PM':'AM';

    dateEl.innerText = `${days[day]},${date} ${months[month]}`
    timeEl.innerText = `${hour}: ${minutes<10? `0${minutes}`: minutes} ${ampm}`

    hoursEl.style.transform = `translate(-50%, -100%) rotate(${hour * 30 }deg)`
    minutesEl.style.transform = `translate(-50%, -100%) rotate(${minutes * 6 }deg)`
    secondsEl.style.transform = `translate(-50%, -100%) rotate(${seconds * 6 }deg)`

},1000)


