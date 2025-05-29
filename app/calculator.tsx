import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


const AddTwoNumbers = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [total, setTotal] = useState<number | null>(null);

  const handleAdd = () => {
    const number1 = parseFloat(num1) || 0;
    const number2 = parseFloat(num2) || 0;
    setTotal(number1 + number2);

    // console.log(twoSum([2,7,11,15],9));
  };



  return (
    <View style={styles.container}>
        <Text style={styles.title}>Adding Two Numbers</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <Button title="Add Two Numbers" onPress={handleAdd} />

   
      {total !== null && (
        <Text style={styles.result}>Total: {total}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    marginTop: 100,
  },
  title:{
    fontSize:20,
    textAlign:'center',
    padding:20,
    fontWeight:'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
    button: {
   backgroundColor: '#f4511e',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    position: 'absolute',
bottom:20,
    left: 20,
    right: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddTwoNumbers;


