import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ShowProducts from './components/ShowProducts';

function App() {

  const [inCart, setInCart] = useState(false);
  const [productCart, setProductCart] = useState([])

  const [products, setProducts] = useState([
    {
      code: 10,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.19,
    },
  ]);

  const addCart = (productCode) => {

    const cart = products.find(product => product.code === productCode);

    setProductCart([...productCart, cart])
    setInCart(true)
  }

  const removeToCart = (productCode) => {
    setProductCart(productCart.filter(product => product.code !== productCode))
  }

  const totalPrice = productCart.reduce((acc, product) => acc + product.price, 0)

  const totalDiscount = productCart.reduce((acc, product) => acc + product.discount, 0)

  return (
    <div className="App">
      <header className="App-header">

        <Form products={products} setProducts={setProducts} />
        
        <ShowProducts products={products} addCart={addCart} />

        <h2> Carrinho </h2>
        <p> Preço Total = {totalPrice} </p>
        <p> Total de desconto = {totalDiscount} </p>

        <ShowProducts products={productCart} inCart={inCart} removeToCart={removeToCart} />
      </header>
    </div>
  );
}

export default App;
