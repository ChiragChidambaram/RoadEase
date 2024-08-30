import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Formik} from 'formik';
import { useNavigation } from '@react-navigation/native';

import { LoginSchema } from '../helper';

const Login = () => {

  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <View style={styles.containerHeader}>
        <Image
          source={require('../public/images/logo.png')}
          width={42}
          height={42}
        />
      </View>
      <Text style={styles.textStyle}>Login</Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={values => {
          // Handle form submission
          console.log(values);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.form}>
            <ScrollView style={{flex: 6, backgroundColor: '#fff'}}>
              

            <TextInput
                style={touched.email && errors.email ?styles.ErrorInput: styles.input}
                placeholder={touched.email && errors.email ?errors.email: 'Email'}
                placeholderTextColor={touched.email && errors.email ? '#FF0000' : '#888'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />

              <TextInput
                style={touched.password && errors.password ?styles.ErrorInput: styles.input}
                placeholder={touched.password && errors.password ?errors.password: 'Password'}
                placeholderTextColor={touched.password && errors.password ? '#FF0000' : '#888'}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />


            </ScrollView>

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={[styles.CreateText]}>
            <Text style={{color:'#000'}}>Create a new account?</Text >
            <Pressable onPress={()=>(navigation.navigate('CreateAccount'))}><Text style={{color:'#007AFF'}}>Register</Text></Pressable>
          </View>
          </View>
        )}
      </Formik>
      <View style={{flex:2}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  containerHeader: {
    flex: 1.5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#112D4E',
    marginBottom:10
  },
  button: {
    backgroundColor: '#112D4E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 20,
    color: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'semibold',
  },
  form: {
    flex:1.8,
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#F1F1F1',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    color:'#000'
  },
  ErrorInput: {
    height: 40,
    borderColor: 'red',
    borderWidth:2,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  CreateText:{
    marginTop:20,
    display:'flex',
    flexDirection:"row",
    justifyContent:"center",
    alignContent:"center",
    color:'#000'
  }
});

export default Login;
