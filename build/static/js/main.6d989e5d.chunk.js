(this["webpackJsonpgoogle-auth"]=this["webpackJsonpgoogle-auth"]||[]).push([[0],{14:function(e,t,a){e.exports=a(26)},19:function(e,t,a){},20:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},21:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(2),i=a.n(s),l=(a(19),a(20),a(21),a(3)),o=(a(24),a(13)),c=l.initializeApp({apiKey:"AIzaSyBrsFHCw4tikzSxqRe5Oq4yWJ6cRNaFPGg",authDomain:"excelencia-4beab.firebaseapp.com",databaseURL:"https://excelencia-4beab.firebaseio.com",projectId:"excelencia-4beab",storageBucket:"excelencia-4beab.appspot.com",messagingSenderId:"467080721280",appId:"1:467080721280:web:6024e52a183fa7f81b4765",measurementId:"G-PXS792N7FM"}).auth(),m={googleProvider:new l.auth.GoogleAuthProvider,facebookProvider:new l.auth.FacebookAuthProvider},u=Object(o.a)({providers:m,firebaseAppAuth:c})((function(e){e.signInWithEmailAndPassword,e.createUserWithEmailAndPassword;var t=e.signInWithGoogle,a=e.signInWithFacebook,r=(e.signInWithGithub,e.signInWithTwitter,e.signInAnonymously,e.signOut),s=(e.setError,e.user),i=(e.error,e.loading);return n.createElement(n.Fragment,null,s?n.createElement("h1",null,"Hola, ",s.displayName):n.createElement("h1",null,"Ingresar"),s?n.createElement("button",{onClick:r},"Salir"):n.createElement("button",{onClick:t},"Ingresar con google"),s?n.createElement("button",{onClick:r},"Salir"):n.createElement("button",{onClick:a},"Ingresar con facebook"),i&&n.createElement("h2",null,"Loading.."))})),h=a(9),d=a(4),g=a(5),p=a(7),v=a(6),E=a(8),b=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(v.a)(t).call(this,e))).state={isLoginOpen:!0,isRegisterOpen:!1},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"showLoginBox",value:function(){this.setState({isRegisterOpen:!1,isLoginOpen:!0})}},{key:"showRegisterBox",value:function(){this.setState({isRegisterOpen:!0,isLoginOpen:!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"root-container"},r.a.createElement("div",{className:"box-controller"},r.a.createElement("div",{className:"controller"+(this.setState.isLoginOpen?"selected-controller":""),onClick:this.showLoginBox.bind(this)},"Ingresar"),r.a.createElement("div",{className:"controller"+(this.setState.isRegisterOpen?"selected-controller":""),onClick:this.showRegisterBox.bind(this)},"Registrar")),r.a.createElement("div",{className:"box-container"},this.state.isLoginOpen&&r.a.createElement(f,null),this.state.isRegisterOpen&&r.a.createElement(w,null)))}}]),t}(r.a.Component),f=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(v.a)(t).call(this,e))).state={Usuario:"","Contrase\xf1a":"",errors:[]},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"submitLogin",value:function(e){""===this.state.Usuario&&(this.showValidationErr("Usuario","Usuario vacio"),this.clearValidationErr("Usuario")),""===this.state.Contrase\u00f1a&&(this.showValidationErr("Contrase\xf1a","Contrase\xf1a vacio"),this.clearValidationErr("Contrase\xf1a")),""!==this.state.Usuario&&alert(this.state.Contrase\u00f1a)}},{key:"onChangeUsuario",value:function(e){this.setState({Usuario:e.target.value})}},{key:"onChangeContrase\xf1a",value:function(e){this.setState({"Contrase\xf1a":e.target.value})}},{key:"showValidationErr",value:function(e,t){this.setState((function(a){return{errors:[].concat(Object(h.a)(a.errors),[{elm:e,msg:t}])}}))}},{key:"clearValidationErr",value:function(e){this.setState((function(t){var a=[],n=!0,r=!1,s=void 0;try{for(var i,l=t.errors[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var o=i.value;e!==o.elm&&a.push(o)}}catch(o){r=!0,s=o}finally{try{n||null==l.return||l.return()}finally{if(r)throw s}}return a}))}},{key:"render",value:function(){var e=null,t=null,a=!0,n=!1,s=void 0;try{for(var i,l=this.state.errors[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var o=i.value;"Usuario"===o.elm&&(e=o.msg),"Contrase\xf1a"===o.elm&&(t=o.msg)}}catch(o){n=!0,s=o}finally{try{a||null==l.return||l.return()}finally{if(n)throw s}}return r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"header"},"Ingresar"),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"UserName"},"Nombre de Usuario"),r.a.createElement("input",{type:"text",name:"UserName",className:"login-input",placeholder:"Nombre de Usuario",onChange:this.onChangeUsuario.bind(this)}),r.a.createElement("small",{className:"danger"}," ",e||"")),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"Pass"},"Contrase\xf1a"),r.a.createElement("input",{type:"password",name:"Pass",className:"login-input",placeholder:"Contrase\xf1a",onChange:this.onChangeContrase\u00f1a.bind(this)}),r.a.createElement("small",{className:"danger"}," ",t||"")),r.a.createElement("button",{type:"button",className:"login-btn",onClick:this.submitLogin.bind(this)},"Ingresar")))}}]),t}(r.a.Component),w=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(v.a)(t).call(this,e))).state={UserName:"",Email:"",Pass:"",errors:[],pswState:null},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"submitRegister",value:function(e){""===this.state.UserName&&this.showValidationErr("UserName","Usuario vacio"),""===this.state.Email&&this.showValidationErr("Email","Email vacio"),""===this.state.Pass&&this.showValidationErr("Pass","Contrase\xf1a vacio")}},{key:"showValidationErr",value:function(e,t){this.setState((function(a){return{errors:[].concat(Object(h.a)(a.errors),[{elm:e,msg:t}])}}))}},{key:"clearValidationErr",value:function(e){this.setState((function(t){var a=[],n=!0,r=!1,s=void 0;try{for(var i,l=t.errors[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var o=i.value;e!==o.elm&&a.push(o)}}catch(o){r=!0,s=o}finally{try{n||null==l.return||l.return()}finally{if(r)throw s}}return a}))}},{key:"onUsernameChange",value:function(e){this.setState({UserName:e.target.value}),this.clearValidationErr("UserName")}},{key:"onEmailChange",value:function(e){this.setState({Email:e.target.value}),this.clearValidationErr("Email")}},{key:"onPasswordChange",value:function(e){this.setState({Pass:e.target.value}),this.clearValidationErr("Pass"),this.setState({pswState:"Corta"}),e.target.value.length>8?this.setState({pswState:"Medium"}):e.target.value.length>12&&this.setState({pswState:"Larga"})}},{key:"render",value:function(){var e=null,t=null,a=null,n=!0,s=!1,i=void 0;try{for(var l,o=this.state.errors[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){var c=l.value;"UserName"===c.elm&&(e=c.msg),"Pass"===c.elm&&(a=c.msg),"Email"===c.elm&&(t=c.msg)}}catch(c){s=!0,i=c}finally{try{n||null==o.return||o.return()}finally{if(s)throw i}}var m=null,u=null,h=null;return"Corta"===this.state.pswState?m=!0:"Medium"===this.state.pswState?(m=!0,u=!0):"Larga"===this.state.pswState&&(m=!0,u=!0,h=!0),r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"header"},"Registrar"),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"UserName"},"Nombre de Usuario"),r.a.createElement("input",{type:"text",name:"UserName",className:"login-input",placeholder:"Nombre de Usuario",onChange:this.onUsernameChange.bind(this)}),r.a.createElement("small",{className:"danger"}," ",e||"")),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"Email"},"Email"),r.a.createElement("input",{type:"text",name:"Email",className:"login-input",placeholder:"Ingrese email",onChange:this.onEmailChange.bind(this)}),r.a.createElement("small",{className:"danger"}," ",t||"")),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"Pass"},"Contrase\xf1a"),r.a.createElement("input",{type:"password",name:"Pass",className:"login-input",placeholder:"Contrase\xf1a",onChange:this.onPasswordChange.bind(this)}),r.a.createElement("small",{className:"danger"}," ",a||""),this.state.pswState&&r.a.createElement("div",{className:"password-state"},r.a.createElement("div",{className:"pwd pwd-corto"+(m?"show":"")}),r.a.createElement("div",{className:"pwd pwd-medio"+(u?"show":"")}),r.a.createElement("div",{className:"pwd pwd-Largo"+(h?"show":"")}))),r.a.createElement("button",{type:"button",className:"login-btn",onClick:this.submitRegister.bind(this)},"Registrar ")))}}]),t}(r.a.Component);i.a.render(r.a.createElement(b,null),document.getElementById("root"));var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(b,null),r.a.createElement(u,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.6d989e5d.chunk.js.map