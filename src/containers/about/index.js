import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import AddAFlight from './AddAFlight';

const columns = [{
  Header: 'To',
  accessor: 'to' // String-based value accessors! 
}, {
  Header: 'From',
  accessor: 'fromA' // String-based value accessors! 
},{
  Header: 'Departure Time',
  accessor: 'departureTime' // String-based value accessors! 
},{
  Header: 'Landing Time',
  accessor: 'landingTime' // String-based value accessors! 
}];

const data = [{
  to: 'Kathmandu',
  fromA: 'India',
  departureTime: '17:00',
  landingTime: '19:00'
}];

class About extends React.PureComponent {
  constructor(props){
    super(props);

    this.state = {
      rows: data
    }
  }

  onAddNewFlightForm = (flightRow) => { 
    this.setState({
      rows: this.state.rows.concat([flightRow])
    });
  }

  render() {
    return (
      <div className="container">
        <input type="button" onClick={this.onAddNewFlightForm} />
        <ReactTable
          data={this.state.rows}
          columns={columns}
        />
        <AddAFlight addFlightRow={this.onAddNewFlightForm.bind(this)} />
      </div>
    );
  }
}

export default About;
