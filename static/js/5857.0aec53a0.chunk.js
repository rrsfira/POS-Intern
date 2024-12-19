"use strict";(self.webpackChunkweb_pos=self.webpackChunkweb_pos||[]).push([[5766,5857],{89246:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var a=s(65043),r=(s(79456),s(11238)),l=s(72450),d=s(37762),n=(s(20557),s(63073)),c=(s(16159),s(83739)),i=s.n(c),o=s(40821),x=s.n(o),m=s(23183),h=s(70579);const u=function(e){let{salesId:t}=e;const[s,c]=(0,a.useState)(null),[o,u]=(0,a.useState)(""),[p,b]=(0,a.useState)([]),[j,y]=(0,a.useState)(0),[N,f]=(0,a.useState)(0),[S,g]=(0,a.useState)(0),w=e=>{let{title:t,details:s}=e;return(0,h.jsxs)("div",{className:"space-y-1 text-sm",children:[(0,h.jsx)("h3",{className:"font-bold",children:t}),s.map(((e,t)=>(0,h.jsx)("p",{className:"text-gray-500",children:e},t)))]})};(0,a.useEffect)((()=>{console.log("ALLSALESDATA:",m.i),console.log("salesId:",t);const e=m.i.find((e=>e.id===t));e?(console.log("Sales Found:",e),c(e),b(e.orderItems||[])):u("Data not found.")}),[t]);const D=p.reduce(((e,t)=>e+Number(t.subtotal||0)),0);return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(n.A,{title:"Detail Sales",children:[(0,h.jsx)("div",{className:"flex justify-between items-center mb-4",children:(0,h.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,h.jsxs)("button",{className:"border btn-sm border-success text-success rounded-md px-4 py-2 flex items-center space-x-1 hover:bg-success hover:text-white hover:shadow-xl transition duration-200",onClick:()=>{const e=r.Wp.json_to_sheet(m.i),t=r.Wp.book_new();r.Wp.book_append_sheet(t,e,"Detail Sales");const s=(0,r.M9)(t,{bookType:"xlsx",type:"array"}),a=new Blob([s],{type:"application/octet-stream"});(0,l.saveAs)(a,"DetailSalesData.xlsx")},children:[(0,h.jsx)(i(),{className:"h-5 w-5"}),(0,h.jsx)("span",{children:"EXCEL"})]}),(0,h.jsxs)("button",{className:"border btn-sm border-error text-error rounded-md px-4 py-2 flex items-center space-x-1 hover:bg-error hover:text-white hover:shadow-xl transition duration-200",onClick:()=>{const e=new d.default;e.text("Sales Data",14,10);const t=m.i.map((e=>[e.salesId,e.customerName,e.product,e.unitPrice,e.quantity,e.discount,e.tax,e.subtotal]));e.autoTable({head:[["Sales Id","Customer","Product","Unit Price","Quantity","Discount","Tax","Grand Total"]],body:t,startY:20}),e.save("SalesData.pdf")},children:[(0,h.jsx)(x(),{className:"h-5 w-5"}),(0,h.jsx)("span",{children:"PDF"})]})]})}),(0,h.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mt-8",children:[(0,h.jsx)(w,{title:"Customer Info",details:["Gina Maulinda","gina@gmail.com","0876-5310-2149","Sukodono, Rt-05 RW-01"]}),(0,h.jsx)("div",{className:"md:ml-10",children:(0,h.jsx)(w,{title:"Company Info",details:["DashStack","admin@gmail.com","0876-5310-2149","Surabaya, RS-05 RW-01"]})}),(0,h.jsx)("div",{className:"md:ml-10",children:(0,h.jsx)(w,{title:"Info of Return",details:["Reference: PR_0012","Status: Ordered","Warehouse: Warehouse 2","Payment Status: Unpaid"]})})]}),(0,h.jsx)("div",{className:"mt-8",children:(0,h.jsx)("h3",{className:"font-bold text-lg mb-4",children:"Order Summary"})}),(0,h.jsx)("div",{className:"w-full",children:(0,h.jsxs)("table",{className:"w-full border-collapse border border-gray-300 mb-6",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{className:"bg-gray-200",children:[(0,h.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"#"}),(0,h.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Product"}),(0,h.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Unit Price"}),(0,h.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Quantity"}),(0,h.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Discount"}),(0,h.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Tax"}),(0,h.jsx)("th",{className:"border border-[#D9D9D9] px-4 py-2 text-neutral text-left",children:"Subtotal"})]})}),(0,h.jsx)("tbody",{children:p.map(((e,t)=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:t+1}),(0,h.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.product}),(0,h.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.unitPrice}),(0,h.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.quantity}),(0,h.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.discount}),(0,h.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.tax}),(0,h.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.subtotal})]},e.salesId||t)))})]})}),(0,h.jsx)("div",{className:"flex justify-end mb-6",children:(0,h.jsx)("div",{className:"text-sm text-right w-72",children:(0,h.jsxs)("div",{className:"bg-gray-200 border-t border-b border-black p-2 flex justify-between",children:[(0,h.jsx)("span",{className:"text-sm text-neutral font-bold",children:"Grand Total:"}),(0,h.jsxs)("span",{className:"text-sm text-neutral font-bold",children:["$",D.toFixed(2)]})]})})})]})})}},23183:(e,t,s)=>{s.d(t,{A:()=>P,i:()=>C});var a=s(65043),r=s(79456),l=s(11238),d=s(72450),n=s(37762),c=(s(20557),s(63073)),i=s(16159),o=s(49914),x=s.n(o),m=s(1676),h=s.n(m),u=s(79023),p=s.n(u),b=s(66635),j=s.n(b),y=s(83739),N=s.n(y),f=s(40821),S=s.n(f),g=s(73216),w=s(34479),D=s(38379),v=s(22029),A=(s(89246),s(60921)),k=s(37451),T=s(70579);const C=[{salesId:1,date:"12-12-2024",addedBy:"Cashier",customerName:"Gina Maulinda",warehouse:"Warehouse 1",grandTotal:"1527.00",paid:"1527.00",due:"0.0",orderItems:[{product:"MacBook",unitPrice:"1300.000",quantity:"1.0",discount:"0.00",tax:"0.00",subtotal:"1300.000"},{product:"MacBook",unitPrice:"1300.000",quantity:"1.0",discount:"0.00",tax:"0.00",subtotal:"1300.000"}]},{salesId:2,date:"13-12-2024",addedBy:"Cashier",customerName:"Ahmad Fikri",warehouse:"Warehouse 2",grandTotal:"1038.00",paid:"1038.00",due:"0.0",orderItems:[{product:"MacBook",unitPrice:"1300.000",quantity:"2.0",discount:"0.00",tax:"0.00",subtotal:"2600.000"},{product:"Sunglass",unitPrice:"100.000",quantity:"1.0",discount:"0.00",tax:"0.00",subtotal:"100.000"}]}];const P=function(){const[e]=(0,a.useState)(C),[t,s]=(0,a.useState)(null),o=(0,r.wA)();(0,a.useEffect)((()=>{o((0,A.kM)())}),[]);const[m,u]=(0,a.useState)(""),[b,y]=(0,a.useState)(1),f=C.filter((e=>e.customerName.toLowerCase().includes(m.toLowerCase()))),P=Math.ceil(f.length/10),_=10*b,E=_-10,I=f.slice(E,_),L=(0,g.Zp)(),M=()=>{L("/app/salesdetail")},R=e=>{o((0,v.qf)({title:"Delete",bodyType:k.MODAL_BODY_TYPES.CONFIRMATION,extraObject:{message:"Are you sure you want to delete this data?",type:k.CONFIRMATION_MODAL_CLOSE_TYPES.SALES_DELETE,index:e,onConfirm:()=>O(e)}}))},W=e=>e%5===0?(0,T.jsx)("div",{className:"badge badge-success",children:(0,T.jsx)("span",{className:"text-white px-1",children:"Delivered"})}):e%5===1?(0,T.jsx)("div",{className:"badge bg-gray-500",children:(0,T.jsx)("span",{className:"text-white px-2",children:"Pending"})}):null,O=async e=>{o(R(e)),o((0,D.Ds)({message:"Data deleted successfully!",status:1}))};return(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)(c.A,{title:"All Sales Management",children:[(0,T.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,T.jsx)(i.A,{searchText:m,setSearchText:e=>{u(e),y(1)}}),(0,T.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,T.jsxs)("button",{className:"border btn-sm border-primary text-primary rounded-md px-4 py-2 flex items-center space-x-1 hover:bg-primary hover:text-white hover:shadow-xl transition duration-200",onClick:()=>{o((0,w.cV)({header:"Filters",bodyType:k.RIGHT_DRAWER_TYPES.SALES_FILTER}))},children:[(0,T.jsx)(j(),{className:"h-5 w-5"}),(0,T.jsx)("span",{children:"Filter"})]}),(0,T.jsxs)("button",{className:"border btn-sm border-success text-success rounded-md px-4 py-2 flex items-center space-x-1 hover:bg-success hover:text-white hover:shadow-xl transition duration-200",onClick:()=>{const e=l.Wp.json_to_sheet(C),t=l.Wp.book_new();l.Wp.book_append_sheet(t,e,"All Sales");const s=(0,l.M9)(t,{bookType:"xlsx",type:"array"}),a=new Blob([s],{type:"application/octet-stream"});(0,d.saveAs)(a,"AllSalesData.xlsx")},children:[(0,T.jsx)(N(),{className:"h-5 w-5"}),(0,T.jsx)("span",{children:"EXCEL"})]}),(0,T.jsxs)("button",{className:"border btn-sm border-error text-error rounded-md px-4 py-2 flex items-center space-x-1 hover:bg-error hover:text-white hover:shadow-xl transition duration-200",onClick:()=>{const e=new n.default;e.text("Sales Data",14,10);const t=C.map((e=>[e.date,e.addedBy,e.customerName,e.warehouse,e.grandTotal,e.paid,e.due]));e.autoTable({head:[["Date","Added By","Customer Name","Warehouse","Grand Total","Paid","Due"]],body:t,startY:20}),e.save("AllSalesData.pdf")},children:[(0,T.jsx)(S(),{className:"h-5 w-5"}),(0,T.jsx)("span",{children:"PDF"})]})]})]}),(0,T.jsx)("div",{className:"w-full",children:(0,T.jsxs)("table",{className:"table w-full table-auto",children:[(0,T.jsx)("thead",{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)("th",{className:"text-center text-primary text-base",children:"Date"}),(0,T.jsx)("th",{className:"text-center text-primary text-base",children:"Added By"}),(0,T.jsx)("th",{className:"text-center text-primary text-base",children:"Customer"}),(0,T.jsx)("th",{className:"text-center text-primary text-base",children:"Warehouse"}),(0,T.jsx)("th",{className:"text-center text-primary text-base",children:"Grand Total"}),(0,T.jsx)("th",{className:"text-center text-primary text-base",children:"Paid"}),(0,T.jsx)("th",{className:"text-center text-primary text-base",children:"Due"}),(0,T.jsx)("th",{className:"text-center text-primary text-base",children:"Status"}),(0,T.jsx)("th",{className:"text-center text-primary text-base",children:"Action"})]})}),(0,T.jsx)("tbody",{children:I.map(((e,a)=>(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{className:"text-center",children:e.date}),(0,T.jsx)("td",{className:"text-center",children:e.addedBy}),(0,T.jsx)("td",{className:"text-center",children:e.customerName}),(0,T.jsx)("td",{className:"text-center",children:e.warehouse}),(0,T.jsx)("td",{className:"text-center",children:e.grandTotal}),(0,T.jsx)("td",{className:"text-center",children:e.paid}),(0,T.jsx)("td",{className:"text-center",children:e.due}),(0,T.jsx)("td",{className:"text-center",children:W(a)}),(0,T.jsx)("td",{children:(0,T.jsxs)("div",{className:"dropdown dropdown-end ml-4",children:[(0,T.jsx)("button",{onClick:()=>(e=>{s(t===e?null:e)})(a),children:(0,T.jsx)(x(),{className:"h-6 w-6"})}),(0,T.jsxs)("ul",{tabIndex:0,className:"menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-30 z-50",children:[(0,T.jsxs)("div",{className:"flex items-center ml-2",children:[(0,T.jsx)(h(),{className:"h-5 w-5 inline-block"}),(0,T.jsx)("li",{onClick:M,children:(0,T.jsx)("span",{children:"View"})})]}),(0,T.jsxs)("div",{className:"flex items-center ml-2",children:[(0,T.jsx)(p(),{className:"h-5 w-5 inline-block"}),(0,T.jsx)("li",{onClick:()=>R(a),children:(0,T.jsx)("span",{children:"Delete"})})]})]})]})})]},a)))})]})}),(0,T.jsxs)("div",{className:"flex justify-between items-center mt-5 mx-5 space-x-4",children:[(0,T.jsxs)("span",{className:"text-sm text-gray-500",children:["Rows Per Page ",(0,T.jsx)("span",{className:"font-bold text-primary",children:10})]}),(0,T.jsxs)("div",{className:"flex justify-end items-center space-x-4",children:[(0,T.jsxs)("span",{className:"text-sm text-gray-500",children:["Page ",(0,T.jsx)("span",{className:"font-bold text-primary",children:b})," of ",(0,T.jsx)("span",{className:"font-bold text-primary",children:P})]}),(0,T.jsx)("div",{className:"join",children:Array.from({length:P},((e,t)=>(0,T.jsx)("button",{className:"join-item btn btn-sm "+(b===t+1?"btn-primary btn-active":""),onClick:()=>y(t+1),children:t+1},t+1)))})]})]})]})})}},60921:(e,t,s)=>{s.d(t,{kM:()=>l});var a=s(8223),r=s(86213);const l=(0,a.zD)("/Users/content",(async()=>(await r.A.get("/api/users?page=1",{})).data)),d=(0,a.Z0)({name:"Sale",initialState:{isLoading:!1,Sales:[]},reducers:{addNewSales:(e,t)=>{const{newSalesObj:s}=t.payload;e.Sales=[...e.Sales,s]},deleteSales:(e,t)=>{const{index:s}=t.payload;e.Sales.splice(s,1)},editSales:(e,t)=>{const{index:s,updatedSaleObj:a}=t.payload;e.Sales[s]={...e.Sales[s],...a}}},extraReducers:{[l.pending]:e=>{e.isLoading=!0},[l.fulfilled]:(e,t)=>{e.Sales=t.payload.data,e.isLoading=!1},[l.rejected]:e=>{e.isLoading=!1}}}),{addNewSales:n,deleteSales:c,editSale:i}=d.actions;d.reducer},15857:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var a=s(65043),r=s(79456),l=s(38379),d=s(23183),n=s(70579);const c=function(){const e=(0,r.wA)();return(0,a.useEffect)((()=>{e((0,l.wE)({title:"All Sales"}))}),[]),(0,n.jsx)(d.A,{})}}}]);
//# sourceMappingURL=5857.0aec53a0.chunk.js.map