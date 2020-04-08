(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{41:function(e,t,a){e.exports=a.p+"static/media/shopping-cart.b55d9130.jfif"},44:function(e,t,a){e.exports=a(81)},49:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e){e.exports=JSON.parse("{}")},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),l=(a(49),a(4)),s=a(5),i=a(7),u=a(6),m=a(8),p=a(9),d=a(3),E=a(17),f=(a(20),function(){return r.a.createElement("h1",null,"Please visit ",r.a.createElement(d.b,{to:"/products"},"Products")," page to buy world class items")}),g=a(2),h=a(10),v=a.n(h),y="http://192.168.1.5:8080",b=sessionStorage.getItem("token"),N="Bearer ".concat(b);var O=sessionStorage.getItem("token"),I="Bearer ".concat(O);function T(e){return function(t){t({type:"ADD_ITEM_TO_CART",payload:e})}}a(72);var j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).productDetailedView=function(e){console.log(e),a.props.history.push("/product-view/".concat(e))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getAllProducts()}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props.productsList.products;return r.a.createElement("div",{class:"container page-top"},r.a.createElement("div",{class:"row"},t.map((function(t,a){return r.a.createElement("div",{class:"col-lg-3 col-md-4 col-xs-6 thumb",key:a},r.a.createElement(d.b,{to:"/product-view/".concat(t.productID)},r.a.createElement("img",{src:t.imgUrl,class:"zoom img-fluid ",alt:""})),r.a.createElement("div",{className:"card-body product-card-body"},r.a.createElement("h5",{className:"card-title"},t.name),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col"},r.a.createElement("p",{class:"btn btn-danger btn-block"},"Rs ",t.price)),r.a.createElement("div",{class:"col"},r.a.createElement("div",{className:"btn btn-primary",onClick:function(){return e.props.addItemToCart(t)}},"Add to Cart")))))}))))}}]),t}(r.a.Component),k=Object(p.b)((function(e){return Object(g.a)({},e)}),(function(e){return{addItemToCart:function(t){return e(T(t))},getAllProducts:function(){return e((function(e){e({type:"REQUEST_LOADING"}),v.a.get(y+"/api/products/getAllProducts",{headers:{Authorization:I,"Content-Type":"application/json"}}).then((function(t){var a;e({type:"REQUEST_SUCC"}),e((a=t.data,function(e){e({type:"STORE_PRODUCTS",payload:a})}))})).catch((function(t){return console.log(t),e({type:"ERROR"}),t.data}))}))}}}))(j),R=(a(73),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).incrementQnty=function(e){if(!(e.quantity>=0))return null;a.props.increamentQuantity(e.productID)},a.decrementQnty=function(e){if(0===e.quantity)return null;a.props.decrementQuantity(e.productID)},a.ordetItems=function(){var e={userID:23,products:a.props.selectedItems,grandTotal:a.props.grandTotal,totalQnty:a.props.totalQuantity};a.props.orderItems(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"updateQnty",value:function(e,t){console.log(e.target.value);var a=e.target.value;this.props.updateQuantity(a,t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container cart-container"},r.a.createElement("div",{className:""},r.a.createElement("div",null,"Grand Total & Quantity : ",this.props.grandTotal," & ",this.props.totalQuantity),r.a.createElement("br",null),r.a.createElement("div",{className:"col-12"},r.a.createElement("table",{className:"table table-image"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Product ID"),r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{scope:"col"},"Product Name"),r.a.createElement("th",{scope:"col"},"Quantity"),r.a.createElement("th",{scope:"col"},"Price/Each"),r.a.createElement("th",{scope:"col"},"Total"))),r.a.createElement("tbody",null,this.props.selectedItems.map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},t.productID),r.a.createElement("td",{className:"w-25"},r.a.createElement(d.b,{to:"/product-view/".concat(t.productID)},r.a.createElement("img",{src:t.imgUrl,className:"img-fluid cart-image-width img-thumbnail",alt:t.name}))),r.a.createElement("td",null,t.name),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.incrementQnty(t)}},"+"),t.quantity,r.a.createElement("button",{onClick:function(){return e.decrementQnty(t)}},"-")),r.a.createElement("td",null,t.price," - ",t.currency),r.a.createElement("td",null,t.itemTotalPrice))})))),r.a.createElement("div",null,"Grand Total : ",this.props.grandTotal),r.a.createElement("div",null,"Grand Quantity : ",this.props.totalQuantity),r.a.createElement("input",{type:"submit",value:"Checkout",class:"btn float-right login_btn",onClick:this.ordetItems}))))}}]),t}(r.a.Component)),C=Object(p.b)((function(e){return{selectedItems:e.cartList.selectedItems,grandTotal:e.cartList.grandTotal,totalQuantity:e.cartList.totalQuantity}}),(function(e){return{updateQuantity:function(){return e((function(e){e({type:"UPDATE_QUANTITY",newQuantity:t,productID:a})}));var t,a},decrementQuantity:function(t){return e((a=t,function(e){e({type:"DECR_QUANTITY",productID:a})}));var a},increamentQuantity:function(t){return e((a=t,function(e){e({type:"INCR_QUANTITY",productID:a})}));var a},orderItems:function(t){return e(function(e){return function(t){t({type:"REQUEST_LOADING"}),v.a.post(y+"/api/products/orderItems",e,{headers:{Authorization:I,"Content-Type":"application/json"}}).then((function(e){t({type:"REQUEST_SUCC"}),t((function(e){e({type:"CLEAR_CART"})}))})).catch((function(e){return console.log(e),t({type:"ERROR"}),e.data}))}}(t))}}}))(R),w=a(40),D=a.n(w),S=(a(74),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).inputHandler=function(e){var t=e.currentTarget.name,n=e.target.value;a.setState((function(e){e.loginForm[t]=n}))},a.authenticateUser=function(e){e.preventDefault(),v.a.post(y+"/api/auth/signin",a.state.loginForm,{}).then((function(e){console.log(e),e.data.accessToken?(sessionStorage.setItem("token",e.data.accessToken),sessionStorage.setItem("user",JSON.stringify(e.data.userPrincipal)),a.props.login(e.data.accessToken),a.props.history.push("/products")):alert("Login failed")})).catch((function(e){console.log(e)}))},a.state={loginForm:{usernameOrEmail:"",password:""}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"signup",value:function(e){var t={Name:e.profileObj.name,email:e.profileObj.email,token:e.googleId,Image:e.profileObj.imageUrl,ProviderId:"Google"};console.log(t),this.props.history.push("/products")}},{key:"render",value:function(){var e=this,t=function(t){console.log(t);var a=t.profileObj;console.log(a),e.signup(t)};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{paddingTop:"20px"},className:"col-sm-12"},r.a.createElement("div",{className:"col-sm-4"}),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement(D.a,{clientId:"464944719379-h84i67v34o9ivp8h49np2htm96bjsj08.apps.googleusercontent.com",buttonText:"Login with Google",onSuccess:t,onFailure:t})),r.a.createElement("div",{className:"col-sm-4"}))),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"d-flex justify-content-center h-100"},r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-header"},r.a.createElement("h3",null,"Sign In"),r.a.createElement("div",{class:"d-flex justify-content-end social_icon"},r.a.createElement("span",null,r.a.createElement("i",{class:"fab fa-facebook-square"})),r.a.createElement("span",null,r.a.createElement("i",{class:"fab fa-google-plus-square"})),r.a.createElement("span",null,r.a.createElement("i",{class:"fab fa-twitter-square"})))),r.a.createElement("div",{class:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{class:"input-group form-group"},r.a.createElement("div",{class:"input-group-prepend"},r.a.createElement("span",{class:"input-group-text"},r.a.createElement("i",{class:"fas fa-user"}))),r.a.createElement("input",{type:"text",name:"usernameOrEmail",class:"form-control",placeholder:"Enter usernameOrEmail",onChange:this.inputHandler})),r.a.createElement("div",{class:"input-group form-group"},r.a.createElement("div",{class:"input-group-prepend"},r.a.createElement("span",{class:"input-group-text"},r.a.createElement("i",{class:"fas fa-key"}))),r.a.createElement("input",{name:"password",type:"password",class:"form-control",placeholder:"password",onChange:this.inputHandler})),r.a.createElement("div",{class:"row align-items-center remember"},r.a.createElement("input",{type:"checkbox"}),"Remember Me"),r.a.createElement("div",{class:"form-group"},r.a.createElement("input",{type:"submit",value:"Login",onClick:this.authenticateUser,class:"btn float-right login_btn"})))),r.a.createElement("div",{class:"card-footer"},r.a.createElement("div",{class:"d-flex justify-content-center links"},"Don't have an account?",r.a.createElement(d.b,{to:"/signup"},"Sign Up")),r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement("a",{href:"#"},"Forgot your password?")))))))}}]),t}(r.a.Component)),_={login:function(e){return{type:"LOGIN",payload:e}}},U=Object(p.b)((function(e){return{isAuth:e.auth.isAuth}}),_)(S),Q=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.productId;this.props.getProductByID(e)}},{key:"render",value:function(){var e=this,t=this.props.match.params.productId,a=this.props.viewList.find((function(e){return e.productID===t}));return console.log(a),r.a.createElement("div",null,r.a.createElement("div",{className:"card image-width"},this.props.loading?"...Loading":r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{className:"card-img-top",src:a.imgUrl,alt:"Shoes"})),r.a.createElement("div",{className:"card-body product-card-body"},r.a.createElement("h5",{className:"card-title"},a.name),r.a.createElement("div",{className:"card-text"},"Price : ",a.price," ",a.currency),r.a.createElement("div",{className:"card-text"},"Brand : ",a.brand),r.a.createElement("div",{className:"card-text"},"Made in : ",a.make),r.a.createElement("div",{className:"card-text"},"Remarks : ",a.remarks),r.a.createElement("div",{className:"btn btn-primary",onClick:function(){return e.props.addItemToCart(a)}},"Add to Cart")))))}}]),t}(r.a.Component),A=Object(p.b)((function(e){return Object(g.a)({},e,{viewList:e.productsList.viewList,loading:e.loadingReducer})}),(function(e){return{addItemToCart:T,getProductByID:function(t){return e(function(e){return function(t){t({type:"REQUEST_LOADING"}),v.a.get(y+"/api/products/getById/"+e,{headers:{Authorization:N,"Content-Type":"application/json"}}).then((function(e){var a;t((a=e.data[0],function(e){e({type:"INSERT_VIEWED_ITEM",payload:a})})),t({type:"REQUEST_SUCC"})})).catch((function(e){return console.log(e),t({type:"ERROR"}),e.data}))}}(t))}}}))(Q),L=sessionStorage.getItem("token"),P="Bearer ".concat(L);a(75);var x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).inputHandler=function(e){var t=e.currentTarget.name,n=e.target.value;console.log(t,n),a.setState((function(e){e.userInfo[t]=n}))},a.updateProfile=function(e){e.preventDefault(),a.props.saveUserProfile({name:"Arepalli Praveenkumar",phoneNo:784512369,userID:23}),console.log(a.state.userInfo,a.state.token)},a.state={userInfo:{phoneNo:"",name:"",email:"",username:""},token:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(){return console.log(this.state),!0}},{key:"componentDidMount",value:function(){var e=this.props.getUserInfo();console.log(e)}},{key:"render",value:function(){var e=this.props.userInfy,t=e.name,a=(e.email,e.username,e.phoneNo),n=this.props.loading?r.a.createElement("div",null,"...Loading"):r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"}," ",r.a.createElement("i",{className:"fa fa-user"})," ")),r.a.createElement("input",{name:"name",value:t,className:"form-control",onChange:this.inputHandler,placeholder:"full name",type:"text"})),r.a.createElement("div",{className:"form-group input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"}," ",r.a.createElement("i",{className:"fa fa-lock"})," ")),r.a.createElement("input",{name:"phoneNo",value:a,className:"form-control",onChange:this.inputHandler,placeholder:"phone no",type:"input"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block",onClick:this.updateProfile}," Update Profile ")));return r.a.createElement("div",{className:"card user-profile"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h4",null,"Your Profile"),r.a.createElement("hr",null))),n))}}]),t}(r.a.Component),G=Object(p.b)((function(e){return{loading:e.loadingReducer.loading,userInfy:e.userProfile.userInfo}}),(function(e){return console.log(e),{saveUserProfile:function(t){return e((a=t,function(e){e({type:"REQUEST_LOADING"}),v.a.post(y+"/api/users/saveUser",a,{headers:{Authorization:P,"Content-Type":"application/json"}}).then((function(t){e({type:"SAVE_USER_PROFILE",payload:t.data}),e({type:"REQUEST_SUCC"})})).catch((function(t){return console.log(t),e({type:"ERROR"}),t.data}))}));var a},getUserInfo:function(){return e((function(e){e({type:"REQUEST_LOADING"}),v.a.get(y+"/api/users/praveen_a",{headers:{Authorization:P,"Content-Type":"application/json"}}).then((function(t){return e({type:"SAVE_USER_PROFILE",payload:t.data}),console.log(t),e({type:"REQUEST_SUCC"}),t.data})).catch((function(t){return console.log(t),e({type:"ERROR"}),t.data}))}))}}}))(x),q=sessionStorage.getItem("token"),H=sessionStorage.getItem("user"),M="Bearer ".concat(q);console.log(H);a(76);var F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).formatDate=function(e){return new Date(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.myOrders()}},{key:"render",value:function(){return r.a.createElement("div",{classNameName:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h4",null,"Your Orders Are Here"),r.a.createElement("div",null,"Grand Total & Quantity : ",this.props.grandTotal," & ",this.props.totalQuantity),r.a.createElement("hr",null))),r.a.createElement("div",{className:"col-12"},this.props.orderedList.map((function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},"Purchase Date : ",e.purchaseDate),r.a.createElement("div",{className:"row"},r.a.createElement("table",{className:"table table-image"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Image"),r.a.createElement("th",null,"Product Name"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price/Each"),r.a.createElement("th",null,"Total"))),e.products.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},e.productID),r.a.createElement("td",{className:"w-25"},r.a.createElement(d.b,{to:"/product-view/".concat(e.productID)},r.a.createElement("img",{src:e.imgUrl,className:"img-fluid cart-image-width img-thumbnail",alt:e.name}))),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,e.price),r.a.createElement("td",null,e.itemTotalPrice))})))))})))))}}]),t}(r.a.Component),B=Object(p.b)((function(e){return{orderedList:e.orders.orderedList}}),(function(e){return{myOrders:function(){return e((function(e){e({type:"REQUEST_LOADING"}),v.a.get(y+"/api/products/myOrders/23",{headers:{Authorization:M,"Content-Type":"application/json"}}).then((function(t){var a;e((a=t.data,function(e){e({type:"SAVE_ORDERS",payload:a})})),e({type:"REQUEST_SUCC"}),console.log(t)})).catch((function(t){return console.log(t),e({type:"ERROR"}),t.data}))}))}}}))(F);var V=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container cart-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 "},r.a.createElement("div",{className:"list-group "},r.a.createElement("a",{href:"javascript:void()",className:"list-group-item list-group-item-action"},r.a.createElement(d.b,{to:"/my-profile/user-profile"},"User Profile")),r.a.createElement("a",{href:"javascript:void()",className:"list-group-item list-group-item-action"},r.a.createElement(d.b,{to:"/my-profile/my-orders"},"My Orders")))),r.a.createElement("div",{className:"col-md-9"},r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/my-profile/user-profile",component:G}),r.a.createElement(E.a,{path:"/my-profile/my-orders",component:B}))))))},Y=(a(77),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).createAccount=function(e){e.preventDefault(),v.a.post(y+"/api/auth/signup",a.state.singUpForm).then((function(e){console.log(e),!0===e.data.success?a.props.history.push("/login"):!1===e.data.success&&console.log(e.data.message)})).catch((function(e){console.log(e)}))},a.inputHandler=function(e){var t=e.currentTarget.name,n=e.target.value;a.setState((function(e){e.singUpForm[t]=n}))},a.state={singUpForm:{name:"",email:"",username:"",password:""}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement("div",{className:"card bg-light d-flex justify-content-center h-100"},r.a.createElement("article",{className:"card-body mx-auto"},r.a.createElement("h4",{className:"card-title mt-3 text-center links"},"Create Account"),r.a.createElement("p",{className:"text-center links"},"Get started with your free account"),r.a.createElement("p",null,r.a.createElement("a",{href:"",className:"btn btn-block btn-twitter"}," ",r.a.createElement("i",{className:"fab fa-twitter"})," \xa0 Login via Twitter"),r.a.createElement("a",{href:"",className:"btn btn-block btn-facebook"}," ",r.a.createElement("i",{className:"fab fa-facebook-f"})," \xa0 Login via facebook")),r.a.createElement("p",{className:"divider-text"},r.a.createElement("span",{className:"bg-light"},"OR")),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"}," ",r.a.createElement("i",{className:"fa fa-user"})," ")),r.a.createElement("input",{name:"name",className:"form-control",onChange:this.inputHandler,placeholder:"Full name",type:"text"})),r.a.createElement("div",{className:"form-group input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"}," ",r.a.createElement("i",{className:"fa fa-envelope"})," ")),r.a.createElement("input",{name:"email",className:"form-control",onChange:this.inputHandler,placeholder:"Email address",type:"email"})),r.a.createElement("div",{className:"form-group input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"}," ",r.a.createElement("i",{className:"fa fa-phone"})," ")),r.a.createElement("input",{name:"username",className:"form-control",onChange:this.inputHandler,placeholder:"Enter username",type:"text"})),r.a.createElement("div",{className:"form-group input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"}," ",r.a.createElement("i",{className:"fa fa-lock"})," ")),r.a.createElement("input",{name:"password",className:"form-control",onChange:this.inputHandler,placeholder:"Create password",type:"password"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:this.createAccount}," Create Account  ")),r.a.createElement("div",{class:"card-footer"},r.a.createElement("div",{class:"d-flex justify-content-center links"},"Have an account?",r.a.createElement(d.b,{to:"/login"},"Log In")))))))}}]),t}(r.a.Component)),z=a(41),W=a.n(z),J=(a(78),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).logoutSession=function(){sessionStorage.removeItem("token"),a.props.logout(null)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){console.log("/shopping-cart");var e=sessionStorage.getItem("token");console.log(e);return r.a.createElement(d.a,{basename:"/shopping-cart"},r.a.createElement("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark"},r.a.createElement("ul",{className:"navbar-nav"},e?r.a.createElement("div",{className:"links"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(d.b,{to:"/home",className:"nav-link"},"Home *","/shopping-cart","*")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(d.b,{to:"/home",className:"nav-link"},r.a.createElement("img",{className:"logo",src:W.a}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/products",className:"nav-link"},"Products")),r.a.createElement("li",{className:"nav-item "},r.a.createElement(d.b,{to:"/my-profile/user-profile",className:"nav-link"},"My Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/cart",className:"nav-link"},"Cart (",this.props.totalQuantity,")")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("input",{type:"submit",className:"btn float-right login_btn",value:"Logout",onClick:this.logoutSession})),r.a.createElement("li",{className:"nav-item"},r.a.createElement("div",{className:"float-right login _btn nav-link"},"Hello Praveen!"))):r.a.createElement("div",{className:"links"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(d.b,{to:"/login",className:"nav-link"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/signup",className:"nav-link"},"Sign Up"))))),r.a.createElement("div",{className:"routesview"},e?r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/cart",component:C}),r.a.createElement(E.a,{path:"/products",component:k}),r.a.createElement(E.a,{path:"/my-profile",component:V}),r.a.createElement(E.a,{path:"/login",component:U}),r.a.createElement(E.a,{path:"/product-view/:productId",component:A}),r.a.createElement(E.a,{path:"/home",component:f})):r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/login",component:U}),r.a.createElement(E.a,{path:"/signup",component:Y}),r.a.createElement(E.a,{path:"/",component:U}))))}}]),t}(r.a.Component)),X={logout:function(){return{type:"LOGOUT",payload:!1}}},$=Object(p.b)((function(e){return{totalQuantity:e.cartList.totalQuantity,isAuth:e.auth.isAuth}}),X)(J),K=a(16),Z=a(42),ee=a(43),te=a(23),ae=(a(79),{products:[],viewList:[]}),ne={selectedItems:[],grandTotal:0,totalQuantity:0},re={userInfo:{}},ce={name:"",isAuth:!1},oe={loading:!1,response:!1,error:!1},le={orderedList:[]},se=Object(K.combineReducers)({productsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS_LIST":case"GET_PRODUCT_BY_ID":return e;case"STORE_PRODUCTS":return Object(g.a)({},e,{products:t.payload});case"INSERT_VIEWED_ITEM":return Object(g.a)({},e,{viewList:[].concat(Object(te.a)(e.viewList),[t.payload])});default:return e}},cartList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM_TO_CART":var a=t.payload,n=e.selectedItems.find((function(e){return e.productID===a.productID}));if(n){n.quantity+=1,n.itemTotalPrice=n.quantity*n.price;var r=e.grandTotal+n.price,c=e.totalQuantity+1;return Object(g.a)({},e,{grandTotal:r,totalQuantity:c})}console.log(a,t.payload),a.quantity=1,a.itemTotalPrice=a.quantity*a.price;var o=e.grandTotal+a.price,l=e.totalQuantity+1;return Object(g.a)({},e,{selectedItems:[].concat(Object(te.a)(e.selectedItems),[a]),grandTotal:o,totalQuantity:l});case"UPDATE_QUANTITY":var s=e.selectedItems.find((function(e){return e.productID===t.productID}));s.quantity=parseInt(t.newQuantity),s.itemTotalPrice=s.quantity*s.price;var i=e.selectedItems.reduce((function(e,t){return e+parseInt(t.itemTotalPrice)}),0),u=e.selectedItems.reduce((function(e,t){return e+parseInt(t.quantity)}),0);return Object(g.a)({},e,{totalQuantity:u,grandTotal:i});case"INCR_QUANTITY":var m=e.selectedItems.find((function(e){return e.productID===t.productID}));console.log(m),m.quantity=parseInt(m.quantity+1),m.itemTotalPrice=m.quantity*m.price;var p=e.grandTotal+m.price;return Object(g.a)({},e,{totalQuantity:e.totalQuantity+1,grandTotal:p});case"DECR_QUANTITY":var d=e.selectedItems.find((function(e){return e.productID===t.productID}));d.quantity=parseInt(d.quantity-1),d.itemTotalPrice=d.quantity*d.price;var E=e.grandTotal-d.price;return Object(g.a)({},e,{totalQuantity:e.totalQuantity-1,grandTotal:E});case"CLEAR_CART":return{grandTotal:0,totalQuantity:0,selectedItems:[]};default:return e}},userProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_USER_PROFILE":return Object(g.a)({},e,{userInfo:t.payload});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":case"LOGOUT":return Object(g.a)({},e,{isAuth:t.payload});case"SIGNUP":default:return e}},loadingReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_LOADING":return Object(g.a)({},e,{loading:!0,error:!1});case"REQUEST_SUCC":return Object(g.a)({},e,{loading:!1,error:!1});case"ERROR":return Object(g.a)({},e,{loading:!1,error:!0});default:return e}},orders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MY_ORDERS":return Object(g.a)({},e);case"SAVE_ORDERS":return Object(g.a)({},e,{orderedList:t.payload});default:return e}}}),ie=(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()||K.compose,Object(K.createStore)(se,Object(ee.composeWithDevTools)(Object(K.applyMiddleware)(Z.a)))),ue=(a(80),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:ie},r.a.createElement("div",{className:"App"},r.a.createElement($,null)))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.458be195.chunk.js.map