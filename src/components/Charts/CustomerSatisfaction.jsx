import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  { name: 'Jan', lastMonth: 1500, thisMonth: 2100 },
  { name: 'Feb', lastMonth: 2200, thisMonth: 2800 },
  { name: 'Mar', lastMonth: 1800, thisMonth: 2500 },
  { name: 'Apr', lastMonth: 2500, thisMonth: 3200 },
  { name: 'May', lastMonth: 2100, thisMonth: 3000 },
  { name: 'Jun', lastMonth: 3000, thisMonth: 3800 },
  { name: 'Jul', lastMonth: 2800, thisMonth: 4500 },
];

const CustomerSatisfaction = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <defs>
          <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00E096" stopOpacity={0.1}/>
            <stop offset="95%" stopColor="#00E096" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0095FF" stopOpacity={0.1}/>
            <stop offset="95%" stopColor="#0095FF" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EFF0F6" />
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#737791', fontSize: 10 }} 
        />
        <YAxis hide />
        <Tooltip 
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
        <Area 
          type="monotone" 
          dataKey="lastMonth" 
          stroke="#0095FF" 
          fillOpacity={1} 
          fill="url(#colorLastMonth)" 
          strokeWidth={3}
          name="Last Month"
        />
        <Area 
          type="monotone" 
          dataKey="thisMonth" 
          stroke="#00E096" 
          fillOpacity={1} 
          fill="url(#colorThisMonth)" 
          strokeWidth={3}
          name="This Month"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomerSatisfaction;
