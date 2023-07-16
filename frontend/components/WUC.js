import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
const WUC = () => {
  return (
    <div className="p-4">
      <div className="border-b border-gray-200 pb-5 p-3 shadow-lg p-4 mb-10 mt-10">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Notifications
        </h3>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">
          Please look into today's notifications.
        </p>
      </div>

      <div className="flex flex-col space-y-8">
      <div className="rounded-md bg-green-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckCircleIcon
              className="h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-green-800">
              Pump operation completed successfully
            </p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md bg-green-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckCircleIcon
              className="h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-green-800">
              No breakdown issues found
            </p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="border-b border-gray-200 pb-5 p-3 shadow-lg p-4 mb-10 mt-10">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Maintenance Fees
        </h3>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">
          Mention the Maintenance fee collected
        </p>
      </div>
      <div className="border rounded p-4">
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder=" Fee Collected in Rs"
      />
    </div>
    </div>
  );
};

export default WUC;
