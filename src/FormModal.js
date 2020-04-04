import React, { useState, useEffect } from 'react';


const FormModal = ({ showModal, closeModal, formOpen }) => {

  const [formInfo, setFormInfo] = useState(
    { title: '', request_offer: null, details: '', date_posted: '', location: '', quantity: 0, deadline: '', completed: null }
    //hello
  )

  const handleChange = (e) => {
    console.log(e.target.value)
    setFormInfo({...formInfo, [e.target.name]: e.target.value})
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
              <form>
                <input 
                  type='text'
                  name='name'
                  value={formInfo.name}
                  onChange={handleChange}>
                </input>
              </form>
            </div>
        </div>
      </div>
    </div>
  )

}

export default FormModal;

