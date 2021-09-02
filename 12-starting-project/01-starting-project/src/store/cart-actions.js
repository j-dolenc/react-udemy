import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData =()=>{
    return async dispatch => {
        const fetchdata = async () => {
            const response = await fetch("https://http-react-ee6f7-default-rtdb.firebaseio.com/cart.json");
        
            if(!response.ok){
                throw new Error('Could not fetch cart  data.');
            }
            const data = await response.json();
            return data;
        }
        try{
            const cartData = await fetchdata();
            dispatch(cartActions.replaceCart({
                items:cartData.items ||[],
                totalQuantity:cartData.totalQuantity,
            }));
            dispatch(
                uiActions.showNotification({
                  satus: "success",
                  title: "Success!",
                  message: "Fetched cart data successfully!",
                })
              );
        }catch(error){
            dispatch(
                uiActions.showNotification({
                  satus: "error",
                  title: "Error",
                  message: "Fetching cart data failed!",
                })
              );
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          satus: "pending",
          title: "Sending",
          message: "Sending cart data!",
        })
      );
      const sendRequest = async () => {
        const response = await fetch(
          "https://http-react-ee6f7-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        if (!response) {
          throw new Error("Sending cart data failed");
        }
      };
      try {
        await sendRequest();
        dispatch(
          uiActions.showNotification({
            satus: "success",
            title: "Success!",
            message: "Sent cart data successfully!",
          })
        );
      } catch (error) {
        sendCartData().catch((error) => {
          dispatch(
            uiActions.showNotification({
              satus: "error",
              title: "Error",
              message: "Sending cart data failed!",
            })
          );
        });
      }
    };
  };