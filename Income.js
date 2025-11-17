import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { saveData } from '../utils/storage';

export default function Income({ setIncome }) {
  const [amount, setAmount] = useState('');

  const saveIncome = async () => {
    await saveData('income', Number(amount));
    setIncome(Number(amount));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Add Monthly Income</Text>

      <TextInput
        placeholder="Enter income"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={{ marginTop: 10, padding: 10, borderWidth: 1 }}
      />

      <Button title="Save Income" onPress={saveIncome} />
    </View>
  );
}I
