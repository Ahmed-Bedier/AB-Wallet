import React from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';

export default function WalletPieChart({ distribution, income }) {
  const data = [
    { value: income * (distribution.essentials / 100), color: '#FF6384', label: 'Essentials' },
    { value: income * (distribution.needs / 100), color: '#36A2EB', label: 'Needs' },
    { value: income * (distribution.savings / 100), color: '#FFCE56', label: 'Savings' },
    { value: income * (distribution.debts / 100), color: '#4BC0C0', label: 'Debts' },
    { value: income * (distribution.charity / 100), color: '#9966FF', label: 'Charity' },
  ];

  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <PieChart
        data={data}
        doughnut
        showValues
        innerRadius={50}
        outerRadius={100}
        strokeWidth={2}
      />
    </View>
  );
}
