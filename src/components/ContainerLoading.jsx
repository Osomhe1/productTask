import Spinner from "./Spinner";

const ContainerLoading = ({ height, unit }) => {
  return (
    <div className={`h-[200px] flex justify-center items-center`}>
      <Spinner color="#4f0da3" />
    </div>
  );
};

export default ContainerLoading;
