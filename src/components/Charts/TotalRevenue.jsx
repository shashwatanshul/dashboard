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
  { name: 'Monday', online: 12000, offline: 10000 },
  { name: 'Tuesday', online: 18000, offline: 12000 },
  { name: 'Wednesday', online: 15000, offline: 22000 },
  { name: 'Thursday', online: 24000, offline: 18000 },
  { name: 'Friday', online: 19000, offline: 15000 },
  { name: 'Saturday', online: 22000, offline: 19000 },
  { name: 'Sunday', online: 25000, offline: 21000 },
];

const TotalRevenue = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barGap={5} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EFF0F6" />
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#737791', fontSize: 10 }} 
          dy={10}
          tickFormatter={(value) => value.substring(0, 3)}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#737791', fontSize: 10 }} 
          tickFormatter={(value) => `${value/1000}k`}
        />
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
          dataKey="online" 
          fill="#0095FF" 
          radius={[4, 4, 0, 0]} 
          name="Online Sales"
          barSize={15}
        />
        <Bar 
          dataKey="offline" 
          fill="#00E096" 
          radius={[4, 4, 0, 0]} 
          name="Offline Sales"
          barSize={15}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TotalRevenue;
