import React from "react";
import styles from "./FormsControls.module.css"

export const Textarea = ({meta, ...props}) => {

    return (
         <div>
        <div>
            <textarea required {...props}/>
        </div>
        </div>
    )
}