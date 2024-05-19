export default function Steps({ index, styles }) {
  return (
    <div className={`group relative flex justify-center p-2 border-2 border-white rounded-full ${styles}`}>
      <svg width="2em" height="2em"></svg>
      <span className="absolute opacity-100 text-2xl font-semibold">
        {index}
      </span>
    </div>
  );
}

Steps.defaultProps = {
  styles : "bg-white text-balanpy-800"
}