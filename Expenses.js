import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { saveData } from '../utils/storage';

export default function Expenses({ expenses, setExpenses }) {
  const [amount, setAmount] = useState('');

  const saveExpense = async () => {
    const newList = [...expenses, { amount: Number(amount) }];
    setExpenses(newList);
    await saveData('expenses', newList);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Add Expense</Text>

      <TextInput
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={{ marginTop: 10, padding: 10, borderWidth: 1 }}
      />

      <Button title="Save Expense" onPress={saveExpense} />
    </View>
  );
}
