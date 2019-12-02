import { Platform } from 'react-native'

export const platform = {
  is: {
    ios: Platform.OS === 'ios',
    android: Platform.OS === 'android',
  },
  version: Platform.Version,
  select: <IOSValueType, AndroidValueType>(iosValue: IOSValueType, androidValue: AndroidValueType) => {
    return Platform.OS === 'ios' ? iosValue : androidValue
  },
}
