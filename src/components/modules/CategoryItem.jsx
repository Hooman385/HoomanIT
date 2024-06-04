"use client";
import getAllMatchingKeys from "@/lib/getMatchingKeys";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

function CategoryItem({ category, index }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [keys, setKeys] = useState(() => {
    const initialKeys = [];
    for (const key of searchParams.keys()) {
      initialKeys.push(key);
    }
    return initialKeys;
  });
  const [matchingKeys, setMatchingKeys] = useState(() =>
    getAllMatchingKeys(keys)
  );
  const [matchingValues, setMatchingValues] = useState(() =>
    matchingKeys.map((key) => searchParams.get(key))
  );

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);

      if (params.has("page")) {
        params.delete("page");
      }

      if (!params.has(name, value)) {
        params.append(name, value);
      } else {
        params.delete(name, value);
      }
      return params.toString();
    },
    [searchParams]
  );
  const cliclHandler = (optionValue) => {
    router.push(
      `/categories?${createQueryString(`category${index + 1}`, optionValue)}`
    );
    if (matchingValues.includes(optionValue)) {
      const newValues = matchingValues.filter((value) => value !== optionValue);
      setMatchingValues(newValues);
    } else {
      setMatchingValues([...matchingValues, optionValue]);
    }
  };
  return (
    <label
      className="flex justify-between cursor-pointer hover:underline hover:underline-offset-4"
      htmlFor={category}
      onClick={() => cliclHandler(category.optionValue)}
    >
      {category.renderValue}
      <input
        className="cursor-pointer"
        readOnly
        id={category.optionValue}
        type="checkbox"
        name={category.optionValue}
        value={category.optionValue}
        checked={matchingValues.includes(category.optionValue)}
      />
    </label>
  );
}

export default CategoryItem;
