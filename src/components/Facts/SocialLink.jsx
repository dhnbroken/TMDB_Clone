import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

const SocialLink = () => {
  const { externalId, details } = useContext(GlobalContext);
  return (
    <div className="social_links">
      {externalId.facebook_id && (
        <div>
          <a className="social_link" href={`https://fb.com/${externalId.facebook_id}`} target="_blank">
            <img
              src="https://www.themoviedb.org/assets/2/v4/glyphicons/social/facebook-2c5718e4ece8eb3a3cc49ae97000e541c0aad50869b419b5aa579693bc0ad059.svg"
              alt=""
            />
          </a>
        </div>
      )}

      {externalId.twitter_id && (
        <div>
          <a className="social_link" href={`https://twitter.com/${externalId.twitter_id}`} target="_blank">
            <img
              src="https://www.themoviedb.org/assets/2/v4/glyphicons/social/twitter-a6ff8c172b8e086f4a64578cee0a16676c1a067b47a1b1b186d58795d241a852.svg"
              alt=""
            />
          </a>
        </div>
      )}

      {externalId.instagram_id && (
        <div>
          <a className="social_link" href={`https://instagram.com/${externalId.instagram_id}`} target="_blank">
            <img
              src="https://www.themoviedb.org/assets/2/v4/glyphicons/social/instagram-74e6299c864adc384258da3b3a8eb09282b7ccda4dd1dfa9a4158ba2ea8583b9.svg"
              alt=""
            />
          </a>
        </div>
      )}
      {details.homepage && (
        <div className="homepage">
          <a className="social_link" href={details.homepage} target="_blank">
            <img
              src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-351-link-5f643a86c2515cb06ea08ebc798941824f76bbcea4ed571222a81f271b30c7f3.svg"
              alt=""
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default SocialLink;
