interface DisplayProps {
  title: string;
  value: number;
}

const Display = ({ title, value }: DisplayProps) => {
  return (
    <div className='totalPrice'>
      {title}
      <p className='summary'> {value} </p>
      zł
    </div>
  );
};

export default Display;
