import { useState } from "react";
import { ApiType, ListType } from "../../lib/types/calculator";
import Select from "./Select";
import ServiceList from "./ServiceList";
import "./styles/form.css";
import TotalView from "./TotalView";

const Form = () => {
  const [selectedYearData, setSelectedYearData] = useState<ApiType>(
    {} as ApiType
  );
  const [checkedServices, setCheckedServices] = useState<ListType[]>([]);

  return (
    <div className='form'>
      <Select setSelectedYearData={setSelectedYearData} />
      <section className='box'>
        <h4>Wybierz usługi, które Cię interesują</h4>
        <ServiceList
          list={selectedYearData.services}
          setCheckedServices={setCheckedServices}
        />
      </section>
      <TotalView
        bonus={selectedYearData.package}
        checkedServices={checkedServices}
      />
    </div>
  );
};

export default Form;
