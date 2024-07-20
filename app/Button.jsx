import styles from '/styles/button.module.css';
import PropTypes from 'prop-types';

export default function Button({ children, onClick }) {
    return (
        <button onClick={onClick} className={styles.container}>
            {children}
        </button>
    );
}

Button.PropTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func
}

