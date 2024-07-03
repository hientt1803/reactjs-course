/**
 * Tạo một danh sách sản phẩm trong một component.
 * Sử dụng useCallback để tối ưu hóa việc truyền hàm callback xóa sản phẩm.
 * Sử dụng React.memo để tối ưu hóa render của mỗi sản phẩm trong danh sách.
 * Sử dụng useMemo để tính toán tổng giá trị của danh sách sản phẩm.
 */
import React, { useCallback, useMemo, useState } from "react";

interface IProduct {
  id: number;
  name: string;
  price: number;
}

export const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
  ]);
  const [value, setValue] = useState("");

  const removeProduct = useCallback(
    (id: number) => {
      console.log("re-render product");
      setProducts(products.filter((product) => product.id !== id));
    },
    [products]
  );

  const total = useMemo(() => {
    console.log("re caculator total");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} onRemove={removeProduct} />
      ))}
      <h2>Total: {total}</h2>
      <input
        type="text"
        className="mt-10"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

const Product = React.memo(
  ({
    product,
    onRemove,
  }: {
    product: IProduct;
    onRemove: (productId: number) => void;
  }) => {
    console.log(`Rendering product: ${product.name}`);
    return (
      <div>
        <span>{product.name}</span>
        <span>{product.price}</span>
        <button onClick={() => onRemove(product.id)}>Remove</button>
      </div>
    );
  }
);
