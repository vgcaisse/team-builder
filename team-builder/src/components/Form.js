import React from 'react'

export default function MemberForm(props) {
  const { values, update, submit } = props

  const onChange = evt => {
    const name = evt.target.name;
    const { value } = evt.target;
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>

        <label>Username
              <input
                name="username"
                type="text"
                placeholder="Wasss yer name"
                maxLength='30'
                value={values.username}
                onChange={onChange}
              />
        </label>

        <label>Email
            <input
                name="email"
                type="text"
                placeholder="Wass yer hhmail"
                maxLength='30'
                value={values.email}
                onChange={onChange}
            />
        </label>

        {/* <label>Role</label> */}

        <div className='submit'>
          <button>submit</button>
        </div>
        
      </div>
    </form>
  )
}
