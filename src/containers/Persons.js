import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from './actions';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePersonstore(person.id)}/>
                ))}

                 
            </div>
        );
    }
}
     const mapStatetoProps = state => {
        return{
            prs: state.persons
            
        };
    };

    const mapDispatchtoProps = dispatch => {
        return{
            onAddPerson: () =>dispatch ({type: actionType.ADD_PERSON}),
            onDeletePersonstore: (id) => dispatch(id) ({type: actionType.DELETE_PERSON, personId: id })
        };

   };





export default connect(mapStatetoProps, mapDispatchtoProps)(Persons); 