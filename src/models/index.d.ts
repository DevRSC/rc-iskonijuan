import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum AvailabilityEnum {
  OPEN = "OPEN",
  CLOSED = "CLOSED"
}

export enum TypeOfScholarshipEnum {
  MERITBASED = "MERITBASED",
  NEEDSBASED = "NEEDSBASED",
  CONTEXTBASED = "CONTEXTBASED",
  SKILLSBASED = "SKILLSBASED"
}

export enum StatusOfScholarshipApplicationEnum {
  REJECTED = "REJECTED",
  INPROGRESS = "INPROGRESS",
  ACCEPTED = "ACCEPTED"
}

export enum EmploymentStatusEnum {
  EMPLOYEE = "EMPLOYEE",
  SELFEMPLOYED = "SELFEMPLOYED",
  STUDENT = "STUDENT"
}



type EagerOrganization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly organizationMatches?: (Matches | null)[] | null;
  readonly name?: string | null;
  readonly endDate?: string | null;
  readonly eligibilityLocation?: string | null;
  readonly availability?: AvailabilityEnum | keyof typeof AvailabilityEnum | null;
  readonly typeOfScholarship?: string | null;
  readonly website?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrganization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly organizationMatches: AsyncCollection<Matches>;
  readonly name?: string | null;
  readonly endDate?: string | null;
  readonly eligibilityLocation?: string | null;
  readonly availability?: AvailabilityEnum | keyof typeof AvailabilityEnum | null;
  readonly typeOfScholarship?: string | null;
  readonly website?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Organization = LazyLoading extends LazyLoadingDisabled ? EagerOrganization : LazyOrganization

export declare const Organization: (new (init: ModelInit<Organization>) => Organization) & {
  copyOf(source: Organization, mutator: (draft: MutableModel<Organization>) => MutableModel<Organization> | void): Organization;
}

type EagerMatches = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Matches, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly scholarinformationId: string;
  readonly organizationId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMatches = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Matches, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly scholarinformationId: string;
  readonly organizationId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Matches = LazyLoading extends LazyLoadingDisabled ? EagerMatches : LazyMatches

export declare const Matches: (new (init: ModelInit<Matches>) => Matches) & {
  copyOf(source: Matches, mutator: (draft: MutableModel<Matches>) => MutableModel<Matches> | void): Matches;
}

type EagerScholarInformation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ScholarInformation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly scholarId: string;
  readonly studentId?: string | null;
  readonly corImage?: string | null;
  readonly currentGradeLevel?: string | null;
  readonly cumulativeGPA?: number | null;
  readonly hsYearGraduated?: string | null;
  readonly upcomingCY?: string | null;
  readonly statusOfScholarshipApplication?: StatusOfScholarshipApplicationEnum | keyof typeof StatusOfScholarshipApplicationEnum | null;
  readonly scholarMatches?: (Matches | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyScholarInformation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ScholarInformation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly scholarId: string;
  readonly studentId?: string | null;
  readonly corImage?: string | null;
  readonly currentGradeLevel?: string | null;
  readonly cumulativeGPA?: number | null;
  readonly hsYearGraduated?: string | null;
  readonly upcomingCY?: string | null;
  readonly statusOfScholarshipApplication?: StatusOfScholarshipApplicationEnum | keyof typeof StatusOfScholarshipApplicationEnum | null;
  readonly scholarMatches: AsyncCollection<Matches>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ScholarInformation = LazyLoading extends LazyLoadingDisabled ? EagerScholarInformation : LazyScholarInformation

export declare const ScholarInformation: (new (init: ModelInit<ScholarInformation>) => ScholarInformation) & {
  copyOf(source: ScholarInformation, mutator: (draft: MutableModel<ScholarInformation>) => MutableModel<ScholarInformation> | void): ScholarInformation;
}

type EagerCampaign = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Campaign, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly campaignDonation?: (Donation | null)[] | null;
  readonly scholarId: string;
  readonly campaignName?: string | null;
  readonly description?: string | null;
  readonly amountGoal?: number | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCampaign = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Campaign, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly campaignDonation: AsyncCollection<Donation>;
  readonly scholarId: string;
  readonly campaignName?: string | null;
  readonly description?: string | null;
  readonly amountGoal?: number | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Campaign = LazyLoading extends LazyLoadingDisabled ? EagerCampaign : LazyCampaign

export declare const Campaign: (new (init: ModelInit<Campaign>) => Campaign) & {
  copyOf(source: Campaign, mutator: (draft: MutableModel<Campaign>) => MutableModel<Campaign> | void): Campaign;
}

type EagerDonation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly campaignId?: string | null;
  readonly benefactorId?: string | null;
  readonly donatedOn?: number | null;
  readonly amountDonated?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDonation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly campaignId?: string | null;
  readonly benefactorId?: string | null;
  readonly donatedOn?: number | null;
  readonly amountDonated?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Donation = LazyLoading extends LazyLoadingDisabled ? EagerDonation : LazyDonation

export declare const Donation: (new (init: ModelInit<Donation>) => Donation) & {
  copyOf(source: Donation, mutator: (draft: MutableModel<Donation>) => MutableModel<Donation> | void): Donation;
}

type EagerBenefactor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Benefactor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userBenefactor?: User | null;
  readonly benefactorDonation?: (Donation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly benefactorUserBenefactorId?: string | null;
}

type LazyBenefactor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Benefactor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userBenefactor: AsyncItem<User | undefined>;
  readonly benefactorDonation: AsyncCollection<Donation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly benefactorUserBenefactorId?: string | null;
}

export declare type Benefactor = LazyLoading extends LazyLoadingDisabled ? EagerBenefactor : LazyBenefactor

export declare const Benefactor: (new (init: ModelInit<Benefactor>) => Benefactor) & {
  copyOf(source: Benefactor, mutator: (draft: MutableModel<Benefactor>) => MutableModel<Benefactor> | void): Benefactor;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly firstName?: string | null;
  readonly middleName?: string | null;
  readonly lastName?: string | null;
  readonly suffix?: string | null;
  readonly sex?: string | null;
  readonly address?: string | null;
  readonly postal?: string | null;
  readonly nationality?: string | null;
  readonly typeOfDisability?: string | null;
  readonly placeOfBirth?: string | null;
  readonly birthDate?: string | null;
  readonly mobileNumber?: string | null;
  readonly verified?: boolean | null;
  readonly userAdditionalInformation?: AdditionalInformation | null;
  readonly userSwipes?: (Swipes | null)[] | null;
  readonly status?: string | null;
  readonly image?: string | null;
  readonly Messages?: (Message | null)[] | null;
  readonly ChatRooms?: (UserChatRoom | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserAdditionalInformationId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly firstName?: string | null;
  readonly middleName?: string | null;
  readonly lastName?: string | null;
  readonly suffix?: string | null;
  readonly sex?: string | null;
  readonly address?: string | null;
  readonly postal?: string | null;
  readonly nationality?: string | null;
  readonly typeOfDisability?: string | null;
  readonly placeOfBirth?: string | null;
  readonly birthDate?: string | null;
  readonly mobileNumber?: string | null;
  readonly verified?: boolean | null;
  readonly userAdditionalInformation: AsyncItem<AdditionalInformation | undefined>;
  readonly userSwipes: AsyncCollection<Swipes>;
  readonly status?: string | null;
  readonly image?: string | null;
  readonly Messages: AsyncCollection<Message>;
  readonly ChatRooms: AsyncCollection<UserChatRoom>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserAdditionalInformationId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerAdditionalInformation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AdditionalInformation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly currentGeoLocation?: string | null;
  readonly interest?: (string | null)[] | null;
  readonly ethnicity?: string | null;
  readonly fieldOfStudy?: string | null;
  readonly typeOfScholarship?: string | null;
  readonly yearlyIncome?: number | null;
  readonly employmentStatus?: EmploymentStatusEnum | keyof typeof EmploymentStatusEnum | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdditionalInformation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AdditionalInformation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly currentGeoLocation?: string | null;
  readonly interest?: (string | null)[] | null;
  readonly ethnicity?: string | null;
  readonly fieldOfStudy?: string | null;
  readonly typeOfScholarship?: string | null;
  readonly yearlyIncome?: number | null;
  readonly employmentStatus?: EmploymentStatusEnum | keyof typeof EmploymentStatusEnum | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AdditionalInformation = LazyLoading extends LazyLoadingDisabled ? EagerAdditionalInformation : LazyAdditionalInformation

export declare const AdditionalInformation: (new (init: ModelInit<AdditionalInformation>) => AdditionalInformation) & {
  copyOf(source: AdditionalInformation, mutator: (draft: MutableModel<AdditionalInformation>) => MutableModel<AdditionalInformation> | void): AdditionalInformation;
}

type EagerSwipes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Swipes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly targetd: string;
  readonly isLiked?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySwipes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Swipes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly targetd: string;
  readonly isLiked?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Swipes = LazyLoading extends LazyLoadingDisabled ? EagerSwipes : LazySwipes

export declare const Swipes: (new (init: ModelInit<Swipes>) => Swipes) & {
  copyOf(source: Swipes, mutator: (draft: MutableModel<Swipes>) => MutableModel<Swipes> | void): Swipes;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly chatroomID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly chatroomID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Messages?: (Message | null)[] | null;
  readonly users?: (UserChatRoom | null)[] | null;
  readonly LastMessage?: Message | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

type LazyChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Messages: AsyncCollection<Message>;
  readonly users: AsyncCollection<UserChatRoom>;
  readonly LastMessage: AsyncItem<Message | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

export declare type ChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerChatRoom : LazyChatRoom

export declare const ChatRoom: (new (init: ModelInit<ChatRoom>) => ChatRoom) & {
  copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom>) => MutableModel<ChatRoom> | void): ChatRoom;
}

type EagerScholar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Scholar, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userScholar?: User | null;
  readonly scholarCampaign?: (Campaign | null)[] | null;
  readonly scholarScholarInformation?: (ScholarInformation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly scholarUserScholarId?: string | null;
}

type LazyScholar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Scholar, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userScholar: AsyncItem<User | undefined>;
  readonly scholarCampaign: AsyncCollection<Campaign>;
  readonly scholarScholarInformation: AsyncCollection<ScholarInformation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly scholarUserScholarId?: string | null;
}

export declare type Scholar = LazyLoading extends LazyLoadingDisabled ? EagerScholar : LazyScholar

export declare const Scholar: (new (init: ModelInit<Scholar>) => Scholar) & {
  copyOf(source: Scholar, mutator: (draft: MutableModel<Scholar>) => MutableModel<Scholar> | void): Scholar;
}

type EagerUserChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly chatRoomId?: string | null;
  readonly user: User;
  readonly chatRoom: ChatRoom;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly chatRoomId?: string | null;
  readonly user: AsyncItem<User>;
  readonly chatRoom: AsyncItem<ChatRoom>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerUserChatRoom : LazyUserChatRoom

export declare const UserChatRoom: (new (init: ModelInit<UserChatRoom>) => UserChatRoom) & {
  copyOf(source: UserChatRoom, mutator: (draft: MutableModel<UserChatRoom>) => MutableModel<UserChatRoom> | void): UserChatRoom;
}