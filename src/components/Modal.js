import React from 'react';

const Modal = ({setShowModal,text}) => {
    return (
        <div className="modal">
            <div className='modal-content'>
                <h4>{text}</h4>
                <button onClick={()=>setShowModal(false)}>Great</button>
            </div>
        </div>
    )
}


export default Modal