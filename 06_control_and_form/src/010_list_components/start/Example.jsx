
const animals = ["Dog", "Cat", "Rat"];
const animalList = [];
const Example = () => {
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }
  const helloAnimals = animals.map((animal) => <li>Hello, {animal}</li>)
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {animalList}
        {helloAnimals}
      </ul>
    </>
  );
};

export default Example;
