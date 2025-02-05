import{e as O,r as p,$ as B,a4 as D,j as e,o as y,a5 as Y,L as w,h as j,g as F,T as G}from"./index-DBa0aW7u.js";import{U as v,k as u,P as f,_ as b,d as k,c as J,J as S}from"./mdb-react-ui-kit.esm-vtHevOYg.js";import{D as U}from"./DisableScrollRestoration-Bm3yX1iw.js";import{a as _}from"./Button-Bm__9OPk.js";function K(){const{setCartItems:d,user:l,setIsExploding:g,LightMode:r,setLengthCart:I}=O(),[a,x]=p.useState([]),[$]=B(),C=D(),{_id:E,firstName:L,lastName:T,email:z,number:M,addcart:P}=l[0],c=a.reduce((t,s)=>t+s.price,0),N=c===0?0:Math.floor(c/2*.18),m=Math.floor(c/2+N);U(),p.useEffect(()=>{l&&l[0]&&x(P||[])},[l]),p.useEffect(()=>{d(a.length||0)},[a,d]);async function R(t){try{await j.post(`https://youtube-e-com-backend.onrender.com/addcart/delete/${t}`,{cookies:$}),F("Deleted",1200),x(s=>s.filter(n=>n._id!==t))}catch(s){console.error("Error deleting item:",s)}}async function A(){try{const{data:t}=await j.post("https://youtube-e-com-backend.onrender.com/create-order",{amount:m}),s={key:"rzp_test_wh5dAj2ZhVsw97",amount:t.amount,currency:"INR",name:"Youtube E-com Services",description:"Test Transaction",order_id:t.id,handler:async function(h){try{const i=a.map(({_id:o})=>o);await j.post("https://youtube-e-com-backend.onrender.com/addcart/purchase",{data:i,id:E,amount:m}),I(i),x([]),d(0),g(o=>!o),C("/mypurchase"),G("🥳New Items Added🎉",3500),setTimeout(()=>{g(o=>!o)},5e3)}catch(i){console.error("Error finalizing purchase:",i)}},prefill:{name:`${L} ${T}`,email:`${z}`,contact:`${M}`},theme:{color:"#3399cc"}};new window.Razorpay(s).open()}catch(t){console.error("Error initializing Razorpay payment:",t)}}return a.length===0?e.jsx("section",{className:"h-[550px] bg-[length:100%_100%] bg-no-repeat bg-center bg-[url('https://www.pngkey.com/png/detail/365-3654131_cart-empty-image-your-cart-is-empty.png')]",children:e.jsx(y,{className:"py-5",children:e.jsxs("div",{className:"text-center my-40 align-items-center",children:[e.jsxs("h5",{className:"text-red-500 text-7xl mb-5 font-bold d-flex justify-content-center font-mono",children:[e.jsx(Y,{}),"Your cart is empty now"]}),e.jsx(w,{to:"/home",children:e.jsx(_,{className:"bg-primary hover:opacity-[0.9]",children:"Continue Browsing"})})]})})}):e.jsx(y,{className:"mt-4 mb-5",children:e.jsx(v,{className:"justify-content-center align-items-center",children:e.jsx(u,{children:e.jsx(f,{className:`shadow-2xl transition ease-in-out delay-300 ${r?"bg-gray-600":"bg-white"} ${r?"text-white":"text-dark"} ${r&&"hover:shadow-[0_0px_22px_2px_rgba(220,255,0,0.9)]"}`,children:e.jsx(b,{className:"px-4",children:e.jsxs(v,{children:[e.jsxs(u,{lg:"7",children:[e.jsxs(w,{to:"/home",className:`block pb-3 text-lg font-semibold transition easy-in-out hover:font-bold hover:scale-[1.02] ${r&&"hover:text-cyan-300"}`,children:[e.jsx(k,{fas:!0,icon:"long-arrow-alt-left"})," Continue shopping"]}),e.jsx("hr",{}),e.jsx("div",{className:"d-flex justify-content-between align-items-center mb-4",children:e.jsxs("div",{children:[e.jsx("p",{className:"my-2 text-xl font-bold",children:"Shopping cart"}),e.jsxs("p",{className:"text-xl font-mono",children:["You have ",e.jsx("span",{className:"font-extrabold text-red-500 text-2xl",children:a.length})," items in your cart :"]})]})}),a.map(({_id:t,img:s,title:n,price:h})=>e.jsx(f,{className:"mb-3 transition ease-in-out hover:scale-[1.02]",children:e.jsx(b,{className:`border-1 ${r?"bg-gray-800":"bg-light"} text-${r?"white":"dark"}`,children:e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsxs("div",{className:"d-flex flex-row align-items-center",children:[e.jsx(J,{src:s,fluid:!0,className:"rounded-3",style:{width:"75px",height:"60px"},alt:n}),e.jsx("div",{className:"ms-3",children:e.jsx(S,{tag:"h5",children:e.jsx("b",{children:n})})})]}),e.jsxs("div",{className:"d-flex flex-row align-items-center",children:[e.jsx("div",{style:{width:"80px"},children:e.jsx(S,{tag:"h5",className:"mb-0",children:e.jsxs("i",{children:[e.jsxs("span",{className:"text-red-500 font-semibold",children:["₹",Math.floor(h/2).toLocaleString("en-IN")]}),e.jsx("br",{}),e.jsxs("span",{className:"line-through",children:["₹",Math.floor(h).toLocaleString("en-IN")]})]})})}),e.jsx(k,{fas:!0,icon:"trash-alt",className:"py-1 px-2 border-0 rounded text-slate-50 bg-slate-900 transition ease-in-out cursor-pointer text-xl hover:bg-red-600 hover:scale-110 hover:showdow-2xl",onClick:()=>R(t)})]})]})})},t))]}),e.jsx(u,{lg:"5",children:e.jsx(f,{className:"bg-dark text-white rounded-3 h-100",children:e.jsxs(b,{children:[e.jsx("div",{tag:"h5",className:"mb-3 text-3xl font-extrabold text-center text-green-500",children:"Payment Options"}),e.jsx("hr",{}),e.jsxs("div",{className:"d-flex justify-content-between mt-4 text-3xl font-bold",children:[e.jsx("p",{className:"mb-4 flex justify-between",children:"Items :"}),e.jsx("p",{className:"mb-4 flex justify-between",children:"Prices :"})]}),a==null?void 0:a.map(({title:t,price:s},n)=>e.jsxs("div",{className:"d-flex justify-content-between mb-2 text-xl",children:[e.jsxs("p",{className:"mb-4 flex justify-between",children:["- ",t]}),e.jsxs("p",{className:"mb-4 flex justify-between",children:["₹",Math.floor(s/2).toLocaleString("en-IN")]})]},n)),e.jsx("hr",{}),e.jsxs("div",{className:"d-flex justify-content-between mt-3 text-lg",children:[e.jsx("p",{className:"mb-4",children:"GST 18% :"}),e.jsx("p",{className:"mb-4",children:"₹"+N.toLocaleString("en-IN")})]}),e.jsxs("div",{className:"d-flex justify-content-between text-xl",children:[e.jsx("p",{className:"mb-4",children:"Subtotal"}),e.jsx("p",{className:"mb-4 line-through font-bold",children:"₹"+c.toLocaleString("en-IN")})]}),e.jsx("hr",{}),e.jsxs("div",{className:"d-flex justify-content-between mt-3",children:[e.jsx("p",{className:"mb-4",children:"Applied Coupen"}),e.jsx("p",{className:"text-red-500 text-xl font-extrabold",children:"50% OFF"})]}),e.jsxs("div",{className:"d-flex justify-content-between text-2xl",children:[e.jsx("p",{className:"mb-4",children:"Total (Incl. taxes)"}),e.jsx("p",{className:"mb-4 text-green-500 font-bold",children:"₹"+Math.floor(m).toLocaleString("en-IN")})]}),e.jsx("div",{className:"text-center mt-3",children:e.jsx(_,{className:"bg-red-600 border-0 text-xl px-5 py-3 hover:bg-green-600 transition ease-in-out duration-300 delay-200 hover:scale-[1.02]",onClick:A,children:e.jsxs("span",{children:["Place Order",e.jsx("i",{className:"fas fa-long-arrow-alt-right ms-2"})]})})})]})})})]})})})})})})}export{K as default};
