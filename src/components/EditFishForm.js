import React from "react";
import PropTypes from 'prop-types'

class EditFishForm extends React.Component {

    static propTypes = {

      fish: PropTypes.shape({
        name: PropTypes.string, 
        image: PropTypes.string,
        price: PropTypes.number, 
        status: PropTypes.string,
        desc: PropTypes.string
      }),
      index: PropTypes.string,
      updatedFish: PropTypes.func
    }

    handleChange = (event) => {
        console.log(event.currentTarget.name);
        const updatedFish = {
            ...this.props.fish
        }
        updatedFish[event.currentTarget.name] = event.currentTarget.value;
        this.props.updateFish(this.props.index, updatedFish)
    }

    handleClick = () => {
      this.props.deleteFish(this.props.index);
    }

  render() {
    return (
      <div className="fish-edit">
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          name="price"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        ></textarea>
        <input
          name="image"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button type='submit' onClick={this.handleClick}>Delete Fish</button>
      </div>
    );
  }
}

export default EditFishForm;
