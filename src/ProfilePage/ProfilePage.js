import React, { useState, useEffect } from 'react';
import ApiService from '../services/api-service';
import s from './ProfilePage.module.css';
import Favorite from '../Favorite/Favorite';
import UserReview from '../UserReview/UserReview';

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

  function handleRemoveFavorite(id) {
    let newFavorites = favorites.filter(favorite => {
      return favorite.venueid !== id;
    });
    setFavorites(newFavorites);
  }

  function handleDeleteReview(id) {
    let newReviews = reviews.filter(review => {
      return review.id !== id;
    });
  }

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
        <ul className={s.favorites}>
          {favorites.map(favorite => {
            return (
              <Favorite
                key={favorite.venueid}
                deleteFavorite={handleRemoveFavorite}
                favorite={favorite}
              />
            );
          })}
        </ul>
      )}

      {showReviews && (
        <ul className={s.reviews}>
          {reviews.map(review => {
            console.log(review);
            return <UserReview key={review.id} review={review} />;
          })}
        </ul>
      )}
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
