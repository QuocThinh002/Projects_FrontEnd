
const menuBox = document.querySelector('.menu .menu_box');
if (menuBox) {
    let data = [
        {title: 'Buger', image: 'image/buger.jpg', price: '20.00'},
        {title: 'Pasta', image: 'image/pasta.jpg', price: '20.00'},
        {title: 'Lasagna', image: 'image/lasagna.webp', price: '20.00'},
        {title: 'Drink', image: 'image/chocolate_drink.jpg', price: '20.00'},
        {title: 'Pizza', image: 'image/pizza.jpg', price: '20.00'},
        {title: 'Hot Dog', image: 'image/Hot_dog.jpg', price: '20.00'},
        {title: 'Juse', image: 'image/juse.jpg', price: '20.00'},
        {title: 'Biryani', image: 'image/biryani.webp', price: '20.00'},
        {title: 'Chocolate', image: 'image/chocolate.jpg', price: '20.00'},
        {title: 'Ice Cream', image: 'image/ice_cream.jpg', price: '20.00'},
        {title: 'Sandwich', image: 'image/sandwich.jpg', price: '20.00'},
    ]
    let html = ``;
    data.forEach(item => {
        html += `<div class="menu_card">
        <div class="menu_image">
            <img src=${item.image} alt=${item.title}>
        </div>
    
        <div class="small_card">
            <i class="fa-solid fa-heart"></i>
        </div>
    
        <div class="menu_info">
            <h2>${item.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <h3>$${item.price}</h3>
    
            <div class="menu_icon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
            </div>
    
            <a href="#" class="menu_btn">Order Now</a>
        </div>
    </div>`
    }) 
    menuBox.innerHTML = html;
}