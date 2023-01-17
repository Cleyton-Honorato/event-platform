import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl58fof1g529101ukcx3r0io8/master",
  cache: new InMemoryCache()
});
