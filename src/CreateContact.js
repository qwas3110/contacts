import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageInput from './ImageInput';
import serialize from 'form-serialize'



class CreateContact extends Component {

    onSubmitCreate = (e) => {
        e.preventDefault();
        const value = serialize(e.target, {hash:true});
        if (this.props.onCreateContact) {
            this.props.onCreateContact(value)
        }
    };


    render() {
        return (
            <div>
                <Link className='close-create-contact'
                      to='/'
                />
                <form className='create-contact-form'
                      onSubmit={this.onSubmitCreate}
                      >
                    <ImageInput className='create-contact-avatar-input'
                                name='avatarURL'
                                maxHeight={64}
                    />
                    <div className='create-contact-details'>
                        <input type="text" name='name' placeholder='Name'/>
                        <input type="text" name='email' placeholder='Email'/>
                        <button>Add Contact</button>
                    </div>
                </form>

            </div>
        );
    }
}


export default CreateContact;


