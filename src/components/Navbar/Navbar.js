import "./styles.css";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";

const Navbar = () => {
  return (
    <div className="d-flex justify-space-between">
      <div className="d-flex">
        <img
          className="nav-logo"
          src={process.env.PUBLIC_URL + "/my_unsplash_logo.svg"}
          alt="logo"
        />
        <InputField iconPrefix />
      </div>
      <Button color="green" text="Add a photo" />
    </div>
  );
};

export default Navbar;
