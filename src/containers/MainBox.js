import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(){
    super()
    this.state = {
      tab: 'Profile'
    }
  }

  handleProfileClick = () => {
    this.setState(
      {
        tab: 'Profile'
      }
    )
  }

  handlePhotoClick = () => {
    this.setState(
      {
        tab: 'Photos'
      }
    )
  }

  handleCocktailsClick = () => {
    this.setState(
      {
        tab: 'Cocktails'
      }
    )
  }

  handlePokemonClick = () => {
    this.setState(
      {
        tab: 'Pokemon'
      }
    )
  }

  setDetailsToDisplay = () => {
    if(this.state.tab === 'Profile'){
      return Profile()
    } else if(this.state.tab === 'Photos'){
      return Photos()
    } else if(this.state.tab === 'Cocktails'){
      return Cocktails()
    } else if(this.state.tab === 'Pokemon'){
      return <Pokemon />
    }
  }


  render() {



    const detailsToDisplay = <div>{this.setDetailsToDisplay()}</div>


    return (
      <div>
        <MenuBar
          clickProfile = {this.handleProfileClick}
          clickPhotos = {this.handlePhotoClick}
          clickCocktails = {this.handleCocktailsClick}
          clickPokemon = {this.handlePokemonClick}
          />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
