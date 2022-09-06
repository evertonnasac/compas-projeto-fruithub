const input = document.querySelector("[name = name]")
const btnStart = document.querySelector(".btn-continue")

btnStart.addEventListener("click", ()=>{
    if(!input.value){
        alert("Por favor, informe um nome!")
        return
    }
    const name = input.value
    document.location.href = `./home.html?name=${name}`

})