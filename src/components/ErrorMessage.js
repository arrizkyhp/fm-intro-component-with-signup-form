const ErrorMessage = (props) => {
  return (
    <p className="error fs-sm text-red" role="alert" id={props.id}>
      {props.message}
    </p>
  );
};

export default ErrorMessage;
