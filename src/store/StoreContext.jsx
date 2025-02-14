import { createContext, useEffect, useCallback, useState } from "react";
import { userService } from "../api";
import PropTypes from "prop-types";
import usePersist from "../hooks/usePersist";
import { jwtDecode } from "jwt-decode";

// eslint-disable-next-line react-refresh/only-export-components
export const ContextStore = createContext({});

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = usePersist("cart", []);
  const [loggedInUser, setLoggedInUser] = usePersist("clientLoggedIn", null);
  const [token, setToken] = usePersist("clientToken", null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function isTokenValid(token) {
    if (!token) return false;
    try {
      jwtDecode(token);
      return true;
    } catch (error) {
      console.error("Error decoding token:", error);
      return false;
    }
  }

  const increaseCartQuantity = useCallback(
    (id) => {
      setCartItems((currItems) => {
        if (currItems.find((item) => item._id === id._id) == null) {
          return [...currItems, { ...id, quantity: 1 }];
        } else {
          return currItems.map((item) => {
            if (item._id === id._id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          });
        }
      });
    },
    [setCartItems]
  );

  const decreaseCartQuantity = useCallback(
    (id) => {
      setCartItems((currItems) => {
        if (currItems.find((item) => item._id === id._id)?.quantity === 1) {
          return currItems.filter((item) => item._id !== id._id);
        } else {
          return currItems.map((item) => {
            if (item._id === id._id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          });
        }
      });
    },
    [setCartItems]
  );

  const removeFromCart = useCallback(
    (id) => {
      setCartItems((currItems) => {
        return currItems.filter((item) => item._id !== id);
      });
    },
    [setCartItems]
  );

  const cartQuantity = cartItems?.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const priceTotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );


  const getUser = useCallback(async () => {
    if (!token || !isTokenValid(token)) {
      setLoggedInUser(null);
      return;
    }
    try {
      setLoading(true);
      const { data } = await userService.getUser();
      setLoggedInUser(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  }, [setLoggedInUser, token]);


  const logout = useCallback(() => {
    try {
      if (!token) {
        return;
      } else {
        setLoggedInUser(null);
        setToken(null);
      }
    } catch (error) {
      setError(error.message);
    }
  }, [setLoggedInUser, setToken, token]);

  useEffect(() => {
    if (loggedInUser) {
      return;
    } else {
      getUser();
    }
  }, [getUser, loggedInUser, token]);

  const contextData = {
    increaseCartQuantity,
    cartItems,
    setCartItems,
    cartQuantity,
    priceTotal,
    removeFromCart,
    decreaseCartQuantity,
    token,
    setToken,
    loggedInUser,
    setLoggedInUser,
    logout,
    loading,
    error,
  };

  return (
    <ContextStore.Provider value={contextData}>
      {children}
    </ContextStore.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
