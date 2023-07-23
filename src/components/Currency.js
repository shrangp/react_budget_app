import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const [name, setName] = useState('');
    return (<select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
    <option defaultValue>Choose...</option>
    <option value="$ Dollar" name="marketing">$ Dollar</option>
    <option value="£ Pound" name="sales">£ Pound</option>
    <option value="€ Euro" name="finance">€ Euro</option>
    <option value="₹ Rupee" name="hr">₹ Rupee</option>
</select>);
}

export default Currency;