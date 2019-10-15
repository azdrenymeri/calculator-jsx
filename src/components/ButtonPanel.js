import React,{Component} from 'react';
import Buton from './Button';

class ButtonPanel extends Component {
    render(){
        return (
            <div className="ButtonPanel">
                <div className="ButtonPanel-Groups">
                    <div className="ButtonPanel-Group">
                        <Buton name="AC" color="#e0e0e0" wide={false} />
                        <Buton name="+/-" color="#e0e0e0" wide={false}  />
                        <Buton name="%" color="#e0e0e0" wide={false}  />
                        <Buton name="÷" color="#f5913e" wide={false} />                        
                    </div>
                    <div className="ButtonPanel-Group">
                        <Buton name="7" color="#e0e0e0" wide={false}/>
                        <Buton name="8" color="#e0e0e0" wide={false}/>
                        <Buton name="9" color="#e0e0e0" wide={false}/>
                        <Buton name="x" color="#f5913e" wide={false}/>
                    </div>
                    <div className="ButtonPanel-Group">
                        <Buton name="4" color="#e0e0e0" wide={false}/>
                        <Buton name="5" color="#e0e0e0" wide={false}/>
                        <Buton name="6" color="#e0e0e0" wide={false}/>
                        <Buton name="-" color="#f5913e" wide={false}/>
                    </div>
                    <div className="ButtonPanel-Group">
                        <Buton name="1" color="#e0e0e0" wide={false}/>
                        <Buton name="2" color="#e0e0e0" wide={false}/>
                        <Buton name="3" color="#e0e0e0" wide={false}/>
                        <Buton name="+" color="#f5913e" wide={false}/>
                    </div>
                    <div className="ButtonPanel-Group">
                        <Buton name="0" color="#e0e0e0" wide={true}/>
                        <Buton name="." color="#e0e0e0" wide={false}/>
                        <Buton name="=" color="#f5913e" wide={false}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ButtonPanel;