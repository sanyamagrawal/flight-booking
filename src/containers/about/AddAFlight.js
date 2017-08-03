import React from 'react';
import _partialRight from 'lodash/partialRight';

class AddAFlight extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      to: '',
      fromA: '',
      departureTime: '',
      landingTime:'',
    };
  }

  onInputFieldChange = (event, field) => {
      this.setState({
          [field]: event.target.value
      });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  
    this.props.addFlightRow(this.state);
  }

  render() {
    const { to, fromA, departureTime, landingTime } = this.state;
    
    return (
      <div className="container col-md-12">
        <form onSubmit={this.onFormSubmit} className="col-md-8 card">
        <div className="card-block">
          <div className="form-group">
            <label for="to">To</label>
            <input type="text" className="form-control" value={to} placeholder="To" onChange={_partialRight(this.onInputFieldChange, 'to')}/>
          </div>
           <div className="form-group">
            <label for="From">From</label>
            <input type="text" className="form-control" value={fromA} placeholder="From" onChange={_partialRight(this.onInputFieldChange, 'fromA')}/>
          </div>
           <div className="form-group">
            <label for="departureTime">Departure</label>
            <input type="text" className="form-control" value={departureTime} placeholder="Departure" onChange={_partialRight(this.onInputFieldChange, 'departureTime')}/>
          </div>
           <div className="form-group">
            <label for="landingTime">Arrival</label>
            <input type="text" className="form-control" value={landingTime} placeholder="landingTime" onChange={_partialRight(this.onInputFieldChange, 'landingTime')}/>
          </div>
          <input type="submit" className="btn btn-primary" />
        </div>
          
      </form>
      </div>
      
    );
  }
}

export default AddAFlight;