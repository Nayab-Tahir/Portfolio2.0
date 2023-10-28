const Button = (props) => {
  return (
    <div className="button">
        <a style={{fontSize: props.fontSize}} href="#">&#123;{props.text}&#125;</a>
    </div>
  );
};

export default Button;