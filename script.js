const products = [
            { id: 1, name: "Silk Saree", price: 999, image: "silk saree.jpeg" },
            { id: 2, name: "Cotton Saree", price: 1500, image: "cotton saree.jpeg" },
            { id: 3, name: "Pattu Saree", price: 800, image: "pattu saree.jpeg" },
            { id: 4, name: "Assam Silkaree", price: 1200, image: "assam silk saree.jpeg" },
            { id: 5, name: "Patola Saree", price: 1800, image: "patola saree.jpeg" },
            { id: 6, name: "Banarasi Saree", price: 2200, image: "banarasi saree.jpeg" },
            { id: 7, name: "Kanchipuram Saree", price: 2000, image: "kanchipuram saree.jpeg" },
            { id: 8, name: "Chiffron Saree", price: 1800, image: "chiffron saree.jpeg" },
            { id: 9, name: "Gadwal Saree", price: 2500, image: "gadwal saree.jpeg" },
            { id: 10, name: "Paithani Saree", price: 3000, image: "paithani saree.jpeg" },
            { id: 11, name: "Chanderi Saree", price: 1500, image: "chanderi saree.jpeg" },
            { id: 12, name: "Uppadam Saree", price: 4800, image: "uppadam saree.jpeg" },
        ];

        let cart = [];

        function displayProducts(productList) {
            const productsDiv = document.getElementById('products');
            productsDiv.innerHTML = '';
            productList.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>&#8377; ${product.price}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productsDiv.appendChild(productCard);
            });
        }

        function searchProducts() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm)
            );
            displayProducts(filteredProducts);
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            cart.push(product);
            updateCart();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }

        function updateCart() {
            const cartItems = document.getElementById('cartItems');
            const cartCount = document.getElementById('cartCount');
            const cartTotal = document.getElementById('cartTotal');
            cartItems.innerHTML = '';
            let total = 0;

            cart.forEach((item, index) => {
                total += item.price;
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <span>${item.name} - &#8377; ${item.price}</span>
                    <button onclick="removeFromCart(${index})">Remove</button>
                `;
                cartItems.appendChild(cartItem);
            });

            cartCount.textContent = cart.length;
            cartTotal.textContent = total;
        }

        function toggleCart() {
            const cart = document.getElementById('cart');
            cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
        }

        function checkout() {
            alert('Thank you for your purchase!');
            cart = [];
            updateCart();
            toggleCart();
        }

        // Initial display of products
        displayProducts(products);