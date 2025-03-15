import{t as M,v as I,y as b,q as f,r as w,A as k,p as O,j as e,F as S,H as D,a0 as P,W as i,e as R,a1 as _,o as C,L as B,Q as a,X as N,a2 as v}from"./index-w_p7vANa.js";import{D as L}from"./DisableScrollRestoration-gdsIFayH.js";import{C as $,a as A,D as E}from"./CardContent-CHqC154i.js";function H(t){return I("MuiCardMedia",t)}M("MuiCardMedia",["root","media","img"]);const W=["children","className","component","image","src","style"],F=t=>{const{classes:s,isMediaComponent:d,isImageComponent:n}=t;return D({root:["root",d&&"media",n&&"img"]},H,s)},T=b("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:d}=t,{isMediaComponent:n,isImageComponent:r}=d;return[s.root,n&&s.media,r&&s.img]}})(({ownerState:t})=>f({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})),U=["video","audio","picture","iframe","img"],z=["picture","img"],G=w.forwardRef(function(s,d){const n=k({props:s,name:"MuiCardMedia"}),{children:r,className:u,component:c="div",image:x,src:j,style:g}=n,o=O(n,W),l=U.indexOf(c)!==-1,h=!l&&x?f({backgroundImage:`url("${x}")`},g):g,p=f({},n,{component:c,isMediaComponent:l,isImageComponent:z.indexOf(c)!==-1}),m=F(p);return e.jsx(T,f({className:S(m.root,u),as:c,role:!l&&x?"img":void 0,ref:d,style:h,ownerState:p,src:l?x||j:void 0},o,{children:r}))}),q=b($)(({theme:t})=>({marginBottom:t.spacing(2),boxShadow:t.shadows[3],transition:"transform 0.3s ease-in-out","&:hover":{transform:"scale(1.02)"}})),Q=b(P)(({theme:t})=>({display:"flex",alignItems:"center",justifyContent:"center"})),V=b(i)(({theme:t})=>({backgroundColor:t.palette.background.paper,padding:t.spacing(2),borderRadius:t.shape.borderRadius,boxShadow:t.shadows[5]})),Y=()=>{var g;const{user:t,LightMode:s}=R(),[d,n]=w.useState(!1),[r,u]=w.useState(null),{orderhistory:c}=t[0];if(L(),!t)return e.jsx(i,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"50vh",children:e.jsx(_,{})});if(c.length==0)return e.jsx("section",{className:"h-[70vh] bg-[length:100%_100%] md:bg-[length:50%_100%] bg-no-repeat bg-center bg-[url('https://img.freepik.com/free-vector/removing-goods-from-basket-refusing-purchase-changing-decision-item-deletion-emptying-trash-online-shopping-app-laptop-user-cartoon-character_335657-1172.jpg?w=740&t=st=1729104729~exp=1729105329~hmac=3f5c66177d02ce2c7ad9572109ff93c6da0095a5a2f87666f2ffe5ea74260bac')]",children:e.jsx(C,{className:"py-5",children:e.jsxs("div",{className:"text-center my-40 align-items-center",children:[e.jsx("h5",{className:"text-dark text-6xl md:text-7xl mb-5 font-bold d-flex justify-content-center font-mono",children:"No Order History"}),e.jsx(B,{to:"/home",children:e.jsx("button",{className:"rounded p-2 text-white font-bold text-xl bg-danger hover:opacity-[0.9]",children:"Continue Browsing"})})]})})});const x=o=>{u(o),n(!0)},j=()=>{n(!1),u(null)};return e.jsx(e.Fragment,{children:e.jsxs(C,{className:`h-[75vh] mt-5 mb-3 md:px-5 shadow-xl rounded-4 pt-3 ${s?"bg-gray-950":"bg-light"}`,maxWidth:window.outerWidth>768?"lg":"xl",children:[e.jsx("h2",{className:`text-3xl text-center font-bold mb-2 text-${s?"white":"dark"}`,children:"#Order History"}),e.jsxs("div",{className:"h-[80%] w-[100%] overflow-y-auto",children:[[...c].reverse().map(({id:o,amount:l,createdAt:h},p)=>e.jsx(q,{className:"w-[90%] mx-auto my-3",children:e.jsx(A,{className:`${s?"bg-dark":"bg-light"} text-${s?"white":"dark"}`,children:e.jsxs(i,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:[e.jsx(i,{className:"flex flex-wrap w-[180px] max-md:w-[50%]",children:o==null?void 0:o.map(({img:m},y)=>e.jsx(G,{component:"img",image:m,alt:m,style:{width:80,borderRadius:4,margin:5}},y))}),e.jsxs(i,{className:"text-center max-md:w-[50%]",children:[e.jsx(a,{variant:"h6",children:e.jsxs("b",{children:["Paid Amount: ₹",l.toLocaleString("en-IN")]})}),e.jsxs(a,{variant:"body2",children:["Order Date: ",new Date(h).toLocaleDateString()]}),e.jsx(a,{variant:"body2",children:"Status: Completed"})]}),e.jsx(i,{display:"flex",alignItems:"center",className:" max-md:w-full",children:e.jsx(N,{size:"large",className:"m-auto mt-4",variant:"contained",color:"primary",onClick:()=>x({id:o,amount:l,createdAt:h}),children:"View Details"})})]})})},p)),r&&e.jsx(Q,{open:d,onClose:j,children:e.jsxs(V,{className:`${s?"bg-dark":"bg-light"} text-${s?"white":"dark"} md:w-[60%] w-[95%]`,children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"Order Details"}),e.jsx(E,{}),e.jsxs(i,{mt:2,children:[e.jsxs(a,{variant:"subtitle1",gutterBottom:!0,children:[e.jsx("span",{className:"font-bold text-lg",children:"Order ID:"})," ",r._id]}),e.jsxs(a,{variant:"subtitle1",gutterBottom:!0,children:[e.jsx("span",{className:"font-bold text-lg",children:"Order Date:"})," ",new Date(r.createdAt).toLocaleDateString()]}),e.jsxs(a,{variant:"subtitle1",gutterBottom:!0,children:[e.jsx("span",{className:"font-bold text-lg",children:"Status:"})," Completed"]}),e.jsxs(a,{variant:"subtitle1",gutterBottom:!0,children:[e.jsx("span",{className:"font-bold text-lg",children:"Purchase Items:"})," (",r.id.length,")"]}),e.jsx("hr",{className:"py-2"}),e.jsx(v,{container:!0,spacing:2,className:"overflow-y-auto h-[300px] py-5",children:(g=r.id)==null?void 0:g.map(({_id:o,img:l,name:h,title:p,price:m},y)=>e.jsx(e.Fragment,{children:e.jsx(v,{item:!0,xs:12,children:e.jsxs(i,{className:"flex justify-between md:px-5 px-0",alignItems:"center",children:[e.jsx("img",{src:l,alt:h,className:"md:h-[100px] md:w-[100px] h-[50px] w-[50px]"}),e.jsx(a,{variant:"body2",children:e.jsxs("span",{className:"font-semibold",children:[" ",p]})}),e.jsxs(a,{variant:"body2",children:["Price: ₹",e.jsx("span",{className:"line-through",children:m.toLocaleString("en-IN")}),e.jsx("br",{}),"Paid Price: ₹",e.jsx("span",{className:"text-red-500",children:Math.floor(m/2).toLocaleString("en-IN")})]}),e.jsxs(a,{variant:"body2",children:["Items ID: ",e.jsx("br",{}),e.jsxs("span",{children:[" ",o]})]})]})},y)}))}),e.jsxs(i,{mt:2,className:"",children:[e.jsx("hr",{}),e.jsx("h2",{className:"my-2  bg-no-repeat bg-cover bg-[url('https://www.psdstamps.com/wp-content/uploads/2022/04/round-youtube-stamp-png.png')]",children:"(Incl All Taxes)"}),e.jsxs(a,{variant:"h6",className:"flex justify-start items-center",children:["Paid Amount: ₹",r.amount,e.jsx("img",{src:"https://res.cloudinary.com/dlhikwznm/image/upload/v1737722013/pngwing.com_lvwxnw.png",className:"ml-4 h-[90px] w-[145px]"})]})]})]}),e.jsx(i,{mt:2,display:"flex",justifyContent:"flex-end",children:e.jsx(N,{variant:"contained",color:"primary",onClick:j,children:"Close"})})]})})]})]})})};export{Y as default};
