import React from 'react'

const FormRowSelect = ({ labelText, name, value, onChange, optionList }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className='form-label'>
        {labelText=== '*'? '' : labelText || name}
      </label>
      <select name={name} value={value} id={name}
        onChange={onChange} className='form-select'>
        {optionList.map((item, index) => {
          return <option key={index} value={item.login}>{item.name}
            </option>
        })}
      </select>
    </div>)
}

export default FormRowSelect