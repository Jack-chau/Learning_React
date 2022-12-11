import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role,setRole] = useState('football athlete');
  const [employees, setEmployee] = useState (  // Multiple employee inside an array
    [
      {
        name: "realJack",
        role: "Trainee",
        img: "https://images.pexels.com/photos/2970497/pexels-photo-2970497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "HappyJack",
        role: "Grabish",
        img: "https://i.ytimg.com/vi/fkorWPoi6E0/maxresdefault.jpg",
      },
      {
        name: "MotherFucker",
        role: "football athlete",
        img: "https://i2-prod.dailystar.co.uk/incoming/article28704237.ece/ALTERNATES/s1200c/0_Mbappe-was-laughing-after-Kane-missed-the-penalty.jpg",
      },
      {
        name: "guessWho",
        role: "Killer",
        img: "https://images.pexels.com/photos/6471231/pexels-photo-6471231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "whoAmI",
        role: "eco fans",
        img: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Jesus",
        role: "I am God",
        img: "https://john832knowthetruth.org/wp-content/uploads/2020/12/cross02-1184x395.jpg",
      }
    ]
  )
  console.log ( 'we are about to list the employees' ) ;
  const showEmployees = true ;
  return (
    <div className = "App">
      { showEmployees ? (
          <>
          <input 
            type='text' 
            onChange={(e) => {
              console.log( e.target.value ); // 'e.target.value' to get user input
                setRole( e.target.value ); 
          }}/>
            <div className="flex flex-wrap justify-center"> 
              {employees.map((employee) => {
                console.log(employee);
                return (
                  <Employee
                    key = { uuidv4() }
                    name = { employee.name } 
                    role = { employee.role } 
                    img = { employee.img }
                  />
                );
              })}
            </div>
          </>
        ) : (
          <p>You cannot see the employees</p>
        )
      }
    </div>
  );
}
export default App;
