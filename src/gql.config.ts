import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

export const createGqlConfig: ApolloDriverConfig = {
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  installSubscriptionHandlers: true,
  context: ({ req, res }) => ({
    req,
    res,
  }),
  formatError: (error) => ({
    message: error.message,
    extensions: {
      code: error.extensions?.code || 500,
      path: error.path,
    },
  }),
};
