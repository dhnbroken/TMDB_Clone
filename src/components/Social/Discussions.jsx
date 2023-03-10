import React from 'react';

const Discussions = () => {
  return (
    <div className="discussion_container">
      <table className="new space">
        <thead className="d-none">
          <tr>
            <th>Subject</th>
            <th>Status</th>
            <th>Replies</th>
            <th>Last Reply</th>
          </tr>
        </thead>
        <tbody>
          <tr className="open">
            <td className="subject">
              <div className="post_info">
                <div className="flex_wrapper">
                  <div className="avatar_wrapper">
                    <span className="avatar thirty-two">
                      <img
                        src={`${import.meta.env.VITE_DISCUS_AVATAR_IMG_URL}/xTNNz1qIXlrBIXOmtdJtSOhbJL0.jpg`}
                        alt=""
                      />
                    </span>
                  </div>

                  <div className="link_wrapper">
                    <a className="topic" href="/tv/1429/discuss/624150a9223a8b005fa4a306">
                      Best anime
                    </a>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <p className="status">Open</p>
            </td>
            <td>
              <p>0</p>
            </td>
            <td>
              <p>
                Mar 28, 2022 at 1:07 PM
                <br />
                by Ordinaryad204
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <p></p> */}
    </div>
  );
};

export default Discussions;
