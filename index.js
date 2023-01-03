const Button = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return <button className={className}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button className="like" name="like" />
      <Button className="comment" name="Comment" />
      <Button className="share" name="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
