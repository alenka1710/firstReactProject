import React, {Component} from 'react';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
class SignUp extends Component{
    constructor(props){
        super();
        this.state={
            userName: '',
            userEmail:'',
            userLogin:'',
            userPassword:'',
            confirmPas: '',
            check: false,
            errors:{}

        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        //this.validateInput = this.validateInput.bind(this);
    }
    validateInput(data){
        var errors = {};
        console.log('data= ', data);
        if(Validator.isEmpty(data.userName)){
            errors.userName = 'This field is required';
            console.log(errors.userName);
        }
        else console.log(errors);

        // return{
        //     errors,
        //     isValid: isEmpty(errors)
        // }

    }
     isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

   
    handleInputChange(event){
        var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            [event.target.name]: value
        });
    }
    onSubmit(event){
            event.preventDefault();
       // console.log(this.state);
        let validate = this.validateInput.bind(this, this.state);
         validate();
    }
    
    render(){
        return(
            <div className="wrapper-sign-in">
                <h1>Registration</h1>
                <span>Please, write in all the fields</span>
                <form onSubmit = {this.onSubmit} className='sign-in-form'>
                    <input value={this.state.userName}                    
                            type="text"
                            name="userName"
                            className='user-name'
                            placeholder='enter your name'
                            onChange={this.handleInputChange}
                    />
                   
                    <input type="text"
                            className='user-email'
                            name="userEmail"
                            placeholder='enter your e-mail adress'
                            onChange={this.handleInputChange}
                            value={this.state.userEmail}
                    />
                   
                    <input type="login"
                            className='user-login'
                            name="userLogin"
                            placeholder='enter your login'
                            onChange={this.handleInputChange}
                            value={this.state.userLogin}
                    />
                   
                    <input type="text"
                            className='user-password'
                            name="userPassword"
                            placeholder='enter your password'
                            onChange={this.handleInputChange}
                            value={this.state.userPassword}
                    />
                    
                    <input type="password"
                            name="confirmPas"
                            className='user-confirm-password'
                            placeholder='please, confirm your password'
                            onChange={this.handleInputChange}
                            value={this.state.confirmPas}
                    />
                    
                    <div className ='container-agreement'>
                        <input type ='checkbox'
                                id='userAgreement'
                                name="check"
                                className='userAgreement'
                                value = {this.state.check}
                                onChange = {this.handleInputChange}/>
                        <label htmlFor ='userAgreement'>
                        some words about user agreement
                        </label>
                    </div>
                    
                    <button type ='submit'
                            >Registration</button>
                </form>
            </div>
        )
    }
}
export default SignUp;