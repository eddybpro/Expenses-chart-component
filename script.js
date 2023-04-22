const chartsLinks = document.querySelectorAll('.chart-link'),
charts = document.querySelectorAll('.chart'),
days = document.querySelectorAll('.day');

const flags = [0,0,0,0,0,0,0];


async function getData(){
    const data = await fetch('data.json');
    const result = await data.json();

    days.forEach((day, i)=>{
        day.textContent = result[i].day;
    })

    chartsLinks.forEach((chartLink, i)=>{
        chartLink.firstElementChild.style.height = result[i].amount + 20 + 'px';
        chartLink.addEventListener('mouseover',()=>{
            if(flags[i]==0){
                chartLink.previousElementSibling.classList.remove('none');
                chartLink.previousElementSibling.textContent = '$' + result[i].amount;
                chartLink.firstElementChild.style.backgroundColor = 'hsl(10, 100%, 76%)';
            }else{
                return;
            }
        })
    })

    chartsLinks.forEach((chartLink, i)=>{
        chartLink.addEventListener('click',()=>{
            if(flags[i] == 1){
                chartLink.firstElementChild.style.backgroundColor = 'hsl(10, 79%, 65%)';
                flags[i] = 0;
            }else{
                chartLink.previousElementSibling.classList.remove('none');
                chartLink.previousElementSibling.textContent = '$' + result[i].amount;
                chartLink.firstElementChild.style.backgroundColor = 'hsl(186, 34%, 60%)';
                flags[i] = 1;
            }
        })
    })

    chartsLinks.forEach((chartLink, i)=>{
        chartLink.addEventListener('mouseout',()=>{
            if(flags[i] == 0){
                chartLink.previousElementSibling.classList.add('none');
                chartLink.firstElementChild.style.backgroundColor = 'hsl(10, 79%, 65%)';
            }else{
                return;
            }
            
        })
    })

}

getData();




