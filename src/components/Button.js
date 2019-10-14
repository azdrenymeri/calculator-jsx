import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button className="Button">
                {this.props.name}
            </button>
        )
    }
}

Button.propTypes = {
    name: PropTypes.string.isRequired
}

export default Button;