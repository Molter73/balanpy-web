export default function Button1({ index }) {
  return (
    <button className="group relative flex justify-center p-2 border-4 rounded-full bg-balanpy-700">
      <svg width="2em" height="2em"></svg>
      <span className="absolute opacity-100 group-hover:-translate-y-10 duration-700 text-2xl">
        {index}
      </span>
    </button>
  );
}
export function Button2({ index }) {
  return (
    <button className="group relative flex justify-center p-2 border-4 rounded-full bg-balanpy-50">
      <svg width="2em" height="2em"></svg>
      <span className="absolute opacity-100 group-hover:-translate-y-10 duration-700 text-2xl">
        {index}
      </span>
    </button>
  );
}