import { Button } from "../button/button";

export const Tab = ({ name, isActive, onClick }) => {
  return <Button label={name} onClick={onClick} active={isActive} />;
};
