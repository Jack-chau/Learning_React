import './App.css';
import Employee from './components/Employee';
import {useState} from 'react';

function App() {
  const [role,setRole] = useState('dev');
  console.log ( 'we are about to list the employees' ) ;
  const showEmployees = true ;
  return (
    <div>
      { showEmployees ? (
          <>
          <input 
            type='text' 
            onChange={(e) => {
              console.log( e.target.value ); // 'e.target.value' to get user input
                setRole( e.target.value ); 
          }}/>
            <Employee name = "Jack" role = "Intern"/>
            <Employee name = "Nicole" role = "Professor"/>
            <Employee name = "Jerffy" role={role}/>
            <Employee name = "Rojer"/>
            <Employee name =  "Donnal"/>
          </>
        ) : (
          <p>You cannot see the employees</p>
        )
      }
    </div>
  );
}
export default App;
