// import { Children } from "react";
import "./App.css";
import { SuperButon } from "./SuperButton";





export default function SuperForm ({title,children,}){
    console.log("Antes del render de SuperForm");
    return(
        <>
        
        <h1>{title}</h1>
        {children}
        {/* {SuperButon({buttonText:"Boton Agreagado SuperFormButtom"})} <<<<<es lo 
        miusmo>>>>></es> */}
        <SuperButon/>
        
        </>
    )

}
