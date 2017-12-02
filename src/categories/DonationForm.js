import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class DonationForm extends PureComponent {

  static propTypes = {
    donation: PropTypes.object
  }


  constructor(props) {
    super(props);
    const { donation = {} } = props;
    
    this.state = {
      amount: donation.amount || '0-100'
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    // this.setState({ amount: event.target.value });
    // const { amount } = this.state;
    // this.props.onComplete({ amount });
    console.log('amount', this.state);
  }

  handleChange = (event) => {
    this.setState({ amount: event.target.value });
  }

  render() {
    const { amount } = this.props;

    return(
      <div>
        <form  className="form" onSubmit={this.handleSubmit}>
          <button className="button" type="submit">Schedule a Drop Off</button>
          <br/><br/><br/><br/>
          <label>Amount of milk (in ounces) being donated:&nbsp;&nbsp;</label>
          <select amount={this.state.value} onChange={this.handleChange}>
            <option value="0-100">0 - 100</option>
            <option value="101-150">101 - 150</option>
            <option value="151-200">151 - 200</option>
            <option value="201-250">201 - 250</option>
            <option value="over250">over 250</option>
          </select>
          <br/><br/><br/><br/>
          <button className="button" type="submit">Confirm Dropoff</button>
        </form>
      </div>
    );
  }
}