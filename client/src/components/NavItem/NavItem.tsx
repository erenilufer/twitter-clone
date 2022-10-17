import { NavLink } from "react-router-dom";
import "./styles.scss";
type Props = {
  item: any;
};

const NavItem = (props: Props) => {
  const { item } = props;
  return (
    <NavLink
      key={item.name}
      end
      to={item.path}
      className={({ isActive }) =>
        isActive ? "navItem active" : "navItem inactive"
      }
    >
      {item.svg}
      <h1 className=" hidden lg:block">{item.name}</h1>
    </NavLink>
  );
};

export default NavItem;
