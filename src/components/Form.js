import { useState } from 'react'
import PopUpMessage from './PopUpMessage';



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
    const [caseComponent, setCaseComponent] = useState('')
    const btnIsDisable = forms.name === ''
        || forms.age === ''
        || forms.jobTitle === ''
        || forms.workFor === ''
        || forms.phoneNumber === ''
        || forms.address === ''
        || forms.yourSalary === ''
        || forms.reson === '';
    console.log('des case', btnIsDisable)

    function testAndPopUI(e, patern, message) {
        const reg = new RegExp(patern);
        if (!reg.test(e.target.value)) {
            console.log(reg.test(e.target.value), 'wrong => its not num')

            setCaseComponent(<PopUpMessage message={message}
                addClassParent={"parent-fallen parent"}
                addClassCase={'fallen'}
                setCase={setCaseComponent}
            />)

        }
    }

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




                        const reg = new RegExp('[0-9]+$');

                        //here we see what is hapend
                        console.log('form state>>', forms.name)
                        console.log('form state dir check>>', forms.name.match(/[0-9]/ig));// that is return what we need 

                        if (reg.test(forms.name.match(reg))) {
                            console.log(reg.test(e.target.value), 'wrong => its not str had num')

                            setCaseComponent(<PopUpMessage message={'WRONG INPUT "NOT NAME, HAS NUMBER IN IT"'}
                                addClassParent={"parent-fallen"}
                                addClassCase={'fallen'}
                                setCase={setCaseComponent}
                            />)

                        }

                    }} />
                <hr />
                <div>
                    <label>Age: </label>
                </div>
                <input value={forms.age}
                    onChange={(e) => {
                        setForms({ ...forms, age: e.target.value })



                        testAndPopUI(e, '^[0-9]+$', 'WRONG INPUT "NOT NUMBER"')


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


                        testAndPopUI(e, '^[0-9]+$', 'WRONG INPUT "NOT NUMBER"')

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

                        testAndPopUI(e, '^[0-9]+$', 'WRONG INPUT "NOT NUMBER"')
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
                <button id="submit"
                    disabled={btnIsDisable}
                    onClick={(e) => {
                        e.preventDefault()
                        setCaseComponent(<PopUpMessage message={'SUBMIT SUCCESSFULLY'}
                            addClassParent={"parent-succeed"}
                            addClassCase={'succeed'}
                        />)
                        console.table(forms)
                        setTimeout(() => {
                            setCaseComponent('')
                        }, 2000);

                    }}>sub</button>
            </form>

            {caseComponent}

        </div>
    )
}

export default Form;