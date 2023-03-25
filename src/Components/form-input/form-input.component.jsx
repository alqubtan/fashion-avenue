import "./form-input.styles.scss";
const FormInput = ({ label, InputOptions }) => {
  return (
    <div className="group">
      <input className="form-input" {...InputOptions} />
      {label && (
        <label
          className={`${
            InputOptions.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
