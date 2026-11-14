let cart = [];

const cartCount = document.getElementById("cart-count");
const searchInput = document.getElementById("search");

// ДОДАВАННЯ ДО КОШИКА
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    cartCount.textContent = cart.length;

    alert("✅ " + name + " додано до кошика!");
}

// ВІДКРИТТЯ КОШИКА
function showCart() {
    if (cart.length === 0) {
        alert("Твій кошик поки порожній!");
        return;
    }

    let message = "🛒 ТВОЄ ЗАМОВЛЕННЯ\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        message += (index + 1) + ". " + item.name +
                   " — " + item.price + " грн\n";

        total += item.price;
    });

    message += "\nЗАГАЛЬНА СУМА: " + total + " грн";

    alert(message);
}

// ПОШУК ТОВАРІВ
searchInput.addEventListener("input", function() {
    let value = this.value.toLowerCase().trim();

    document.querySelectorAll(".product-card").forEach(product => {
        let name = product.textContent.toLowerCase();

        product.style.display = name.includes(value) ? "" : "none";
    });
});

// ФІЛЬТРАЦІЯ КАТЕГОРІЙ
function filterCategory(category) {
    document.getElementById("products").scrollIntoView();

    searchInput.value = "";

    document.querySelectorAll(".product-card").forEach(product => {
        product.style.display =
            product.dataset.category === category ? "" : "none";
    });
}

// ПОКАЗАТИ ВСІ ТОВАРИ
function showAll() {
    searchInput.value = "";

    document.querySelectorAll(".product-card").forEach(product => {
        product.style.display = "";
    });
}

