export function DefaultButtonG({ value, className, onClick }) {
  return (
    <button
      className={`w-1/2 uppercase tracking-wide bg-color-secondary/80 flex justify-center h-12 items-center rounded-md text-color-primary hover:bg-color-secondary/100 ease-in-out duration-200
    3xl:h-14 3xl:text-xl xl:text-lg ${className}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
