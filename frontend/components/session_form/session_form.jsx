import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            city:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value})
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.closeModal());
    }
    
    handleDemo(e) {
        e.preventDefault();
        const anotherGuy = Object.assign({email:'anotherdemo@gmail.com', password: 'password', first_name: 'Ariel', last_name:'Solomon', city: 'Oakland'
    })
    debugger
        this.props.processForm(anotherGuy).then(() => this.props.closeModal());
    }


    returnErrors() {
        return(
            <ul>
                {this.props.errors.map((error,i) => (
                    <li className="sesh-errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let extraFields;
        let demoButton;
        let altLogin;
        let someTerms;
        debugger
        if (this.props.formType === 'Sign In'){
            demoButton = (
             <button className='session-buttons' onClick={this.handleDemo}>Demo Login</button>
            )
            altLogin = (
                <div>
                New to Gimme A Table? <Link className="alt-sign-up" onClick={() => this.props.openModal('signup')} to='/signup'>Create an Account</Link>
               
                <hr/>
                </div>         
            )
            someTerms = (
                <span className='terms'>This site is protected by Google <a href="/somewhere.com">Privacy Policy</a> and <a href="/somewhere.com">Terms of Service</a> apply.</span>
            )
                        
        } else {
            demoButton = null;
            altLogin = null;
            someTerms = (
                <span className='terms'>By creating an account you agree to the <a href="/somewhere.com">GimmeATable Terms of Use</a> and <a href="/somewhere.com">Privacy Policy</a></span>
            )

        }
        if (this.props.formType === 'Sign Up'){
            extraFields = (
                <div>
                <label>
                        <input 
                            type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                            className='login-input'
                            placeholder='First Name'
                        />
                    </label>
                    <br/>
                    <label>
                        <input 
                            type="text"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
                            className='login-input'
                            placeholder='Last Name'
                        />
                    </label>
                    <br/>
                    <label>
                        <input 
                            type="text"
                            value={this.state.city}
                            onChange={this.update('city')}
                            className='login-input'
                            placeholder='City'
                        />
                    </label> 
                    <br/>
                </div>
            );
        } else {
            extraFields = null;
        }
        return(
            <div className='login-form-container'>
                <form onSubmit={this.handleSubmit} className='login-form-box'>
                    <h1 className="login-form-header">
                        Welcome to Gimme A Table!
                    <hr/>
                    </h1>
                    <div onClick={this.props.closeModal} className="close-x">x</div>
                    
                        {this.returnErrors()}
                    <div className='login-form'>
                    <label>
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className='login-input'
                            placeholder='Email'
                        />
                    </label>
                    <br/>
                    <label>
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className='login-input'
                            placeholder='Password'
                        />
                    </label>
                    <br/>
                    {extraFields}
                    <button className='session-buttons' onClick={this.handleSubmit}>{this.props.formType}</button>
                    <hr/>
                        <div className='alt-login-buttons'>
                            {demoButton}
                        </div>
                        {altLogin}
                        {someTerms}
                    </div>

                </form>
                
            
            </div>
        )
    }
}

export default SessionForm;