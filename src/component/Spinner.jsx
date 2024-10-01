import { ClipLoader } from "react-spinners";
const Spinner = ({ loading }) => {
  const overide = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <ClipLoader
      size={150}
      color="#2F6AFF"
      loading={loading}
      cssOverride={overide}
    />
  );
};

export default Spinner;
