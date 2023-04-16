import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    color: 'black',
  },
  uploadBtn: {
    backgroundColor: 'gray',
    padding: 10,
    marginLeft: Dimensions.get('screen').width / 3,
  },
  subView: {
    flexDirection: 'row',
  },
  labelImage: {
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: 'black',
  },
});

export default styles;
