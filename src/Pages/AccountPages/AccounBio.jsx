
import { useState } from 'react';
import './accounBio.css'

const AccounBio = () => {

    const [lengthInput,setLengthInput] = useState(0)
    const changeLength = (ev) => {
        setLengthInput(ev.target.value.length);
    }

    return (
        <div className="accounBio">
            <p className='bioP'>Bio</p>
            <div className='BioAreaBlock'>
             <textarea className='BioInput' onChange={changeLength} name="bioInput" id="bioInput" cols="40" rows="2" placeholder='Bio' maxLength="150"></textarea>
             <p className='lengthBioArea'><span className='bioInputLength'>{lengthInput}</span>/<span className='bioInputLength'>150</span></p>
            </div>
        </div>
    );
}

export default AccounBio;
