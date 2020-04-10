(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{42:function(e,t,a){e.exports=a(80)},47:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){e.exports=a.p+"static/media/shopping-cart.b55d9130.jfif"},77:function(e,t,a){},78:function(e){e.exports=JSON.parse("{}")},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),l=(a(47),a(4)),i=a(5),s=a(7),u=a(6),m=a(8),p=a(9),d=a(3),E=a(17),f=function(){return r.a.createElement("div",{className:"main-home"},r.a.createElement("h1",null,"Discover our wide range of ",r.a.createElement(d.b,{to:"/products"},"Products")))},h=a(2),g=a(10),v=a.n(g),y="http://192.168.1.5:8080",b=sessionStorage.getItem("token"),O="Bearer ".concat(b);var I=sessionStorage.getItem("token"),N="Bearer ".concat(I);function T(e){return function(t){t({type:"ADD_ITEM_TO_CART",payload:e})}}a(70);var j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).productDetailedView=function(e){console.log(e),a.props.history.push("/product-view/".concat(e))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getAllProducts()}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props.productsList.products;return r.a.createElement("div",{className:"prod-main-container"},r.a.createElement("div",{className:"list"},t.map((function(t,a){return r.a.createElement("div",{className:"prod-first",key:t._id},r.a.createElement("div",null,r.a.createElement(d.b,{to:"/product-view/".concat(t.productID)},r.a.createElement("img",{src:t.imgUrl,className:"img-fluid",alt:""}))),r.a.createElement("div",{className:"prod-second"},r.a.createElement("h5",null,t.name),r.a.createElement("div",{className:"price-tag"},"\u20b9 ",t.price),r.a.createElement("div",{className:"cart-btn",onClick:function(){return e.props.addItemToCart(t)}},"Add to Cart")))}))," "))}}]),t}(r.a.Component),S=Object(p.b)((function(e){return Object(h.a)({},e)}),(function(e){return{addItemToCart:function(t){return e(T(t))},getAllProducts:function(){return e((function(e){e({type:"REQUEST_LOADING"}),v.a.get(y+"/api/products/getAllProducts",{headers:{Authorization:N,"Content-Type":"application/json"}}).then((function(t){var a;e({type:"REQUEST_SUCC"}),e((a=t.data,function(e){e({type:"STORE_PRODUCTS",payload:a})}))})).catch((function(t){return console.log(t),e({type:"ERROR"}),t.data}))}))}}}))(j),R=(a(71),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).incrementQnty=function(e){if(!(e.quantity>=0))return null;a.props.increamentQuantity(e.productID)},a.decrementQnty=function(e){if(0===e.quantity)return null;a.props.decrementQuantity(e.productID)},a.ordetItems=function(){var e={userID:JSON.parse(sessionStorage.getItem("user")).id,products:a.props.selectedItems,grandTotal:a.props.grandTotal,totalQnty:a.props.totalQuantity};a.props.orderItems(e),a.props.history.push("/my-profile/my-orders")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"updateQnty",value:function(e,t){console.log(e.target.value);var a=e.target.value;this.props.updateQuantity(a,t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"cart-page"},r.a.createElement("div",{className:"cart-body"},r.a.createElement("p",{className:"total-price-qnty"},"Grand Total & Quantity : \u20b9 ",this.props.grandTotal," & ",this.props.totalQuantity),r.a.createElement("div",{className:"col-12"},r.a.createElement("table",{className:"table table-image"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Product ID"),r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{scope:"col"},"Product Name"),r.a.createElement("th",{scope:"col"},"Quantity"),r.a.createElement("th",{scope:"col"},"Price/Each"),r.a.createElement("th",{scope:"col"},"Total"))),r.a.createElement("tbody",null,this.props.selectedItems.map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},t.productID),r.a.createElement("td",{className:"w-25"},r.a.createElement(d.b,{to:"/product-view/".concat(t.productID)},r.a.createElement("img",{src:t.imgUrl,className:"img-fluid cart-image-width img-thumbnail",alt:t.name}))),r.a.createElement("td",null,t.name),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.incrementQnty(t)}},"+"),t.quantity,r.a.createElement("button",{onClick:function(){return e.decrementQnty(t)}},"-")),r.a.createElement("td",null,"\u20b9 ",t.price),r.a.createElement("td",null,"\u20b9 ",t.itemTotalPrice))})))),r.a.createElement("button",{className:"my-btn",onClick:this.ordetItems},"Buy Now"))))}}]),t}(r.a.Component)),C=Object(p.b)((function(e){return{selectedItems:e.cartList.selectedItems,grandTotal:e.cartList.grandTotal,totalQuantity:e.cartList.totalQuantity}}),(function(e){return{updateQuantity:function(){return e((function(e){e({type:"UPDATE_QUANTITY",newQuantity:t,productID:a})}));var t,a},decrementQuantity:function(t){return e((a=t,function(e){e({type:"DECR_QUANTITY",productID:a})}));var a},increamentQuantity:function(t){return e((a=t,function(e){e({type:"INCR_QUANTITY",productID:a})}));var a},orderItems:function(t){return e(function(e){return function(t){t({type:"REQUEST_LOADING"}),v.a.post(y+"/api/products/orderItems",e,{headers:{Authorization:N,"Content-Type":"application/json"}}).then((function(e){t({type:"REQUEST_SUCC"}),t((function(e){e({type:"CLEAR_CART"})}))})).catch((function(e){return console.log(e),t({type:"ERROR"}),e.data}))}}(t))}}}))(R),D=a(39),w=a.n(D),U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).inputHandler=function(e){var t=e.currentTarget.name,n=e.target.value;a.setState((function(e){e.loginForm[t]=n}))},a.authenticateUser=function(e){e.preventDefault(),v.a.post(y+"/api/auth/signin",a.state.loginForm,{}).then((function(e){console.log(e),e.data.accessToken?(sessionStorage.setItem("token",e.data.accessToken),sessionStorage.setItem("user",JSON.stringify(e.data.userPrincipal)),a.props.login(e.data.accessToken),a.props.history.push("/products")):alert("Login failed")})).catch((function(e){console.log(e)}))},a.state={loginForm:{usernameOrEmail:"",password:""}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"signup",value:function(e){var t={Name:e.profileObj.name,email:e.profileObj.email,token:e.googleId,Image:e.profileObj.imageUrl,ProviderId:"Google"};console.log(t),this.props.history.push("/products")}},{key:"render",value:function(){var e=this,t=function(t){console.log(t);var a=t.profileObj;console.log(a),e.signup(t)};return r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"google-sign-in-btn"},r.a.createElement(w.a,{clientId:"464944719379-h84i67v34o9ivp8h49np2htm96bjsj08.apps.googleusercontent.com",buttonText:"Login with Google",onSuccess:t,onFailure:t})),r.a.createElement("div",{className:"from-wrap"},r.a.createElement("h1",null,"Log In"),r.a.createElement("p",null,"To access your services"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username or Email"),r.a.createElement("input",{type:"text",name:"usernameOrEmail",className:"form-control",onChange:this.inputHandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",className:"form-control",onChange:this.inputHandler})),r.a.createElement("button",{className:"my-btn",onClick:this.authenticateUser},"Log In"),r.a.createElement("p",{className:"align -left"},"Don't have an account?",r.a.createElement(d.b,{to:"/signup"},"Sign Up")))))}}]),t}(r.a.Component),_={login:function(e){return{type:"LOGIN",payload:e}}},Q=Object(p.b)((function(e){return{isAuth:e.auth.isAuth}}),_)(U),k=(a(72),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.productId;this.props.getProductByID(e)}},{key:"render",value:function(){var e=this,t=this.props.match.params.productId,a=this.props.viewList;return r.a.createElement("div",{className:"prd-view-container"},r.a.createElement("div",{className:"prod-details"},a.map((function(a){if(a.productID==t)return r.a.createElement("div",{className:"item-body"},r.a.createElement("div",{className:"prd-pic"},r.a.createElement("img",{className:"card-img-top",src:a.imgUrl,alt:"Shoes"})),r.a.createElement("div",{className:"prd-spec"},r.a.createElement("h5",{className:"card-title"},a.name),r.a.createElement("div",{className:"card-text"},"Price : \u20b9 ",a.price),r.a.createElement("div",{className:"card-text"},"Brand : ",a.brand),r.a.createElement("div",{className:"card-text"},"Made in : ",a.make),r.a.createElement("div",{className:"card-text"},"Remarks : ",a.remarks),r.a.createElement("div",{className:"view-cart-btn",onClick:function(){return e.props.addItemToCart(a)}},"Add to Cart")))}))))}}]),t}(r.a.Component)),A=Object(p.b)((function(e){return Object(h.a)({},e,{viewList:e.productsList.viewList,loading:e.loadingReducer})}),(function(e){return{addItemToCart:function(t){return e(T(t))},getProductByID:function(t){return e(function(e){return function(t){t({type:"REQUEST_LOADING"}),v.a.get(y+"/api/products/getById/"+e,{headers:{Authorization:O,"Content-Type":"application/json"}}).then((function(e){var a;t((a=e.data[0],function(e){e({type:"INSERT_VIEWED_ITEM",payload:a})})),t({type:"REQUEST_SUCC"})})).catch((function(e){return console.log(e),t({type:"ERROR"}),e.data}))}}(t))}}}))(k),P=sessionStorage.getItem("token"),L=JSON.parse(sessionStorage.getItem("user")),q="Bearer ".concat(P);a(73);var G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).inputHandler=function(e){var t=e.currentTarget.name,n=e.target.value;console.log(t,n),a.setState((function(e){e.userInfo[t]=n}))},a.updateProfile=function(e){var t={name:"Arepalli Praveenkumar",phoneNo:784512369,userID:JSON.parse(sessionStorage.getItem("user")).id};e.preventDefault(),a.props.saveUserProfile(t),console.log(a.state.userInfo,a.state.token)},a.state={userInfo:{phoneNo:"",name:"",email:"",username:""},token:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(){return console.log(this.state),!0}},{key:"componentDidMount",value:function(){var e=this.props.getUserInfo();console.log(e)}},{key:"render",value:function(){var e=this.props.userInfy,t=e.name,a=(e.email,e.username,e.phoneNo),n=this.props.loading?r.a.createElement("div",null,"...Loading"):r.a.createElement("div",{className:"profile-from-wrap"},r.a.createElement("h1",null,"Profile Information"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Full Name"),r.a.createElement("input",{type:"text",name:"name",placeholder:"full name",onChange:this.inputHandler,value:t})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Phone Number"),r.a.createElement("input",{type:"text",name:"phoneNo",placeholder:"phone no",className:"form-control",onChange:this.inputHandler,value:a})),r.a.createElement("button",{className:"my-btn",onClick:this.updateProfile},"Update Profile")));return r.a.createElement("div",{className:""},r.a.createElement("div",{className:""},n))}}]),t}(r.a.Component),x=Object(p.b)((function(e){return{loading:e.loadingReducer.loading,userInfy:e.userProfile.userInfo}}),(function(e){return console.log(e),{saveUserProfile:function(t){return e((a=t,function(e){e({type:"REQUEST_LOADING"}),v.a.post(y+"/api/users/saveUser",a,{headers:{Authorization:q,"Content-Type":"application/json"}}).then((function(t){e({type:"SAVE_USER_PROFILE",payload:t.data}),e({type:"REQUEST_SUCC"})})).catch((function(t){return console.log(t),e({type:"ERROR"}),t.data}))}));var a},getUserInfo:function(){return e((function(e){e({type:"REQUEST_LOADING"}),v.a.get(y+"/api/users/"+L.username,{headers:{Authorization:q,"Content-Type":"application/json"}}).then((function(t){return e({type:"SAVE_USER_PROFILE",payload:t.data}),console.log(t),e({type:"REQUEST_SUCC"}),t.data})).catch((function(t){return console.log(t),e({type:"ERROR"}),t.data}))}))}}}))(G),F=sessionStorage.getItem("token"),H=JSON.parse(sessionStorage.getItem("user")),M="Bearer ".concat(F);console.log(H);a(74);var B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).formatDate=function(e){return new Date(e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.myOrders()}},{key:"render",value:function(){return r.a.createElement("div",{classNameName:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",null,"Your Orders"))),r.a.createElement("div",{className:"col-12"},this.props.orderedList.map((function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},"Purchase Date : ",e.purchaseDate),r.a.createElement("div",{className:"row"},r.a.createElement("table",{className:"table table-image"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Image"),r.a.createElement("th",null,"Product Name"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price/Each"),r.a.createElement("th",null,"Total"))),e.products.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},e.productID),r.a.createElement("td",{className:"w-25"},r.a.createElement(d.b,{to:"/product-view/".concat(e.productID)},r.a.createElement("img",{src:e.imgUrl,className:"img-fluid cart-image-width img-thumbnail",alt:e.name}))),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,"\u20b9 ",e.price),r.a.createElement("td",null,"\u20b9 ",e.itemTotalPrice))})))))})))))}}]),t}(r.a.Component),V=Object(p.b)((function(e){return{orderedList:e.orders.orderedList}}),(function(e){return{myOrders:function(){return e((function(e){e({type:"REQUEST_LOADING"}),v.a.get(y+"/api/products/myOrders/"+H.id,{headers:{Authorization:M,"Content-Type":"application/json"}}).then((function(t){var a;e((a=t.data,function(e){e({type:"SAVE_ORDERS",payload:a})})),e({type:"REQUEST_SUCC"}),console.log(t)})).catch((function(t){return console.log(t),e({type:"ERROR"}),t.data}))}))}}}))(B);a(75);var Y=function(){return r.a.createElement("div",{className:"profile-page"},r.a.createElement("ul",{className:"profile-side-nav"},r.a.createElement("li",null,r.a.createElement(d.b,{to:"/my-profile/user-profile"},"User Profile")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/my-profile/my-orders"},"My Orders"))),r.a.createElement("div",{className:"profile-main-body"},r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/my-profile/user-profile",component:x}),r.a.createElement(E.a,{path:"/my-profile/my-orders",component:V}))))},J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).createAccount=function(e){e.preventDefault(),v.a.post(y+"/api/auth/signup",a.state.singUpForm).then((function(e){console.log(e),!0===e.data.success?a.props.history.push("/login"):!1===e.data.success&&console.log(e.data.message)})).catch((function(e){console.log(e)}))},a.inputHandler=function(e){var t=e.currentTarget.name,n=e.target.value;a.setState((function(e){e.singUpForm[t]=n}))},a.state={singUpForm:{name:"",email:"",username:"",password:""}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"main-container"},r.a.createElement("div",{className:"from-wrap"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("p",null,"Get started with your free account"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Full Name"),r.a.createElement("input",{name:"name",type:"text",onChange:this.inputHandler,placeholder:"Full name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{name:"email",className:"form-control",onChange:this.inputHandler,placeholder:"Email address",type:"email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{name:"username",className:"form-control",onChange:this.inputHandler,placeholder:"Enter username",type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",className:"form-control",onChange:this.inputHandler,placeholder:"Create password",type:"password"})),r.a.createElement("button",{className:"my-btn",onClick:this.createAccount},"Create Account"),r.a.createElement("p",{className:"align -left"},"Have an account?",r.a.createElement(d.b,{to:"/login"},"Log In")))))}}]),t}(r.a.Component),z=(a(76),a(77),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).logoutSession=function(){sessionStorage.removeItem("token"),a.props.logout(null)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){console.log("/shopping-cart");var e=sessionStorage.getItem("token");console.log(e);return r.a.createElement(d.a,{basename:"/shopping-cart"},r.a.createElement("nav",{className:"routing"},e?r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(d.b,{to:"/home",className:"nav-link"},"Shopping Cart")),r.a.createElement("ul",{className:"before-sign-in"},r.a.createElement("li",null,r.a.createElement(d.b,{to:"/home",className:"nav-link"},"Home")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/products",className:"nav-link"},"Products")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/my-profile/user-profile",className:"nav-link"},"My Profile")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/cart",className:"nav-link"},"Cart (",this.props.totalQuantity,")")),r.a.createElement("li",null,r.a.createElement("input",{type:"submit",className:"logout-btn",value:"Logout",onClick:this.logoutSession})))):r.a.createElement("ul",{className:"before-sign-in"},r.a.createElement("li",null,r.a.createElement(d.b,{to:"/login",className:"nav-link"},"Login")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/signup",className:"nav-link"},"Sign Up")))),r.a.createElement("div",{className:"routesview"},e?r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/cart",component:C}),r.a.createElement(E.a,{path:"/products",component:S}),r.a.createElement(E.a,{path:"/my-profile",component:Y}),r.a.createElement(E.a,{path:"/login",component:Q}),r.a.createElement(E.a,{path:"/product-view/:productId",component:A}),r.a.createElement(E.a,{path:"/home",component:f})):r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/login",component:Q}),r.a.createElement(E.a,{path:"/signup",component:J}),r.a.createElement(E.a,{path:"/",component:Q}))))}}]),t}(r.a.Component)),W={logout:function(){return{type:"LOGOUT",payload:!1}}},X=Object(p.b)((function(e){return{totalQuantity:e.cartList.totalQuantity,isAuth:e.auth.isAuth}}),W)(z),$=a(16),K=a(40),Z=a(41),ee=a(22),te=(a(78),{products:[],viewList:[]}),ae={selectedItems:[],grandTotal:0,totalQuantity:0},ne={userInfo:{}},re={name:"",isAuth:!1},oe={loading:!1,response:!1,error:!1},ce={orderedList:[]},le=Object($.combineReducers)({productsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS_LIST":case"GET_PRODUCT_BY_ID":return e;case"STORE_PRODUCTS":return Object(h.a)({},e,{products:t.payload});case"INSERT_VIEWED_ITEM":return Object(h.a)({},e,{viewList:[].concat(Object(ee.a)(e.viewList),[t.payload])});default:return e}},cartList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM_TO_CART":var a=t.payload,n=e.selectedItems.find((function(e){return e.productID===a.productID}));if(n){n.quantity+=1,n.itemTotalPrice=n.quantity*n.price;var r=e.grandTotal+n.price,o=e.totalQuantity+1;return Object(h.a)({},e,{grandTotal:r,totalQuantity:o})}console.log(a,t.payload),a.quantity=1,a.itemTotalPrice=a.quantity*a.price;var c=e.grandTotal+a.price,l=e.totalQuantity+1;return Object(h.a)({},e,{selectedItems:[].concat(Object(ee.a)(e.selectedItems),[a]),grandTotal:c,totalQuantity:l});case"UPDATE_QUANTITY":var i=e.selectedItems.find((function(e){return e.productID===t.productID}));i.quantity=parseInt(t.newQuantity),i.itemTotalPrice=i.quantity*i.price;var s=e.selectedItems.reduce((function(e,t){return e+parseInt(t.itemTotalPrice)}),0),u=e.selectedItems.reduce((function(e,t){return e+parseInt(t.quantity)}),0);return Object(h.a)({},e,{totalQuantity:u,grandTotal:s});case"INCR_QUANTITY":var m=e.selectedItems.find((function(e){return e.productID===t.productID}));console.log(m),m.quantity=parseInt(m.quantity+1),m.itemTotalPrice=m.quantity*m.price;var p=e.grandTotal+m.price;return Object(h.a)({},e,{totalQuantity:e.totalQuantity+1,grandTotal:p});case"DECR_QUANTITY":var d=e.selectedItems.find((function(e){return e.productID===t.productID}));d.quantity=parseInt(d.quantity-1),d.itemTotalPrice=d.quantity*d.price;var E=e.grandTotal-d.price;return Object(h.a)({},e,{totalQuantity:e.totalQuantity-1,grandTotal:E});case"CLEAR_CART":return{grandTotal:0,totalQuantity:0,selectedItems:[]};default:return e}},userProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_USER_PROFILE":return Object(h.a)({},e,{userInfo:t.payload});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":case"LOGOUT":return Object(h.a)({},e,{isAuth:t.payload});case"SIGNUP":default:return e}},loadingReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_LOADING":return Object(h.a)({},e,{loading:!0,error:!1});case"REQUEST_SUCC":return Object(h.a)({},e,{loading:!1,error:!1});case"ERROR":return Object(h.a)({},e,{loading:!1,error:!0});default:return e}},orders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MY_ORDERS":return Object(h.a)({},e);case"SAVE_ORDERS":return Object(h.a)({},e,{orderedList:t.payload});default:return e}}}),ie=(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()||$.compose,Object($.createStore)(le,Object(Z.composeWithDevTools)(Object($.applyMiddleware)(K.a)))),se=(a(79),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:ie},r.a.createElement("div",{className:"App"},r.a.createElement(X,null)))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.70e5d907.chunk.js.map