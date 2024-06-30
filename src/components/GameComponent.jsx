const GameComponent = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
  score,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-[80vw] justify-between items-center  md:mb-none mb-20  mx-auto">
      <div className="max-w-[200px] text-center">
        <h1 className="text-6xl leading-[50px]">{score}</h1>
        <p className="text-xl font-medium">Total Score</p>
        <button className="bg-black text-white py-2 px-4 rounded min-w-[220px] text-base cursor-pointer transition duration-300 hover:bg-white hover:text-black hover:border hover:border-black">
          <a href="/" className="no-underline text-inherit">
            Go To Home
          </a>
        </button>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-red-500 mb-4">{error}</p>
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          {arrNumber.map((value, i) => (
            <div
              key={i}
              className={`h-[72px] w-[72px] border border-black grid place-items-center text-2xl font-bold cursor-pointer
                ${value === selectedNumber ? "bg-black text-white" : "bg-white text-black"}`}
              onClick={() => numberSelectorHandler(value)}
            >
              {value}
            </div>
          ))}
        </div>
        <p className="text-2xl font-bold">Select Number</p>
      </div>
    </div>
  );
};

export default GameComponent;
