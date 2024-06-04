import { FaSquareFull } from "react-icons/fa";

function SpecsSection({ data, productSpecs }) {
  return (
    <div className="flex flex-col gap-3 md:w-[600px]">
      {productSpecs.map((item, index) =>
        item.title ? (
          <h3 key={index} className="flex items-center gap-2 mt-3">
            <FaSquareFull size={7} className="text-[#FC67A3] " />
            مشخصات فیزیکی
          </h3>
        ) : (
          <div key={index} className="grid grid-cols-2 text-sm text-gray-600 ">
            <p className="max-w-[150px]">{Object.keys(item)[0]}</p>
            <p>{item[Object.keys(item)[0]]}</p>
          </div>
        )
      )}
    </div>
  );
}

export default SpecsSection;
