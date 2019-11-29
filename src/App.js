import React, { useState }  from 'react'
import styled from 'styled-components';
import { Card } from './components/card';

const Container = styled.div`
  display: flex;
  flex: 1;  
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #642B73;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #C6426E, #642B73);  
  background: linear-gradient(to top, #C6426E, #642B73); 
`;

function App() {
  const [user] = useState({
    title: 'Mr.',
    firstName: 'John',
    lastName: 'Doe',
    imgUrl: require('./avatar.jpeg'),
    email: 'john.doe@gmail.com',
    mobile: '+44 7988 555 555',
    postal: '45 Old Edinburgh Road, Beggshill, AB54 3AF',
    dob: '1980-06-25T14:41:21+0000',
  });

  return (
    <Container>
      <Card {...user}/>
    </Container>
  );
}

export default App;
