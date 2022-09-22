import './App.css';

// import Greeting from './components/Greeting';
import products from './assignment';
import ProductCard from './components/ProductCardV2';
// import ProductCard from './components/ProductCard';

// ./components/ProductCard.js
// ./components/ProductCard.jsx
// ./components/ProductCard/index.js
// ./components/ProductCard/index.jsx

const users = [
  {
    firstName: "Abhijeet",
    lastName: "Negi",
  },
  {
    firstName: "Saurabh",
    lastName: "Tyagi",
  },
  {
    firstName: "Vishnu",
    lastName: "Vardhan",
  },
  {
    firstName: "Shubham",
    lastName: "Sudame",
  }
]

const App = () => {
  return (
    <div className="App">
      {
        products.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))
      }
    </div>
  );
}

export default App;


// [
//   <Greeting
//     // key={index}
//     firstName={users[0].firstName}
//     lastName={user[0].lastName}
//   />,
//   <Greeting
//     // key={index}
//     firstName={users[1].firstName}
//     lastName={user[2].lastName}
//   />,
// ]