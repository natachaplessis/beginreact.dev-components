import { useForm } from "react-hook-form"

const UserForm = ({ onSubmitUser }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  
  return (
    <form className="vertical-stack form" onSubmit={handleSubmit(onSubmitUser)}>
      <label>
        Name
        <input 
          type="text" 
          {...register("name")}
          />
      </label>
      <label>
        Password
        <input 
          type="password"
          {...register("password", {
            required : 'Password is required',
            minLength: {
              value : 8,
              message : "Le password doit faire au moins 8 caractères.",
            },
          })} 
          />
      </label>
      {errors.password ? <p style={{color : 'red'}}>{errors.password.message}</p> : null}
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
