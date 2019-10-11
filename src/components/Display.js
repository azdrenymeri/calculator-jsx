import React,{Component} from 'react';


class Display extends Component {
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="Display">
                <input type="text" className="Display-input" value={this.props.result} />
            </div>
        );
    }
}
Display.defaultProps = {
    result: "0"
};

export default Display;