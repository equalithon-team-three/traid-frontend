import React, { useState } from 'react';


const FormModal = ({ closeModal, formOpen }) => {

  const initialState = {
    title: '',
    request_offer: null,
    details: '',
    // date_posted: '', 
    location: '',
    quantity: 0,
    // between items and services
    deadline: '',
    completed: false
  }

  const [state, setState] = useState(initialState)

  const clearForm = () => {
    setState(initialState);
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setState({...state, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({state});
    console.log('Posted successfully');
    closeModal();
    clearForm();
  }

  const showHideClassName = formOpen ? 'modal display-block' : 'modal display-none'

  return (

    <div className={showHideClassName}>
      <div className='class="modal-dialog" role="document"'>
        <div className='modal-main'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className="modal-title">Make a Request</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}><span aria-hidden="true">&times;</span></button>
              
            </div>
          </div>
          <div className="modal-body">
              <p>Modal body text goes here.</p>
              <form
                onSubmit={handleSubmit}
              >
                <label
                >
                  Title
                  </label>
                <input
                  type='text'
                  name='title'
                  value={state.title}
                  onChange={handleChange}>
                </input>
                <label 
                >
                  Content
                </label>
                <input 
                  type='text'
                  name='details'
                  value={state.details}
                  onChange={handleChange}>
                </input>
                <button
                >
                  Submit
                </button>
              </form>
            </div>
        </div>
      </div>
    </div>
  )

}

export default FormModal;

