import React, { Component } from "react";

class Checkbox extends React.Component {
    render () {
    const {name, value, onChange, children} = this.props
    return (  <div className="checkbox">
    <input type="checkbox" checked={value} onChange={onChange} id={name} name={name}></input>
    <label htmlFor={name} >{children}</label>
</div>
    )
    }
}

export default Checkbox;