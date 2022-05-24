import React, {Component} from 'react';

class Sauce extends Component {

  render() {
    return (
      <div className="ingridients__sauce">
        <p>Basic sauce:</p>

        <label className="radio ingridients__input">
          <input type="radio" name="sauce" value="tomato" checked/>
          <span>Tomato</span>
        </label>
        <label className="radio ingridients__input">
          <input type="radio" name="sauce" value="creamy"/>
          <span>Сливочный</span>
        </label>
      </div>
    );
  }
}

export default Sauce;
