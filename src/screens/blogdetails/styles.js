import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  blogImg: {
    height: 100,
    width: 100,
    marginBottom: 25,
    alignSelf: 'center',
  },
  content: {
    fontSize: 16,
    marginBottom: 25,
    lineHeight: 30,
    color: 'black',
  },
  heading: {
    fontWeight: '800',
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'right',
    color: 'black',
  },
  authorDescription: {
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'right',
    marginBottom: 30,
    color: 'black',
  },
});

export default styles;
