import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import { GraphQLJSONObject } from 'graphql-type-json';
import { NotificationInput } from './dto';

@Resolver()
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Mutation(() => GraphQLJSONObject)
  async sendNotification(
    @Args('input') input: NotificationInput,
  ) {
    const user = {id : 1, email: "example@gmail.com"}
    return await this.notificationService.sendNotification(user, input);
  }

  @Query(() => GraphQLJSONObject)
  async getNotifications() {
    return {
      message: 'notifiactions',
    };
  }
}
