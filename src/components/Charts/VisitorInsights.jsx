import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Jan', loyal: 200, new: 180, unique: 220 },
  { name: 'Feb', loyal: 300, new: 250, unique: 280 },
  { name: 'Mar', loyal: 280, new: 240, unique: 260 },
  { name: 'Apr', loyal: 320, new: 300, unique: 340 },
  { name: 'May', loyal: 350, new: 320, unique: 360 },
  { name: 'Jun', loyal: 330, new: 280, unique: 310 },
  { name: 'Jul', loyal: 380, new: 420, unique: 390 },
  { name: 'Aug', loyal: 360, new: 380, unique: 350 },
  { name: 'Sep', loyal: 340, new: 300, unique: 330 },
  { name: 'Oct', loyal: 320, new: 280, unique: 310 },
  { name: 'Nov', loyal: 300, new: 260, unique: 290 },
  { name: 'Dec', loyal: 280, new: 240, unique: 270 },
];

const VisitorInsights = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EFF0F6" />
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#737791', fontSize: 10 }} 
          dy={10}
          interval="preserveStartEnd"
        />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#737791', fontSize: 10 }} 
        />
        <Tooltip 
          contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
        />
        <Legend 
          verticalAlign="bottom" 
          align="center" 
          iconType="circle"
          wrapperStyle={{ 
            paddingTop: '20px',
            fontSize: '10px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px'
          }}
        />
        <Line 
          type="monotone" 
          dataKey="loyal" 
          stroke="#A700FF" 
          strokeWidth={3} 
          dot={false}
          activeDot={{ r: 6 }} 
          name="Loyal Customers"
        />
        <Line 
          type="monotone" 
          dataKey="new" 
          stroke="#EF4444" 
          strokeWidth={3} 
          dot={false}
          activeDot={{ r: 6 }} 
          name="New Customers"
        />
        <Line 
          type="monotone" 
          dataKey="unique" 
          stroke="#3CD856" 
          strokeWidth={3} 
          dot={false}
          activeDot={{ r: 6 }} 
          name="Unique Customers"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default VisitorInsights;
