const Form = (getter, setter) => {
    return (e) => {
        setter({ ...getter, [e.target.name]: e.target.value });
    };
};

export default Form;
