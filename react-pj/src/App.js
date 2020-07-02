import React from 'react';
import PropTypes from 'prop-types';

// function App() {
//   //const greeting = "Hi, Tom! ";
//   //const dom = <h1 className="foo">{greeting}</h1>;
//   return (
//     <div>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("I am clicked")}} />
//     </div>
//   );
// }

// class App extends React.Component {
//   render() {
//     return(
//         <React.Fragment>
//           <label htmlFor="bar">bar</label>
//           <input type="text" onChange={() => {console.log("I am clicked")}} />
//         </React.Fragment>
//     )
//   }
// }

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName", age: 3 }
  ]
  return(
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return(
    <div>Hi, I am {props.name}, and {props.age} years old!</div>
  )
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
