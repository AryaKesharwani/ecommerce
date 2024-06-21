import { FaAngleDown } from "react-icons/fa6";
import { Button } from "@mui/material";
const CountryDropDown = (props) => {
  return (
    <Button className="countryDrop">
      <div className="info d-flex flex-column">
        <span className="label">Your Location</span>
        <span className="name">India</span>
      </div>
      <span className="ml-auto"> <FaAngleDown/></span>
    </Button>
  );
};

export default CountryDropDown;
