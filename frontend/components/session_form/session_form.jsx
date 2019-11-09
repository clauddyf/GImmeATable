import React from 'react';
import { withRouter } from 'react-router-dom';

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
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value})
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.closeModal);
    }

    returnErrors() {
        return(
            <ul>
                {this.props.errors.map((error,i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let extraFields;
        if (this.props.formType === 'signup'){
            extraFields = (
                <div>
                <label>First Name:
                        <input 
                            type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                            className='login-input'
                        />
                    </label>
                    <br/>
                    <label>Last Name:
                        <input 
                            type="text"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
                            className='login-input'
                        />
                    </label>
                    <br/>
                    <label>City:
                        <input 
                            type="text"
                            value={this.state.city}
                            onChange={this.update('city')}
                            className='login-input'
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
                    Welcome to Gimme A Table!
                    <br/>
                    {/* Please {this.props.formType} or {this.props.otherForm} */}
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.returnErrors()}
                    <div className='login-form'>
                    <label>Email:
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className='login-input'
                            />
                    </label>
                    <br/>
                    <label>Password:
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className='login-input'
                        />
                    </label>
                    <br/>
                    {extraFields}
                    <button onClick={this.handleSubmit}>{this.props.formType}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;