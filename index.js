export default function Home() {
  return (
    <div>
      <h1>Welcome to Zvishavane Rides!</h1>
      <div>
        <input type="text" id="pickup" placeholder="Pickup Location" />
        <input type="text" id="dropoff" placeholder="Dropoff Location" />
        <input type="number" id="price" placeholder="Offer Price" />
        <button id="request-ride">Request Ride</button>
      </div>
    </div>
  );
}
