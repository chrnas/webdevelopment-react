import { useState, useMemo } from "react";

export default function MenuDisplay({ items }) {
  const [filterValue, setFilterValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

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
    setFilterValue(e.target.value);
  };

  const handleCategoryClick = (category) => {
    // Toggle the category selection
    if (selectedCategory === category) {
      setSelectedCategory(""); // If the category is already selected, deselect it
    } else {
      setSelectedCategory(category); // If not selected, select the category
    }
  };

  return (
    <>
      <div className="button-row">
        <button
          className={`menu-button ${selectedCategory === 'pizza' ? 'selected' : ''}`}
          onClick={() => handleCategoryClick('pizza')}
        >
          Pizza
        </button>
        <button
          className={`menu-button ${selectedCategory === 'salad' ? 'selected' : ''}`}
          onClick={() => handleCategoryClick('salad')}
        >
          Sallad
        </button>
        <button
          className={`menu-button ${selectedCategory === 'pasta' ? 'selected' : ''}`}
          onClick={() => handleCategoryClick('pasta')}
        >
          Pasta
        </button>
        <button
          className={`menu-button ${selectedCategory === 'other' ? 'selected' : ''}`}
          onClick={() => handleCategoryClick('other')}
        >
          Annat
        </button>
      </div>
      <input
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
        placeholder="Filter items"
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index} category={item.category}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
