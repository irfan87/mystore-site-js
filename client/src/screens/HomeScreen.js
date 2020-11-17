const HomeScreen = {
	render: async () => {
		const response = await fetch("http://localhost:5000/api/products", {
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response || !response.ok) {
			return `<div>Error in getting the data from the backend</div>`;
		}

		const products = await response.json();

		return `
      <ul class="products">
        ${products
					.map(
						(product) =>
							`<li>
            <div class="product">
              <a href="/#/product/${product._id}">
                <img src="${product.image}" alt="${product.name}" />
              </a>
              <div class="product__name">
                  <a href="/#/product/${product._id}">${product.name}</a>
              </div>
              <div class="product__brand">
                  ${product.brand}
              </div>
              <div class="product__price">$${product.price}</div>
            </div>
          </li>`
					)
					.join("\n")}
      </ul>
    `;
	},
};

export default HomeScreen;
