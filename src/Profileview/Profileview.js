import React from 'react';

export default function ProfileView() {

  return( 
    <section class="filter-search">
    <header>
      <h2>Your Account</h2>
    </header>
    <div class= "profile">      <div class="avatar">
        <img src='/' alt="placeholder"/>
      </div>
      <div class="profile-info">
        <p>Name: Kelley Breeze</p>
        <p>Email: kbreezy354@gmail.com</p>
        <p>City: Durham</p>
        <p>State: NC</p>
        <button>Edit profile</button>
      </div>
    </div>
  </section>

  // Will need to map over the saved places (reuse results component) and the reviews(reuse reviews component)
  )
}