import React, { useState } from "react";
import ThumbsUp from "../static/media/thumbs-up";
import ThumbsDown from "../static/media/thumbs-down";

const MovieCard = ({
  id,
  title,
  category,
  url,
  likes,
  dislikes,
  rateMovie,
}) => {
  const [thumbsDownHover, setThumbsDownHover] = useState(false);
  const [thumbsUpHover, setThumbsUpHover] = useState(false);
  const [thumbsUpClicked, setThumbsUpClicked] = useState(false);
  const [thumbsDownClicked, setThumbsDownClicked] = useState(false);

  const handleRatingClick = (type, id) => {
    // detect if already button clicked to limit rating spam.
    let direction = "add";
    if (
      (type === "up" && thumbsUpClicked) ||
      (type === "down" && thumbsDownClicked)
    ) {
      direction = "subtract";
    }
    // toggle button click state
    if (type === "up") {
      setThumbsUpClicked(!thumbsUpClicked);
    }
    if (type === "down") {
      setThumbsDownClicked(!thumbsDownClicked);
    }

    // case for changing rating when selection has already been made. Decrement other first before incrementing
    if (type === "up" && thumbsDownClicked) {
      rateMovie("down", "subtract", id);
      rateMovie(type, direction, id);
      setThumbsDownClicked(!thumbsDownClicked);
      return;
    }

    if (type === "down" && thumbsUpClicked) {
      rateMovie("up", "subtract", id);
      rateMovie(type, direction, id);
      setThumbsUpClicked(!thumbsUpClicked);
      return;
    }

    rateMovie(type, direction, id);
  };

  const iconColor = (type) => {
    const unclicked = "rgba(29, 140, 248, 1)";
    const unclickedHover = "rgba(29, 140, 248, 0.8)";
    const clicked = "rgba(250, 200, 10, 1)";
    const clickedHover = "rgba(250, 200, 10, 0.8)";

    // TODO refactor to switch
    if (type === "up" && !thumbsUpClicked && !thumbsUpHover) {
      return unclicked;
    }

    if (type === "up" && !thumbsUpClicked && thumbsUpHover) {
      return unclickedHover;
    }

    if (type === "up" && thumbsUpClicked && !thumbsUpHover) {
      return clicked;
    }

    if (type === "up" && thumbsUpClicked && thumbsUpHover) {
      return clickedHover;
    }

    if (type === "down" && !thumbsDownClicked && !thumbsDownHover) {
      return unclicked;
    }

    if (type === "down" && !thumbsDownClicked && thumbsDownHover) {
      return unclickedHover;
    }

    if (type === "down" && thumbsDownClicked && !thumbsDownHover) {
      return clicked;
    }

    if (type === "down" && thumbsDownClicked && thumbsDownHover) {
      return clickedHover;
    }
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
                stroke={iconColor("up")}
              />
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
                stroke={iconColor("down")}
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
