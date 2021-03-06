import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

    clearQuery = () => {
        this.setState({query: ''})
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

                    <Link className='add-contact'
                          to='/create'
                          >
                        Add Contact
                    </Link>
                </div>

                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now Showing {showingContacts.length} of {contacts.length} total</span>
                        <button onClick={this.clearQuery}>
                            Show all
                        </button>
                    </div>
                )}
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
