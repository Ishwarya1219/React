import '../css/myfirst.css'
import Myclasscomponent from './classcomponent';
//Internal or inline css
/*var Myfirstcomponent =()=>{
    const firststyle={
        backgroundColor: "black",
        color:"white",
        textAlign:"left"
    };
    return (
        <div>

            <h1 style={firststyle}>This is SKCET</h1>
            <h2>C-5 block</h2>
        </div>
    );
};
export default Myfirstcomponent;
*/

// external css
var Myfirstcomponent =()=>{
    return (
        <div>
            <Myclasscomponent className='ece'/>
            <h1 className='ece'>This is SKCET</h1>
            <h2>C-5 block</h2>
        </div>
    );
};
export default Myfirstcomponent;