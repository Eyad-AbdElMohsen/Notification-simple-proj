import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Notification } from './notification.type';

@InputType()
export class NotificationInput {
  @Field()
  notificationToken: string;
  @Field()
  deviceType: string
  @Field()
  title: string
  @Field()
  body?: string
}
