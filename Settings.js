import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch } from 'react-native';
import { saveData } from '../utils/storage';

export default function Settings({ distribution, setDistribution }) {
  const [theme, setTheme] = useState('light');
  const [currency, setCurrency] = useState('SAR');
  const [lang, setLang] = useState('ar');

  const saveSettings = async () => {
    await saveData('distribution', distribution);
    await saveData('theme', theme);
    await saveData('currency', currency);
    await saveData('lang', lang);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Settings</Text>

      <Text style={{ marginTop: 10 }}>Theme</Text>
      <Switch 
        value={theme === 'dark'}
        onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />

      <Text style={{ marginTop: 20 }}>Currency:</Text>
      <TextInput 
        value={currency}
        onChangeText={setCurrency}
        style={{ borderWidth: 1, padding: 10 }}
      />

      <Text style={{ marginTop: 20 }}>Language (ar/en)</Text>
      <TextInput 
        value={lang}
        onChangeText={setLang}
        style={{ borderWidth: 1, padding: 10 }}
      />

      <Text style={{ marginTop: 30, fontWeight: 'bold' }}>Distribution %</Text>

      {Object.keys(distribution).map((key) => (
        <View key={key} style={{ marginTop: 10 }}>
          <Text>{key} %</Text>
          <TextInput
            value={distribution[key].toString()}
            onChangeText={(v) =>
              setDistribution({ ...distribution, [key]: Number(v) })
            }
            keyboardType="numeric"
            style={{ borderWidth: 1, padding: 10 }}
          />
        </View>
      ))}

      <Button title="Save Settings" onPress={saveSettings} />
    </View>
  );
}
