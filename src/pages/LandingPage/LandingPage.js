import React from 'react';
import Hero from '../../components/Hero';
import landingImage from '../../assets/index';
import SearchForm from '../../components/SearchForm';
import Footer from '../../components/Footer';
import {FaGlassMartini, FaCoffee} from 'react-icons/fa';
import {GiKnifeFork} from 'react-icons/gi';
import s from '../../sass/layout/LandingPage.module.scss';

export default function LandingPage(props) {
  const handleSearch = (lat, lng, type) => {
    props.history.push(`/results/search?type=${type}&lat${lat}&lng=${lng}`);
  };

  return (
    <section className={s.LandingPage}>
      <Hero imgSource={landingImage}>
        <header>
          <h1>Totpots</h1>
          <p>For parents, by parents</p>
        </header>
        <SearchForm onSearch={handleSearch} />
      </Hero>
      <section className={s.onBoarding}>
        <header>
          <h2>Finally, a review app for parents!</h2>
        </header>
        <div className={s.cardContainer}>
          <div className={s.card}>
            <FaGlassMartini />
            <div className={s.cardContent}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                accusamus voluptatum obcaecati cupiditate illum delectus
                blanditiis molestias voluptate reprehenderit non culpa ea
                mollitia, reiciendis debitis quo dolores sit quam! Adipisci!
              </p>
            </div>
          </div>
          <div className={s.card}>
            <FaCoffee />
            <div className={s.cardContent}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt aspernatur molestias eius fuga reprehenderit, placeat
                ullam eos magni unde optio quos minima corrupti. Ullam veniam
                animi dolor, ducimus minus numquam!
              </p>
            </div>
          </div>
          <div className={s.card}>
            <GiKnifeFork />
            <div className={s.cardContent}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                distinctio maiores dolore sit ratione eveniet, quisquam
                voluptates perferendis natus excepturi non unde, accusantium
                delectus aperiam rem repellat laudantium totam recusandae.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
