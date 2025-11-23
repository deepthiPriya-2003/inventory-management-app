import { Component } from "react";
import "./ProductTable.css";

class ProductTable extends Component {
  state = {
    searchText: "",
    category: "All",
  };

  handleSearch = (e) => {
    this.setState({ searchText: e.target.value });
  };

  handleCategory = (e) => {
    this.setState({ category: e.target.value });
  };

  render() {
    const { products } = this.props;
    const { searchText, category } = this.state;

    const filtered = products.filter((item) => {
      const matchText =
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.category.toLowerCase().includes(searchText.toLowerCase());

      const matchCategory =
        category === "All" || item.category === category;

      return matchText && matchCategory;
    });

    const uniqueCategories = [
      "All",
      ...new Set(products.map((p) => p.category)),
    ];

    return (
      <div>
        
        <div className="filter-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchText}
            onChange={this.handleSearch}
            className="search-input"
          />

          <select
            value={category}
            onChange={this.handleCategory}
            className="category-dropdown"
          >
            {uniqueCategories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        
        <table className="product-table">
          <thead>
            <tr className="table-header-row">
              <th className="table-header">Name</th>
              <th className="table-header">Unit</th>
              <th className="table-header">Category</th>
              <th className="table-header">Brand</th>
              <th className="table-header">Stock</th>
              <th className="table-header">Status</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="table-row">
                <td className="table-data">{p.name}</td>
                <td className="table-data">{p.unit}</td>
                <td className="table-data">{p.category}</td>
                <td className="table-data">{p.brand}</td>
                <td className="table-data">{p.stock}</td>

                
                <td className="table-data">
                  {p.status === "In Stock" ? (
                    <span className="status in-stock">In Stock</span>
                  ) : (
                    <span className="status out-stock">Out of Stock</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
