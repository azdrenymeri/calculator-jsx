import React from 'react';
import Buton from './Button';

function ButtonPanel(props){
        return (
            <div className="ButtonPanel">
                <div className="ButtonPanel-Groups">
                    <div className="ButtonPanel-Group">
                        <Buton name="AC" color="#e0e0e0" wide={false} clickHandler={props.clickHandler} />
                        <Buton name="+/-" color="#e0e0e0" wide={false}  clickHandler={props.clickHandler} />
                        <Buton name="%" color="#e0e0e0" wide={false}  clickHandler={props.clickHandler} />
                        <Buton name="÷"  wide={false}  clickHandler={props.clickHandler} />                        
                    </div>
                    <div className="ButtonPanel-Group">
                        <Buton name="7" color="#e0e0e0" wide={false} clickHandler={props.clickHandler} />
                        <Buton name="8" color="#e0e0e0" wide={false} clickHandler={props.clickHandler} />
                        <Buton name="9" color="#e0e0e0" wide={false} clickHandler={props.clickHandler}/>
                        <Buton name="x"  wide={false} clickHandler={props.clickHandler}/>
                    </div>
                    <div className="ButtonPanel-Group">
                        <Buton name="4" color="#e0e0e0" wide={false} clickHandler={props.clickHandler}/>
                        <Buton name="5" color="#e0e0e0" wide={false} clickHandler={props.clickHandler}/>
                        <Buton name="6" color="#e0e0e0" wide={false} clickHandler={props.clickHandler}/>
                        <Buton name="-"  wide={false} clickHandler={props.clickHandler}/>
                    </div>
                    <div className="ButtonPanel-Group">
                        <Buton name="1" color="#e0e0e0" wide={false} clickHandler={props.clickHandler}/>
                        <Buton name="2" color="#e0e0e0" wide={false} clickHandler={props.clickHandler}/>
                        <Buton name="3" color="#e0e0e0" wide={false} clickHandler={props.clickHandler}/>
                        <Buton name="+" wide={false} clickHandler={props.clickHandler}/>
                    </div>
                    <div className="ButtonPanel-Group">
                        <Buton name="0" color="#e0e0e0" wide={true} clickHandler={props.clickHandler}/>
                        <Buton name="." color="#e0e0e0" wide={false} clickHandler={props.clickHandler}/>
                        <Buton name="=" wide={false} clickHandler={props.clickHandler}/>
                    </div>
                </div>
            </div>
        );
    }

export default ButtonPanel;