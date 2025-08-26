export default function NextPage({ count, setCount }) {
  function handleNext(event) {
    event.preventDefault();
    setCount((prev) => prev + 1);
  }
  function handleBack(event) {
    event.preventDefault();
    setCount((prev) => prev - 1);
  }

  return (
    <>
      <div>
        <h2 className="text-xl font-bold mb-4">Address Information</h2>
      </div>
      <div className="grid gap-2">
        <div>
          <label htmlFor="streetAdd">Street Address</label>
          <textarea
            placeholder="Enter your street address"
            className="bg-amber-600 rounded-md p-3 w-full"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              placeholder="Enter your city"
              className="bg-amber-600 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input
              type="text"
              placeholder="Enter your state"
              className="bg-amber-600 rounded-md p-2 w-full"
            />
          </div>
        </div>

        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            placeholder="Enter your postal code"
            className="bg-amber-600 rounded-md p-2 w-full"
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>

        <div className="flex justify-between p-2">
          <button
            type="button"
            className="text-black bg-gray-300 w-20 pt-2 pb-2 pl-3 pr-3 rounded"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            type="button"
            className="text-black bg-green-500 w-20 pt-2 pb-2 pl-3 pr-3 rounded"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
