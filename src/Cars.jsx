import Header from "./Header";
import FormGroup from "./FormGroup";
import CarsContainer from "./CarsContainer";
function Cars() {
  return (
    <div className="max-w-6xl mx-auto px-5 font-monospace">
      <Header />
      <FormGroup />
      <CarsContainer />
    </div>
  );
}

export default Cars;
