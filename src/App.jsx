import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const oldCount = JSON.parse(localStorage.getItem("count") || "0");
    setCount(oldCount);
  }, []);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("count", newCount);
  };

  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      localStorage.setItem("count", newCount);
    }
  };

  const handleReset = () => {
    setCount(0);
    localStorage.setItem("count", 0);
  };

  return (
    <div className="container text-center mt-5">
      <Helmet>
        <title>Counter</title>
      </Helmet>
      <div className="card">
        <h3>Counter</h3>
        <div className="card-content">
          <h4 className="card-title">Product Name</h4>
          <p className="card-description">Product That you like the most</p>

          <button className="add-to-cart" onClick={handleIncrement}>Add to Cart</button>
        </div>
        <div>
          <span className="mx-3">In Cart: {count}</span>
          <button className="btn btn-danger" onClick={handleDecrement}><i className="fas fa-xmark"></i></button>
          <button className="btn btn-warning mx-2" onClick={handleReset}>
            <i className="fas fa-redo"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;