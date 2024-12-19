"use strict";(self.webpackChunkweb_pos=self.webpackChunkweb_pos||[]).push([[7869],{53622:(e,s,t)=>{t.d(s,{A:()=>r});var l=t(65043),a=t(70579);const r=function(){const[e,s]=(0,l.useState)(10),[t,r]=(0,l.useState)(1),n=100,d=s=>{s<1||s>Math.ceil(n/e)||r(s)},c=(t-1)*e+1,i=Math.min(t*e,n);return(0,a.jsxs)("div",{className:"flex flex-wrap justify-between items-center mt-4 gap-4",children:[(0,a.jsx)("div",{className:"w-full sm:w-auto",children:(0,a.jsxs)("span",{className:"flex items-center gap-2 text-[10px] sm:text-[14px]",children:["Rows Per Page:",(0,a.jsx)("select",{value:e,onChange:e=>{s(parseInt(e.target.value,10)),r(1)},className:"select select-bordered select-sm w-20 text-[10px] sm:text-[14px]",children:[10,20,30,40].map((e=>(0,a.jsx)("option",{value:e,children:e},e)))})]})}),(0,a.jsxs)("div",{className:"w-full sm:w-auto flex justify-between sm:justify-center items-center gap-4",children:[(0,a.jsxs)("span",{className:"text-[10px] sm:text-[14px]",children:[c," - ",i," of ",n]}),(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)("button",{onClick:()=>d(t-1),disabled:1===t,className:"btn btn-outline btn-sm text-[10px] sm:text-[14px]",children:"<"}),(0,a.jsx)("button",{onClick:()=>d(t+1),disabled:t===Math.ceil(n/e),className:"btn btn-outline btn-sm text-[10px] sm:text-[14px]",children:">"})]})]})]})}},87697:(e,s,t)=>{t.d(s,{A:()=>o});var l=t(65043),a=t(31899),r=t.n(a),n=(t(25015),t(71154)),d=t(67904),c=t(63073),i=t(70579);const o=()=>{const[e,s]=(0,l.useState)(new Date),[t,a]=(0,l.useState)(""),[o,x]=(0,l.useState)(""),[m,u]=(0,l.useState)(0),[b,h]=(0,l.useState)(0),[p,j]=(0,l.useState)(0),[f,N]=(0,l.useState)(""),[g,y]=(0,l.useState)(""),[v,w]=(0,l.useState)(!1),[k,S]=(0,l.useState)(""),[C,D]=(0,l.useState)([]),P=()=>{w(!v)},A=()=>{const e=C.reduce(((e,s)=>e+s.subtotal),0);return e+m-b+p},R=C.reduce(((e,s)=>e+s.subtotal),0),F=A();return(0,i.jsxs)(c.A,{title:"Create Purchase",topMargin:"mt-2",children:[(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",children:[(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Date*"}),(0,i.jsx)(r(),{selected:e,onChange:e=>s(e),className:"w-full border bg-base-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("label",{className:"block text-sm font-mediummb-1",children:"Supplier*"}),(0,i.jsxs)("select",{value:t,onChange:e=>a(e.target.value),className:"w-full border bg-base-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[(0,i.jsx)("option",{value:"",children:"Choose Supplier"}),(0,i.jsx)("option",{value:"Supplier A",children:"Supplier A"}),(0,i.jsx)("option",{value:"Supplier B",children:"Supplier B"})]})]}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Warehouse*"}),(0,i.jsxs)("select",{value:o,onChange:e=>x(e.target.value),className:"w-full border bg-base-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[(0,i.jsx)("option",{value:"",children:"Choose Warehouse"}),(0,i.jsx)("option",{value:"Warehouse A",children:"Warehouse A"}),(0,i.jsx)("option",{value:"Warehouse B",children:"Warehouse B"})]})]})]}),(0,i.jsxs)("div",{className:"mb-6",children:[(0,i.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Code Product"}),(0,i.jsxs)("div",{className:"relative flex items-center",children:[(0,i.jsx)("input",{type:"text",value:k,onChange:e=>S(e.target.value),placeholder:"Scan or Search Product By Code",className:"input input-bordered w-full"}),(0,i.jsxs)("button",{onClick:P,className:"btn btn-primary ml-2 flex items-center",children:[(0,i.jsx)(d.A,{className:"w-5 h-5 mr-1"}),"Scan"]})]})]}),v&&(0,i.jsxs)("div",{className:"mb-6",children:[(0,i.jsx)(n.A,{onUpdate:(e,s)=>{s&&(e=>{if(e){const s={id:Date.now(),product:"Scanned Product",unitPrice:15,currentStock:"1 kg",qty:1,discount:0,tax:.75,subtotal:15.75};S(e.text),D((e=>[...e,s])),w(!1)}})(s)},width:300,height:300}),(0,i.jsx)("button",{type:"button",onClick:P,className:"btn btn-secondary mt-2",children:"Close Scanner"})]}),(0,i.jsxs)("table",{className:"w-full border-collapse border border-gray-300 mb-6",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{className:"bg-gray-200",children:[(0,i.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"#"}),(0,i.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Product"}),(0,i.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Net Unit Price"}),(0,i.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Current Stock"}),(0,i.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Qty Return"}),(0,i.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Discount"}),(0,i.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Tax"}),(0,i.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Subtotal"})]})}),(0,i.jsx)("tbody",{children:C.length>0?C.map(((e,s)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:s+1}),(0,i.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.product}),(0,i.jsxs)("td",{className:"border border-gray-300 px-4 py-2",children:["$",e.unitPrice.toFixed(2)]}),(0,i.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.currentStock}),(0,i.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.qty}),(0,i.jsxs)("td",{className:"border border-gray-300 px-4 py-2",children:["$",e.discount.toFixed(2)]}),(0,i.jsxs)("td",{className:"border border-gray-300 px-4 py-2",children:["$",e.tax.toFixed(2)]}),(0,i.jsxs)("td",{className:"border border-gray-300 px-4 py-2",children:["$",e.subtotal.toFixed(2)]})]},e.id))):(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:"8",className:"text-center py-4",children:"No items available"})})})]}),(0,i.jsx)("div",{className:"flex justify-end mb-6",children:(0,i.jsxs)("div",{className:"text-sm text-right w-72",children:[(0,i.jsxs)("div",{className:"bg-[#D9D9D9] border-t border-b border-black p-2 flex justify-between",children:[(0,i.jsx)("span",{className:"text-sm text-neutral font-medium",children:"Subtotal:"}),(0,i.jsxs)("span",{className:"text-sm text-neutral font-medium",children:["$",R.toFixed(2)]})]}),(0,i.jsxs)("div",{className:"bg-base-100 border-t border-b border-black p-2 flex justify-between",children:[(0,i.jsx)("span",{className:"text-sm  font-medium",children:"Order Tax:"}),(0,i.jsxs)("span",{className:"text-sm font-medium",children:["$",m.toFixed(2)]})]}),(0,i.jsxs)("div",{className:"bg-[#D9D9D9] border-t border-b border-black p-2 flex justify-between",children:[(0,i.jsx)("span",{className:"text-sm text-neutral font-medium",children:"Discount:"}),(0,i.jsxs)("span",{className:"text-sm text-neutral font-medium",children:["$",b.toFixed(2)]})]}),(0,i.jsxs)("div",{className:"bg-base-100 border-t border-b border-black p-2 flex justify-between",children:[(0,i.jsx)("span",{className:"text-sm font-medium",children:"Shipping:"}),(0,i.jsxs)("span",{className:"text-sm font-medium",children:["$",p.toFixed(2)]})]}),(0,i.jsxs)("div",{className:"bg-[#D9D9D9] border-t border-b border-black p-2 flex justify-between",children:[(0,i.jsx)("span",{className:"text-sm text-neutral font-bold",children:"Grand Total:"}),(0,i.jsxs)("span",{className:"text-sm text-neutral font-bold",children:["$",F.toFixed(2)]})]})]})}),(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Order Tax"}),(0,i.jsx)("input",{type:"number",value:m,onChange:e=>u(parseFloat(e.target.value)||0),className:"w-full border bg-base-100 rounded px-3 py-2"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{className:"block text-sm font-medium  mb-1",children:"Discount"}),(0,i.jsx)("input",{type:"number",value:b,onChange:e=>h(parseFloat(e.target.value)||0),className:"w-full border bg-base-100 rounded px-3 py-2"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Shipping"}),(0,i.jsx)("input",{type:"number",value:p,onChange:e=>j(parseFloat(e.target.value)||0),className:"w-full border bg-base-100 rounded px-3 py-2"})]})]}),(0,i.jsxs)("div",{className:"mb-4",children:[(0,i.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Status*"}),(0,i.jsxs)("select",{value:f,onChange:e=>N(e.target.value),className:"w-full border bg-base-100 rounded px-3 py-2",children:[(0,i.jsx)("option",{value:"",children:"Choose Status"}),(0,i.jsx)("option",{value:"Pending",children:"Pending"}),(0,i.jsx)("option",{value:"Completed",children:"Completed"})]})]}),(0,i.jsxs)("div",{className:"mb-4",children:[(0,i.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Note"}),(0,i.jsx)("textarea",{value:g,onChange:e=>y(e.target.value),className:"w-full border bg-base-100 rounded px-3 py-2",rows:"3"})]}),(0,i.jsx)("div",{className:"mt-8",children:(0,i.jsx)("button",{className:"btn btn-primary float-right",onClick:()=>{const s={date:e,supplier:t,warehouse:o,orderItems:C,orderTax:m,discount:b,shipping:p,total:A(),status:f,note:g};console.log("Order Data:",s),alert("Order submitted successfully!")},children:"Submit"})})]})}},87869:(e,s,t)=>{t.r(s),t.d(s,{default:()=>A});var l=t(65043),a=t(79456),r=t(38379),n=t(7449),d=t(38010);const c=l.forwardRef((function(e,s){let{title:t,titleId:a,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":a},r),t?l.createElement("title",{id:a},t):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"}))}));var i=t(42704),o=t(9938),x=t(89531),m=t(44228),u=t(79248),b=t(63073),h=t(38791),p=t(70579);const j=function(e){let{isVisible:s,onClose:t}=e;return s?(0,p.jsx)("div",{className:"fixed inset-0 bg-base-100 bg-opacity-50 flex justify-end z-50",children:(0,p.jsxs)("div",{className:"w-[450px] bg-base-100 h-full shadow-lg p-4 overflow-y-auto",children:[(0,p.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,p.jsx)("button",{className:"text-black text-lg",onClick:t,children:"\u274c"}),(0,p.jsx)("h2",{className:"text-xl font-bold text-center flex-1",children:"Filter"})]}),(0,p.jsx)("form",{children:(0,p.jsxs)("div",{className:"p-4",children:[(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Reference"}),(0,p.jsx)("input",{type:"text",placeholder:"Reference",className:"input input-bordered w-full text-sm py-1"})]}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Customer"}),(0,p.jsx)("select",{className:"select select-bordered w-full text-sm py-1",children:(0,p.jsx)("option",{children:"Choose Customer"})})]}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Seller"}),(0,p.jsx)("select",{className:"select select-bordered w-full text-sm py-1",children:(0,p.jsx)("option",{children:"Choose Seller"})})]}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Warehouse"}),(0,p.jsx)("select",{className:"select select-bordered w-full text-sm py-1",children:(0,p.jsx)("option",{children:"Choose Warehouse"})})]}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Status"}),(0,p.jsx)("input",{type:"text",placeholder:"All",className:"input input-bordered w-full text-sm py-1"})]}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Payment Status"}),(0,p.jsx)("input",{type:"text",placeholder:"All",className:"input input-bordered w-full text-sm py-1"})]}),(0,p.jsxs)("div",{className:"flex justify-between mt-4",children:[(0,p.jsxs)("button",{className:"flex items-center bg-blue-600 text-white px-10 py-2 rounded shadow-md text-sm",children:[(0,p.jsx)(d.A,{className:"w-5 h-5 mr-2"}),"Filter"]}),(0,p.jsxs)("button",{className:"flex items-center bg-red-600 text-white px-10 py-2 rounded shadow-md text-sm",onClick:()=>console.log("Reset"),children:[(0,p.jsx)(h.A,{className:"w-5 h-5 mr-2"}),"Reset"]})]})]})})]})}):null};var f=t(38682);const N=function(){const e=e=>{let{title:s,details:t}=e;return(0,p.jsxs)("div",{className:"space-y-1 text-sm",children:[(0,p.jsx)("h3",{className:"font-bold",children:s}),t.map(((e,s)=>(0,p.jsx)("p",{className:"text-gray-500",children:e},s)))]})},s=e=>{let{icon:s,label:t,onClick:l,className:a}=e;return(0,p.jsxs)("button",{onClick:l,className:`btn btn-outline btn-sm flex items-center space-x-1 ${a}`,children:[(0,p.jsx)(s,{className:"w-5 h-5"}),(0,p.jsx)("span",{children:t})]})},t=e=>{let{data:s}=e;return(0,p.jsxs)("table",{className:"table-auto w-full",children:[(0,p.jsx)("thead",{className:"bg-gray-300",children:(0,p.jsx)("tr",{children:["Product","Net Unit Cost","Quantity","Unit Cost","Discount","Tax","Subtotal"].map(((e,s)=>(0,p.jsx)("th",{className:"p-2 text-neutral text-left",children:e},s)))})}),(0,p.jsx)("tbody",{children:s.map(((e,s)=>(0,p.jsxs)("tr",{className:"border-b",children:[(0,p.jsx)("td",{className:"p-2",children:e.product}),(0,p.jsxs)("td",{className:"p-2",children:["$",e.netUnitCost]}),(0,p.jsx)("td",{className:"p-2",children:e.quantity}),(0,p.jsxs)("td",{className:"p-2",children:["$",e.unitCost]}),(0,p.jsxs)("td",{className:"p-2",children:["$",e.discount]}),(0,p.jsxs)("td",{className:"p-2",children:["$",e.tax]}),(0,p.jsxs)("td",{className:"p-2",children:["$",e.subtotal]})]},s)))})]})};return(0,p.jsx)("div",{className:"p-6 space-y-6",children:(0,p.jsxs)("div",{className:"bg-base-100 p-6 rounded-2xl shadow-lg",children:[(0,p.jsxs)("div",{className:"space-y-4",children:[(0,p.jsxs)("div",{className:"flex justify-between items-center w-full",children:[(0,p.jsx)("h2",{className:"text-lg font-bold",children:"Return Purchases Detail: PR_0012"}),(0,p.jsxs)("div",{className:"flex space-x-2",children:[(0,p.jsx)(s,{icon:f.A,label:"Email",onClick:()=>{},className:"btn btn-outline flex items-center text-sm h-10 text-blue-300 border-blue-300 hover:bg-blue-50"}),(0,p.jsx)(s,{icon:i.A,label:"PDF",onClick:()=>{},className:"btn btn-outline btn-error flex items-center text-sm h-10 text-red-500 border-red-500 hover:bg-red-100"})]})]}),(0,p.jsx)("div",{className:"border-b-2 border-gray-200 w-full"})]}),(0,p.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mt-8",children:[(0,p.jsx)(e,{title:"Supplier Info",details:["IT Supplier","supplier1@gmail.com","0876-5310-2149","Sukodono, Rt-05 RW-01"]}),(0,p.jsx)("div",{className:"md:ml-10",children:(0,p.jsx)(e,{title:"Company Info",details:["DashStack","admin@gmail.com","0876-5310-2149","Surabaya, RS-05 RW-01"]})}),(0,p.jsx)("div",{className:"md:ml-10",children:(0,p.jsx)(e,{title:"Info of Return",details:["Reference: PR_0012","Status: Ordered","Warehouse: Warehouse 2","Payment Status: Unpaid"]})})]}),(0,p.jsxs)("div",{className:"mt-8",children:[(0,p.jsx)("h3",{className:"font-bold text-lg mb-4",children:"Order Summary"}),(0,p.jsx)(t,{data:[{product:"86102192 (Macbook Pro)",netUnitCost:1300,quantity:1,unitCost:1300,discount:0,tax:0,subtotal:1300},{product:"87716743 (Sunglasses)",netUnitCost:28,quantity:21,unitCost:28,discount:0,tax:0,subtotal:0}]})]}),(0,p.jsx)("div",{className:"flex justify-end mt-6 space-y-2",children:(0,p.jsxs)("div",{className:"text-sm text-right w-72",children:[(0,p.jsxs)("div",{className:"bg-gray-300 border-t border-b border-black p-2 flex text-neutral justify-between",children:[(0,p.jsx)("span",{children:"Order Tax:"})," ",(0,p.jsx)("span",{className:"font-medium",children:"$0.00 (0.00%)"})]}),(0,p.jsxs)("div",{className:"p-2 flex justify-between",children:[(0,p.jsx)("span",{children:"Discount:"})," ",(0,p.jsx)("span",{className:"font-medium",children:"$0.00"})]}),(0,p.jsxs)("div",{className:"bg-gray-300 border-t border-b border-black p-2 flex text-neutral justify-between",children:[(0,p.jsx)("span",{children:"Shipping:"})," ",(0,p.jsx)("span",{className:"font-medium",children:"$0.00"})]}),(0,p.jsxs)("div",{className:"p-2 flex justify-between font-medium",children:[(0,p.jsx)("span",{children:"Grand Total:"})," ",(0,p.jsx)("span",{children:"$1736.00"})]}),(0,p.jsxs)("div",{className:"bg-gray-300 border-t border-b border-black p-2 flex text-neutral justify-between",children:[(0,p.jsx)("span",{children:"Paid:"})," ",(0,p.jsx)("span",{className:"font-medium",children:"$0.00"})]}),(0,p.jsxs)("div",{className:"p-2 flex justify-between",children:[(0,p.jsx)("span",{className:"font-bold",children:"Due:"})," ",(0,p.jsx)("span",{className:"font-bold",children:"$1736.00"})]})]})})]})})};var g=t(31899),y=t.n(g),v=(t(25015),t(71154)),w=t(67904);const k=()=>{const[e,s]=(0,l.useState)(new Date),[t,a]=(0,l.useState)(""),[r,n]=(0,l.useState)(""),[d,c]=(0,l.useState)(2.5),[i,o]=(0,l.useState)(3),[x,m]=(0,l.useState)(5),[u,h]=(0,l.useState)(""),[j,f]=(0,l.useState)(""),[N,g]=(0,l.useState)(!1),[k,S]=(0,l.useState)(""),[C,D]=(0,l.useState)([{id:1,product:"Product A",unitPrice:10,currentStock:"2 kg",qty:2,discount:1,tax:.5,subtotal:19.5},{id:2,product:"Product B",unitPrice:20,currentStock:"25 kg",qty:1,discount:2,tax:1,subtotal:19}]),P=()=>{g(!N)},A=()=>{const e=C.reduce(((e,s)=>e+s.subtotal),0);return e+d-i+x},R=C.reduce(((e,s)=>e+s.subtotal),0),F=R+d-i+x;return(0,p.jsxs)(b.A,{title:"Return Edit Purchase",topMargin:"mt-2",children:[(0,p.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",children:[(0,p.jsxs)("div",{className:"flex flex-col",children:[(0,p.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Date*"}),(0,p.jsx)(y(),{selected:e,onChange:e=>s(e),className:"w-full border bg-base-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]}),(0,p.jsxs)("div",{className:"flex flex-col",children:[(0,p.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Purchase*"}),(0,p.jsxs)("select",{value:t,onChange:e=>a(e.target.value),className:"w-full border bg-base-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[(0,p.jsx)("option",{value:"",children:"Choose Purchase"}),(0,p.jsx)("option",{value:"PR_123",children:"PR_123"}),(0,p.jsx)("option",{value:"PR_321",children:"PR_321"})]})]}),(0,p.jsxs)("div",{className:"flex flex-col",children:[(0,p.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Warehouse*"}),(0,p.jsxs)("select",{value:r,onChange:e=>n(e.target.value),className:"w-full border bg-base-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[(0,p.jsx)("option",{value:"",children:"Choose Warehouse"}),(0,p.jsx)("option",{value:"Warehouse A",children:"Warehouse A"}),(0,p.jsx)("option",{value:"Warehouse B",children:"Warehouse B"})]})]})]}),(0,p.jsxs)("div",{className:"mb-6",children:[(0,p.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Code Product"}),(0,p.jsxs)("div",{className:"relative flex items-center",children:[(0,p.jsx)("input",{type:"text",value:k,onChange:e=>S(e.target.value),placeholder:"Scan or Search Product By Code",className:"input input-bordered w-full"}),(0,p.jsxs)("button",{onClick:P,className:"btn btn-primary ml-2 flex items-center",children:[(0,p.jsx)(w.A,{className:"w-5 h-5 mr-1"}),"Scan"]})]})]}),N&&(0,p.jsxs)("div",{className:"mb-6",children:[(0,p.jsx)(v.A,{onUpdate:(e,s)=>{s&&(e=>{if(e){const s={id:Date.now(),product:"Scanned Product",unitPrice:15,currentStock:1,qty:1,discount:0,tax:.75,subtotal:15.75};S(e.text),D((e=>[...e,s])),g(!1)}})(s)},width:300,height:300}),(0,p.jsx)("button",{type:"button",onClick:P,className:"btn btn-secondary mt-2",children:"Close Scanner"})]}),(0,p.jsxs)("table",{className:"w-full border-collapse border border-gray-300 mb-6",children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{className:"bg-gray-200",children:[(0,p.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"#"}),(0,p.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Product"}),(0,p.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Net Unit Price"}),(0,p.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Current Stock"}),(0,p.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Qty Return"}),(0,p.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Discount"}),(0,p.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Tax"}),(0,p.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Subtotal"})]})}),(0,p.jsx)("tbody",{children:C.length>0?C.map(((e,s)=>(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:s+1}),(0,p.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.product}),(0,p.jsxs)("td",{className:"border border-gray-300 px-4 py-2",children:["$",e.unitPrice.toFixed(2)]}),(0,p.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.currentStock}),(0,p.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.qty}),(0,p.jsxs)("td",{className:"border border-gray-300 px-4 py-2",children:["$",e.discount.toFixed(2)]}),(0,p.jsxs)("td",{className:"border border-gray-300 px-4 py-2",children:["$",e.tax.toFixed(2)]}),(0,p.jsxs)("td",{className:"border border-gray-300 px-4 py-2",children:["$",e.subtotal.toFixed(2)]})]},e.id))):(0,p.jsx)("tr",{children:(0,p.jsx)("td",{colSpan:"8",className:"text-center py-4",children:"No items available"})})})]}),(0,p.jsx)("div",{className:"flex justify-end mb-6",children:(0,p.jsxs)("div",{className:"text-sm text-right w-72",children:[(0,p.jsxs)("div",{className:"bg-[#D9D9D9] border-t border-b border-black p-2 flex justify-between",children:[(0,p.jsx)("span",{className:"text-sm text-neutral font-medium",children:"Subtotal:"}),(0,p.jsxs)("span",{className:"text-sm text-neutral font-medium",children:["$",R.toFixed(2)]})]}),(0,p.jsxs)("div",{className:"bg-base-100 border-t border-b border-black p-2 flex justify-between",children:[(0,p.jsx)("span",{className:"text-sm  font-medium",children:"Order Tax:"}),(0,p.jsxs)("span",{className:"text-sm font-medium",children:["$",d.toFixed(2)]})]}),(0,p.jsxs)("div",{className:"bg-[#D9D9D9] border-t border-b border-black p-2 flex justify-between",children:[(0,p.jsx)("span",{className:"text-sm text-neutral font-medium",children:"Discount:"}),(0,p.jsxs)("span",{className:"text-sm text-neutral font-medium",children:["$",i.toFixed(2)]})]}),(0,p.jsxs)("div",{className:"bg-base-100 border-t border-b border-black p-2 flex justify-between",children:[(0,p.jsx)("span",{className:"text-sm font-medium",children:"Shipping:"}),(0,p.jsxs)("span",{className:"text-sm font-medium",children:["$",x.toFixed(2)]})]}),(0,p.jsxs)("div",{className:"bg-[#D9D9D9] border-t border-b border-black p-2 flex justify-between",children:[(0,p.jsx)("span",{className:"text-sm text-neutral font-bold",children:"Grand Total:"}),(0,p.jsxs)("span",{className:"text-sm text-neutral font-bold",children:["$",F.toFixed(2)]})]})]})}),(0,p.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Order Tax"}),(0,p.jsx)("input",{type:"number",value:d,onChange:e=>c(parseFloat(e.target.value)||0),className:"w-full border bg-base-100 rounded px-3 py-2"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("label",{className:"block text-sm font-medium  mb-1",children:"Discount"}),(0,p.jsx)("input",{type:"number",value:i,onChange:e=>o(parseFloat(e.target.value)||0),className:"w-full border bg-base-100 rounded px-3 py-2"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Shipping"}),(0,p.jsx)("input",{type:"number",value:x,onChange:e=>m(parseFloat(e.target.value)||0),className:"w-full border bg-base-100 rounded px-3 py-2"})]})]}),(0,p.jsxs)("div",{className:"mb-4",children:[(0,p.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Status*"}),(0,p.jsxs)("select",{value:u,onChange:e=>h(e.target.value),className:"w-full border bg-base-100 rounded px-3 py-2",children:[(0,p.jsx)("option",{value:"",children:"Choose Status"}),(0,p.jsx)("option",{value:"Pending",children:"Pending"}),(0,p.jsx)("option",{value:"Completed",children:"Completed"})]})]}),(0,p.jsxs)("div",{className:"mb-4",children:[(0,p.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Note"}),(0,p.jsx)("textarea",{value:j,onChange:e=>f(e.target.value),className:"w-full border bg-base-100 rounded px-3 py-2",rows:"3"})]}),(0,p.jsx)("div",{className:"mt-8",children:(0,p.jsx)("button",{className:"btn btn-primary float-right",onClick:()=>{const s={date:e,purchase:t,warehouse:r,orderItems:C,orderTax:d,discount:i,shipping:x,total:A(),status:u,note:j};console.log("Order Data:",s),alert("Order submitted successfully!")},children:"Submit"})})]})};var S=t(87697),C=t(53622);const D=[{date:"2024-10-26",reference:"TR_1119",supplier:"IT Supplier",warehouse:"Warehouse 1",grandTotal:22,status:"Completed",purchaseRef:"PR_20231026",paid:"1527.00",due:"0.00",paymentStatus:"Unpaid"},{date:"2024-10-27",reference:"TR_1120",supplier:"IT Supplier",warehouse:"Warehouse 4",grandTotal:15,status:"Completed",purchaseRef:"PR_20231027",paid:"1527.00",due:"0.00",paymentStatus:"Unpaid"}];const P=function(){const[e,s]=(0,l.useState)(D),[t,a]=(0,l.useState)(""),[r,h]=(0,l.useState)(!1),[f,g]=(0,l.useState)(!1),[y,v]=(0,l.useState)(!1),[w,P]=(0,l.useState)(!1),A=e.filter((e=>e.reference.toLowerCase().includes(t.toLowerCase())||e.supplier.toLowerCase().includes(t.toLowerCase())||e.warehouse.toLowerCase().includes(t.toLowerCase())));return f?(0,p.jsx)(k,{}):y?(0,p.jsx)(N,{}):w?(0,p.jsx)(S.A,{}):(0,p.jsxs)("div",{className:"flex flex-col items-center h-screen pt-10 px-4",children:[(0,p.jsx)(j,{isVisible:r,onClose:()=>h(!1)}),(0,p.jsxs)(b.A,{title:"Return Purchases",topMargin:"mt-2",children:[(0,p.jsxs)("div",{className:"flex w-full items-center justify-between flex-wrap mb-4",children:[(0,p.jsxs)("div",{className:"relative w-50 max-w-xs",children:[(0,p.jsx)(n.A,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"}),(0,p.jsx)("input",{type:"text",value:t,onChange:e=>{a(e.target.value)},placeholder:"Search",className:"input input-bordered w-full h-8 pl-8 text-sm"})]}),(0,p.jsxs)("div",{className:"flex space-x-2 mt-2 sm:mt-0",children:[(0,p.jsxs)("button",{onClick:()=>h(!0),className:"btn btn-outline btn-primary flex items-center text-sm h-10",children:[(0,p.jsx)(d.A,{className:"w-5 h-5 mr-1"}),"Filter"]}),(0,p.jsxs)("button",{onClick:()=>console.log("Exporting Excel"),className:"btn btn-outline btn-success flex items-center text-sm h-10",children:[(0,p.jsx)(c,{className:"w-5 h-5 mr-1"}),"Excel"]}),(0,p.jsxs)("button",{onClick:()=>console.log("Exporting PDF"),className:"btn btn-outline btn-error flex items-center text-sm h-10",children:[(0,p.jsx)(i.A,{className:"w-5 h-5 mr-1"}),"PDF"]}),(0,p.jsxs)("button",{className:"btn btn-primary flex items-center",onClick:()=>P(!0),children:[(0,p.jsx)(o.A,{className:"w-5 h-5 mr-1"}),"Create"]})]})]}),(0,p.jsx)("div",{className:"overflow-x-auto mt-4",children:(0,p.jsxs)("table",{className:"min-w-full table-auto border-collapse",children:[(0,p.jsx)("thead",{children:(0,p.jsx)("tr",{children:["Date","Reference","Supplier","Warehouse","Purchase Ref","Status","Grand Total","Paid","Due","Payment Status","Action"].map(((e,s)=>(0,p.jsx)("th",{className:"border-b py-3 px-4 text-left text-sm font-semibold",children:e},s)))})}),(0,p.jsx)("tbody",{children:A.map(((t,l)=>(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{className:"py-3 px-4 text-sm",children:t.date}),(0,p.jsx)("td",{className:"py-3 px-4 text-sm",children:t.reference}),(0,p.jsx)("td",{className:"py-3 px-4 text-sm",children:t.supplier}),(0,p.jsx)("td",{className:"py-3 px-4 text-sm",children:t.warehouse}),(0,p.jsx)("td",{className:"py-3 px-4 text-sm",children:t.purchaseRef}),(0,p.jsx)("td",{className:"py-3 px-4 text-sm",children:(0,p.jsx)("span",{className:"px-2 py-1 text-xs rounded-md "+("Completed"===t.status?"text-green-500 border border-green-500":"text-red-500 border border-red-500"),children:t.status})}),(0,p.jsx)("td",{className:"py-3 px-4 text-sm",children:t.grandTotal}),(0,p.jsx)("td",{className:"py-3 px-4 text-sm",children:t.paid}),(0,p.jsx)("td",{className:"py-3 px-4 text-sm",children:t.due}),(0,p.jsx)("td",{className:"py-3 px-4 text-sm",children:(0,p.jsx)("span",{className:"px-2 py-1 text-xs rounded-md "+("Unpaid"===t.paymentStatus?"text-orange-500 border border-orange-500":"text-green-500 border border-green-500"),children:t.paymentStatus})}),(0,p.jsxs)("td",{className:"py-3 px-4 text-sm flex space-x-2",children:[(0,p.jsx)("button",{className:"btn btn-sm btn-info",onClick:()=>v(!0),children:(0,p.jsx)(x.A,{className:"w-5 h-5"})}),(0,p.jsx)("button",{onClick:()=>g(!0),className:"btn btn-sm btn-warning",children:(0,p.jsx)(m.A,{className:"w-5 h-5"})}),(0,p.jsx)("button",{onClick:()=>(t=>{const l=e.filter(((e,s)=>s!==t));s(l)})(l),className:"btn btn-sm btn-error",children:(0,p.jsx)(u.A,{className:"w-5 h-5"})})]})]},l)))})]})}),(0,p.jsx)(C.A,{})]})]})};const A=function(){const e=(0,a.wA)();return(0,l.useEffect)((()=>{e((0,r.wE)({title:"Inventory | Return Purchase |"}))}),[]),(0,p.jsx)(P,{})}},38682:(e,s,t)=>{t.d(s,{A:()=>a});var l=t(65043);const a=l.forwardRef((function(e,s){let{title:t,titleId:a,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":a},r),t?l.createElement("title",{id:a},t):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"}))}))},7449:(e,s,t)=>{t.d(s,{A:()=>a});var l=t(65043);const a=l.forwardRef((function(e,s){let{title:t,titleId:a,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":a},r),t?l.createElement("title",{id:a},t):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"}))}))},9938:(e,s,t)=>{t.d(s,{A:()=>a});var l=t(65043);const a=l.forwardRef((function(e,s){let{title:t,titleId:a,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":a},r),t?l.createElement("title",{id:a},t):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"}))}))},38791:(e,s,t)=>{t.d(s,{A:()=>a});var l=t(65043);const a=l.forwardRef((function(e,s){let{title:t,titleId:a,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":a},r),t?l.createElement("title",{id:a},t):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.636 5.636a9 9 0 1012.728 0M12 3v9"}))}))}}]);
//# sourceMappingURL=7869.2dc2af5e.chunk.js.map