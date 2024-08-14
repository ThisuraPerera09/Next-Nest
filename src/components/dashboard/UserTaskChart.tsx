import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

interface UserTaskChartProps {
  tasks: any[];
}

const UserTaskChart: React.FC<UserTaskChartProps> = ({ tasks }) => {
  const getUserTaskData = (tasks: any[]) => {
    // Create a mapping of user names to task counts
    const userTaskCounts = tasks.reduce((acc: any, task: any) => {
      const userName = task.user.name;
      acc[userName] = (acc[userName] || 0) + 1;
      return acc;
    }, {});

    const labels = Object.keys(userTaskCounts);
    const data = Object.values(userTaskCounts);

    return {
      labels,
      datasets: [
        {
          data,
          backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB', '#8E44AD', '#2ECC71', '#F39C12'],
          hoverBackgroundColor: ['#FF6384', '#FFCE56', '#36A2EB', '#8E44AD', '#2ECC71', '#F39C12'],
        },
      ],
    };
  };

  return (
    <div className="flex space-x-4">
      <div className="w-1/3">
        <Pie data={getUserTaskData(tasks)} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
      <div className="flex flex-col space-y-2 w-2/3">
        {tasks.reduce((acc: any, task: any) => {
          const userName = task.user.name;
          if (!acc[userName]) {
            acc[userName] = {
              name: userName,
              count: 1,
            };
          } else {
            acc[userName].count += 1;
          }
          return acc;
        }, {}) &&
          Object.entries(
            tasks.reduce((acc: any, task: any) => {
              const userName = task.user.name;
              if (!acc[userName]) {
                acc[userName] = {
                  name: userName,
                  count: 1,
                };
              } else {
                acc[userName].count += 1;
              }
              return acc;
            }, {})
          ).map(([userName, data]: any) => (
            <div key={userName} className="p-2 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-bold">{userName}</h3>
              <p className="text-2xl font-semibold">{data.count}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserTaskChart;
