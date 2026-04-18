import { useState, useEffect } from "react";
import "./App.css";

const products = [
  { id: 1, name: "iphone 16", price: 25987, category: "phones", rating: 5.0 },
  {
    id: 2,
    name: "samsung s23",
    price: 15987,
    category: "phones",
    rating: 4.5,
  },
  {
    id: 3,
    name: "macbook pro",
    price: 125987,
    category: "laptops",
    rating: 4.8,
  },
  { id: 4, name: "dell xps", price: 95987, category: "laptops", rating: 4.2 },
];

function App() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    const timer = setTimeout(() => {
      const result = products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()),
      );
      setFiltered(result);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div>
      <input
        placeholder="Search...."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.map((p) => (
        <p key={p.id}>
          {" "}
          {p.name} - {p.price}{" "}
        </p>
      ))}
    </div>
  );
}

export default App;
