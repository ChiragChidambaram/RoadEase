import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Formik} from 'formik';

import {ReportSchema} from '../helper';

const ReportPage = () => {
  const tags = ['Mild', 'Moderate', 'Severe'];

  return (
    <View style={styles.reportContainer}>
      <View style={styles.reportHeader}>
        <Image source={require('../public/images/logo.png')} />
        <Text style={styles.heading}>Add Report</Text>
      </View>
      <View style={[styles.reportForm, {backgroundColor: '#fff'}]}>
        <Formik
          initialValues={{issue: '', description: ''}}
          validationSchema={ReportSchema}
          onSubmit={(values, {resetForm}) => {
            console.log(values);
            resetForm();
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <View style={styles.container}>
                <TextInput
                  style={
                    touched.issue && errors.issue
                      ? styles.ErrorInput
                      : styles.input
                  }
                  placeholder={
                    touched.issue && errors.issue
                      ? errors.issue
                      : "What's the issue?"
                  }
                  placeholderTextColor={
                    touched.issue && errors.issue ? '#FF0000' : '#888'
                  }
                  onChangeText={handleChange('issue')}
                  onBlur={handleBlur('issue')}
                  value={values.issue}
                />
                <TextInput
                  style={
                    touched.description && errors.description
                      ? [styles.ErrorInput, {height: 100}]
                      : [styles.input, styles.textArea]
                  }
                  placeholder={
                    touched.description && errors.description
                      ? errors.description
                      : 'Describe the issue'
                  }
                  placeholderTextColor={
                    touched.description && errors.description
                      ? '#FF0000'
                      : '#888'
                  }
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  value={values.description}
                  multiline
                />

                <Text style={styles.label}>Tell us about the severity</Text>

                <View style={styles.severityContainer}>
                  {tags.map((tag, tagIndex) => (
                    <TouchableOpacity key={tagIndex} style={styles.tagsButton}>
                      <Text style={styles.buttonText}>{tag}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <View style={styles.container}>
                <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                  <Text style={[styles.buttonText,{color:'#fff',fontFamily:'Archivo-Bold'}]}>Raise an issue</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default ReportPage;

const styles = StyleSheet.create({
  reportContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  reportHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    height: 80,
  },
  reportForm: {
    flex: 8,
  },
  heading: {
    fontFamily: 'Archivo-Bold',
    fontSize: 24,
    paddingLeft: 10,
    color: '#112D4E',
  },
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    backgroundColor: '#F1F1F1',
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  textArea: {
    height: 100,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
  ErrorInput: {
    height: 40,
    borderColor: 'red',
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  tagsContainer: {
    width: '100%',
    justifyContent: 'space-between',
  },
  tagsButton: {
    backgroundColor: '#F1F1F1',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    textAlign:'center',
  },
  severityContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  label: {
    fontFamily: 'Archivo-Regular',
    color: '#1A4578',
  },
  submitButton: {
    padding: 10,
    backgroundColor: '#112D4E',
    borderRadius: 5,
    color:'#fff'
  },
});
