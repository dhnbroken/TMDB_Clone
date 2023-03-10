import React from 'react';
import { Link } from 'react-router-dom';

const RightInfo = () => {
  return (
    <div className="white_column">
      <section>
        <div className="title">
          <h2 className="title">
            <a href="/person/1253360-pedro-pascal">Pedro Pascal</a>
          </h2>
        </div>
      </section>
      <section className="full_wrapper">
        <h3>Biography</h3>
        <div className="biography true">
          <div className="content fade_text">
            <div className="text initial">
              <p>
                José Pedro Balmaceda Pascal (born April 2, 1975) is a Chilean-American actor. After nearly two decades
                of taking small roles in film and television, Pascal rose to prominence for portraying Oberyn Martell
                during the fourth season of the HBO fantasy series Game of Thrones (2014) and as Javier Peña in the
                Netflix crime series Narcos (2015–2017). Since 2019, he has starred as the title character in the
                Disney+ Star Wars series The Mandalorian and reprised his role in the spin-off series The Book of Boba
                Fett (2022). Since 2023, he has played Joel in the HBO drama series The Last of Us.
              </p>
              <p>
                He has appeared in the films The Adjustment Bureau (2011), The Great Wall (2016), Kingsman: The Golden
                Circle (2017), The Equalizer 2 (2018), Triple Frontier (2019), Wonder Woman 1984 (2020), and The
                Unbearable Weight of Massive Talent (2022).
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="full_wrapper">
        <div className="known_for">
          <h3>Known For</h3>
          <div className="scroller_wrap should_fade is_fading">
            <ul className="horizontal_media_list scroller">
              <li class="account_adult_false item_adult_false">
                <div class="image">
                  <Link to="">
                    <img
                      className="poster"
                      src="https://image.tmdb.org/t/p/w150_and_h225_bestv2/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <p>
                  <Link class="title" to="">
                    The Mandalorian
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RightInfo;
