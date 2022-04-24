import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/productPerPage")
      .then((res) => res.json())
      .then((data) => {
        const pagesCount = data.pages;
        const pages = Math.ceil(pagesCount / 15);
        setPages(pages);
      });
  }, []);

  return [products, setProducts, pages];
};

export { useProducts };
