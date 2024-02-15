function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-[#36506C] text-[#EBF7FD] hover:bg-[#A5DEF1] hover:text-[#36506C]"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
