const SpinningLoader = () => {
  return (
    <div className="inline-block w-20 h-20 after:content-[''] after:block after:w-16 after:h-16 after:m-2 after:rounded-full after:border-[6px] after:border-darkBlueGrey after:border-x-transparent animate-spin"></div>
  );
};

export default SpinningLoader;
