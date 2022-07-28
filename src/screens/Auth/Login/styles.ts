import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
  },
  body: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '70%',
    width: '100%',
    backgroundColor: '#e7e7e7',
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
  },
  container_form: {
    marginTop: 10,
    width: '85%',
    height: '52%',
    justifyContent: 'space-evenly',
  },
  title_field: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  field: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000000',
    elevation: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 30,
      height: 30,
    },
  },
  forgot_password: {
    color: '#000000',
    width: '85%',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  button_login: {
    marginTop: 20,
    backgroundColor: '#daae65',
    borderRadius: 15,
    width: '85%',
    height: '12%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label_button_login: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  label_sign_up: {
    color: '#000000',
    marginTop: 10,
    fontSize: 15,
  },
  bold_sign_up: {
    color: '#daae65',
    fontWeight: 'bold',
  },
});

export default styles;
