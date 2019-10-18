import React from 'react';
import Buton from './Button';

function ButtonPanel(props){
        return (
            <div className="ButtonPanel">
                <div className="ButtonPanel-Groups">
                    <div className="ButtonPanel-Group">
                        <Buton name="AC" clickHandler={props.clickHandler} />
                        <Buton name="+/-" clickHandler={props.clickHandler} />
                        <Buton name="%"  clickHandler={props.clickHandler}/>
                        <Buton name="÷" clickHandler={props.clickHandler}/>                        
                    </div>
                    <div className="ButtonPanel-Group">
                        <Buton name="7" clickHandler={props.clickHandler}/>
                        <Buton name="8" clickHandler={props.clickHandler}/>
                        <Buton name="9" clickHandler={props.clickHandler}/>
                        <Buton name="x" clickHandler={props.clickHandler}/>
                    </div>
                    <div className="ButtonPanel-Group">
                        <Buton name="4" clickHandler={props.clickHandler}/>
                        <Buton name="5" clickHandler={props.clickHandler}/>
                        <Buton name="6" clickHandler={props.clickHandler}/>
                        <Buton name="-" clickHandler={props.clickHandler}/>
                    </div>
                    <div className="ButtonPanel-Group">
                        <Buton name="1" clickHandler={props.clickHandler}/>
                        <Buton name="2" clickHandler={props.clickHandler}/>
                        <Buton name="3" clickHandler={props.clickHandler}/>
                        <Buton name="+" clickHandler={props.clickHandler}/>
                    </div>
                    <div className="ButtonPanel-Group">
                        <Buton name="0" clickHandler={props.clickHandler}/>
                        <Buton name="." clickHandler={props.clickHandler}/>
                        <Buton name="=" clickHandler={props.clickHandler}/>
                    </div>
                </div>
            </div>
        );
    }

export default ButtonPanel;