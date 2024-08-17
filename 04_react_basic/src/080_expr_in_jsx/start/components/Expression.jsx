import "./Expression.css"
const Expression = () => {
    const title = "Expression";
    const arry = ['item1', 'item2', 'item3'];
    const jsx = "Hello JSX";
    const hello = (arg) => `${arg} Function`;
    return (
        <div className={title.toLowerCase()}>
            <h3>Hello {title}</h3>
            <h3>{arry}</h3>
            <h3>{hello('Hello')}</h3>
            <h3>{/* ここはコメント部分です */}</h3>
            {<h3>Hello JSX</h3>}
            <h3>{jsx}</h3>
        </div>
    )
}
export default Expression;