const input = document.querySelector("[name = name]")
const btnStart = document.querySelector(".btn-continue")

const goNextPage = (name) =>{
    if(!name){
        alert("Por favor, informe seu nome!")
        return
    }
    document.location.href = `./home.html?name=${name}`
}

btnStart.addEventListener("click", ()=>{
    goNextPage(input.value)
})

input.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
        goNextPage(input.value)
    }
    
})
