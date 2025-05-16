document.addEventListener('DOMContentLoaded',()=>{
    let btn = document.querySelector('.icon_expandir')
    let contentImg = document.querySelector('.imagen_expandida')

    btn.onclick = ()=>{
        if(contentImg.classList.contains("d-none")){
            contentImg.classList.remove("d-none")
        }else{
            contentImg.classList.add("d-none")
        }
    }

    contentImg.onclick = ()=>{
        contentImg.classList.add("d-none")
    }
})