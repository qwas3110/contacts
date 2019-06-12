// import React, { Component } from 'react';
import React from 'react';

function ListContacts(props) {
    return (
        <ol className='contact-list'>
            { props.contacts.map( (contact) => (
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
                    <button className='contact-remove'>
                        remove
                    </button>
                </li>
            )) }
        </ol>
    )
}



// class ListContacts extends Component {
//
//     render() {
//         console.log('Props:',this.props);
//         return (
//             <ol className='contact-list'>
//                 { this.props.contacts.map( (contact) => (
//                     <li key={contact.id} className='contact-list-item'>
//                         <div className='contact-avatar'
//                              style={{
//                                  backgroundImage: `url(${contact.avatarURL})`
//                              }}
//                         />
//                         <div className='contact-details'>
//                             <p>{contact.name}</p>
//                             <p>{contact.email}</p>
//                         </div>
//                         <button className='contact-remove'>
//                             remove
//                         </button>
//                     </li>
//                 )) }
//             </ol>
//         );
//     }
// }


export default ListContacts
