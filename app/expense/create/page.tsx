export default function CreatePlanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-lg shadow-xl rounded-2xl p-8">

       
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Create Tracking Plan</h1>

        <form
          action="/api/plan/create"
          method="POST"
          className="space-y-5"
        >
         
          <div>
            <label className="font-medium text-gray-700">Salary</label>
            <input
              name="salary"
              type="number"
              required
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 text-black
                         focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter your monthly salary"
            />
          </div>

          
          <div>
            <label className="font-medium text-gray-700">Month</label>
            <input
              name="month"
              type="text"
              required
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 text-black
                         focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="January / February / March..."
            />
          </div>

          
          <div>
            <label className="font-medium text-gray-700">Savings Goal</label>
            <input
              name="savings"
              type="number"
              required
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 text-black
                         focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter your savings goal"
            />
          </div>

          
          <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-800">Allowance Breakdown</h3>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="font-medium text-gray-700">Travel</label>
              <input
                name="travel"
                type="number"
                required
                className="w-full mt-1 p-3 rounded-lg border border-gray-300 text-black
                           focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="0"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700">Bills</label>
              <input
                name="bills"
                type="number"
                required
                className="w-full mt-1 p-3 rounded-lg border border-gray-300 text-black
                           focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="0"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700">Grocery</label>
              <input
                name="grocery"
                type="number"
                required
                className="w-full mt-1 p-3 rounded-lg border border-gray-300 text-black
                           focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="0"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700">Shopping</label>
              <input
                name="shopping"
                type="number"
                required
                className="w-full mt-1 p-3 rounded-lg border border-gray-300 text-black
                           focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="0"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 py-3 text-white font-semibold rounded-lg
                       hover:bg-indigo-700 active:scale-95 transition-all"
          >
            Create Plan
          </button>
        </form>

      </div>
    </div>
  );
}
