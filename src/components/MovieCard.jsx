import React, { useContext, useState } from "react";
import ThumbsUp from "../static/media/thumbs-up";
import ThumbsDown from "../static/media/thumbs-down";

const MovieCard = ({ id, title, category, url, likes, dislikes }) => {
  const [thumbsDownHover, setThumbsDownHover] = useState(false);
  const [thumbsUpHover, setThumbsUpHover] = useState(false);

  const handleRatingClick = (type, id) => {
    console.log(type, id);
  };

  return (
    <div className='MovieCard'>
      <div className='MovieCard-head'>
        <img className='MovieCard-image' id={id} src={url} alt={title} />
      </div>
      <div className='MovieCard-meta'>
        <div className='MovieCard-meta-col1'>
          <h2 className='title'>{title}</h2>
          <h3 className='category'>{category}</h3>
        </div>
        <div className='MovieCard-meta-col2'>
          <div className='likes'>
            <div
              className='rating-icon'
              onMouseEnter={() => setThumbsUpHover(true)}
              onMouseLeave={() => setThumbsUpHover(false)}
              onClick={() => handleRatingClick("up", id)}
            >
              <ThumbsUp
                className='rating-svg'
                width={20}
                stroke={
                  thumbsUpHover
                    ? "rgba(29, 140, 248, 0.5)"
                    : "rgba(29, 140, 248, 1)"
                }
              />{" "}
              {likes}
            </div>
          </div>
          <div className='dislikes'>
            <div
              className='rating-icon'
              onMouseEnter={() => setThumbsDownHover(true)}
              onMouseLeave={() => setThumbsDownHover(false)}
              onClick={() => handleRatingClick("down", id)}
            >
              <ThumbsDown
                className='rating-svg'
                width={20}
                stroke={
                  thumbsDownHover
                    ? "rgba(29, 140, 248, 0.5)"
                    : "rgba(29, 140, 248, 1)"
                }
              />{" "}
              {dislikes}
            </div>
            <div className='ratings-count'>
              <span className='rating'></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
