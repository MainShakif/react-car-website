import CheckBox from "./CheckBox";
import SearchBox from "./SearchBox";

function FormGroup() {
  return (
    <div className="flex items-center gap-5">
      <SearchBox />
      <CheckBox />
    </div>
  );
}

export default FormGroup;
