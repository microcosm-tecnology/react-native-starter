import { Dimensions, PixelRatio } from 'react-native'
import { platform } from '../utils/platform'

// platform constant
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

// iPhone
const IPHONE_TARGET_WIDTH = 375
const IPHONE_TARGET_HEIGHT = 812

// Android
const ANDROID_TARGET_WIDTH = 360
const ANDROID_TARGET_HEIGHT = 760

export const scale = (value: number, param: 'width' | 'height', max?: number, min?: number) => {
    let newSize = 1
    if (param === 'width') {
        newSize = (SCREEN_WIDTH / platform.select(IPHONE_TARGET_WIDTH, ANDROID_TARGET_WIDTH)) * value
        if (max) {
            newSize = newSize > max ? max : newSize
        }
        if (min) {
            newSize = newSize < min ? min : newSize
        }
    } else if (param === 'height') {
        newSize = (SCREEN_HEIGHT / platform.select(IPHONE_TARGET_HEIGHT, ANDROID_TARGET_HEIGHT)) * value
        if (max) {
            newSize = newSize > max ? max : newSize
        }
        if (min) {
            newSize = newSize < min ? min : newSize
        }
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
}
