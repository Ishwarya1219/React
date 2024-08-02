import React from "react"; // jsx code convert into react three parameters(tag,styling,content)

/*var Funcom =()=>{
    return React.createElement("h1",null,'This is a functional Compoenent')
    //return <h1>This is a functional Compoenent</h1>
}
export default Funcom;
*/
//const root= ReactDOM.createRoot(document.getElementById(root))
// root.render(<App/>);

var Funcom=(props)=>{
    return <h1>hi,{props.name}</h1>
}

