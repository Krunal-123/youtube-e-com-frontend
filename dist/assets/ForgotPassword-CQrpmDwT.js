import{r as o,a5 as y,j as e,af as j,a3 as l,ag as v,ah as T,X as P,ai as C,U as O,W as d,Z as S,L as k,aj as w,h as W,g as n,T as c}from"./index-DPMa0iSw.js";const E=w({palette:{primary:{main:"#673ab7"},secondary:{main:"#ff5722"},background:{default:"#f5f5f5"}},typography:{fontFamily:"Roboto, sans-serif",h5:{fontWeight:600}}});function F(){const[s,u]=o.useState(""),[i,m]=o.useState(""),[t,x]=o.useState(!1),f=y(),[h,p]=o.useState(),g=async a=>{a.preventDefault();try{const r=await W.post("https://youtube-e-com-backend.onrender.com/send-otp",{email:s});r.data==="User not found"?n("User not found",2e3):(p(r.data),x(!0),c("OTP sent to your email.",2e3))}catch(r){console.error("An error occurred:",r),n("An error occurred. Please try again later.",1e3)}},b=async a=>{a.preventDefault(),i==h?(c("OTP Match Correctly"),f(`/reset-password/${s}`)):n("Invalid OTP. Please try again.",2e3)};return e.jsx(j,{theme:E,children:e.jsxs(l,{container:!0,component:"main",sx:{height:"100vh",background:"linear-gradient(to right, #673ab7, #512da8)"},children:[e.jsx(v,{}),e.jsx(l,{item:!0,xs:12,component:T,elevation:6,square:!0,sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsxs(P,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#ffffff",borderRadius:3,padding:4,boxShadow:"0 4px 20px rgba(0,0,0,0.2)"},children:[e.jsx(C,{sx:{m:1,bgcolor:"primary.main",width:56,height:56}}),e.jsx(O,{component:"h1",variant:"h5",sx:{fontWeight:"bold",color:"primary.main",mb:2},children:"Forgot Password"}),e.jsxs("form",{sx:{mt:1},onSubmit:t?b:g,className:"w-[350px]",children:[e.jsx(d,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:s,onChange:a=>u(a.target.value),disabled:t,sx:{backgroundColor:"#f0f0f0",borderRadius:1}}),t&&e.jsx(d,{margin:"normal",required:!0,fullWidth:!0,id:"otp",label:"Enter OTP",name:"otp",value:i,onChange:a=>m(a.target.value),sx:{backgroundColor:"#f0f0f0",borderRadius:1}}),e.jsx(S,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",sx:{mt:3,mb:2,py:1.5,borderRadius:2,textTransform:"none",fontWeight:"bold",boxShadow:"0 3px 5px rgba(0,0,0,0.2)"},children:t?"Verify OTP":"Send OTP"}),e.jsx("div",{className:"text-center text-xl text-blue-700 hover:underline",children:e.jsx(k,{to:"/login",children:"Go Back"})})]})]})})]})})}export{F as default};
