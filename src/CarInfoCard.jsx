function CarInfoCard({ car }) {
  return (
    <div className="shadow-lg rounded-2xl p-5 border-2 border-gray-300">
      <h3 className="font-bold mb-2">{car.title}</h3>
      <h4>
        <span className="font-bold">Brand: </span>
        {car.brand}
      </h4>
      <p>
        <span className="font-bold">Year: </span>
        {car.year}
      </p>
      <p>
        <span className="font-bold">Price: </span>
        {car.price}
      </p>
      <p>
        <span className="font-bold">Premium: </span>
        {car.isPremium}
      </p>
    </div>
  );
}

export default CarInfoCard;
