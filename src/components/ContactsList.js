import React from "react";

function ContactsList({people}) {

  return (
    <ul
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">
                  {`${person.firstName} ${person.lastName} ${person.dob}`}
                </h3>
                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {person.cohort}
                </span>
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">
                {person.email}
              </p>
            </div>
          </div>
          <div></div>
        </li>
      ))}
    </ul>
  );
}

export default ContactsList;
