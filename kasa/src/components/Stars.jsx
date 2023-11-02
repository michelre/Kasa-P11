import React from 'react';
import fullStar from '../assets/full_star.svg';
import emptyStar from '../assets/empty_star.svg';

// Ajouter un call sur le fichier JSON pour récupérer les datas RATING

const Stars = ({rating}) => {
    const stars = []
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<img src={fullStar} alt='full-star' key={i} />)
            } else {
            stars.push(<img src={emptyStar} alt='empty-star' key={i} />)
            }
        }

        return (
        <div className='rating'>
            {stars}
        </div>
    );
};

export default Stars;
