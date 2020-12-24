import React, {useState} from 'react'
import TapHeader from "../components/TapHeader"
import Email from "../components/Email"
import Cards from "../components/Cards"

class Tap extends React.Component {
    render(){
        const [mode, setMode] = useState("email")
        
        const changeToCard = () => {
          setMode("card")
        }
  
        if(mode==='email'){
          return (
              <div>
                 <TapHeader mode={setMode}/>
                 <Email mode={setMode}/>
              </div>
          )
      }
      else if(mode==='card')
      
      return (
          <div>
             <TapHeader mode={setMode}/>
             <Cards mode={setMode}/>
          </div>
      )
    }
    
}


ReactDOM.render(
    <Tap />,
    document.getElementById('root')
  );