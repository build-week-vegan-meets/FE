import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Starimg from '../../assets/star.png'

const StarStyle = styled.div`
  content: url(${Starimg});
  width: 30px;
`
const Stars = styled.div`
display: flex;
`;

const Star = ({ selected = false, onClick = f => f }) => (
    <div className={selected ? "star selected" : "star"} onClick={onClick}>
     <StarStyle>
     <div className="image"></div> 
     </StarStyle>
    </div>
  );
  
  Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
  };
  
  class StarRating extends React.Component {
    constructor(props) {
      super(props);
      this.state = { starsSelected: 0 };
      this.change = this.change.bind(this);
    }
  
    change(starsSelected) {
      this.setState({ starsSelected: starsSelected });
    }
  
    render() {
      const { totalStars } = this.props;
      const { starsSelected } = this.state;
  
      return (
        <Stars className="star-rating">
          {[...Array(totalStars)].map((n, i) => (
            <Star
              key={i}
              selected={i < starsSelected}
              onClick={() => this.change(i + 1)}
            />
          ))}
          <p>
            {starsSelected} of {totalStars} stars
          </p>
        </Stars>
      );
    }
  }
  
  StarRating.propTypes = {
    totalStars: PropTypes.number
  };
  
  StarRating.defaultProps = {
    totalStars: 5
  };

  export default StarRating;
