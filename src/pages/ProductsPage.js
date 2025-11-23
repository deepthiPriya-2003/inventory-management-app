import { Component } from "react";
import ProductTable from "../components/ProductTable";
import "./ProductsPage.css";

class ProductsPage extends Component {
  state = {
    products: [
      { id: 1, name: "Apple iPhone 14", unit: "1 Pc", category: "Mobiles", brand: "Apple", stock: 25, status: "In Stock" },
      { id: 2, name: "Samsung Galaxy S23", unit: "1 Pc", category: "Mobiles", brand: "Samsung", stock: 0, status: "Out of Stock" },
      { id: 3, name: "HP Laptop 15s", unit: "1 Pc", category: "Laptops", brand: "HP", stock: 12, status: "In Stock" },
      { id: 4, name: "Sony WH-1000XM4", unit: "1 Pc", category: "Headphones", brand: "Sony", stock: 18, status: "In Stock" },
      { id: 5, name: "Boat Airdopes 141", unit: "1 Pc", category: "Earbuds", brand: "Boat", stock: 0, status: "Out of Stock" },
      { id: 6, name: "LG 55-inch 4K TV", unit: "1 Pc", category: "Television", brand: "LG", stock: 10, status: "In Stock" },
      { id: 7, name: "Canon EOS 200D", unit: "1 Pc", category: "Camera", brand: "Canon", stock: 8, status: "In Stock" },
      { id: 8, name: "Logitech MX Master 3", unit: "1 Pc", category: "Mouse", brand: "Logitech", stock: 40, status: "In Stock" },
      { id: 9, name: "Apple iPad Air", unit: "1 Pc", category: "Tablets", brand: "Apple", stock: 0, status: "Out of Stock" },
      { id: 10, name: "Dell Monitor 24 inch", unit: "1 Pc", category: "Monitor", brand: "Dell", stock: 15, status: "In Stock" }
    ]
  };

  render() {
    return (
      <div className="page-container">
        <h1 className="page-heading">Product Inventory Management</h1>
        <p className="page-subheading">
          Manage your product stock, brand and categories easily.
        </p>

        <div className="card-container">
          <ProductTable products={this.state.products} />
        </div>
      </div>
    );
  }
}

export default ProductsPage;
