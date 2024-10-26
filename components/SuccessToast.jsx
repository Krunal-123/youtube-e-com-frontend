import { toast } from "react-toastify";
import { useCart } from "../src/CartContext";

export function Toast(msg, sec) {
  const { LightMode } = useCart()
  return (
    toast.success(msg, {
      position: 'top-center',
      autoClose: sec,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: `${LightMode ? "dark" : "light"}`
    })
  )
}