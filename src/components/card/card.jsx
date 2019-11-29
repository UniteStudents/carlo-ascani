import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    width: 400px;
    height: 500px;
    background: white;
    border-radius: 3px;
    box-shadow: 0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4);
    overflow: hidden;
`;
const Avatar = styled.img`
    max-width: 100%;
    height: auto;
`;

function Card(props) {
    const { imgUrl, fullName, title, firstName, lastName } = props;
    
    return (
        <Container>
           <Avatar src={imgUrl} alt={fullName} />
           <h1>{`${title} ${firstName} ${lastName}`}</h1>
        </Container>
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
    address: PropTypes.string,
}

export default Card;