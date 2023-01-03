// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AvailabilityEnum = {
  "OPEN": "OPEN",
  "CLOSED": "CLOSED"
};

const TypeOfScholarshipEnum = {
  "MERITBASED": "MERITBASED",
  "NEEDSBASED": "NEEDSBASED",
  "CONTEXTBASED": "CONTEXTBASED",
  "SKILLSBASED": "SKILLSBASED"
};

const StatusOfScholarshipApplicationEnum = {
  "REJECTED": "REJECTED",
  "INPROGRESS": "INPROGRESS",
  "ACCEPTED": "ACCEPTED"
};

const EmploymentStatusEnum = {
  "EMPLOYEE": "EMPLOYEE",
  "SELFEMPLOYED": "SELFEMPLOYED",
  "STUDENT": "STUDENT"
};

const { Organization, Matches, ScholarInformation, Campaign, Donation, Benefactor, User, AdditionalInformation, Swipes, Message, ChatRoom, Scholar, UserChatRoom } = initSchema(schema);

export {
  Organization,
  Matches,
  ScholarInformation,
  Campaign,
  Donation,
  Benefactor,
  User,
  AdditionalInformation,
  Swipes,
  Message,
  ChatRoom,
  Scholar,
  UserChatRoom,
  AvailabilityEnum,
  TypeOfScholarshipEnum,
  StatusOfScholarshipApplicationEnum,
  EmploymentStatusEnum
};