import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'FlashCards:notifications'

export function getPercent(partial, total) {
  return Math.round((partial / total) * 100)
}

export function formatDeck (deckName) {
  const deckId = _generateId()

  return {
    [deckId]: {
      id: deckId,
      created: Date.now(),
      name: deckName,
      quiz: {},
      cards: {}
    }
  }
}

export function formatCard (question, answer) {
  const cardId = _generateId()

  return {
    [cardId]: {
      id: cardId,
      created: Date.now(),
      question: question,
      answer: answer
    }
  }
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}

export function createNotification() {
  return {
    title: 'Take your quiz!',
    body: 'Remember to take your quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            Notifications.cancelAllScheduledNotificationsAsync()

            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(16)
            tomorrow.setMinutes(0)

            Notifications.scheduleLocalNotificationAsync(
              createNotification(),
              {
                time: tomorrow,
                repeat: 'day',
              }
            )

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          })
      }
    })
}

function _generateId () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
