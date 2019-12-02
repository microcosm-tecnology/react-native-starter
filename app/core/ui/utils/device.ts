import {
  Dimensions,
  PixelRatio,
  Platform,
  StatusBar,
} from 'react-native'
import { platform as devicePlatform } from './platform'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

const IPHONE_XS_HEIGHT = 812 // iPhone X and XS
const IPHONE_XR_HEIGHT = 896 // iPhone XR and XS Max

interface GetDeviceInfoParams {
  windowSize: { height: number, width: number }
  pixelDensity: number
  platform: typeof Platform
}

const getDeviceInfo =
  ({
     windowSize: { height, width },
     pixelDensity,
     platform,
   }: GetDeviceInfoParams) => {
  const adjustedHeight = height * pixelDensity
  const adjustedWidth = width * pixelDensity

  let tablet
  let phone
  let iPhoneX
  let iPhoneXr

  const tv = platform.isTV

  if (tv) {
    tablet = false
    phone = false
    iPhoneX = false
    iPhoneXr = false
  } else {
    // An Android device is considered a tablet if its smallest width >= 600dp (layout-sw600dp)
    // source: https://developer.android.com/training/multiscreen/screensizes.html#TaskUseSWQuali

    if (platform.OS === 'android') {
      tablet = Math.min(width, height) >= 600
    } else {
      if (pixelDensity < 2 && Math.max(adjustedWidth, adjustedHeight) >= 1000) {
        tablet = true
      } else if (pixelDensity === 2 && Math.max(adjustedWidth, adjustedHeight) >= 1920) {
        tablet = true
      } else {
        tablet = false
      }
    }

    phone = !tablet

    iPhoneX = false
    iPhoneXr = false

    if (platform.OS === 'ios' && !platform.isTVOS) {
      if (Math.max(width, height) === IPHONE_XS_HEIGHT) { iPhoneX = true }
      if (!platform.isPad && Math.max(width, height) === IPHONE_XR_HEIGHT) { iPhoneXr = true }
    }
  }

  return {
    adjustedHeight,
    adjustedWidth,
    pixelDensity,
    height,
    width,
    is: {
      tv,
      tablet,
      phone,
      iPhoneX,
      iPhoneXr,
    },
    statusBarHeight: devicePlatform.select(getStatusBarHeight(), StatusBar.currentHeight || 0),
  }
}

export const device = getDeviceInfo(
  {
    windowSize: Dimensions.get('screen'),
    pixelDensity: PixelRatio.get(),
    platform: Platform,
  }
)
