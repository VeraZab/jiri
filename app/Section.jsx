import '/styles/section.modules.css';
import PropTypes from 'prop-types';

export default function Section({ children, id, backgroundImage }) {
    return (
        <section
            className={backgroundImage ? 'bg-img' : ''}
            id={id}
            style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : "" }}
        >
            {children}
        </section>
    );
}

Section.PropTypes = {
    children: PropTypes.node,
    id: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
}

