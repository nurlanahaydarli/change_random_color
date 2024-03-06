


const ColorCard=({background,onChangeColor,changeColor})=>{

    return(
        <>
            <div className='color_box'>
                <div className='color_item' onClick={onChangeColor} style={{backgroundColor: `${background}`}} />
            </div>

        </>
    )
}

export default ColorCard