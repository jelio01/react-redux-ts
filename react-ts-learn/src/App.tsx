import React from 'react';

import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import { Container } from './components/Container';

import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';

import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/state/User';
import { Counter } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';

function App() {

  const personName = {
    first : "Bruce",
    last: "Wayne",
  }

  const nameList = [{
    first : "Bruce",
    last : "Wayne"
  }, {
    first : "Clark",
    last : "Kent"
  }, {
    first : "Princess",
    last : "Diana"
  }];

  return (
    <div className="App">
      <Greet name="Victor" messageCount={20} isLoggedIn={false}/>
      <Person name= {personName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario</Heading>
      </Oscar>
      <Greet name='Victor' isLoggedIn={false}/>
      <Button handleClick={(event, id) => {
        console.log("Button clicked", event, id);
      }}/>
      <Input value='' handleChange={(event) => console.log(event)} />
      <Container styles={{border: "1px solid black", padding: "1rem"}}/>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
          <User />
      </UserContextProvider>
      <Counter message='The count value is'/>
      <Private isLoggedIn={true} component={Profile}/>
      {/* <List items={['Batman','Superman','Wonder Woman']} onClick={(item) => console.log(item)} />
      <List items={[1,2,3]} onClick={(item) => console.log(item)} /> */ }
      <List items={[{
        id: 1,
        first: 'Bruce',
        last: 'Wayne'
      },{
        id: 2,
        first: 'Clark',
        last: 'Kent'
      },{
        id: 3,
        first: 'Princess',
        last: 'Diana'
      }]} onClick={(item) => console.log(item)} />
    </div>
  );
}

export default App;
