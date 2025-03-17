import { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function MenuDisplay({ items }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [filterValue, setFilterValue] = useState(new URLSearchParams(location.search).get("filter") || "");
  const [selectedCategory, setSelectedCategory] = useState(new URLSearchParams(location.search).get("category") || "");

  const updateURL = (filter, category) => {
    const params = new URLSearchParams();
    if (filter) params.set("filter", filter);
    if (category) params.set("category", category);
    navigate({ search: params.toString() });
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const lowerFilterValue = filterValue.toLowerCase();
      const matchesCategory = selectedCategory
        ? item.category.toLowerCase().includes(selectedCategory.toLowerCase())
        : true;
      return (
        (item.name.toLowerCase().includes(lowerFilterValue) ||
          item.description.toLowerCase().includes(lowerFilterValue) ||
          item.category.toLowerCase().includes(lowerFilterValue)) &&
        matchesCategory
      );
    });
  }, [items, filterValue, selectedCategory]);

  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    setFilterValue(newFilter);
    updateURL(newFilter, selectedCategory);
  };

  const handleCategoryClick = (category) => {
    const newCategory = selectedCategory === category ? "" : category;
    setSelectedCategory(newCategory);
    updateURL(filterValue, newCategory);
  };

  const categories = ['pizza', 'salad', 'pasta', 'other'];

  return (
    <>
      <div className="button-row">
        {categories.map((category) => (
          <button
            key={category}
            className={`menu-button ${selectedCategory === category ? "selected" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <input
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
        placeholder="Filter items"
      />

      {filteredItems.length === 0 ? (
        <p>No items found</p>
      ) : (
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id} category={item.category}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
