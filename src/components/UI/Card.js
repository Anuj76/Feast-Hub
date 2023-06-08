import classes from './Cart.module.css';

const Card = (props) =>{

    return <div className={classes.card}>
        {props.children}
    </div>

}

export default Card;