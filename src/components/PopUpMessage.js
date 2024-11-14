import './PopUpMessage.css';

function PopUpMessage({ message, addClassParent, addClassCase, setCase }) {
    function close() {
        setCase('')
    }
    return (

        <div className={addClassParent}>
            <button className='close-btn' onClick={close}>X</button>

            <div className="child">
                <p className={addClassCase}>Case:{message}</p>
            </div>

        </div>

    )
}

export default PopUpMessage;
