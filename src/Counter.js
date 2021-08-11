import withCounter from './HOC/withCounter';

function Counter({ count, handleClick }) {
    return (
        <div className="counter">
            <h3>{count}</h3>
            <button type="button" onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}
export default withCounter(Counter);
