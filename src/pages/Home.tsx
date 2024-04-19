import React from 'react';
import '../App.css';

export const Home = () => {
  // Sample data for seminar categories
  const seminarCategories = [
    "Healthy Cooking",
    "Italian Cuisine",
    "Asian Fusion",
    "Vegan Delights",
    "Baking Masterclass"
  ];

  // Sample data for future events
  const futureEvents = [
    {
      title: "Mastering Pasta Making",
      date: "April 27, 2024",
      location: "Online"
    },
    {
      title: "The Art of Sushi Rolling",
      date: "May 5, 2024",
      location: "Online"
    },
    {
      title: "Barbecue Extravaganza",
      date: "May 15, 2024",
      location: "Online"
    },
    {
      title: "Farm-to-Table Experience",
      date: "June 3, 2024",
      location: "Online"
    },
  ];

  return (
    <>
      {/* Welcome Section */}
      <section className="welcome-section bg-gray-100 dark:bg-blue-900 text-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-emerald-700">Welcome</h1>
        <p className="text-lg text-gray-600">
          Bored, or want to become a chef at home? Don't know what to cook? You came to the right place.
        </p>
      </section>

      {/* Seminars Table Section */}
      <section className="seminars-section py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Upcoming Seminars</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Location</th>
              </tr>
            </thead>
            <tbody>
              {/* Seminar categories */}
              {seminarCategories.slice(0, 3).map((category, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{category}</td>
                  <td className="border px-4 py-2">April 15, 2024</td>
                  <td className="border px-4 py-2">Online</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Future Events Section */}
      <section className="future-events-section bg-gray-100 dark:bg-blue-900 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-emerald-700">Future Events</h2>
          <div className="flex justify-center gap-6">
            {/* Display all future events */}
            {futureEvents.map((event, index) => (
              <div key={index} className="event-card bg-white dark:bg-blue-800 rounded-lg shadow-md p-6 flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-2 text-green-600">{event.title}</h3>
                <p className="text-gray-600"><span className="font-bold">Date:</span> {event.date}</p>
                <p className="text-gray-600"><span className="font-bold">Location:</span> {event.location}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer bg-emerald-500 dark:bg-blue-900 text-white py-4 text-center">
        <p>&copy; Luis Martins & George Carp 2024</p>
      </footer>
    </>
  );
};

export default Home;
