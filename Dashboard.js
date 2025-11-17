import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import WalletPieChart from '../components/PieChart';

export default function Dashboard({
  income,
  expenses,
  distribution
}) {
  const totalExpenses = expenses.reduce((a, b) => a + b.amount, 0);

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
        Smart Wallet Dashboard
      </Text>

      <Text style={{ marginTop: 20, fontSize: 20 }}>
        Total Income: {income} SAR
      </Text>

      <Text style={{ marginTop: 10, fontSize: 20 }}>
        Total Expenses: {totalExpenses} SAR
      </Text>

      <WalletPieChart income={income} distribution={distribution} />
    </ScrollView>
  );
}
