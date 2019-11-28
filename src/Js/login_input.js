import React from 'react'
import reactDOM from 'react-dom'


export default class Ingreso extends React.Component{

    constructor(props){
        super(props);
        this.state={ isLoginOpen: true, isRegisterOpen: false};     
    }

    showLoginBox(){
        this.setState({isRegisterOpen: false, isLoginOpen:true})
    }

    showRegisterBox(){
        this.setState({isRegisterOpen: true, isLoginOpen:false})
    }

    render(){
        return (
            <div className="root-container">
            <div className="box-controller">
            <div className={"controller" + (this.setState.isLoginOpen ? "selected-controller" : "")} onClick={this.showLoginBox.bind(this)}>
                Ingresar
            </div>
            <div className={"controller" + (this.setState.isRegisterOpen ? "selected-controller" : "")} onClick={this.showRegisterBox.bind(this)}>
               Registrar 
               </div>
             </div>
            
                <div className="box-container">

            {this.state.isLoginOpen && <LoginBox/>}
            {this.state.isRegisterOpen && <RegisterBox/>}
                </div>
            </div>

        );
    }
}


class LoginBox extends  React.Component{

    constructor(props){
        super(props);
        this.state={
            Usuario:"",
            Contraseña:"",
            errors: []
       };
    }

submitLogin(e){

    if (this.state.Usuario === "")
        {
           this.showValidationErr("Usuario", "Usuario vacio")
           this.clearValidationErr("Usuario");
        } 
  if (this.state.Contraseña === "")
        {
            this.showValidationErr("Contraseña", "Contraseña vacio")
            this.clearValidationErr("Contraseña");
        }
  
        if (this.state.Usuario !== "")
  {
      alert(this.state.Contraseña)
  }
}


onChangeUsuario(e){
  this.setState({ Usuario: e.target.value});
}

onChangeContraseña(e){
    this.setState({ Contraseña: e.target.value});
}

showValidationErr(elm,msg){
    this.setState((prevState) =>({ errors: [...prevState.errors,{elm,msg}]}))
    }

clearValidationErr(elm){
        this.setState((prevState) => {
            let newArr = []
            for(let err of prevState.errors)
            {
                if(elm !== err.elm)
                {
                    newArr.push(err)
                }
            }    return newArr
        })
        }

render (){
    let UserNameErr = null , ContraseñaErr=null;

    for(let err of this.state.errors){
        
        if (    err.elm === "Usuario")
        {
            UserNameErr=err.msg
        }

        if (err.elm === "Contraseña")
        {
            ContraseñaErr=err.msg
        } 
    }
   return ( 
    <div className="inner-container">
     <div className="header">
            Ingresar
    </div>

    <div className="box">

    <div className="input-group">
    <label htmlFor="UserName">Nombre de Usuario</label>
    <input type="text" name="UserName" className="login-input" placeholder="Nombre de Usuario" onChange={this.onChangeUsuario.bind(this)}/>
    <small className="danger"> {UserNameErr ? UserNameErr : ""}</small> 
    </div>


    <div className="input-group">
    <label htmlFor="Pass">Contraseña</label>
    <input type="password" name="Pass" className="login-input" placeholder="Contraseña" onChange={this.onChangeContraseña.bind(this)}/>
    <small className="danger"> {ContraseñaErr ? ContraseñaErr : ""}</small> 
    </div>

    <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Ingresar</button>

        </div>
    </div>
    );
  }
}


class RegisterBox extends  React.Component{

    constructor(props){
        super(props);
        this.state={
            UserName:"",
            Email:"",
            Pass:"",
            errors: [],
            pswState:null
       };
    }

submitRegister(e){
    if (this.state.UserName === "")
    {
       this.showValidationErr("UserName", "Usuario vacio")
    } 
    if (this.state.Email === "")
    {
        this.showValidationErr("Email", "Email vacio")
    }
      if (this.state.Pass === "")
    {
      this.showValidationErr("Pass", "Contraseña vacio")
    }
}

showValidationErr(elm,msg){
this.setState((prevState) =>({ errors: [...prevState.errors,{elm,msg}]}))

}

clearValidationErr(elm){
this.setState((prevState) => {
    let newArr = []
    for(let err of prevState.errors)
    {
        if(elm !== err.elm)
        {
            newArr.push(err)
        }
    }    return newArr
})
}

onUsernameChange(e){
    this.setState({ UserName: e.target.value});
    this.clearValidationErr("UserName");
}

onEmailChange(e){
    this.setState({ Email: e.target.value})
    this.clearValidationErr("Email");

}

onPasswordChange(e){
    this.setState({ Pass: e.target.value})
    this.clearValidationErr("Pass");

    this.setState({pswState: "Corta"})
    if(e.target.value.length > 8)
    {
        this.setState({pswState: "Medium"})
    }else if(e.target.value.length >12 )
    {
        this.setState({pswState: "Larga"})
    }
}

render (){

    let UserNameErr = null, EmailErr= null , PassErr=null;

    for(let err of this.state.errors){    
        if (    err.elm === "UserName")
        {
            UserNameErr=err.msg
        }
        if (err.elm === "Pass")
        {
            PassErr=err.msg
        } 
        if (err.elm === "Email")
        {
            EmailErr=err.msg;
        }
    }

    let pswCorto= null, pswMedio = null, pswLargo = null;
    if(this.state.pswState === "Corta")
    {
        pswCorto=true;
    }else if (this.state.pswState === "Medium")
    {
        pswCorto=true;
        pswMedio=true;
    }else if (this.state.pswState === "Larga")
    {
        pswCorto=true;
        pswMedio=true;
        pswLargo=true;
    }

    return(
    <div className="inner-container">
        <div className="header">
            Registrar
        </div>
    <div className="box">

    <div className="input-group">
    <label htmlFor="UserName">Nombre de Usuario</label>
    <input type="text" name="UserName" className="login-input" placeholder="Nombre de Usuario" onChange={this.onUsernameChange.bind(this)}/>
    <small className="danger"> {UserNameErr ? UserNameErr : ""}</small> 
      </div>


    <div className="input-group">
    <label htmlFor="Email">Email</label>
    <input type="text" name="Email" className="login-input" placeholder="Ingrese email" onChange={this.onEmailChange.bind(this)}/>
    <small className="danger"> {EmailErr ? EmailErr : ""}</small> 
    </div>

    <div className="input-group">
    <label htmlFor="Pass">Contraseña</label>
    <input type="password" name="Pass" className="login-input" placeholder="Contraseña" onChange={this.onPasswordChange.bind(this)}/>
    <small className="danger"> {PassErr ? PassErr : ""}</small> 
   
   {this.state.pswState &&<div className="password-state">
       <div className={"pwd pwd-corto" + (pswCorto ?  "show" : "")}></div>
       <div className={"pwd pwd-medio" + (pswMedio ?  "show" : "")}></div>
       <div className={"pwd pwd-Largo" + (pswLargo ?  "show" : "")}></div>
   </div>}
   
    </div>


    <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>Registrar </button>

        </div>
    </div>
    );
}
}

reactDOM.render(<Ingreso/>, document.getElementById("root"));