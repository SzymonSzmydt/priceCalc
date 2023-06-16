import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ListType } from "../../lib/types/calculator";

interface CheckboxProps {
  list: ListType;
  setCheckedServices: Dispatch<SetStateAction<ListType[]>>;
}

const Checkbox = ({ list, setCheckedServices }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      setCheckedServices((state) => [...state, list]);
    }
    if (!checked) {
      setCheckedServices((state) =>
        state.filter((item) => item.price !== list.price)
      );
    }
  }, [checked, list, setCheckedServices]);

  return (
    <label className='checkbox'>
      <input
        type='checkbox'
        onChange={() => setChecked((state) => !state)}
        checked={checked}
      />
      {list.service} -<span className='price'> {list.price} zł</span>
    </label>
  );
};

export default Checkbox;
