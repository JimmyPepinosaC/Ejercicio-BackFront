import { useState } from "react";

const useOfferForm = (schema) => {
  const [state, setState] = useState({});
  const [errors, setErrors] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const { error } = validate(schema);
    if (!error) {
      console.log("Job submitted", state);

      fetch("/offers",{
       method: "POST", 
       headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
       },
       body: JSON.stringify(state),   
      }).then(res => {
        return res.json();
      });
    } else {
      console.log("Errors", error);
      setErrors(error);
    }
  };

  const handleInputChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const validate = () => {
    return schema.validate(state);
  };

  return { handleSubmit, handleInputChange, errors };
};

export default useOfferForm;