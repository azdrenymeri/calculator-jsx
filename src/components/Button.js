import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render(){
        const buttonStyle = {
            backgroundColor: this.props.color,
            width: this.props.wide ? "50%":"25%"
        };

        return(
            <button className="Button" style={buttonStyle}>
                {this.props.name}
            </button>
        )
    }
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    wide: PropTypes.bool.isRequired
}

export default Button;