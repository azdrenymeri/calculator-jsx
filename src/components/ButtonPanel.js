import React,{Component} from 'react';
import Buton from './Button';

class ButtonPanel extends Component {
    render(){
        return (
            <div className="ButtonPanel">
                <div className="ButtonPanel-Groups">
                    <div className="ButtonPanel-Group">
                        <Buton name="AC" />
                        <Buton name="+/-" />
                        <Buton name="%" />
                        <Buton name="÷"/>                        
                    </div>
                    <div className="ButtonPanel-Group">
                        <Buton name="7" />
                        <Buton name="8" />
                        <Buton name="9" />
                        <Buton name="x" />
                    </div>
                    <div className="ButtonPanel-Group">
                        <Buton name="4" />
                        <Buton name="5" />
                        <Buton name="6" />
                        <Buton name="-" />
                    </div>
                    <div className="ButtonPanel-Group">
                        <Buton name="1" />
                        <Buton name="2" />
                        <Buton name="3" />
                        <Buton name="+" />
                    </div>
                    <div className="ButtonPanel-Group">
                        <Buton name="0" />
                        <Buton name="." />
                        <Buton name="=" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ButtonPanel;