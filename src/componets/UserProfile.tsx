import React from "react";

interface AddressProps {
  road: string;
  city: string;
  country: string;
  house: string;
  room: string;
}

type UserProfileProps = {
  userName: string;
  age: number;
  rollNo: number;
  dept: string;
  subject: string[];
  skills: string[];
  hobbies: string[];
  address: AddressProps;
};

const UserProfile = ({
  userName,
  age,
  rollNo,
  dept,
  subject,
  skills,
  hobbies,
  address,
}: UserProfileProps) => {
  const { city, country, road, room, house } = address;

  return (
    <div className="max-w-xl mx-auto my-6 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden text-left font-sans">
      {/* Header */}
      <div className="bg-blue-600 p-6 text-white text-center">
        <h1 className="text-2xl font-bold">{userName}</h1>
        <p className="text-blue-100 text-sm mt-1">{dept}</p>
      </div>

      <div className="p-6 space-y-4 text-gray-700 text-sm">
        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
          <p><span className="font-semibold text-gray-900">Age:</span> {age}</p>
          <p><span className="font-semibold text-gray-900">Roll:</span> {rollNo}</p>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
          <p className="bg-gray-50 p-2.5 rounded-lg border border-gray-200">
            {house}, Room-{room}, {road}, {city}, {country}
          </p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-1.5">Skills</h3>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-50 text-blue-600 font-medium px-2.5 py-1 rounded-md text-xs border border-blue-100">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Subjects */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Subjects</h3>
          <p className="text-gray-600">{subject.join(", ")}</p>
        </div>

        {/* Hobbies */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Hobbies</h3>
          <p className="text-gray-600">{hobbies.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;