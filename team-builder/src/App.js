import React from 'react';
import './App.css';
import { useState } from "react";
import TeamMemberList from './components/TeamMembersList';
import Form from './components/Form';

// Made my imports

function App() {

// Created state for teamMembers/

  const [teamMembers, setTeamMembers] = useState([]);


  return (
    <div className="App">
      <header>
            <h1>Team Member List</h1>
            <div className="forms">
      <Form list={teamMembers} setList={setTeamMembers}/>
      </div>
    </header>
    <div className="body">
    <TeamMemberList list={teamMembers} setList={setTeamMembers} />
    </div>
    </div>
  );
}

export default App;
