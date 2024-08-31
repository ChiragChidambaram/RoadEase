import React, { useState } from 'react';
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
import {useNavigation} from '@react-navigation/native';

import {SignupSchema} from '../helper';
import ImageUpload from '../components/imageUpload';
import { Register } from '../api/commonApi';

const CreateAccount = () => {
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
      <Text style={styles.textStyle}>Create Account</Text>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={async(values) => {
          console.log("values", values);
          const response = await Register(values)
          if(response){
            console.log("response",response);
            navigation.navigate('Login');
          }
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
                style={
                  touched.firstName && errors.firstName
                    ? styles.ErrorInput
                    : styles.input
                }
                placeholder={
                  touched.firstName && errors.firstName
                    ? errors.firstName
                    : 'First Name'
                }
                placeholderTextColor={
                  touched.firstName && errors.firstName ? '#FF0000' : '#888'
                }
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
              />

              <TextInput
                style={
                  touched.lastName && errors.lastName
                    ? styles.ErrorInput
                    : styles.input
                }
                placeholder={
                  touched.lastName && errors.lastName
                    ? errors.lastName
                    : 'Last Name'
                }
                placeholderTextColor={
                  touched.lastName && errors.lastName ? '#FF0000' : '#888'
                }
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
              />

              <TextInput
                style={
                  touched.email && errors.email
                    ? styles.ErrorInput
                    : styles.input
                }
                placeholder={
                  touched.email && errors.email ? errors.email : 'Email'
                }
                placeholderTextColor={
                  touched.email && errors.email ? '#FF0000' : '#888'
                }
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />

              <TextInput
                style={
                  touched.phone && errors.phone
                    ? styles.ErrorInput
                    : styles.input
                }
                placeholder={
                  touched.phone && errors.phone ? errors.phone : 'Phone Number'
                }
                placeholderTextColor={
                  touched.phone && errors.phone ? '#FF0000' : '#888'
                }
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                keyboardType="phone-pad"
              />

              <TextInput
                style={
                  touched.password && errors.password
                    ? styles.ErrorInput
                    : styles.input
                }
                placeholder={
                  touched.password && errors.password
                    ? errors.password
                    : 'Password'
                }
                placeholderTextColor={
                  touched.password && errors.password ? '#FF0000' : '#888'
                }
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
            </ScrollView>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <View style={[styles.CreateText]}>
              <Text style={{color: '#000'}}>Already have an account?</Text>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={{color: '#007AFF'}}>Login</Text>
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 10,
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
    flex: 8,
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#F1F1F1',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#000',
  },

  ErrorInput: {
    height: 40,
    borderColor: 'red',
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  errorText: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
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

export default CreateAccount;
