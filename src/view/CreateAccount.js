import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import { useNavigation } from '@react-navigation/native';

import { SignupSchema } from '../helper';

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
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          password: '',
          vehicaltype: '',
          RegistrationNo: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // Handle form submission
          navigation.navigate('Login')
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
                style={touched.firstname && errors.firstname ?styles.ErrorInput: styles.input}
                placeholder={touched.firstname && errors.firstname ?errors.firstname: 'First Name'}
                placeholderTextColor={touched.firstname && errors.firstname ? '#FF0000' : '#888'}
                onChangeText={handleChange('firstname')}
                onBlur={handleBlur('firstname')}
                value={values.firstname}
              />

              <TextInput
                style={touched.lastname && errors.lastname ?styles.ErrorInput: styles.input}
                placeholder={touched.lastname && errors.lastname ?errors.lastname: 'Last Name'}
                placeholderTextColor={touched.lastname && errors.lastname ? '#FF0000' : '#888'}
                onChangeText={handleChange('lastname')}
                onBlur={handleBlur('lastname')}
                value={values.lastname}
              />

              <TextInput
                style={touched.email && errors.email ?styles.ErrorInput: styles.input}
                placeholder={touched.email && errors.email ?errors.email: 'Email'}
                placeholderTextColor={touched.email && errors.email ? '#FF0000' : '#888'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />

              <TextInput
                style={touched.phone && errors.phone ?styles.ErrorInput: styles.input}
                placeholder={touched.phone && errors.phone ?errors.phone: 'Phone Number'}
                placeholderTextColor={touched.phone && errors.phone ? '#FF0000' : '#888'}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                keyboardType="phone-pad"
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
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
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
    flex:8,
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#F1F1F1',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  ErrorInput: {
    height: 40,
    borderColor: 'red',
    borderWidth:2,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  errorText: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
  }
});

export default CreateAccount;
