import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
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
    const loadData = async () => {
      const savedIncome = await AsyncStorage.getItem('income');
      const savedExpenses = await AsyncStorage.getItem('expenses');
      if(savedIncome) setIncome(JSON.parse(savedIncome));
      if(savedExpenses) setExpenses(JSON.parse(savedExpenses));
    };
    loadData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" />
      <Dashboard income={income} expenses={expenses} distribution={distribution}/>
    </SafeAreaView>
  );
}
