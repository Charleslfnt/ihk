import React, { Component } from "react";

class Select extends React.Component {
    render () {
    const {name, value, onChange, children, option} = this.props
    return (  <><label htmlFor={name}>{children}</label>
    <select name={name} id={name} value={value} onChange={onChange}>
    <option value="ihkltd">{value}</option>
    <option value="safranprestige">Safran Prestige</option> 
    <option value="voiture">Location voiture</option>
    <option value="immo">Location Immobilière</option>
    <option value="autre">Autre</option>
    </select></>
    )
    }
}

export default Select;