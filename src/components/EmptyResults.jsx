export const EmptyResults = ({ type }) => {
  return (
    <div className="w-full h-[300px] flex justify-center items-center">
      <h1>You have no {type} for now</h1>
    </div>
  );
};
