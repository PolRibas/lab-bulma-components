import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';
import Signup from './components/Signup';
import Container from './components/Container';
import Message from './components/Message';

function App() {
  return (
    <>
    <div className="App">
        <Navbar/>   
    </div>
    <section>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </section>
    <section>
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
    </section>
    <Signup />
    <Container>
    <Message isInfo title="Hello World">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
    </Message>
    </Container>
    </>
  );
}

export default App;
