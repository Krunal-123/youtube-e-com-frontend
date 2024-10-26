import { toast } from "react-toastify";
import { useCart } from "../src/CartContext";

export function errorToast(msg, sec) {
  const {LightMode}=useCart()
  return (
    toast.error(msg, {
      position: 'top-center',
      autoClose: sec,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: `${LightMode?"dark":"light"}`
    })
  )
}