import useCountStore from "../store/useCountStore"

const Counter = () => {
const count = useCountStore((state) => state.count);
return <div>{count}</div>;
};

export default Counter;