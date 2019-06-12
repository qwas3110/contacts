import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ListContacts extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDelectContact: PropTypes.func.isRequired
    };

    state = {
      query: ''
    };

    updateQuery = (query) => {
        this.setState({query:query.trim()})
    };

    render() {
        return (
            <div className='list-contacts'>
                {'query:' + JSON.stringify(this.state.query)}
                <div className='list-contacts-top'>
                    <input
                        type="text"
                        className='search-contacts'
                        placeholder={'search contact!'}
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                <ol className='contact-list'>
                    { this.props.contacts.map( (contact) => (
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar'
                                 style={{
                                     backgroundImage: `url(${contact.avatarURL})`
                                 }}
                            />
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
                            <button
                                className='contact-remove'
                                onClick={() => this.props.onDelectContact(contact)}
                            >
                                remove
                            </button>
                        </li>
                    )) }
                </ol>
            </div>
        );
    }
}



export default ListContacts
