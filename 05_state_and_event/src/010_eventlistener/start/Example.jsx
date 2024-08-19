const Example = () => {
  const ClickHandler = () => {
  alert('ボタンがクリックされました。');    
  }
  const ClickHandler2 = () => {
    console.log('ボタンがクリックされました。');
  }
  return (
    <>
      <button onClick={ClickHandler}>クリックしてね</button>
      <button onClick={ClickHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;
