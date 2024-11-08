import './PopUpMessage.css';

function PopUpMessage({ message, addClassParent, addClassCase }) {
    return (
        <div className={addClassParent}>
            <div className="child">
                <p className={addClassCase}>Case:{message}</p>
            </div>

        </div>
    )
}

export default PopUpMessage;