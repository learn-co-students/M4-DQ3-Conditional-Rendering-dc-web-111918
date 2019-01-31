import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeElement: 'profile'
    }
  }

  changeState = (e) => {
    this.setState({activeElement: e.target.id})
  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    // detailsToDisplay = () => {
    //   switch (this.state.activeElement){
    //     case 'profile':
    //       return <Profile />
    //     case 'profile':
    //       return <Profile />
    //   }
    // }

    return (
      <div>
        <MenuBar activeElement={this.changeState}/>
        <Profile />
      </div>
    )
  }

}

export default MainBox
