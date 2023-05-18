import React from 'react';
export interface ButtonInterface{
    kind:string,
    id?:string,
    name?:string,
    value?:string,
    disabled?:boolean,
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    label:string,
    type?:"button" | "submit" | "reset",
}
const Button = (props:ButtonInterface) => {
   return (
      <button className={`btn btn--${props.kind} CTA`}
        data-id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onClick={props.handleClick}> 
           <h4>{props.label}</h4>
      </button>
   )
}
export default Button;