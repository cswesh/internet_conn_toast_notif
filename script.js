const wrapper = document.querySelector('.wrapper'),
toast = wrapper.querySelector('.toast'),
wifiIcon = wrapper.querySelector('.icon'),
title = wrapper.querySelector('span'),
subTitle = wrapper.querySelector('p'),
closeIcon = wrapper.querySelector('.close-icon');


window.onload = ()=>{
    function ajax(){
        let xhr = new XMLHttpRequest();
        xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);
        xhr.onload = () =>{
            //console.log(event);
            if(xhr.status == 200 && xhr.status <300){
                toast.classList.remove('offline');
        title.innerHTML = "You're online now";
        subTitle.innerHTML = "Hurray! Internet is back";
        wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';

        closeIcon.onclick = ()=>{
            wrapper.classList.add('hide');
        }

        setTimeout(()=>{
           wrapper.classList.add('hide'); 
        },5000);
            }
            else{
                offline();
            }
        }
        xhr.onerror = ()=>{
            offline();
        }
        xhr.send(); 
    }
    function offline(){
        wrapper.classList.remove('hide');
        toast.classList.add('offline');
        title.innerHTML = "You're offline now";
        subTitle.innerHTML = "Oops! Internet is disconnected.";
        wifiIcon.innerHTML = "<i class='uil uil-wifi-slash'></i>"
    }
    setInterval(()=>{
        ajax();

    },100);
}