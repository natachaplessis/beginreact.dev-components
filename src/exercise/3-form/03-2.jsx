import { useRef, useState } from "react";

const UserForm = ({ onSubmitUser }) => {
  // const usernameRef=useRef(null);
  // const passwordRef = useRef(null);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // récupérer les infos avec event.currentTarget (on utilise le name de l'input)
    // let name = event.currentTarget.name.value;
    // let password = event.currentTarget.password.value;

    //récupérer les éléments avec useRef (on utilise ref dans l'input)
     
    
    // let name = usernameRef.current.value;
    // let password = passwordRef.current.value;

    //gérer les erreurs
    if (password.length <= 8) {
      setError('The password must be at least 8 characters long');
      return
    }
    onSubmitUser({name, password})
  }

  const resetError = (e) => {
    setError(null);
  }
  
  return (
    <form className="vertical-stack form" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input 
          type="text" 
          name="name" 
          id="name" 
          value = {name}
          onChange={(e) => setName(e.target.value)} 
          // ref={usernameRef}
          />
      </label>
      <label htmlFor="password">
        Password
        <input 
          type="password" 
          name="password" 
          id="password" 
          value={password}
          // ref={passwordRef} 
          onChange={(event) => {
            resetError();
            setPassword(event.target.value)
          } 
          } 
          />
      </label>
      {error ? <p style={{color : 'red'}}>{error}</p> : null}
      <input type="submit" value="Submit" />
    </form>
  );
};

const Form = () => {
  const onSubmitUser = (data) => {
    alert('Form submitted: ' + JSON.stringify(data));
  };
  return <UserForm onSubmitUser={onSubmitUser} />;
};

export default Form;