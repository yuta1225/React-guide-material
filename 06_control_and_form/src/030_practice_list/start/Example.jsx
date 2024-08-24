import { React } from "react";
import Profile from './components/Profile';
const Example = () => {
  return (
    <>
      <ul>
        <Profile 
          name={"Geo"}
          age={18}
          hobbies={ [ "sports" , "music" ] }
        />
      </ul>
    </>
  );
};

export default Example;
