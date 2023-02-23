// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: false}

  onClickMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  getText = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'Dark Mode' : 'Light Mode'
  }

  render() {
    const {isDarkMode} = this.state
    const getText = this.getText()
    const getMode = isDarkMode ? 'light-mode' : 'dark-mode'

    return (
      <div className="bg-cont">
        <div className={`container ${getMode}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onClickMode}>
            {getText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
