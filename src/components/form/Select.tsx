import { Dispatch, SetStateAction, useEffect, useState } from "react";
import fakeApi from "../../lib/fakeApi/fakeApi.json";
import { ApiType } from "../../lib/types/calculator";

interface SelectProps {
  setSelectedYearData: Dispatch<SetStateAction<ApiType>>;
}

const actualYear = new Date().getFullYear();
const allYearsFromApi = fakeApi.map((service) => service.year);

const Select = ({ setSelectedYearData }: SelectProps) => {
  const [selectedYear, setSelectedYear] = useState(actualYear);

  const handleSelectDate = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setSelectedYear(parseFloat(event.target.value));
  };

  useEffect(() => {
    const data = fakeApi.find(({ year }) => year === selectedYear);
    if (data) {
      setSelectedYearData(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear]);

  return (
    <select onChange={handleSelectDate}>
      {allYearsFromApi && allYearsFromApi.length > 0
        ? allYearsFromApi.map((year) => <option key={year}> {year} </option>)
        : false}
    </select>
  );
};

export default Select;
