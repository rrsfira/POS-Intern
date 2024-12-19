"use strict";(self.webpackChunkweb_pos=self.webpackChunkweb_pos||[]).push([[1887],{41887:(e,s,t)=>{t.r(s),t.d(s,{default:()=>b});var r=t(65043),a=t(79456),l=t(38379),n=t(31899),d=t.n(n),o=(t(25015),t(71154)),c=t(67904),i=t(63073),x=t(73369),u=t(70579);const m=()=>{const[e,s]=(0,r.useState)(new Date),[t,n]=(0,r.useState)(""),[m,b]=(0,r.useState)(""),[h,p]=(0,r.useState)(0),[j,f]=(0,r.useState)(0),[N,g]=(0,r.useState)(0),[y,v]=(0,r.useState)(""),[D,w]=(0,r.useState)(""),[S,k]=(0,r.useState)(!1),[C,F]=(0,r.useState)(""),[P,$]=(0,r.useState)([]),W=(0,a.wA)(),A=()=>{k(!S)},T=()=>{const e=P.reduce(((e,s)=>e+s.subtotal),0);return e+h-j+N},B=P.reduce(((e,s)=>e+s.subtotal),0),I=T();return(0,u.jsxs)(i.A,{title:"Create Sale",topMargin:"mt-2",children:[(0,u.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 items-start",children:[(0,u.jsxs)("div",{className:"flex flex-col h-full justify-between",children:[(0,u.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Date*"}),(0,u.jsx)(d(),{selected:e,onChange:e=>s(e),className:"w-full border bg-base-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]}),(0,u.jsxs)("div",{className:"flex flex-col h-full justify-between",children:[(0,u.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Customer*"}),(0,u.jsxs)("select",{value:t,onChange:e=>n(e.target.value),className:"w-full border bg-base-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[(0,u.jsx)("option",{value:"",disabled:!0,children:"Choose Customer"}),(0,u.jsx)("option",{value:"Walk-In Customer",children:"Walk-In Customer"}),x.V.map((e=>(0,u.jsx)("option",{value:e.name,children:e.name},e.id)))]})]}),(0,u.jsxs)("div",{className:"flex flex-col h-full justify-between",children:[(0,u.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Warehouse*"}),(0,u.jsxs)("select",{value:m,onChange:e=>b(e.target.value),className:"w-full border bg-base-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",children:[(0,u.jsx)("option",{value:"",children:"Choose Warehouse"}),(0,u.jsx)("option",{value:"Warehouse A",children:"Warehouse A"}),(0,u.jsx)("option",{value:"Warehouse B",children:"Warehouse B"})]})]})]}),(0,u.jsxs)("div",{className:"mb-6",children:[(0,u.jsx)("label",{className:"block text-sm font-semibold dark:text-gray-300 mb-2",children:"Product"}),(0,u.jsxs)("div",{className:"relative flex items-center",children:[(0,u.jsx)("button",{onClick:A,className:"btn btn-primary mr-4 flex items-center",children:(0,u.jsx)(c.A,{className:"w-10 h-10 mr-1"})}),(0,u.jsx)("input",{type:"text",value:C,onChange:e=>F(e.target.value),placeholder:"Scan or Search Product By Code",className:"input input-bordered w-full"})]})]}),S&&(0,u.jsxs)("div",{className:"mb-6",children:[(0,u.jsx)(o.A,{onUpdate:(e,s)=>{s&&(e=>{if(e){const s={id:Date.now(),product:"Scanned Product",unitPrice:15,currentStock:"1 kg",qty:1,discount:0,tax:.75,subtotal:15.75};F(e.text),$((e=>[...e,s])),k(!1)}})(s)},width:300,height:300}),(0,u.jsx)("button",{type:"button",onClick:A,className:"btn btn-secondary mt-2",children:"Close Scanner"})]}),(0,u.jsxs)("table",{className:"w-full border-collapse border border-gray-300 mb-6",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{className:"bg-gray-200",children:[(0,u.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"#"}),(0,u.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Product"}),(0,u.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Net Unit Price"}),(0,u.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Current Stock"}),(0,u.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Qty"}),(0,u.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Discount"}),(0,u.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Tax"}),(0,u.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Subtotal"})]})}),(0,u.jsx)("tbody",{children:P.length>0?P.map(((e,s)=>(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:s+1}),(0,u.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.product}),(0,u.jsxs)("td",{className:"border border-gray-300 px-4 py-2",children:["$",e.unitPrice.toFixed(2)]}),(0,u.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.currentStock}),(0,u.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.qty}),(0,u.jsxs)("td",{className:"border border-gray-300 px-4 py-2",children:["$",e.discount.toFixed(2)]}),(0,u.jsxs)("td",{className:"border border-gray-300 px-4 py-2",children:["$",e.tax.toFixed(2)]}),(0,u.jsxs)("td",{className:"border border-gray-300 px-4 py-2",children:["$",e.subtotal.toFixed(2)]})]},e.id))):(0,u.jsx)("tr",{children:(0,u.jsx)("td",{colSpan:"8",className:"text-center py-4",children:"No items available"})})})]}),(0,u.jsx)("div",{className:"flex justify-end mb-6",children:(0,u.jsxs)("div",{className:"text-sm text-right w-72",children:[(0,u.jsxs)("div",{className:"bg-[#D9D9D9] border-t border-b border-black p-2 flex justify-between",children:[(0,u.jsx)("span",{className:"text-sm text-neutral font-medium",children:"Subtotal:"}),(0,u.jsxs)("span",{className:"text-sm text-neutral font-medium",children:["$",B.toFixed(2)]})]}),(0,u.jsxs)("div",{className:"bg-base-100 border-t border-b border-black p-2 flex justify-between",children:[(0,u.jsx)("span",{className:"text-sm  font-medium",children:"Order Tax:"}),(0,u.jsxs)("span",{className:"text-sm font-medium",children:["$",h.toFixed(2)]})]}),(0,u.jsxs)("div",{className:"bg-[#D9D9D9] border-t border-b border-black p-2 flex justify-between",children:[(0,u.jsx)("span",{className:"text-sm text-neutral font-medium",children:"Discount:"}),(0,u.jsxs)("span",{className:"text-sm text-neutral font-medium",children:["$",j.toFixed(2)]})]}),(0,u.jsxs)("div",{className:"bg-base-100 border-t border-b border-black p-2 flex justify-between",children:[(0,u.jsx)("span",{className:"text-sm font-medium",children:"Shipping:"}),(0,u.jsxs)("span",{className:"text-sm font-medium",children:["$",N.toFixed(2)]})]}),(0,u.jsxs)("div",{className:"bg-[#D9D9D9] border-t border-b border-black p-2 flex justify-between",children:[(0,u.jsx)("span",{className:"text-sm text-neutral font-bold",children:"Grand Total:"}),(0,u.jsxs)("span",{className:"text-sm text-neutral font-bold",children:["$",I.toFixed(2)]})]})]})}),(0,u.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Order Tax"}),(0,u.jsx)("input",{type:"number",value:h,onChange:e=>p(parseFloat(e.target.value)||0),className:"w-full border bg-base-100 rounded px-3 py-2"})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{className:"block text-sm font-medium  mb-1",children:"Discount"}),(0,u.jsx)("input",{type:"number",value:j,onChange:e=>f(parseFloat(e.target.value)||0),className:"w-full border bg-base-100 rounded px-3 py-2"})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Shipping"}),(0,u.jsx)("input",{type:"number",value:N,onChange:e=>g(parseFloat(e.target.value)||0),className:"w-full border bg-base-100 rounded px-3 py-2"})]})]}),(0,u.jsxs)("div",{className:"mb-4",children:[(0,u.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Status*"}),(0,u.jsxs)("select",{value:y,onChange:e=>v(e.target.value),className:"w-full border bg-base-100 rounded px-3 py-2",children:[(0,u.jsx)("option",{value:"",children:"Choose Status"}),(0,u.jsx)("option",{value:"Pending",children:"Pending"}),(0,u.jsx)("option",{value:"Completed",children:"Completed"})]})]}),(0,u.jsxs)("div",{className:"mb-4",children:[(0,u.jsx)("label",{className:"block text-sm font-medium mb-1",children:"Note"}),(0,u.jsx)("textarea",{value:D,onChange:e=>w(e.target.value),className:"w-full border bg-base-100 rounded px-3 py-2",rows:"3"})]}),(0,u.jsx)("div",{className:"mt-8",children:(0,u.jsx)("button",{className:"btn btn-primary float-right",onClick:()=>{const s={date:e,customer:t,warehouse:m,orderItems:P,orderTax:h,discount:j,shipping:N,total:T(),status:y,note:D};console.log(s),W((0,l.Ds)({message:"Sales Success!",status:1}))},children:"Submit"})})]})};const b=function(){const e=(0,a.wA)();return(0,r.useEffect)((()=>{e((0,l.wE)({title:"Create Sales"}))}),[]),(0,u.jsx)(m,{})}}}]);
//# sourceMappingURL=1887.6b9d5b08.chunk.js.map