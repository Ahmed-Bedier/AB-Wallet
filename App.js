import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import Dashboard from './screens/Dashboard';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [distribution, setDistribution] = useState({
    essentials: 30,
    needs: 25,
    savings: 30,
    debts: 13,
    charity: 2
  });

  useEffect(() => {
    const load = async () => {
      const savedIncome = await AsyncStorage.getItem('income');
      const savedExpenses = await AsyncStorage.getItem('expenses');
      const savedDist = await AsyncStorage.getItem('distribution');

      if (savedIncome) setIncome(JSON.parse(savedIncome));
      if (savedExpenses) setExpenses(JSON.parse(savedExpenses));
      if (savedDist) setDistribution(JSON.parse(savedDist));
    };

    load();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Dashboard 
        income={income} 
        setIncome={setIncome}
        expenses={expenses}
        setExpenses={setExpenses}
        distribution={distribution}
        setDistribution={setDistribution}
      />
    </SafeAreaView>
  );
}
