"use client"


export default function RecentUpcomingElections(){

    const upcomingElectionData = [
        {
          id: 0,
          date: "September 21, 2024",
          state: "Edo State",
          electionType: "State Election",
        },
        {
          id: 1,
          date: "June 13, 2024",
          state: "Delta State",
          electionType: "State Election",
        },
        {
          id: 2,
          date: "Febraury 3, 2024",
          state: "Anambra State",
          electionType: "State Election",
        },
        {
          id: 3,
          date: "Febraury 16, 2024",
          state: "Imo State",
          electionType: "State Election",
        },
    ];
    
    return (
        <div className="w-full px-4 md:px-0">
          <div className="mb-6">
            <h3 className="text-xl font-bold">Recent & Upcoming Elections</h3>
            <p className="text-gray-500 mt-2">
              This list includes elections held last month, as well as those
              planned during this month, and the next two months.
            </p>
          </div>
          <div>
            <div className="bg-green-900 grid grid-cols-3 p-3 text-white font-bold w-full">
              <p className="px-2">Date</p>
              <p className="px-2">State</p>
              <p className="px-2">Type of Election</p>
            </div>
            {upcomingElectionData.map((data) => {
              return (
                <div className="grid grid-cols-3 h-20" key={data.id}>
                  <div className="mt-2 px-1 text-center text-sm bg-gray-100 flex items-center justify-center">
                    {data.date}
                  </div>
                  <div className="mx-2 mt-2 px-1 text-center text-sm bg-gray-100 flex items-center justify-center">
                    {data.state}
                  </div>
                  <div className="mt-2 px-1 text-center text-sm bg-gray-100 flex items-center justify-center">
                    {data.electionType}
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    );
}