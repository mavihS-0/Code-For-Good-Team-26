import { Fragment, useState } from "react";
import {
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Listbox, Transition } from "@headlessui/react";

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/20/solid";
import { Menu } from "@headlessui/react";

const days = [
  { date: "2021-12-27", events: [] },
  { date: "2021-12-28", events: [] },
  { date: "2021-12-29", events: [] },
  { date: "2021-12-30", events: [] },
  { date: "2021-12-31", events: [] },
  { date: "2022-01-01", isCurrentMonth: true, events: [] },
  { date: "2022-01-02", isCurrentMonth: true, events: [] },
  {
    date: "2022-01-03",
    isCurrentMonth: true,
    events: [
      {
        id: 1,
        name: "Design review",
        time: "10AM",
        datetime: "2022-01-03T10:00",
        href: "#",
      },
      {
        id: 2,
        name: "Sales meeting",
        time: "2PM",
        datetime: "2022-01-03T14:00",
        href: "#",
      },
    ],
  },
  { date: "2022-01-04", isCurrentMonth: true, events: [] },
  { date: "2022-01-05", isCurrentMonth: true, events: [] },
  { date: "2022-01-06", isCurrentMonth: true, events: [] },
  {
    date: "2022-01-07",
    isCurrentMonth: true,
    events: [
      {
        id: 3,
        name: "Date night",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  { date: "2022-01-08", isCurrentMonth: true, events: [] },
  { date: "2022-01-09", isCurrentMonth: true, events: [] },
  { date: "2022-01-10", isCurrentMonth: true, events: [] },
  { date: "2022-01-11", isCurrentMonth: true, events: [] },
  {
    date: "2022-01-12",
    isCurrentMonth: true,
    isToday: true,
    events: [
      {
        id: 6,
        name: "Sam's birthday party",
        time: "2PM",
        datetime: "2022-01-25T14:00",
        href: "#",
      },
    ],
  },
  { date: "2022-01-13", isCurrentMonth: true, events: [] },
  { date: "2022-01-14", isCurrentMonth: true, events: [] },
  { date: "2022-01-15", isCurrentMonth: true, events: [] },
  { date: "2022-01-16", isCurrentMonth: true, events: [] },
  { date: "2022-01-17", isCurrentMonth: true, events: [] },
  { date: "2022-01-18", isCurrentMonth: true, events: [] },
  { date: "2022-01-19", isCurrentMonth: true, events: [] },
  { date: "2022-01-20", isCurrentMonth: true, events: [] },
  { date: "2022-01-21", isCurrentMonth: true, events: [] },
  {
    date: "2022-01-22",
    isCurrentMonth: true,
    isSelected: true,
    events: [
      {
        id: 4,
        name: "Maple syrup museum",
        time: "3PM",
        datetime: "2022-01-22T15:00",
        href: "#",
      },
      {
        id: 5,
        name: "Hockey game",
        time: "7PM",
        datetime: "2022-01-22T19:00",
        href: "#",
      },
    ],
  },
  { date: "2022-01-23", isCurrentMonth: true, events: [] },
  { date: "2022-01-24", isCurrentMonth: true, events: [] },
  { date: "2022-01-25", isCurrentMonth: true, events: [] },
  { date: "2022-01-26", isCurrentMonth: true, events: [] },
  { date: "2022-01-27", isCurrentMonth: true, events: [] },
  { date: "2022-01-28", isCurrentMonth: true, events: [] },
  { date: "2022-01-29", isCurrentMonth: true, events: [] },
  { date: "2022-01-30", isCurrentMonth: true, events: [] },
  { date: "2022-01-31", isCurrentMonth: true, events: [] },
  { date: "2022-02-01", events: [] },
  { date: "2022-02-02", events: [] },
  { date: "2022-02-03", events: [] },
  {
    date: "2022-02-04",
    events: [
      {
        id: 7,
        name: "Cinema with friends",
        time: "9PM",
        datetime: "2022-02-04T21:00",
        href: "#",
      },
    ],
  },
  { date: "2022-02-05", events: [] },
  { date: "2022-02-06", events: [] },
];
const selectedDay = days.find((day) => day.isSelected);

const moods = [
  {
    name: "Excited",
    value: "excited",
    icon: FireIcon,
    iconColor: "text-white",
    bgColor: "bg-red-500",
  },
  {
    name: "Loved",
    value: "loved",
    icon: HeartIcon,
    iconColor: "text-white",
    bgColor: "bg-pink-400",
  },
  {
    name: "Happy",
    value: "happy",
    icon: FaceSmileIcon,
    iconColor: "text-white",
    bgColor: "bg-green-400",
  },
  {
    name: "Sad",
    value: "sad",
    icon: FaceFrownIcon,
    iconColor: "text-white",
    bgColor: "bg-yellow-400",
  },
  {
    name: "Thumbsy",
    value: "thumbsy",
    icon: HandThumbUpIcon,
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    name: "I feel nothing",
    value: null,
    icon: XMarkIcon,
    iconColor: "text-gray-400",
    bgColor: "bg-transparent",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const tabs = [
  { name: "Today's Actions", href: "#", current: true },
  { name: "Report Breakdown", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

const PumpOperator = () => {
  const [selected, setSelected] = useState(moods[5]);
  const [currentTab, setCurrentTab] = useState(0);

  const [checkboxes, setCheckBoxes] = useState([]);
  const [textareaValue, setTextareaValue] = useState('');
  const handleTextareaChange = (e) => {
	setTextareaValue(e.target.value);
  }


  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCheckBoxes((prevState) => [...prevState, value]);
	  console.log(checkboxes);
    } else {
      setCheckBoxes((prevState) => prevState.filter((item) => item !== value));
    }
  };

  const handleSubmit = () => {
    fetch("/data/pumpData", {
      method: "POST",
      headers: {
        "Content -Type": "application/json",
      },
      body: JSON.stringify(checkboxes),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Pump operated successfully: ", data);
      })
      .catch((error) => {
        console.log("Error sending the data: ", error);
      });
  };

  const handleSubmitform = () => {
    fetch("", {
      method: "POST",
      headers: {
        "Content -Type": "application/json",
      },
      body: JSON.stringify(checkboxes),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data send successfully: ", data);
      })
      .catch((error) => {
        console.log("Error sending the data: ", error);
      });
  };


  return (
    <div className="">
      <div className="bg-gray-800 px-4  sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-md border-none bg-white/5 py-2 pl-3 pr-10 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
              defaultValue={tabs.find((tab) => tab.current).name}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="flex border-b border-white/10 py-4">
              <ul
                role="list"
                className="flex min-w-full flex-none gap-x-6 px-2 text-sm font-semibold leading-6 text-gray-400"
              >
                {tabs.map((tab, index) => (
                  <li key={tab.name}>
                    <a
                      href={tab.href}
                      className={currentTab === index ? "text-indigo-400" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentTab(index);
                      }}
                    >
                      {tab.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        {/* <div className="bg-white rounded-md shadow p-6">Home</div> */}

        {currentTab === 0 && (
          <>
            <div className="border-b border-gray-200 pb-5 p-3 shadow-lg mb-10 mt-10">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Today's Actions
              </h3>
              <p className="mt-2 max-w-4xl text-sm text-gray-500">
                Please look into today's task that should be performed.
              </p>
            </div>
            <fieldset>
              <legend className="sr-only">Notifications</legend>
              <div className="space-y-5">
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      aria-describedby="candidates-description"
                      name="candidates"
                      type="checkbox"
                      value="data_1"
                      onChange={handleCheckboxChange}
                      checked={checkboxes.includes("data_1")}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="candidates"
                      className="font-medium text-gray-900"
                    >
                      Pump Operation(Morning Shift)
                    </label>
                    <p id="candidates-description" className="text-gray-500">
                      Pump should be operated at 6am in the morning.
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      value="data_2"
                      onChange={handleCheckboxChange}
                      checked={checkboxes.includes("data_2")}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-900"
                    >
                      Pump Operation(Evening Shift)
                    </label>
                    <p id="offers-description" className="text-gray-500">
                      Pump shoudl be operated at 5pm in the evening.
                    </p>
                  </div>
                </div>
				<button
                type="button"
				onClick={handleSubmit}
                className="rounded-md align-center bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Submit
              </button>
              </div>
              
            </fieldset>
          </>
        )}

        {currentTab === 1 && (
          <>
            <div className="border-b border-gray-200 pb-5 p-3 shadow-lg mb-10 mt-10">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Report Breakdown
              </h3>
              <p className="mt-2 max-w-4xl text-sm text-gray-500">
                Workcation is a property rental website. Etiam ullamcorper massa
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="min-w-0 flex-1">
                <form action="#" className="relative">
                  <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                    <label htmlFor="comment" className="sr-only">
                      Add your comment
                    </label>
                    <textarea
                      rows={3}
                      name="comment"
                      id="comment"
					  value={textareaValue}
					  onChange={handleCheckboxChange}
                      className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder=" Add your comment..."
                      defaultValue={""}
                    />

                    {/* Spacer element to match the height of the toolbar */}
                    <div className="py-2" aria-hidden="true">
                      {/* Matches height of button in toolbar (1px border + 36px content height) */}
                      <div className="py-px">
                        <div className="h-9" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                    <div className="flex items-center space-x-5">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                        >
                          <PaperClipIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Attach a file</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        type="submit"
						onClick={handleSubmitform}
                        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}

        {currentTab === 2 && (
          <div className="lg:flex lg:h-full lg:flex-col">
            <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                <time dateTime="2022-01">January 2022</time>
              </h1>
              <div className="flex items-center">
                <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-gray-300"
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    className="flex items-center justify-center rounded-l-md py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
                  >
                    <span className="sr-only">Previous month</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="hidden px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
                  >
                    Today
                  </button>
                  <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
                  <button
                    type="button"
                    className="flex items-center justify-center rounded-r-md py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
                  >
                    <span className="sr-only">Next month</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                <div className="hidden md:ml-4 md:flex md:items-center">
                  <Menu as="div" className="relative">
                    <Menu.Button
                      type="button"
                      className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Month view
                      <ChevronDownIcon
                        className="-mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Menu.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Day view
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Week view
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Month view
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Year view
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <div className="ml-6 h-6 w-px bg-gray-300" />
                  <button
                    type="button"
                    className="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add event
                  </button>
                </div>
                <Menu as="div" className="relative ml-6 md:hidden">
                  <Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Open menu</span>
                    <EllipsisHorizontalIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Create event
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Go to today
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Day view
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Week view
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Month view
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Year view
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </header>
            <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
              <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
                <div className="bg-white py-2">
                  M<span className="sr-only sm:not-sr-only">on</span>
                </div>
                <div className="bg-white py-2">
                  T<span className="sr-only sm:not-sr-only">ue</span>
                </div>
                <div className="bg-white py-2">
                  W<span className="sr-only sm:not-sr-only">ed</span>
                </div>
                <div className="bg-white py-2">
                  T<span className="sr-only sm:not-sr-only">hu</span>
                </div>
                <div className="bg-white py-2">
                  F<span className="sr-only sm:not-sr-only">ri</span>
                </div>
                <div className="bg-white py-2">
                  S<span className="sr-only sm:not-sr-only">at</span>
                </div>
                <div className="bg-white py-2">
                  S<span className="sr-only sm:not-sr-only">un</span>
                </div>
              </div>
              <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
                <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
                  {days.map((day) => (
                    <div
                      key={day.date}
                      className={classNames(
                        day.isCurrentMonth
                          ? "bg-white"
                          : "bg-gray-50 text-gray-500",
                        "relative px-3 py-2"
                      )}
                    >
                      <time
                        dateTime={day.date}
                        className={
                          day.isToday
                            ? "flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white"
                            : undefined
                        }
                      >
                        {day.date.split("-").pop().replace(/^0/, "")}
                      </time>
                      {day.events.length > 0 && (
                        <ol className="mt-2">
                          {day.events.slice(0, 2).map((event) => (
                            <li key={event.id}>
                              <a href={event.href} className="group flex">
                                <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                                  {event.name}
                                </p>
                                <time
                                  dateTime={event.datetime}
                                  className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                                >
                                  {event.time}
                                </time>
                              </a>
                            </li>
                          ))}
                          {day.events.length > 2 && (
                            <li className="text-gray-500">
                              + {day.events.length - 2} more
                            </li>
                          )}
                        </ol>
                      )}
                    </div>
                  ))}
                </div>
                <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
                  {days.map((day) => (
                    <button
                      key={day.date}
                      type="button"
                      className={classNames(
                        day.isCurrentMonth ? "bg-white" : "bg-gray-50",
                        (day.isSelected || day.isToday) && "font-semibold",
                        day.isSelected && "text-white",
                        !day.isSelected && day.isToday && "text-indigo-600",
                        !day.isSelected &&
                          day.isCurrentMonth &&
                          !day.isToday &&
                          "text-gray-900",
                        !day.isSelected &&
                          !day.isCurrentMonth &&
                          !day.isToday &&
                          "text-gray-500",
                        "flex h-14 flex-col px-3 py-2 hover:bg-gray-100 focus:z-10"
                      )}
                    >
                      <time
                        dateTime={day.date}
                        className={classNames(
                          day.isSelected &&
                            "flex h-6 w-6 items-center justify-center rounded-full",
                          day.isSelected && day.isToday && "bg-indigo-600",
                          day.isSelected && !day.isToday && "bg-gray-900",
                          "ml-auto"
                        )}
                      >
                        {day.date.split("-").pop().replace(/^0/, "")}
                      </time>
                      <span className="sr-only">
                        {day.events.length} events
                      </span>
                      {day.events.length > 0 && (
                        <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                          {day.events.map((event) => (
                            <span
                              key={event.id}
                              className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
                            />
                          ))}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {selectedDay?.events.length > 0 && (
              <div className="px-4 py-10 sm:px-6 lg:hidden">
                <ol className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5">
                  {selectedDay.events.map((event) => (
                    <li
                      key={event.id}
                      className="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <p className="font-semibold text-gray-900">
                          {event.name}
                        </p>
                        <time
                          dateTime={event.datetime}
                          className="mt-2 flex items-center text-gray-700"
                        >
                          <ClockIcon
                            className="mr-2 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          {event.time}
                        </time>
                      </div>
                      <a
                        href={event.href}
                        className="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
                      >
                        Edit<span className="sr-only">, {event.name}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PumpOperator;
