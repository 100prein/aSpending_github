import { StyleSheet, Text, View, ScrollView, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { SafeAreaView, Alert } from 'react-native-safe-area-context';
import Mathing from './components/Mathing.js'
import TimeSummary from './components/TimeSummary.js';

const Separator = () => <View style={styles.separator} />;

function SelectionScroll() {
  
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');
  const [incomeDescription, setIncomeDescription] = useState('');

  const [expenseAmount2, setExpenseAmount2] = useState('');
  const [expenseDescription2, setExpenseDescription2] = useState('');
  const [incomeAmount2, setIncomeAmount2] = useState('');
  const [incomeDescription2, setIncomeDescription2] = useState('');

  const [expenseAmount3, setExpenseAmount3] = useState('');
  const [expenseDescription3, setExpenseDescription3] = useState('');
  const [incomeAmount3, setIncomeAmount3] = useState('');
  const [incomeDescription3, setIncomeDescription3] = useState('');


  {/**Expenses and Income 1 */}
  const addExpense = () => {
    if (expenseAmount && expenseDescription) {
      setExpenses([...expenses, { amount: expenseAmount, description: expenseDescription }]);
      setExpenseAmount('');
      setExpenseDescription('');
    } else {
      Alert.alert('Please enter both amount and description.');
    }
  };
  
  const addIncome = () => {
    if (incomeAmount && incomeDescription) {
      setIncome([...income, { amount: incomeAmount, description: incomeDescription }]);
      setIncomeAmount('');
      setIncomeDescription('');
    } else {
      Alert.alert('Please enter both amount and description.');
    }
  };

  {/**Expenses and Income 2 */}
  const addExpense2 = () => {
    if (expenseAmount2 && expenseDescription2) {
      setExpenses([...expenses, { amount: expenseAmount2, description: expenseDescription2 }]);
      setExpenseAmount('');
      setExpenseDescription('');
    } else {
      Alert.alert('Please enter both amount and description.');
    }
  };
  
  const addIncome2 = () => {
    if (incomeAmount2 && incomeDescription2) {
      setIncome([...income, { amount: incomeAmount2, description: incomeDescription2 }]);
      setIncomeAmount('');
      setIncomeDescription('');
    } else {
      Alert.alert('Please enter both amount and description.');
    }
  };


  {/**Expenses and Income 3 */}
  const addExpense3 = () => {
    if (expenseAmount3 && expenseDescription3) {
      setExpenses([...expenses, { amount: expenseAmount3, description: expenseDescription3 }]);
      setExpenseAmount('');
      setExpenseDescription('');
    } else {
      Alert.alert('Please enter both amount and description.');
    }
  };
  
  const addIncome3 = () => {
    if (incomeAmount3 && incomeDescription3) {
      setIncome([...income, { amount: incomeAmount3, description: incomeDescription3 }]);
      setIncomeAmount('');
      setIncomeDescription('');
    } else {
      Alert.alert('Please enter both amount and description.');
    }
  };
  
  const totalExpenses = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
  const totalIncome = income.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.buttonSet}>
          <Text style={styles.title}>
            <h3>Quick add to your Expenses and Income</h3>
          </Text> 
          {/*Expenses input 1 */}
          <Text>
              <h1>Your Expenses</h1>
            </Text>
          <View style={styles.containerInput}>
           
            <View style={styles.inputLayout}>
              <Text>Amount</Text>
              <TextInput
                style={styles.expensesInput}
                value={expenseAmount}
                onChangeText={setExpenseAmount}
                keyboardType="numeric"
              />
              <Text>Name</Text>
              <TextInput
                style={styles.expensesInput}
                value={expenseDescription}
                onChangeText={setExpenseDescription}
              />
              <Button onPress={addExpense}>add</Button>
              <Button onPress={() => { setExpenses([]); }}>clear</Button>
            </View>
            {/*Expenses input 2 */}
            <View style={styles.inputLayout}>
              <Text>Amount</Text>
              <TextInput
                style={styles.expensesInput}
                value={expenseAmount2}
                onChangeText={setExpenseAmount2}
                keyboardType="numeric"
              />
              <Text>Name</Text>
              <TextInput
                style={styles.expensesInput}
                value={expenseDescription2}
                onChangeText={setExpenseDescription2}
              />
              <Button onPress={addExpense2}>add</Button>
              
            </View>
              {/*Expenses input 3 */}
            <View style={styles.inputLayout}>
              <Text>Amount</Text>
              <TextInput
                style={styles.expensesInput}
                value={expenseAmount3}
                onChangeText={setExpenseAmount3}
                keyboardType="numeric"
              />
              <Text>Name</Text>
              <TextInput
                style={styles.expensesInput}
                value={expenseDescription3}
                onChangeText={setExpenseDescription3}
              />
              <Button onPress={addExpense3}>add</Button>
              
            </View>
          
          </View>
            {expenses.map((expense, index) => (
              <Text key={index}>-${expense.amount} | {expense.description}</Text>
            ))}
            {expenses2.map((expense2, index) => (
              <Text key={index}>-${expense2.amount} | {expense2.description}</Text>
            ))}
            {expenses3.map((expense3, index) => (
              <Text key={index}>-${expense3.amount} | {expense3.description}</Text>
            ))}

            <h3 style={styles.expenseResult}>Expenses: ${totalExpenses}</h3>
            
          

          
          <Separator />
          <View>
            <Text>
              <h1>Your Income</h1>
            </Text>
              <View style={styles.containerInput}>
                   {/*Income input 1 */}
                <View style={styles.inputLayout}>
                  <Text>Amount</Text>
                  <TextInput
                    style={styles.incomeInput}
                    value={incomeAmount}
                    onChangeText={setIncomeAmount}
                    keyboardType="numeric"
                  />
                  <Text>Name</Text>
                  <TextInput
                    style={styles.incomeInput}
                    value={incomeDescription}
                    onChangeText={setIncomeDescription}
                  />
                  <Button onPress={addIncome}>add</Button>
                  <Button onPress={() => { setIncome([]); }}>clear</Button>
                </View>

                {/*Income input 2 */}
                <View style={styles.inputLayout}>
                  <Text>Amount</Text>
                  <TextInput
                    style={styles.incomeInput}
                    value={incomeAmount2}
                    onChangeText={setIncomeAmount2}
                    keyboardType="numeric"
                  />
                  <Text>Name</Text>
                  <TextInput
                    style={styles.incomeInput}
                    value={incomeDescription2}
                    onChangeText={setIncomeDescription2}
                  />
                  <Button onPress={addIncome2}>add</Button>
                </View>

                {/*Income input 3 */}
                <View style={styles.inputLayout}>
                  <Text>Amount</Text>
                  <TextInput
                    style={styles.incomeInput}
                    value={incomeAmount3}
                    onChangeText={setIncomeAmount3}
                    keyboardType="numeric"
                  />
                  <Text>Name</Text>
                  <TextInput
                    style={styles.incomeInput}
                    value={incomeDescription3}
                    onChangeText={setIncomeDescription3}
                  />
                  <Button onPress={addIncome3}>add</Button>
              </View>
              
           
              
            </View>
            <Pressable onPress={() => navigation.navigate('PrivacyPolicy')}>
                <Text>Privacy Policy</Text>
            </Pressable>
            {income.map((income, index) => (
              <Text key={index}>+${income.amount} | {income.description}</Text>
            ))}
            {income2.map((income2, index) => (
              <Text key={index}>+${income2.amount} | {income2.description}</Text>
            ))}
            {income3.map((income3, index) => (
              <Text key={index}>+${income3.amount} | {income3.description}</Text>
            ))}
            <h3 style={styles.incomeResult}>Income: ${totalIncome}</h3>
          </View>
          <Separator />
          <View>
            <Text>
              <h1>Total Weekly</h1>
            </Text>
            <h3>Total: ${totalIncome - totalExpenses}</h3>
            <Button>
              Save
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function CalculatorBudget() {
  return (
    <Mathing />
  );
}

function HomeScreen() {
  return (
    <TimeSummary />
  );
}

function ProfileScreen() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Account</Text>
      <Text>Settings</Text>
      <Text>Get Help</Text>
      <Text>Log out</Text>
      <Text>Privacy Policy</Text>
      <a href="www.google.com">Hi</a>
      {/*<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>*/}
    </View>
  );
}

function InputScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SelectionScroll />
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Input"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Input"
        component={InputScreen}
        options={{
          tabBarLabel: 'Input',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pen" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Calculator"
        component={CalculatorBudget}
        options={{
          tabBarLabel: 'Calculator',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calculator" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  containerInput:{
    flexDirection: 'row',
    
  },
  expenseResult:{
    color: 'red',
  },
  incomeResult:{
    color: 'blue',
  },
  inputLayout:{
    margin: 7,
  },
  expensesInput: {
    width: 80,
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 4,
    borderRadius: 7,
  },
  incomeInput: {
    width: 80,
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 4,
    borderRadius: 7,
  },
  eachButton: {
    height: 50,
    width: 90,
    alignContent: 'center',
    justifyContent: 'center',
    color: 'white',
    flexWrap: 'wrap',
  },
  buttonSet: {
    padding: 10,
    height: 200,
    width: 300,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
