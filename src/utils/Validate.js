import React from 'react';

function changeAndValidationForm (Component) {
  function ComponentWithchangeAndValidationForm(props){
    function validation(arrayValidationElements, prevState) {
      arrayValidationElements.forEach((element) => {
        if (prevState[element] != this.state[element]) {
          this.validateElement(element)
        }
      })
      if (JSON.stringify(prevState.errors) !== JSON.stringify(this.state.errors)) {
        const errorsKeys = Object.keys(this.state.errors);
        for (const error in this.state.errors) {
          if (this.state.errors[error] != '') {
            this.setState({isValid: false})
            break
          } else {
            this.setState({isValid: true})
          }
        }
        if (JSON.stringify(arrayValidationElements) != JSON.stringify(Object.keys(this.state.errors))) {
          this.setState({isValid: false})
        }
      }
    }
    
    function handleChange(e) {
      const target = e.target.name;
      this.setState({[target]: e.target.value});
    }
    
    function validateElement(element) {
      if (!this.state[element]) {
        this.setState((prevState) => ({
          ...prevState, errors: {...prevState.errors, [element]: `Необходимо ввести ${element}.`}
        }))
      } else if (this.state[element].length <= 2) {
        this.setState((prevState) => ({
          ...prevState, errors: {...prevState.errors, [element]: `${element} должен быть больше 2 символов.`}
        }))
      } else if (!this.state[element].length >= 30) {
        this.setState((prevState) => ({
          ...prevState, errors: {...prevState.errors, [element]: `${element} должен быть меньше 30 символов.`}
        }))
      } else if (element == "email" && !/\S+@\S+\.\S+/.test(this.state[element])) {
        this.setState((prevState) => ({
          ...prevState, errors: {...prevState.errors, [element]: "Адрес электронной почты неправильный."}
        }))
      } else {
        this.setState((prevState) => ({
          ...prevState, errors: {...prevState.errors, [element]: ''}
        }))
      }
    }

    return <Component {...props}  validation={validation} handleChange={handleChange} validateElement={validateElement}/>;
  }

  return ComponentWithchangeAndValidationForm;
}

export default changeAndValidationForm