import React,{Component} from 'react';


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

export default Button;