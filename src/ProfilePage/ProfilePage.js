import React, { useState, useEffect } from 'react';
import ApiService from '../services/api-service';
import s from './ProfilePage.module.css';
import Favorite from '../Favorite/Favorite';
import UserReview from '../UserReview/UserReview';
import { MdEdit } from 'react-icons/md';

//TODO: Update reviews so that only one review can be made per user (then, conditionally render edit button on venue page instead of "write review"
//Todo: Refactor the page:
//! Display basicVenueInfo
//! Display all review info for venue
//! Link review/venue to detailed venue page
//! Edit user info (name, email, password)

//Keep it simple!
const ProfilePage = props => {
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  let [showReviews, setShowReviews] = useState(true);
  let [reviews, setReviews] = useState([]);
  let [favorites, setFavorites] = useState([]);
  let [user, setUser] = useState({});

  useEffect(() => {
    ApiService.getProfile()
      .then(res => {
        console.log(res);
        setReviews(res.reviews);
        setFavorites(res.favorites);
        setUser(res.user);
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
    <section className={s.profilePage}>
      <header>
        <h2>Profile</h2>
      </header>
      <div className={s.profileCard}>
        <div className={s.profileHeader}>
          <h3>
            {user.first_name} {user.last_name}
          </h3>
          <button>
            <MdEdit />
            <span>Edit Profile</span>
          </button>
          <p>{user.email}</p>
        </div>
        <div className={s.userStats}>
          {user.count > 0 && <p>Total Reviews: {user.count}</p>}
        </div>
      </div>

      <div className={s.activityList}>
        <nav className={s.tabNav}>
          <ul>
            <li onClick={() => setShowReviews(false)}>Favorites</li>
            <li onClick={() => setShowReviews(true)}>Reviews</li>
          </ul>
        </nav>

        {!showReviews && (
          <ul className={s.favorites}>
            <h3>Favorite Spots</h3>

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
            <h3>Review History</h3>
            {reviews.map(review => {
              console.log(review);
              return <UserReview key={review.id} review={review} />;
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ProfilePage;
