export default function SuperForm ({title, children, superButton}){
    //console.log(props);
    // console.log('antes del render de superform');
    return (
        <>
            <h1>{title}</h1>
            {children[0]}
            { superButton({buttonText: 'SuperFormButtom'}) }
           
        </>
    )
}
