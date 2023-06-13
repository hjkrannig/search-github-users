import React, { Fragment } from 'react'
const FormRow = ({ name, type, value, onChange, labelText, placeHolder }) => {
  return (
    <Fragment>
      {/* form-field */}
      <div className='form-row'>
        <label htmlFor={name} className='form-label' >
          {labelText === '*' ? '' : labelText || name}
        </label>

        <input
          type={type}
          value={value}
          name={name}
          id={name}
          onChange={onChange}
          className='form-input'
          placeholder={placeHolder || name}
        />
      </div>
    </Fragment>
  )
}

export default FormRow