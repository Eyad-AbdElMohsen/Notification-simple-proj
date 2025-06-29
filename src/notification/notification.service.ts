import { Injectable } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import * as path from 'path';
import { NotificationInput } from './dto';

const fire = firebase.initializeApp({
  credential: firebase.credential.cert(
    path.join(__dirname, '..', '..', 'firebase-adminsdk.json'),
  ),
});

@Injectable()
export class NotificationService {
  async sendNotification(user: any, input: NotificationInput) {
    const { title, body, notificationToken } = input;
    let message = {}
    try {
      const message = await firebase.messaging().send({
        notification: { title, body },
        token: notificationToken,
        android: { priority: 'high' },
      });
    } catch (err) {
      console.log(err);
      throw new Error("error")
    }
    console.log(message)
    return message
  }
}
