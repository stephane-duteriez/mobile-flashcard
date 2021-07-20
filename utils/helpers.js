import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Notifications from 'expo-notifications'

const NOTIFICATION_KEY = 'mobileflachcard:notifications'

export function getDailyReminderValue () {
  return {
    today: 'You didn\'t trained today'
  }
}

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
    .catch(function (error) {
      console.log('removeItem', error)
    })
}

function createNotification () {
  return {
    title: 'It is time to trained',
    body: 'You better learn when you practice every-day',
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'hight',
      sticky: false,
      vibrate: true
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Notifications.getPermissionsAsync()
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              const tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate())
              tomorrow.setHours(8)
              tomorrow.setMinutes(0)
              Notifications.scheduleNotificationAsync({
                content: createNotification(),
                trigger: tomorrow
              })

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          }).catch(function (error) {
            console.log('Promise Rejected askAsyn', error)
          })
      }
    }).catch(function (error) {
      console.log('Promise Rejected getItem', error)
    })
}

export function shuffleArray (array) {
  let currentIndex = array.length
  let randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]
  }

  return array
}
