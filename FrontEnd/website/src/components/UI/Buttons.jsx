export function DefaultButtonG({ value, className, onClick }) {
  return (
    <button
      className={`w-1/2 uppercase tracking-wide bg-color-secondary/80 flex justify-center h-12 items-center rounded-md text-color-primary cursor-pointer hover:bg-color-secondary/100 ease-in-out duration-200
    3xl:h-14 3xl:text-xl xl:text-lg ${className}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export function ButtonFullWidth({ value, className, onClick }) {
  return (
    <button
      className={`uppercase tracking-wide bg-color-secondary/80 flex justify-center h-12 items-center rounded-md text-color-primary hover:bg-color-secondary/100 ease-in-out duration-200 cursor-pointer
    3xl:h-14 3xl:text-xl xl:text-lg ${className}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export function ButtonWithBorder({ value, className, onClick }) {
  return (
    <button
      className={`w-1/3 uppercase tracking-wide border-2 border-color-secondary/60 hover:bg-color-secondary/80  hover:text-color-primary flex justify-center h-9 items-center rounded-2xl text-color-secondary cursor-pointer ease-in-out duration-200
    3xl:h-14 3xl:text-xl xl:text-lg ${className}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export function ButtonWithBorderFullWidth({ value, className, onClick }) {
  return (
    <button
      className={`w-full uppercase tracking-wide border-2 border-color-secondary/60 hover:bg-color-secondary/80  hover:text-color-primary flex justify-center h-9 items-center rounded-2xl text-color-secondary cursor-pointer ease-in-out duration-200
    3xl:h-14 3xl:text-xl xl:text-lg ${className}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
