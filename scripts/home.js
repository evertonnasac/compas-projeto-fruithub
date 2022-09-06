const imgProductArray = document.querySelectorAll(".img-product")
const pName = document.querySelector(".name")

const urlParams = new URLSearchParams(window.location.search)
const nameUser = urlParams.get("name") 

if(nameUser){
    localStorage.setItem("nameUser", nameUser)
}

pName.innerHTML = localStorage.getItem("nameUser")

imgProductArray.forEach(product => {
    product.addEventListener("click",(e)=> {
        const idProduct = e.target.getAttribute("id")
        const product = getProduct(idProduct)
        addProductBasket(product)
    })
})


const getProduct = (id) =>{
    
    const product = {
        p1 : {
            name : "Honey lime combo",
            urlPhoto : "../images/img-Honey-Lime-Peach-Fruit-Sad.png",
            price: "2,000"
        },
        p2 : {
            name : "Berry mango combo",
            urlPhoto : "../images/img-Glowing-Berry-Fruit-Salad.png",
            price: "2,000"
        },
        p3 : {
            name : "Quinoa fruit salad",
            urlPhoto : "../images/img-breakfast-quinoa-and-red-fruit-salad.png",
            price: "10,000"
        },
        p4 : {
            name : "Tropical fruit salad",
            urlPhoto : "../images/img-Best-Ever-Tropical-Fruit-Salad.png",
            price: "10,000"
        }
    }
    return product[id]
}

const addProductBasket = ({name, urlPhoto, price}) =>{
    window.location.href = `./basket.html?name=${name}&photo=${urlPhoto}&price=${price}`
}
