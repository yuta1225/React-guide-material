import "./Profile.css";

const Profile = ({ pr1, pr2}) => {
  console.log(pr1);
  console.log(pr2);
  return (
    <div className="profile">
      <div >
        <h3>Name: {pr1.name}</h3>
        <h3>Age: {pr1.age}</h3>
        <h3>From: {pr1.country}</h3>
      </div>
    </div>
  )
};

export default Profile;
