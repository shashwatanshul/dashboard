import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Jan', reality: 8000, target: 10000 },
  { name: 'Feb', reality: 9500, target: 11000 },
  { name: 'Mar', reality: 10000, target: 10500 },
  { name: 'Apr', reality: 11000, target: 12000 },
  { name: 'May', reality: 12500, target: 13000 },
  { name: 'Jun', reality: 14000, target: 13500 },
  { name: 'Jul', reality: 15500, target: 15000 },
];

const TargetVsReality = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barGap={5} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EFF0F6" />
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#737791', fontSize: 10 }} 
        />
        <YAxis hide />
        <Tooltip 
          cursor={{ fill: 'rgba(93, 95, 239, 0.05)' }}
          contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
        />
        <Legend 
          verticalAlign="bottom" 
          align="center" 
          iconType="circle" 
          wrapperStyle={{ 
            paddingTop: '20px',
            fontSize: '10px'
          }} 
        />
        <Bar 
          dataKey="target" 
          fill="#FFCF00" 
          radius={[4, 4, 0, 0]} 
          name="Reality Sales" 
          barSize={15}
        />
        <Bar 
          dataKey="reality" 
          fill="#4AB58E" 
          radius={[4, 4, 0, 0]} 
          name="Target Sales" 
          barSize={15}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TargetVsReality;
