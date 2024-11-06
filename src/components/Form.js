import { useState } from 'react'


function Form() {
    const [forms, setForms] = useState({
        name: '',
        age: '',
        jobTitle: '',
        workFor: '',
        phoneNumber: '',
        address: '',
        yourSalary: '',
        reson: '',
    });
    return (
        <div className='form-container'>
            <form>
                <h1>BANK-MMAAHH</h1>
                <h2>Bank loan form</h2>

                <hr />

                <div>
                    <label>Name: </label>
                </div>
                <input value={forms.name}
                    onChange={(e) => {
                        setForms({ ...forms, name: e.target.value })

                    }} />
                <hr />
                <div>
                    <label>Age: </label>
                </div>
                <input value={forms.age}
                    onChange={(e) => {
                        setForms({ ...forms, age: e.target.value })

                    }} />
                <hr />
                <div>
                    <label>Job title: </label>
                </div>
                <input value={forms.jobTitle}
                    onChange={(e) => {
                        setForms({ ...forms, jobTitle: e.target.value })

                    }} />
                <hr />
                <div>
                    <label>Work for: </label>
                </div>
                <input value={forms.workFor}
                    onChange={(e) => {
                        setForms({ ...forms, workFor: e.target.value })

                    }} />
                <hr />
                <div>
                    <label>Phone number: </label>
                </div>
                <input value={forms.phoneNumber}
                    onChange={(e) => {
                        setForms({ ...forms, phoneNumber: e.target.value })

                    }} />
                <hr />
                <div>
                    <label>Address: </label>
                </div>
                <input value={forms.address}
                    onChange={(e) => {
                        setForms({ ...forms, address: e.target.value })

                    }} />
                <hr />
                <div>
                    <label>Your salary: </label>
                </div>
                <input value={forms.yourSalary}
                    onChange={(e) => {
                        setForms({ ...forms, yourSalary: e.target.value })

                    }} />
                <hr />
                <div>
                    <label>Why you need this loan: </label>
                </div>
                <input value={forms.reson}
                    onChange={(e) => {
                        setForms({ ...forms, reson: e.target.value })

                    }} />
                <hr />
                <button>sub</button>
            </form>


        </div>
    )
}

export default Form;