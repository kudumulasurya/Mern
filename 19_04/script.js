let arr =[];
fetch("https://fakestoreapi.com/products")
.then((data) => {
    return data.json()
})

.then((data) => {
    // console.log(data)
    // arr = data
    showProducts(data);
});

const container = document.getElementById("container");

const showProducts = (arr) => {
arr.map((ele) => {
    const productCard =
    `<div class = "card">
        <p>${ele.title}</p> 
        <img class = "carding" src = "${ele.image}"/>
        <p>${ele.description}</p>

    </div>
    `
    container.innerHTML += productCard
});
};