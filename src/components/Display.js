import React,{Component} from 'react';
import PropTypes from 'prop-types';


class Display extends Component {
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="Display">
                <div type="text" className="Display-input"> {this.props.result} </div>
            </div>
        );
    }
}
Display.defaultProps = {
    result: "0"
};
Display.propTypes = {
    result: PropTypes.string
}
export default Display;