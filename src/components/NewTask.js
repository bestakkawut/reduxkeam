import React,{Fragment, Component} from "react"
import { connect } from 'react-redux';



// export default class NewTask extends Component{
//     render(){

//         return(
//             <Fragment>
//                 <div>
//                 <h1>NewTask</h1>
//                 </div>
//                 <div>
//                     <input type="text" placeholder="Title"/>
//                     <br></br>
//                     <textarea placeholder="description"></textarea>
//                     <button>complete</button>
//                     <button onClick={()=>dispa} >cancle</button>
//                 </div>
//             </Fragment>
//         );
//     }
// }

const NewTask = ({dispatch}) =>(
    <Fragment>
        <div>
            <h1>NewTask</h1>
        </div>
        <div>
            <input type="text" placeholder="Title"/>
            <br></br>
            <textarea placeholder="description"></textarea>
            <button>complete</button>
            <button onClick={()=>dispatch({type:"ADD",newTask:{title:"This is Title",description:"This is Description",complete:false}  })} >cancle</button>
        </div>
    </Fragment>
)

const NewTaskWithConnect = connect()(NewTask)

export default NewTaskWithConnect;