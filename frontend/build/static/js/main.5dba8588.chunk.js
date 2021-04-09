(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},59:function(e,t,c){},81:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(18),a=c.n(n),s=(c(52),c(26)),i=(c(53),c(6)),o=c(3),l=(c(54),c(7)),j=(c(59),c(1));var d=function(e){var t=e.imageUrl,c=e.name,r=e.price,n=e.description,a=e.productId;return Object(j.jsxs)("div",{className:"product",children:[Object(j.jsx)("img",{src:t,alt:c}),Object(j.jsxs)("div",{className:"product_info",children:[Object(j.jsxs)("p",{className:"info_name",children:[" ",c," "]}),Object(j.jsxs)("p",{className:"info_description",children:[" ",n.substring(0,100),"..."]}),Object(j.jsxs)("p",{className:"info_price",children:[" $",r," "]}),Object(j.jsx)(i.b,{to:"/product/".concat(a),className:"info_button",children:"View"})]})]})},u=c(14),b=c.n(u),p=c(21),O="GET_PRODUCTS_REQUEST",h="GET_PRODUCTS_SUCCESS",m="GET_PRODUCTS_FAIL",x="GET_PRODUCT_DETAILS_REQUEST",f="GET_PRODUCT_DETAILS_SUCCESS",v="GET_PRODUCT_DETAILS_FAIL",g="GET_PRODUCT_DETAILS_RESET",_=c(22),y=c.n(_),N=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.getProducts})),c=t.products,n=t.loading,a=t.error;return Object(r.useEffect)((function(){e(function(){var e=Object(p.a)(b.a.mark((function e(t){var c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:O}),e.next=4,y.a.get("https://sleepy-crag-69552.herokuapp.com/api/products");case 4:c=e.sent,r=c.data,t({type:h,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:m,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(j.jsxs)("div",{className:"homescreen",children:[Object(j.jsx)("h2",{className:"homescreen_title",children:"Latest Products"}),Object(j.jsx)("div",{className:"homescreen_products",children:n?Object(j.jsx)("div",{class:"centerdiv",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{})]})}):a?Object(j.jsx)("h2",{children:a}):c.map((function(e){return Object(j.jsx)(d,{name:e.name,description:e.description,price:e.price,imageUrl:e.imageUrl,productId:e._id},e._id)}))})]})},k=c(19),S=(c(81),c(44)),I=c.n(S),C=function(e){var t=e.item,c=e.qtyChangeHandler,r=e.removeHandler;return Object(j.jsxs)("div",{className:"cartitem",children:[Object(j.jsx)("div",{className:"cartitem_img",children:Object(j.jsx)("img",{src:t.imageUrl,alt:t.name})}),Object(j.jsx)(i.b,{to:"/product/".concat(t.product),className:"cartitem_name",children:Object(j.jsx)("p",{children:t.name})}),Object(j.jsxs)("p",{className:"cartitem_price",children:["$",t.price," "]}),Object(j.jsx)("select",{className:"cartitem_select",value:t.qty,onChange:function(e){return c(t.product,e.target.value)},children:Object(k.a)(Array(t.countInStock).keys()).map((function(e){return Object(j.jsxs)("option",{value:e+1,children:[" ",e+1," "]},e+1)}))}),Object(j.jsx)("button",{className:"cartitem_delete",children:Object(j.jsx)(I.a,{onClick:function(){return r(t.product)}})})]})},T=(c(83),"ADD_TO_CART"),E="REMOVE_FROM_CART",w=function(e,t){return function(){var c=Object(p.a)(b.a.mark((function c(r,n){var a,s;return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,y.a.get("https://sleepy-crag-69552.herokuapp.com/".concat(e));case 2:a=c.sent,s=a.data,r({type:T,payload:{product:s._id,name:s.name,imageUrl:s.imageUrl,price:s.price,countInStock:s.countInStock,qty:t}}),localStorage.setItem("cart",JSON.stringify(n().cart.cartItems));case 6:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()};var D=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.cart})).cartItems,c=function(t,c){e(w(t,c))},r=function(t){e(function(e){return function(t,c){t({type:E,payload:e}),localStorage.setItem("cart",JSON.stringify(c().cart.cartItems))}}(t))};return Object(j.jsxs)("div",{className:"cartscreen",children:[Object(j.jsxs)("div",{className:"cartscreen_left",children:[Object(j.jsx)("h2",{children:"Shopping Cart"}),0===t.length?Object(j.jsxs)("div",{children:["Your Cart Is Empty ",Object(j.jsx)(i.b,{to:"/",children:" Go Back "})]}):t.map((function(e){return Object(j.jsx)(C,{item:e,qtyChangeHandler:c,removeHandler:r},e.product)}))]}),Object(j.jsxs)("div",{className:"cartscreen_right",children:[Object(j.jsxs)("div",{className:"cartscreen_info",children:[Object(j.jsxs)("p",{children:["Subtotal (",t.reduce((function(e,t){return Number(t.qty)+e}),0),") items"]}),Object(j.jsxs)("p",{children:["$",t.reduce((function(e,t){return t.price*t.qty+e}),0).toFixed(2)]})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Proceed To Checkout"})})]})]})};c(84);var U=function(e){var t=e.match,c=e.history,n=Object(r.useState)(1),a=Object(s.a)(n,2),i=a[0],o=a[1],d=Object(l.b)(),u=Object(l.c)((function(e){return e.getProductDetails})),O=u.loading,h=u.error,m=u.product;return Object(r.useEffect)((function(){var e;m&&t.params.id!==m._id&&d((e=t.params.id,function(){var t=Object(p.a)(b.a.mark((function t(c){var r,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:x}),t.next=4,y.a.get("https://sleepy-crag-69552.herokuapp.com/api/products/".concat(e));case 4:r=t.sent,n=r.data,c({type:f,payload:n}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({type:v,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[d,t,m]),Object(j.jsx)("div",{className:"productscreen",children:O?Object(j.jsx)("div",{class:"centerdiv",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{})]})}):h?Object(j.jsxs)("h2",{children:[" ",h," "]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"productscreen_left",children:[Object(j.jsx)("div",{className:"left_img",children:Object(j.jsx)("img",{src:m.imageUrl,alt:m.name})}),Object(j.jsxs)("div",{className:"left_info",children:[Object(j.jsx)("p",{className:"left_name",children:m.name}),Object(j.jsxs)("p",{children:["Price: $",m.price]}),Object(j.jsxs)("p",{children:["Description: ",m.description]})]})]}),Object(j.jsx)("div",{className:"productscreen_right",children:Object(j.jsxs)("div",{className:"right_info",children:[Object(j.jsxs)("p",{children:["Price: ",Object(j.jsxs)("span",{children:["$",m.price]})]}),Object(j.jsxs)("p",{children:["Status: ",Object(j.jsxs)("span",{children:[" ",m.countInStock>0?"In Stock":"Out of Stock"," "]})]}),Object(j.jsxs)("p",{children:["Quantity",Object(j.jsx)("select",{value:i,onChange:function(e){return o(e.target.value)},children:Object(k.a)(Array(m.countInStock).keys()).map((function(e){return Object(j.jsxs)("option",{value:e+1,children:[" ",e+1," "]},e+1)}))})]}),Object(j.jsx)("p",{children:Object(j.jsx)("button",{onClick:function(){d(w(m._id,i)),c.push("/cart")},children:"Add To Cart"})})]})})]})})},P=(c(85),c(25)),R=c.n(P);var A=function(e){var t=e.click,c=Object(l.c)((function(e){return e.cart})).cartItems;return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)(i.b,{to:"/",className:"logo_link",children:Object(j.jsx)("div",{className:"navbar_logo",children:Object(j.jsx)("h2",{children:"Ecomm Store"})})}),Object(j.jsxs)("ul",{className:"navbar_links",children:[Object(j.jsx)("li",{children:Object(j.jsxs)(i.b,{to:"/cart",className:"cart_link",children:[Object(j.jsx)(R.a,{}),Object(j.jsxs)("span",{children:["Cart",Object(j.jsx)("div",{className:"cartlogo_badge",children:c.reduce((function(e,t){return e+Number(t.qty)}),0)})]})]})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/",children:"Shop"})})]}),Object(j.jsxs)("div",{className:"hamburger_menu",onClick:t,children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})]})};c(86);var F=function(e){var t=e.show,c=e.click;return t&&Object(j.jsx)("div",{className:"backdrop",onClick:c,children:Object(j.jsx)("ul",{className:"sidedrawer",onClick:c})})};c(87);var L=function(e){var t=e.show,c=e.click,r=["sidedrawer"];t&&r.push("show");var n=Object(l.c)((function(e){return e.cart})).cartItems;return Object(j.jsx)("div",{className:r.join(" "),children:Object(j.jsxs)("ul",{className:"sidedrawer_links",onClick:c,children:[Object(j.jsx)("li",{children:Object(j.jsxs)(i.b,{to:"/cart",className:"link",children:[Object(j.jsx)(R.a,{}),"Cart",Object(j.jsx)("span",{className:"sidedrawer_cartbadge",children:n.reduce((function(e,t){return e+Number(t.qty)}),0)})]})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/",className:"link",children:"Shop"})})]})})};var q=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(j.jsxs)(i.a,{children:[Object(j.jsx)(A,{click:function(){return n(!0)}}),Object(j.jsx)(F,{show:c,click:function(){return n(!1)}}),Object(j.jsx)(L,{show:c,click:function(){return n(!1)}}),Object(j.jsx)("main",{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:N}),Object(j.jsx)(o.a,{exact:!0,path:"/product/:id",component:U}),Object(j.jsx)(o.a,{exact:!0,path:"/cart",component:D})]})})]})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,101)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))},J=c(16),$=c(45),H=c(46),B=c(17),M={cartItems:[]},Q=Object(J.combineReducers)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:var c=t.payload,r=e.cartItems.find((function(e){return e.product===c.product}));return r?Object(B.a)(Object(B.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===r.product?c:e}))}):Object(B.a)(Object(B.a)({},e),{},{cartItems:[].concat(Object(k.a)(e.cartItems),[c])});case E:return Object(B.a)(Object(B.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});default:return e}},getProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{loading:!0,products:[]};case h:return{products:t.payload,loading:!1};case m:return{loading:!1,error:t.payload};default:return e}},getProductDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{loading:!0};case f:return{loading:!1,product:t.payload};case v:return{loading:!1,error:t.payload};case g:return{product:{}};default:return e}}}),V=[$.a],W={cart:{cartItems:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}},Y=Object(J.createStore)(Q,W,Object(H.composeWithDevTools)(J.applyMiddleware.apply(void 0,V)));a.a.render(Object(j.jsx)(l.a,{store:Y,children:Object(j.jsx)(q,{})}),document.getElementById("root")),G()}},[[89,1,2]]]);
//# sourceMappingURL=main.5dba8588.chunk.js.map