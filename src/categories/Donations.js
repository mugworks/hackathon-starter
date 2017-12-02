import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addMilk, loadMilk } from './actions';
import DonationForm from './DonationForm';

class Donations extends PureComponent {


  handleAdd = donation => {
    this.props.addMilk(donation);
  }

  
  render() {
    const { donations } = this.props;
    return (
      <div>
        <DonationForm onComplete={this.handleAdd}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('in connect', state);
  return {
    donations: state
  };
}

export default connect(
  mapStateToProps,
  { addMilk, loadMilk }
)(Donations);