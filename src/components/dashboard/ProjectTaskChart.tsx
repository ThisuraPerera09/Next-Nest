import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

interface ProjectTaskChartProps {
  tasks: any[];
}

const ProjectTaskChart: React.FC<ProjectTaskChartProps> = ({ tasks }) => {
  const getPieChartData = (tasks: any[]) => {
    const counts = {
      todo: tasks.filter((task: any) => task.status === 'TODO').length,
      inProgress: tasks.filter((task: any) => task.status === 'IN_PROGRESS').length,
      done: tasks.filter((task: any) => task.status === 'DONE').length,
    };
    return {
      labels: ['ToDo', 'In Progress', 'Done'],
      datasets: [{
        data: [counts.todo, counts.inProgress, counts.done],
        backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#FFCE56', '#36A2EB']
      }]
    };
  };

  return (
    <div className="flex space-x-4">
      <div className="w-1/3">
        <Pie data={getPieChartData(tasks)} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
      <div className="flex flex-col space-y-2 w-2/3">
        <div className="p-2 bg-blue-100 rounded-lg">
          <h3 className="text-lg font-bold">ToDo</h3>
          <p className="text-2xl font-semibold">
            {tasks.filter((task: any) => task.status === 'TODO').length || 0}
          </p>
        </div>
        <div className="p-2 bg-yellow-100 rounded-lg">
          <h3 className="text-lg font-bold">In Progress</h3>
          <p className="text-2xl font-semibold">
            {tasks.filter((task: any) => task.status === 'IN_PROGRESS').length || 0}
          </p>
        </div>
        <div className="p-2 bg-green-100 rounded-lg">
          <h3 className="text-lg font-bold">Done</h3>
          <p className="text-2xl font-semibold">
            {tasks.filter((task: any) => task.status === 'DONE').length || 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectTaskChart;
