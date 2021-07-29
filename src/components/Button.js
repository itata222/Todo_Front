import React from 'react'

const Button = ({content,backgroundColor,color,className}) => {
    const defaultBgColor="orange";
    const defaultColor="blue";

    return (
      <>
        <button 
          className={className}
          style={{backgroundColor:backgroundColor||defaultBgColor,color:color||defaultColor}}
        >
          {content} 
        </button>
        </>
    )
}


export default Button
