const products = [
  { id: 1, name: "Mobile", price: "₹15,000" ,img:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlfGVufDB8fDB8fHww"},
  { id: 2, name: "Laptop", price: "₹55,000" ,img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3DcJHrrHSgvFpsYxqb6g97uaQTd2kE31rPUeDZTeDsjVq"},
  { id: 3, name: "Headset", price: "₹2,000",img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 4, name: "Keyboard", price: "₹1,500",img:"https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDBDcJHrrHSgvFpsYxqb6g97uaQTd2kE31rPUeDZTeDsjVq%3D" },
  { id: 5, name: "Mouse", price: "₹800" ,img:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjADcJHrrHSgvFpsYxqb6g97uaQTd2kE31rPUeDZTeDsjVq%3D"},
  { id: 6, name: "Watch", price: "₹3,000",img:"https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8fDA%3D" },
];

function Products({ setCartCount }) {
  const addToCart = () => {
    setCartCount((prev) => prev + 1); // increment
  };

  return (
    <div className="products">
      {products.map((p) => (
        <div className="product-card" key={p.id}>
          <img src={p.img}/>
          <h4>{p.name}</h4>
          <p>{p.price}</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
