import Homebtn from "@/components/homeBtn";
import homebtn from "@/components/homeBtn";
export default function CreatePlanPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="absolute top-4 left-0 ml-5">
      <Homebtn/>
      </div>
      <div className="bg-white/80 backdrop-blur-xl w-full max-w-lg shadow-xl rounded-2xl p-8 border border-gray-200">

        
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Create Tracking Plan
        </h1>

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
                         focus:ring-2 focus:ring-gray-600 outline-none bg-gray-50"
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
                         focus:ring-2 focus:ring-gray-600 outline-none bg-gray-50"
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
                         focus:ring-2 focus:ring-gray-600 outline-none bg-gray-50"
              placeholder="Enter your savings goal"
            />
          </div>

         
          <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
            Allowance Breakdown
          </h3>

          <div className="grid grid-cols-2 gap-4">

            
            <div>
              <label className="font-medium text-gray-700">Travel</label>
              <input
                name="travel"
                type="number"
                required
                className="w-full mt-1 p-3 rounded-lg border border-gray-300 text-black
                           focus:ring-2 focus:ring-gray-600 outline-none bg-gray-50"
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
                           focus:ring-2 focus:ring-gray-600 outline-none bg-gray-50"
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
                           focus:ring-2 focus:ring-gray-600 outline-none bg-gray-50"
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
                           focus:ring-2 focus:ring-gray-600 outline-none bg-gray-50"
                placeholder="0"
              />
            </div>
          </div>

         
          <button
            type="submit"
            className="w-full bg-gray-900 py-3 text-white font-semibold rounded-lg
                       hover:bg-black active:scale-95 transition-all shadow-md"
          >
            Create Plan
          </button>
        </form>

      </div>
    </div>
  );
}
