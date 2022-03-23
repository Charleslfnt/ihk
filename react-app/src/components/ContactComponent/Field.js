import React, { Component } from "react";

class Field extends React.Component {
    render () {
    const {name, value, onChange, children} = this.props
    return (<>
            <label htmlFor={name}>{children}</label>
            <input type="text" placeholder="Votre nom" name={name} value={value} onChange={onChange}></input>
            </>
    )
    }
}

export default Field;