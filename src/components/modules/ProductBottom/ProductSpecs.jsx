import { FaSquareFull } from "react-icons/fa";
import SpecsSection from "./SpecsSection";

function ProductSpecs({productSpecs}) {

  return (
    <div>
      <SpecsSection productSpecs={productSpecs}  />
    </div>
  );
}

export default ProductSpecs;
