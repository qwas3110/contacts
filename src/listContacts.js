import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SortBy from 'sort-by';
import EscapeString from 'escape-string-regexp';


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

        const { contacts, onDelectContact } = this.props;
        const { query } = this.state;


        let showingContacts;

        if (query) {
            const match = new RegExp(EscapeString(this.state.query),'i');
            showingContacts = contacts.filter(c => match.test(c.name));
        } else {
            showingContacts = this.props.contacts;
        }

        showingContacts.sort(SortBy('name'));

        return (
            <div className='list-contacts'>
                {/*{'query:' + JSON.stringify(this.state.query)}*/}
                <div className='list-contacts-top'>
                    <input
                        type="text"
                        className='search-contacts'
                        placeholder={'search contact!'}
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                <ol className='contact-list'>
                    { showingContacts.map( (contact) => (
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
                                onClick={() => onDelectContact(contact)}
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
