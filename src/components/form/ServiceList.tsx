import { Dispatch, SetStateAction } from "react";
import { ListType } from "../../lib/types/calculator";
import Checkbox from "./Checkbox";

interface ListProps {
  list: ListType[];
  setCheckedServices: Dispatch<SetStateAction<ListType[]>>;
}

const ServiceList = ({ list, setCheckedServices }: ListProps) => {
  return list && Array.isArray(list)
    ? list.map((list) => (
        <Checkbox
          key={list.service}
          list={list}
          setCheckedServices={setCheckedServices}
        />
      ))
    : false;
};

export default ServiceList;
