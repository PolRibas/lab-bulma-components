import React, { Component } from 'react'

class FormField extends Component {
    render(props) {
        return (
        <div className="field">
            <label className="label">{this.props.label}</label>
            <div className="control">
                <input className={this.props.label} type={this.props.type} placeholder={this.props.placeholder}/>
            </div>
        </div>
        )
    }
}

export default FormField;
