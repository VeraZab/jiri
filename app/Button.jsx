import styles from '/styles/button.module.css';
import PropTypes from 'prop-types';

export default function Button({ children }) {
    return (
        <button className={styles.container}>
            {children}
        </button>
    );
}

Button.PropTypes = {
    children: PropTypes.node,
}

