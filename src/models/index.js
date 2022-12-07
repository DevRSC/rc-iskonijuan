// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Information, Matches, Organization, PrivateChats, Swipes, Benefactor, Donation, Campaign, Scholar } = initSchema(schema);

export {
  Information,
  Matches,
  Organization,
  PrivateChats,
  Swipes,
  Benefactor,
  Donation,
  Campaign,
  Scholar
};