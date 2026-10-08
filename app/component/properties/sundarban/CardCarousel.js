import React from 'react';
  import PropTypes from 'prop-types';

  // CardCarousel renders a horizontally scrollable container of cards.
  // Each card takes up 1/8 of the viewport width so that at most 8 cards display.
  const CardCarousel = ({ cards }) => {
    // The container uses overflowX auto to allow swipe/scroll
    const containerStyle = {
      display: 'flex',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      WebkitOverflowScrolling: 'touch',
    };

    // Each card is sized so that eight cards exactly fill the container's width.
    const cardStyle = {
      flex: '0 0 calc(100% / 8)',
      scrollSnapAlign: 'start',
      boxSizing: 'border-box',
      padding: '0.5rem',
    };

    return (
      <div style={containerStyle}>
        {cards.map((card, index) => (
          <div key={index} style={cardStyle}>
            <div className="card">
              <img
                src={card.image}
                alt={card.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <h3 style={{ fontSize: '0.9rem', textAlign: 'center', marginTop: '0.5rem' }}>
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    );
  };

  CardCarousel.propTypes = {
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  export default CardCarousel;