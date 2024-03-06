import {color_list} from "../../Constants/constan";
import ColorCard from "../ColorCard/ColorCard";
import {useState} from "react";



const ColorContainer=()=>{
    const [changeColor, setChangeColor]=useState()
    function handleChangeColor(i){
        let randomColor= color_list[Math.floor(Math.random()*color_list.length)];
        setChangeColor(color_list[i]=randomColor)
    }
    return(
        <>
            <div className="color_container">
                {color_list.map((item,i)=>(
                    <ColorCard changeColor={changeColor} onChangeColor={()=>handleChangeColor(i)} key={i} background={item}  />
                ))}
            </div>
        </>
    )
}

export default ColorContainer