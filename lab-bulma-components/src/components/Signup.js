import React, { Component } from 'react'
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

class Signup extends Component {
    render(props) {
        return (
            <>
            <div className="App">
                <Navbar/>   
            </div>
            <form>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <CoolButton isSmall isDanger className="is-rounded my-class" type="submit">Button 1</CoolButton>
            </form>
            </>
        )
    }
}

export default Signup;
