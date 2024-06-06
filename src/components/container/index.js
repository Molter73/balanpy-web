export default function Container({ styles, children, bg_color = 'bg-white', justify = 'justify-between' }) {
  return (
    <div
      className={`flex flex-col align-center items-between border-[3px] border-balanpy-800 rounded-[25px] ${justify} ${styles} ${bg_color}`}
    >
      {children}
    </div>
  );
}
