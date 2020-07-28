import React, { useState, useEffect } from 'react';
import ApiService from '../services/api-service';
import s from './ProfilePage.module.css';

//TODO: Update reviews so that only one review can be made per user (then, conditionally render edit button on venue page instead of "write review"
//Todo: Refactor the page:
//! convert to functional component
//! Display user info
//First Name, Last Name, Email, Option to edit
//Total Reviews, Total Karma would be cool.
//! Display basicVenueInfo
//! Display all review info for venue
//! Link review/venue to detailed venue page
//! Edit user info (name, email, password)

//Keep it simple!
const ProfilePage = props => {
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  let [showReviews, setShowReviews] = useState(false);
  let [reviews, setReviews] = useState([]);
  let [favorites, setFavorites] = useState([]);

  useEffect(() => {
    ApiService.getProfile()
      .then(res => {
        setReviews(res.reviews);
        setFavorites(res.favorites);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <section style={{ marginTop: '100px' }} className={s.profilePage}>
      <div className={s.profileCard}>
        <h3>Daniel Nichols</h3>
        <p>herrnichols@gmail.com</p>
        <button>Edit Profile</button>
        <div className={s.userStats}>
          <div>
            <p>Total reviews: 32</p>
          </div>
          <div>
            <p>Total Karma: 123</p>
          </div>
        </div>
      </div>

      <div className={s.displayControls}>
        <button onClick={() => setShowReviews(!showReviews)}>
          Show Reviews
        </button>
      </div>

      {!showReviews && (
        <div className={s.favorites}>
          <ul>
            <li>
              FullSteam
              <button>remove favorites</button>
            </li>
            <li>
              Beer Study
              <button>remove favorites</button>
            </li>

            <li>
              Early Bird
              <button>remove favorites</button>
            </li>
            <li>
              GugleHupf
              <button>remove favorites</button>
            </li>
            <li>
              Museaum of Life and science
              <button>remove favorites</button>
            </li>
          </ul>
        </div>
      )}

      {showReviews && (
        <div className={s.reviews}>
          <div className={s.reviewComponent}>
            <div className={s.venueInfo}>
              <h3>Bull McCabe's</h3>
              <p>Price Level: 1/5</p>
              <p>Google Rating: 1/5</p>
              <p>1 800 yeet</p>
              <p>Bar | Restaurant</p>
              <p>106 main St</p>
              <p>Directions</p>
              <p>Website</p>
            </div>

            <div className={s.review}>
              <div>
                <p>Rating: 1/5</p>
                <p>Volume: 1/5</p>
              </div>
              <div className={s.content}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                  excepturi odio aperiam blanditiis pariatur, numquam
                  dignissimos maxime doloribus perferendis architecto iste
                  quaerat soluta velit libero fugit quibusdam neque
                  exercitationem minus?
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={s.userReviews}></div>
    </section>
  );
};
// export default class ProfileView extends React.Component {
// static contextType = venuesContext;
// componentDidMount() {
//   this.context.clearError();
//   ApiService.getProfile()
//     .then(profile => {
//       this.context.setProfile(profile);
//     })
//     .catch(this.context.setError);
// }
// componentWillUnmount() {
//   this.context.clearError();
// }
// renderError() {
//   let error = this.context.error;
//   if (this.context.error) {
//     return (
//       <div className="error">
//         <p>Sorry something has gone wrong. {error.error}</p>
//       </div>
//     );
//   }
// }
// render() {
//   const { profile } = this.context;
//   return (
//     <section className="profileview">
//       <header>
//         <h3>Your Profile</h3>
//       </header>
//       <div role="alert">{this.renderError()}</div>
//       <div className="profile_info">
//         <p>
//           Name: {profile.first_name} {profile.last_name}
//         </p>
//         <p>Email: {profile.email}</p>
//         <p>UserName: {profile.username}</p>
//       </div>
//       <div>
//         <FavoritesList></FavoritesList>
//       </div>
//       <div>
//         <ReviewsList></ReviewsList>
//       </div>
//     </section>
//   );
// }
// }

export default ProfilePage;
