import{a3 as p,e as b,j as e,L as c,o as g,f as u,C as f,l as t,h as j,g as v}from"./index-w_p7vANa.js";import{L as y}from"./mdb-react-ui-kit.esm-TwcVGxoo.js";import{D as w}from"./DisableScrollRestoration-gdsIFayH.js";import{a as N}from"./Button-CL-2xGup.js";import{B as C}from"./Badge-CWnUNOnL.js";function _(r){return p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M119.4 44.1c23.3-3.9 46.8-1.9 68.6 5.3l49.8 77.5-75.4 75.4c-1.5 1.5-2.4 3.6-2.3 5.8s1 4.2 2.6 5.7l112 104c2.9 2.7 7.4 2.9 10.5 .3s3.8-7 1.7-10.4l-60.4-98.1 90.7-75.6c2.6-2.1 3.5-5.7 2.4-8.8L296.8 61.8c28.5-16.7 62.4-23.2 95.7-17.6C461.5 55.6 512 115.2 512 185.1l0 5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.6 300.4C17.2 272.1 0 232.4 0 190.9l0-5.8c0-69.9 50.5-129.5 119.4-141z"},child:[]}]})(r)}function E(){const{user:r,setFav:x,LightMode:s}=b(),{myfavourites:i,email:d}=r[0];w();const m=async(a,o)=>{await j.post("https://youtube-e-com-backend.onrender.com/addfavourite/delete",{email:a,id:o}),v("Unfavourited",1300),x(l=>l-1)};return i<=0?e.jsx("section",{className:"max-sm:h-[550px] h-[70vh] md:h-[550px] bg-[length:100%_100%] md:bg-[length:60%_90%] bg-no-repeat bg-center bg-[url('https://cdn.dribbble.com/users/12570/screenshots/13987694/media/1635918fab6854e489723a301619b7b2.jpg?compress=1&resize=400x300')]",children:e.jsx(y,{className:"py-5",children:e.jsx("div",{className:"text-center my-60 align-items-center",children:e.jsx(c,{to:"/home",children:e.jsx(N,{className:"bg-primary hover:opacity-[0.8]",children:"Continue Browsing"})})})})}):e.jsxs(g,{className:"my-10 overflow-x-hidden",children:[e.jsx("h2",{className:`text-center text-5xl font-bold font-serif mb-4 text-${s?"white":"dark"}`,children:"My favourite items"}),e.jsx(u,{xl:3,className:"g-5",children:[...i].reverse().map(({_id:a,img:o,title:l,description:h},n)=>e.jsx(f,{children:e.jsxs(t,{className:`border-0 h-[420px] w-[300px] m-auto shadow-xl rounded-xl overflow-hidden transition ease-in-out duration-500 ${s?"hover:shadow-[0px_20px_25px_4px_rgba(255,0,130,0.9)]":" hover:shadow-[0_0px_40px_1px_rgba(0,0,0,1)]"} ${s?"bg-dark":"bg-white"} ${s?"text-white":"text-gray-700"} hover:-translate-y-3`,children:[e.jsx(_,{className:"text-4xl m-3 cursor-pointer hover:scale-[1.2] transition-transform duration-200",style:{position:"absolute",top:"10px",right:"10px",color:"#ff0066"},onClick:()=>m(d,a)}),e.jsxs(c,{to:`/services/${a}`,children:[e.jsx(C,{bg:"primary",className:"absolute top-[-2px] left-[-2px] text-sm font-extrabold",children:n+1}),e.jsx(t.Img,{variant:"top",src:`${o}`,className:"h-[250px]"}),e.jsxs(t.Body,{children:[e.jsx(t.Title,{className:"bg-clip-text text-xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-yellow-400",children:l}),e.jsxs(t.Text,{children:[h.slice(0,96),"...",e.jsx("span",{className:"text-blue-600 text-xl font-bold hover:underline",children:"(More)"})]})]})]})]})},n))})]})}export{E as default};
