const imgProductArray = document.querySelectorAll(".img-product")
imgProductArray.forEach(product => {
    product.addEventListener("click",(e)=> {
        const idProduct = e.target.getAttribute("id")
        const product = getProduct(idProduct)
        addProductBasket(product)
    })
})

const pName = document.querySelector(".name")

const urlParams = new URLSearchParams(window.location.search)
let nameUser = urlParams.get("name")

if(nameUser){

    nameUser = nameUser.split(" ")[0]
    nameUser.length > 19 && (nameUser = nameUser.substring(0,19))
    localStorage.setItem("nameUser", nameUser)
}

pName.innerHTML = "Welcome, "+localStorage.getItem("nameUser")

const getProduct = (id) =>{
    
    const product = {
        p1 : {
            name : "Honey lime combo",
            photo : "img-Honey-Lime-Peach.png",
            price: "2,000"
        },
        p2 : {
            name : "Berry mango combo",
            photo : "img-Glowing-Berry.png",
            price: "2,000"
        },
        p3 : {
            name : "Quinoa fruit salad",
            photo : "img-breakfast-quinoa-and-red.png",
            price: "10,000"
        },
        p4 : {
            name : "Tropical fruit salad",
            photo : "img-Best-Ever-Tropical.png",
            price: "10,000"
        }
    }
    return product[id]
}

const addProductBasket = ({name, photo, price}) =>{
    window.location.href = `./basket.html?name=${name}&photo=${photo}&price=${price}`
}
