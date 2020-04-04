import React, { useState, useEffect } from 'react';

import Form from './Form'


const FormModal = ({ showModal, closeModal, formOpen }) => {


  const showHideClassName = formOpen ? 'modal display-block' : 'modal display-none'

  return (

    <div className={showHideClassName}>
      <div className="modal-dialog" role="document">
        <div className='modal-main'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className="modal-title">Make a Request</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}><span aria-hidden="true">&times;</span></button>
              
            </div>
          </div>
          <div className="modal-body">
              <p>Modal body text goes here.</p>
              
              <Form />

            </div>
        </div>
      </div>
    </div>
  )

}

export default FormModal;

