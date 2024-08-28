import styled from "styled-components";

const FirstButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: none;
  background-color: pink;
`;

const SecondButton = styled(FirstButton)`
  color: white;
  background: red;
`;

const ThirdButton = styled(SecondButton)`
  background: ${(props) => props.dark ? "black" : "green"};
`;

const Example = () => {
  return (
    <>
        <ul>
          <li>
            Q3.
            SecondButtonを継承したThirdButtonを作成し、props.darkがある場合のみbackgroudがblackに、ない場合はgreenになるようにしてください。
          </li>
        </ul>
      <FirstButton>ボタン1</FirstButton>
      <SecondButton>ボタン2</SecondButton>
      <ThirdButton dark>ボタン3</ThirdButton>
    </>
  );
};

export default Example;
