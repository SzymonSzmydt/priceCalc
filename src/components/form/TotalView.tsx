import { ListType, PackageType } from "../../lib/types/calculator";
import "./styles/totalView.css";

interface TotalProps {
  bonus: PackageType[];
  checkedServices: ListType[];
}

const TotalView = ({ bonus, checkedServices }: TotalProps) => {
  const totalPrice = Array.isArray(checkedServices)
    ? checkedServices.map((item) => item.price).reduce((a, b) => a + b, 0)
    : 0;

  const userChoicedService = checkedServices.map((item) => item.service);

  console.log(checkedServices);

  const serviceDiscountValue = calculateTotalCost(
    { services: checkedServices, package: bonus },
    userChoicedService
  );

  return (
    <section className='total'>
      
      <div className='totalPrice'>
        Wartość promocyjna usług
        <p className='summary'> {serviceDiscountValue} </p>
        zł
      </div>
    </section>
  );
};

export default TotalView;
