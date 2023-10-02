import Button from "./Button";

const Header = ({ title, showTask, onAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showTask ? "red" : "green"}
        text={showTask ? "Close" : "Add"}
        onAdd={onAdd}
      />
    </header>
  );
};

export default Header;
