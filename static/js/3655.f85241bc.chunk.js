"use strict";(self.webpackChunkweb_pos=self.webpackChunkweb_pos||[]).push([[3655],{87697:(e,s,t)=>{t.d(s,{A:()=>i});var r=t(65043),a=t(31899),l=t.n(a),d=(t(25015),t(71154)),n=t(67904),o=t(63073),c=t(70579);const i=()=>{const[e,s]=(0,r.useState)(new Date),[t,a]=(0,r.useState)(""),[i,x]=(0,r.useState)(""),[u,b]=(0,r.useState)(0),[m,p]=(0,r.useState)(0),[h,j]=(0,r.useState)(0),[f,N]=(0,r.useState)(""),[g,y]=(0,r.useState)(""),[v,D]=(0,r.useState)(!1),[S,w]=(0,r.useState)(""),[k,C]=(0,r.useState)([]),F=()=>{D(!v)},P=()=>{const e=k.reduce(((e,s)=>e+s.subtotal),0);return e+u-m+h},A=k.reduce(((e,s)=>e+s.subtotal),0),$=P();return(0,c.jsxs)(o.A,{title:"Create Purchase",topMargin:"mt-2",children:[(0,c.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",children:[(0,c.jsxs)("div",{className:"flex flex-col",children:[(0,c.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Date*"}),(0,c.jsx)(l(),{selected:e,onChange:e=>s(e),className:"w-full border bg-base-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]}),(0,c.jsxs)("div",{className:"flex flex-col",children:[(0,c.jsx)("label",{className:"block text-sm font-mediummb-1",children:"Supplier*"}),(0,c.jsxs)("select",{value:t,onChange:e=>a(e.target.value),className:"w-full border bg-base-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[(0,c.jsx)("option",{value:"",children:"Choose Supplier"}),(0,c.jsx)("option",{value:"Supplier A",children:"Supplier A"}),(0,c.jsx)("option",{value:"Supplier B",children:"Supplier B"})]})]}),(0,c.jsxs)("div",{className:"flex flex-col",children:[(0,c.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Warehouse*"}),(0,c.jsxs)("select",{value:i,onChange:e=>x(e.target.value),className:"w-full border bg-base-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[(0,c.jsx)("option",{value:"",children:"Choose Warehouse"}),(0,c.jsx)("option",{value:"Warehouse A",children:"Warehouse A"}),(0,c.jsx)("option",{value:"Warehouse B",children:"Warehouse B"})]})]})]}),(0,c.jsxs)("div",{className:"mb-6",children:[(0,c.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Code Product"}),(0,c.jsxs)("div",{className:"relative flex items-center",children:[(0,c.jsx)("input",{type:"text",value:S,onChange:e=>w(e.target.value),placeholder:"Scan or Search Product By Code",className:"input input-bordered w-full"}),(0,c.jsxs)("button",{onClick:F,className:"btn btn-primary ml-2 flex items-center",children:[(0,c.jsx)(n.A,{className:"w-5 h-5 mr-1"}),"Scan"]})]})]}),v&&(0,c.jsxs)("div",{className:"mb-6",children:[(0,c.jsx)(d.A,{onUpdate:(e,s)=>{s&&(e=>{if(e){const s={id:Date.now(),product:"Scanned Product",unitPrice:15,currentStock:"1 kg",qty:1,discount:0,tax:.75,subtotal:15.75};w(e.text),C((e=>[...e,s])),D(!1)}})(s)},width:300,height:300}),(0,c.jsx)("button",{type:"button",onClick:F,className:"btn btn-secondary mt-2",children:"Close Scanner"})]}),(0,c.jsxs)("table",{className:"w-full border-collapse border border-gray-300 mb-6",children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{className:"bg-gray-200",children:[(0,c.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"#"}),(0,c.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Product"}),(0,c.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Net Unit Price"}),(0,c.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Current Stock"}),(0,c.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Qty Return"}),(0,c.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Discount"}),(0,c.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Tax"}),(0,c.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Subtotal"})]})}),(0,c.jsx)("tbody",{children:k.length>0?k.map(((e,s)=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:s+1}),(0,c.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.product}),(0,c.jsxs)("td",{className:"border border-gray-300 px-4 py-2",children:["$",e.unitPrice.toFixed(2)]}),(0,c.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.currentStock}),(0,c.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.qty}),(0,c.jsxs)("td",{className:"border border-gray-300 px-4 py-2",children:["$",e.discount.toFixed(2)]}),(0,c.jsxs)("td",{className:"border border-gray-300 px-4 py-2",children:["$",e.tax.toFixed(2)]}),(0,c.jsxs)("td",{className:"border border-gray-300 px-4 py-2",children:["$",e.subtotal.toFixed(2)]})]},e.id))):(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:"8",className:"text-center py-4",children:"No items available"})})})]}),(0,c.jsx)("div",{className:"flex justify-end mb-6",children:(0,c.jsxs)("div",{className:"text-sm text-right w-72",children:[(0,c.jsxs)("div",{className:"bg-[#D9D9D9] border-t border-b border-black p-2 flex justify-between",children:[(0,c.jsx)("span",{className:"text-sm text-neutral font-medium",children:"Subtotal:"}),(0,c.jsxs)("span",{className:"text-sm text-neutral font-medium",children:["$",A.toFixed(2)]})]}),(0,c.jsxs)("div",{className:"bg-base-100 border-t border-b border-black p-2 flex justify-between",children:[(0,c.jsx)("span",{className:"text-sm  font-medium",children:"Order Tax:"}),(0,c.jsxs)("span",{className:"text-sm font-medium",children:["$",u.toFixed(2)]})]}),(0,c.jsxs)("div",{className:"bg-[#D9D9D9] border-t border-b border-black p-2 flex justify-between",children:[(0,c.jsx)("span",{className:"text-sm text-neutral font-medium",children:"Discount:"}),(0,c.jsxs)("span",{className:"text-sm text-neutral font-medium",children:["$",m.toFixed(2)]})]}),(0,c.jsxs)("div",{className:"bg-base-100 border-t border-b border-black p-2 flex justify-between",children:[(0,c.jsx)("span",{className:"text-sm font-medium",children:"Shipping:"}),(0,c.jsxs)("span",{className:"text-sm font-medium",children:["$",h.toFixed(2)]})]}),(0,c.jsxs)("div",{className:"bg-[#D9D9D9] border-t border-b border-black p-2 flex justify-between",children:[(0,c.jsx)("span",{className:"text-sm text-neutral font-bold",children:"Grand Total:"}),(0,c.jsxs)("span",{className:"text-sm text-neutral font-bold",children:["$",$.toFixed(2)]})]})]})}),(0,c.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Order Tax"}),(0,c.jsx)("input",{type:"number",value:u,onChange:e=>b(parseFloat(e.target.value)||0),className:"w-full border bg-base-100 rounded px-3 py-2"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("label",{className:"block text-sm font-medium  mb-1",children:"Discount"}),(0,c.jsx)("input",{type:"number",value:m,onChange:e=>p(parseFloat(e.target.value)||0),className:"w-full border bg-base-100 rounded px-3 py-2"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Shipping"}),(0,c.jsx)("input",{type:"number",value:h,onChange:e=>j(parseFloat(e.target.value)||0),className:"w-full border bg-base-100 rounded px-3 py-2"})]})]}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Status*"}),(0,c.jsxs)("select",{value:f,onChange:e=>N(e.target.value),className:"w-full border bg-base-100 rounded px-3 py-2",children:[(0,c.jsx)("option",{value:"",children:"Choose Status"}),(0,c.jsx)("option",{value:"Pending",children:"Pending"}),(0,c.jsx)("option",{value:"Completed",children:"Completed"})]})]}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Note"}),(0,c.jsx)("textarea",{value:g,onChange:e=>y(e.target.value),className:"w-full border bg-base-100 rounded px-3 py-2",rows:"3"})]}),(0,c.jsx)("div",{className:"mt-8",children:(0,c.jsx)("button",{className:"btn btn-primary float-right",onClick:()=>{const s={date:e,supplier:t,warehouse:i,orderItems:k,orderTax:u,discount:m,shipping:h,total:P(),status:f,note:g};console.log("Order Data:",s),alert("Order submitted successfully!")},children:"Submit"})})]})}},33655:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var r=t(65043),a=t(79456),l=t(38379),d=t(87697),n=t(70579);const o=function(){const e=(0,a.wA)();return(0,r.useEffect)((()=>{e((0,l.wE)({title:"Inventory | Create Purchase |"}))}),[]),(0,n.jsx)(d.A,{})}}}]);
//# sourceMappingURL=3655.f85241bc.chunk.js.map