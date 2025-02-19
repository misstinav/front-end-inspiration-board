import './Card.css'
import PropTypes from 'prop-types';

const Card = (props) => {

    return (
        <div className='card'>
            <p>{props.message}</p>
            <div className='card-buttons'>
                <button onClick={() => props.updateCard(props.card_id)}>{props.likes_count} 💕</button>
                <button onClick={() => props.deleteCard(props.card_id)}>delete</button>
            </div>
        </div>
    )
}

Card.propTypes = {
    card_id: PropTypes.number,
    message: PropTypes.string,
    likes_count: PropTypes.number,
    onUpdate: PropTypes.func
};

export default Card 

