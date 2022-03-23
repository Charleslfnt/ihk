import React from "react";

class Button extends React.Component {
    constructor() {
        super();
        this.state =  {
          show: true,
          scrollPos: 0
        }
        }
    
        componentDidMount = () => {
          window.addEventListener('scroll', this.handleScroll)
        }
    
        componentWillUnmount = () => {
          window.removeEventListener('scroll', this.handleScroll)
        }
    
        handleScroll = () => {
          console.log(document.body.getBoundingClientRect())
          console.log(this.state);
          this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > this.state.scrollPos
          });
        }

    render() {
return(
    <button className={this.state.show ? 'myBtn' : 'header'} title="Go to top">^</button>
   
    )
}
}

export default Button;
