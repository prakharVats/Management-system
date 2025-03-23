import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Group A", value1: 4, value2: 1, value3: 2 },
  { name: "Group B", value1: 3, value2: 6, value3: 5 },
  { name: "Group C", value1: 5, value2: 3, value3: 6 },
  { name: "Group D", value1: 7, value2: 8, value3: 6 },
  { name: "Group E", value1: 4, value2: 4, value3: 5 },
  { name: "Group F", value1: 3, value2: 3, value3: 7 },
];

export default function GradientBarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart 
        data={data} 
        margin={{ top: 20, right: 30, bottom: 5 }}>
        {/* Define Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#acafcd" />
            <stop offset="100%" stopColor="#797daf" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(79,83,131,1)" />
            <stop offset="100%" stopColor="rgba(32,43,63,1)" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#60659f" />
            <stop offset="100%" stopColor="#2a2c46" />
          </linearGradient>
        </defs>

        <XAxis dataKey="name" stroke="#A0AEC0"/>
        <YAxis stroke="#A0AEC0"/>
        <Tooltip 
          cursor={{ fill: '#2a2c46' }}
          contentStyle={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            border: '1px solid #555',
            borderRadius: '8px',
            color: '#fff',
          }}
        />
        {/* <Legend/> */}
        
        <Bar dataKey="value1" fill="url(#gradient1)" />
        <Bar dataKey="value2" fill="url(#gradient2)" />
        <Bar dataKey="value3" fill="url(#gradient3)" />
      </BarChart>
    </ResponsiveContainer>
  );
}
