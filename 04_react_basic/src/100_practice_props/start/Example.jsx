import Profile from "./components/Profile";

const Example = () => {
  const profile = [
    { name: "Takashi", age: 19, country: "Japan" },
    { name: "Jane", age: 28, country: "UK" },
  ];
  return (
    <Profile
        pr1={profile[0]}
        pr2={profile[1]}
    />
  );
};

export default Example;
