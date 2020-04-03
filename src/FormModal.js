import React, { useState, useEffect } from 'react';


const FormModal = ({ showModal, closeModal, formOpen }) => {

  // const [ showForm, setShowForm ] = useState(false);



  const showHideClassName = formOpen ? 'modal display-block' : 'modal display-none'

  return (

    <div className={showHideClassName}>
      <div className='class="modal-dialog" role="document"'>
        <div className='modal-main'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 class="modal-title">Make a Request</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}><span aria-hidden="true">&times;</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default FormModal;













// <div class="modal">
//         <div class="modal-dialog" role="document">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title">Modal title</h5>
//               <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeRequestForm}>
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div class="modal-body">
//               <p>Modal body text goes here.</p>
//             </div>
//             <div class="modal-footer">
//               <button type="button" class="btn btn-primary">Save changes</button>
//               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//             </div>
//           </div>
//         </div>
//         </div>