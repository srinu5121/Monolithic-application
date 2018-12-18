import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getCustomers, addData, DeletePerson} from '../../store/actions/customer'
import './customers.css';

class Customers extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      items: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    getCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired
  }

  static defaultProps = {
    customers: []
  }

  componentWillMount() {
    this.props.getCustomers();
  }
  handleChange(evt) {
    console.log(evt.target.value, "evt")
   this.setState({ name: evt.target.value });
 }
 handleDel(item){
   console.log(item._id)
   this.props.DeletePerson(item._id)
 }
render() {
    console.log(this.props.customers, "items")
    return (
      <div>
        <h2>Employee List</h2>
        <form onSubmit={this.handleSubmit}>
        <input type = "text"  onChange = {(evt)=> this.handleChange(evt)}/ >
        <button>Submit</button>
        </form>
        <ul>
        {this.props.customers ? this.props.customers.map(item =>
          <li key={item.id}>{item.name}{" "}<span onClick = {()=>this.handleDel(item)}>X</span></li>
        ): null}
        </ul>
      </div>
    );
  }
  handleSubmit(e) {
   e.preventDefault();
   if (!this.state.name.length) {
     return;
   }
   const newItem = {
     name: this.state.name,
     id: Date.now()
   };
   this.setState(state => ({
     items: state.items.concat(newItem),
     name: ''
   }));
   this.props.addData(newItem);
 }
}

const mapStateToProps = (state) => ({
  customers: state.customers
})

const dispatchToProps = (dispatch) => ({
   getCustomers: () => dispatch(getCustomers()),
   addData: (data) => dispatch(addData(data)),
   DeletePerson: (data) => dispatch(DeletePerson(data))
})

export default connect(mapStateToProps, dispatchToProps)(Customers);
