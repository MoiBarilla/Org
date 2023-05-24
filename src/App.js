import React from 'react';
import { v4 as uuid } from "uuid"
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/MyOrg/MyOrg';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

function App() {
  const [ showForm, setShowForm ] = useState(false);
  const [ members, updateMember ] = useState([
    {
      name: "Moises Barilla",
      pic: "https://github.com/moibarilla.png",
      position: "Instructor",
      team: "Front End",
      fav: true,
      id: uuid(),
    },
    {
      name: "Harland Lohora",
      pic: "https://github.com/harlandlohora.png",
      position: "Instructor",
      team: "Devops",
      fav: false,
      id: uuid(),
    },
    {
      name: "Genesys Rondon",
      pic: "https://github.com/genesysaluralatam.png",
      position: "Instructora",
      team: "UX and Desing",
      fav: false,
      id: uuid(),
    },
    {
      name: "Jean Marie",
      pic: "https://github.com/JeanmarieAluraLatam.png",
      position: "Instructora",
      team: "Programming",
      fav: false,
      id: uuid(),
    },
    {
      name: "Christian Gonzalez",
      pic: "https://github.com/christianpva.png",
      position: "Instructor",
      team: "Data Science",
      fav: false,
      id: uuid(),
    },
    {
      name: "Jose Darío",
      pic: "https://github.com/JoseDarioGonzalezCha.png",
      position: "Instructor",
      team: "Mobile",
      fav: false,
      id: uuid(),
    },
  ]);
  const [ category, setCategory ] = useState(
    [
      {
          title: "Programming",
          primaryColor: "#57c278",
          secondaryColor: "#d9f7e9",
          id: uuid(),
          
      },
      {
          title: "Front End",
          primaryColor: "#82cffa",
          secondaryColor: "#e8f8ff",
          id: uuid(),
          
      },
      {
          title: "Data Science",
          primaryColor: "#a6d157",
          secondaryColor: "#f0f8e2",
          id: uuid(),
          
      },
      {
          title: "Devops",
          primaryColor: "#e06b69",
          secondaryColor: "#fde7e8",
          id: uuid(),
          
      },
      {
          title: "UX and Design",
          primaryColor: "#db6ebf",
          secondaryColor: "#fae9f5",
          id: uuid(),
          
      },
      {
          title: "Mobile",
          primaryColor: "#ffba05",
          secondaryColor: "#fff5d9",
          id: uuid(),
          
      },
      {
          title: "Innovation and Management",
          primaryColor: "#ff8a29",
          secondaryColor: "#ffeedf",
          id: uuid(),
          
      },
  ]
  );

  // Show and Hide Form
  function showAndHideForm() {
    setShowForm(!showForm);
  }

  // Add Members
  const addMember = (member) => {
    updateMember([...members, member]);
  }

  //Update Team Color
  const updateTeamColor = (color, id) => {

    const updatedTeams = category.map( (team) => {
      if(team.id === id ){
        team.primaryColor = color;
      }
      return team;
    })
    setCategory(updatedTeams);
  }

  const addCategory = (newCategory) => {
    console.log("create category", newCategory);
    setCategory([...category, {...newCategory, id: uuid() } ]);
  }

  // Delete Colaborador
  const deleteMember = (id) => {
    console.log("Member deleted", id);
    const newMembers = members.filter((member) => member.id !== id )
    updateMember(newMembers);
  }

  // Like 
  const like = (id) => {
    const favMember = members.map( (member) => {
      if (member.id === id) {
        member.fav = !member.fav;
      }
      return member
    });
    updateMember(favMember);

  }

  return (
    <div>
      <Header/>
      {/*  showForm ? <Form/> : <></>  */}
      {/*  showForm ? <Form/> : <React.Fragment/>  */}
      { showForm && <Form 
      teams={ category.map((teams) => teams.title) } 
      addMember={ addMember } 
      addCategory={ addCategory }
      /> }
      <MyOrg showAndHideForm={ showAndHideForm }/>

      { category.map((team) => <Team 
      data={team} key={team.title } 
      members={members.filter( member => member.team === team.title)} 
      deleteMember={  deleteMember }
      updateTeamColor={ updateTeamColor }
      like={ like }
      />) }

        <Footer />
    </div>
  );
}

export default App;
