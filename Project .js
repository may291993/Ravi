import React, {component} from 'react'

const listValues = ['A','B','C'];
const App = () => (
    <SimpleList list={mylist} />
);
const SimpleList = ({ list }) => (
    <ul>
        {list.map(item => (
            <li key={item}>{item}</li>
        ))}
      </ul>  
);

export default React.createClass({
  render() {
    return <div>
        <div onClick={()=>this.radioClicked("Full Sleeve")}>Full Sleeve</div>
    </div>
  }
})

    class App extends React.Component{
         onSubmitClick(){
         console.log("submit clicked")
        }
    }







  
    



    

