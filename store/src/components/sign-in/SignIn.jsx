import React, { Component } from 'react';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput'
import './SignIn.scss'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '' 
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({[name]:value})
    }

    render() {
        const { email} = this.state;
        return (
            <div className="sign-in">
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" handleChange={this.handleChange} name="email" type="email" value={email} required />
                    <FormInput label="password" handleChange={this.handleChange} name="password" type="password" value={email} />
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
