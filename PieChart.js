import React from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';

export default function WalletPieChart({ income, distribution }) {
  const data = Object.keys(distribution).map((key, index) => ({
    value: income * (distribution[key] / 100),
    label: key,
    color: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'][index],
  }));

  return (
    <View style={{ marginTop: 30, alignItems: 'center' }}>
      <PieChart
        data={data}
        donut
        showValues
        innerRadius={50}
        radius={100}
      />
    </View>
  );
}
