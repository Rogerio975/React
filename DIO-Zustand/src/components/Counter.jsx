import useCountStore from "../store/useCountStore"

export const Counter = () => {
const count = useCountStore((state) => state.count);
return <div>{count}</div>;
};