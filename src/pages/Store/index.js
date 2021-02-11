import React, { useEffect, useState } from "react";

import ReactModal from "react-modal";

import formatValue from "../../utils/formatValue";

import ShoppingBagIcon from "../../assets/shopping-bag.svg";
import CloseIcon from "../../assets/x.svg";

import api from "../../services/api";

import { CartButton, Container, Product, ModalItem } from "./styles";

function Store() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  ReactModal.setAppElement("#root");

  useEffect(() => {
    (async () => {
      const response = await api.get("/products");
      setProducts(response.data);
    })();
  }, []);

  function handleAddToCart(product) {
    const exists = cart.find((p) => p._id === product._id);

    if (exists) {
      setCart(
        cart.map((p) =>
          p._id === product._id
            ? { ...exists, quantity: exists.quantity + 1 }
            : p
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }
  function handleRemoveFromCart(product) {
    const exists = cart.find((p) => p._id === product._id);
    if (exists && exists.quantity > 0) {
      setCart(
        cart.map((p) =>
          p._id === product._id
            ? { ...exists, quantity: exists.quantity - 1 }
            : p
        )
      );
    }
  }

  function closeModal() {
    setIsModalVisible(false);
  }
  return (
    <>
      {isModalVisible && (
        <ReactModal
          isOpen={isModalVisible}
          onRequestClose={closeModal}
          style={{
            content: {
              top: "50%",
              left: "50%",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              background: "#F0F0F5",
              color: "#000000",
              width: "800px",
              border: "none",
            },
            overlay: {
              backgroundColor: "#121214e6",
            },
          }}
        >
          {cart &&
            cart.map((item) => {
              const check = cart.find((p) => p._id === item._id);

              return check.quantity < 1 ? (
                cart.splice(cart.indexOf(item), 1)
              ) : (
                <ModalItem key={item._id}>
                  <p>{item.name}</p>
                  <h3>{formatValue(item.price)}</h3>
                  <button onClick={() => handleRemoveFromCart(item)}>-</button>
                  <input type="text" value={item.quantity} readOnly />
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </ModalItem>
              );
            })}
        </ReactModal>
      )}
      <Container>
        <CartButton onClick={() => setIsModalVisible(!isModalVisible)}>
          <img
            src={isModalVisible ? CloseIcon : ShoppingBagIcon}
            alt="Cart button"
          />
        </CartButton>
        {products &&
          products.map((product) => (
            <Product key={product._id}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <h3>{formatValue(product.price)}</h3>
              <button onClick={() => handleAddToCart(product)}>
                Adicionar ao carrinho
              </button>
            </Product>
          ))}
      </Container>
    </>
  );
}

export default Store;
