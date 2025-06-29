export interface Notification {
  id: number;
  notificationToken: FcmToken;
  title?: string;
  body?: string;
}

export interface FcmToken {
  user: {
    id: number;
    email: string;
  };
  deviceType: string;
  notificationToken: string;
}
