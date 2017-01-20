import React, {Component} from 'react';
class SignIn extends Component{
    constructor(props){
        super();
        this.state={
            userName: '',
            userEmail:'',
            userLogin:'',
            userPassword:'',
            confirmPas: '',
            check: false
        };
        this.updateData = this.updateData.bind(this);
    }
    onButtonClick(event){
        console.log(this.state);
    }
    updateData(event){
        switch(event.target.className){
            case 'user-name':{
                this.setState({
                    userName:event.target.value
                })
                console.log('name= ' + event.target.value);
                break;
            }
            case 'user-email':{
                this.setState({
                    userEmail:event.target.value
                })
                console.log('email= ' + event.target.value);
                break;
            }
            case 'user-login':{
                this.setState({
                    userLogin:event.target.value
                })
                console.log('login= ' + event.target.value);
                break;
            }
            case 'user-password':{
                this.setState({
                    userPassword:event.target.value
                })
                console.log('password= ' + event.target.value);
                break;
            }
            case 'user-confirm-password':{
                this.setState({
                    confirmPas:event.target.value
                })
                console.log('confirmPas= ' + event.target.value);
                break;
            }
        }
        
    }
    render(){
        return(
            <div className="wrapper-sign-in">
                <h1>Registration</h1>
                <span>Please, write in all the fields</span>
                <form action="" className='sign-in-form'>
                    <input type="text"
                            className='user-name'
                            placeholder='enter your name'
                            onChange={this.updateData}
                    />
                    <h4 className='error'>Empty field or uncorrect</h4>
                    <input type="text"
                            className='user-email'
                            placeholder='enter your e-mail adress'
                            onChange={this.updateData}
                    />
                    <h4 className='error'>Empty field or uncorrect</h4>
                    <input type="login"
                            className='user-login'
                            placeholder='enter your login'
                            onChange={this.updateData}
                    />
                    <h4 className='error'>Empty field or uncorrect</h4>
                    <input type="text"
                            className='user-password'
                            placeholder='enter your password'
                            onChange={this.updateData}
                    />
                    <h4 className='error'>Empty field or uncorrect</h4>
                    <input type="password"
                            className='user-confirm-password'
                            placeholder='please, confirm your password'
                            onChange={this.updateData}
                            onChange={this.inspectorPassword}
                    />
                    <h4 id='err-confirm'
                        className='error'>Values don't similar</h4>
                    <h4 id='suc-confirm'
                        className='success'>Values similar</h4>
                    <div className='container-agreement'>
                        <input type='checkbox' id='userAgreement' className='userAgreement'/>
                        <label htmlFor='userAgreement'>
                        some words about user agreement
                        </label>
                    </div>
                    <h4 className='error'>Don't check!</h4>
                    <button>Registration</button>
                </form>
            </div>
        )
    }
}
export default SignIn;