import React, { useState, useEffect } from 'react'
import './UpdateModal.scss'
import { UPDATE_USER } from '../Resolvers'
import { useMutation } from '@apollo/react-hooks'


const UpdateModal = (props) => {

    // const [ visibility, setVisibility ] = useState(false)
    const [ updateUser ] = useMutation(UPDATE_USER)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormInput({
          ...formInput,
          [name]: value
          })
        }

    const [formInput, setFormInput] = useState({
        bio: '',
        status: '',
        github: '',
        linkedin: '',
        twitter: ''
        })

    const handleSubmit = () => {
        updateUser({
            variables: {
               id: props.id,
               ...formInput
            }
        })
        props.setOpen(false)
    }

  return(
    <div className="update-user-modal">

        <button onClick={() => props.setOpen(false)}>
            Close
        </button>

        <h1>Update User Info</h1>

            <form>
                
                <h2>Bio:</h2>
                    <input 
                        type='text'
                        name='bio'
                        placeholder='Update Bio...'
                        value={formInput.bio}
                        onChange={(e) => handleChange(e, setFormInput, formInput)}
                    />

                <h2>Status:</h2>
                    <input 
                        type='text'
                        name='status'
                        placeholder='Update Status...'
                        value={formInput.status}
                        onChange={(e) => handleChange(e, setFormInput, formInput)}
                    />

                <h2>GitHub:</h2>
                    <input 
                        type='text'
                        name='github'
                        placeholder='Update GitHub...'
                        value={formInput.github}
                        onChange={(e) => handleChange(e, setFormInput, formInput)}
                    />

                <h2>LinkedIn:</h2>
                    <input 
                        type='text'
                        name='linkedin'
                        placeholder='Update LinkedIn...'
                        value={formInput.linkedin}
                        onChange={(e) => handleChange(e, setFormInput, formInput)}
                    />

                <h2>Twitter:</h2>
                    <input 
                        type='text'
                        name='twitter'
                        placeholder='Update Twitter...'
                        value={formInput.twitter}
                        onChange={(e) => handleChange(e, setFormInput, formInput)}
                    />

            </form>

        <div className="update-submit-button">
            <button onClick={handleSubmit}>Submit</button>
        </div>
</div>

  )

}

export default UpdateModal