import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }
  onEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  onPasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }
  
  onFormSubmit() {

  }
  
  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>

          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" className="form-control" value={email} placeholder="Enter email" onChange={this.onEmailChange}/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" className="form-control" value={password} placeholder="Password" onChange={this.onPasswordChange}/>
          </div>
        <input type="submit" className="btn btn-primary" />
      </form>
      </div>
      
    );
  }
}

// const Home = props => (
//   <div>
    
//     <h1>Home</h1>
//     <p>Count: {props.count}</p>

//     <p>
//       <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
//       <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
//     </p>

//     <p>
//       <button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</button>
//       <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
//     </p>

//     <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
//   </div>
// )

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
