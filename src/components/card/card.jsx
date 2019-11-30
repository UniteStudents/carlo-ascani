import React, { useState }  from 'react'
import PropTypes from 'prop-types';
import './card.css';

function Card(props) {
    const { imgUrl, title, firstName, lastName, dob, postal, email, mobile } = props;
    const [edit, setEdit] = useState(false);
    const [fullName, setFullName] = useState(`${firstName} ${lastName}`);
    const [zoomed, setZoomed] = useState(false);

    const handleFullNameChange = e => setFullName(e.target.value);

    const unzoomAndEdit = () => {
        setZoomed(false);
        setEdit(!edit);
    }

    const formatDate = date =>
        new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }).format(Date.parse(date));

    const formatAddress = addr =>
        addr
            .split(',')
            .map((item, i) => <span key={i}>{item}</span>);

    const picture = () =>
        <aside
            className="Card-picture"
            style={{backgroundImage: `url('${imgUrl}')`}}>
            <button className="Card-edit" onClick={() => unzoomAndEdit()}>
                <i className={`lni-${edit ? 'save' : 'pencil'}`} />
            </button>
            <button className="Card-zoom" onClick={() => setZoomed(!zoomed)}>
                <i className={`lni-zoom-${zoomed ? 'out' : 'in'}`} />
            </button>
        </aside>;

    const header = () =>
        <header className="Card-header">
            <h1 className="Card-title">
                <span className="Card-salutation">{title}</span>
                {edit
                ? <input
                    className="Card-name is-editable"
                    type="text"
                    onChange={handleFullNameChange}
                    value={fullName}
                    />
                : <span className="Card-name">{fullName}</span>
                }
            </h1>
        </header>;

    const contentItem = (index, icon, content) =>
        <p className="CardContent-item" key={index}>
            <i className={`CardContent-icon lni-${icon}`} />
            <span className="CardContent-text">
                {content}
            </span>
        </p>;

    const content = () =>
        <div className="CardContent">
            {[
                {icon: "cake", content: formatDate(dob)},
                {icon: "envelope", content: email},
                {icon: "mobile", content: mobile},
                {icon: "home", content: formatAddress(postal)},
            ].map((item, i) => contentItem(i, item.icon, item.content))}
        </div>;

    return (
        <article className={`Card${zoomed ? ' is-zoomed' : ''}`}>
            {picture()}
            {header()}
            {content()}
        </article>
    );
}

Card.propTypes = {
    imgUrl: PropTypes.string,
    mobile: PropTypes.string,
    title: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    dob: PropTypes.string,
    postal: PropTypes.string,
}

export default Card;