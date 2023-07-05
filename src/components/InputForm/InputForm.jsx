import React from 'react'

const InputForm = ({text, handleSubmit, handleInput}) => {
  return (
    <label>
      <input type="text" value={text} onChange={(e)=> handleInput(e.target.value)} />

    <button onClick={handleSubmit}>додати до списку</button></label>
  )
}

export default InputForm
