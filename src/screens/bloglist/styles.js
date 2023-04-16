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
  },
  card: {
    backgroundColor: '#F5F5DC',
    borderRadius: 10,
    padding: 10,
  },
  subView: {flexDirection: 'row'},
  subContainer: {
    marginLeft: Dimensions.get('screen').width / 12,
    justifyContent: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    width: Dimensions.get('screen').width / 2,
    color: 'black',
  },
  subHeading: {fontSize: 18, fontWeight: 'bold', color: 'gray'},
});

export default styles;
