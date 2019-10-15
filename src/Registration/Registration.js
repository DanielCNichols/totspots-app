import React from 'react'

export default function Registration() {

  return (
 <section>
    <header>
      <h2>Create New Account</h2>
    </header>

    <form action="">
      <fieldset>
        <label htmlFor="Name">Name
          <input type="text" placeholder="Jon Doe" required/>
        </label>
        <label htmlFor="email">Email
          <input type="text" name="email" id="email" placeholder="jon.doe@mindspring.com"/>
        </label>
        <label htmlFor="City">City
          <input type="text" placeholder="Durham"/>
        </label>
        <label htmlFor="state">State
          <input type="text" name="state" id="state" placeholder="NC" required max-length="2"/>
        </label>
        <label htmlFor="UserName">User Name
          <input type="text" placeholder="jdoe1234!" required/>
        </label>
        <label htmlFor="password">Password
          <input type="text" name="password" id="password"/>
        </label>
        <label htmlFor="confirm">Confirm Password
          <input type="text" name="confirm" id="confirm"/>
        </label>
      </fieldset>
      <button>Submit</button>
      <button>Cancel</button>
    </form>
  </section>
  )
}