import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerInformation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Information, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly currentGradeLevel?: string | null;
  readonly cumulativeGPA?: number | null;
  readonly hsYearGraduate?: string | null;
  readonly fieldOfStudy?: string | null;
  readonly yearlyIncome?: number | null;
  readonly yearUpcomingCY?: number | null;
  readonly livingSituation?: string | null;
  readonly statusOfScholarshipApplication?: string | null;
  readonly InformationMatches?: (Matches | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInformation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Information, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly currentGradeLevel?: string | null;
  readonly cumulativeGPA?: number | null;
  readonly hsYearGraduate?: string | null;
  readonly fieldOfStudy?: string | null;
  readonly yearlyIncome?: number | null;
  readonly yearUpcomingCY?: number | null;
  readonly livingSituation?: string | null;
  readonly statusOfScholarshipApplication?: string | null;
  readonly InformationMatches: AsyncCollection<Matches>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Information = LazyLoading extends LazyLoadingDisabled ? EagerInformation : LazyInformation

export declare const Information: (new (init: ModelInit<Information>) => Information) & {
  copyOf(source: Information, mutator: (draft: MutableModel<Information>) => MutableModel<Information> | void): Information;
}

type EagerMatches = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Matches, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly organizationID: string;
  readonly informationID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMatches = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Matches, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly organizationID: string;
  readonly informationID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Matches = LazyLoading extends LazyLoadingDisabled ? EagerMatches : LazyMatches

export declare const Matches: (new (init: ModelInit<Matches>) => Matches) & {
  copyOf(source: Matches, mutator: (draft: MutableModel<Matches>) => MutableModel<Matches> | void): Matches;
}

type EagerOrganization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly eligibilityLocation?: string | null;
  readonly availability?: string | null;
  readonly typeOfScholarship?: string | null;
  readonly grant?: string | null;
  readonly website?: string | null;
  readonly OrganizationMatches?: (Matches | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrganization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly eligibilityLocation?: string | null;
  readonly availability?: string | null;
  readonly typeOfScholarship?: string | null;
  readonly grant?: string | null;
  readonly website?: string | null;
  readonly OrganizationMatches: AsyncCollection<Matches>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Organization = LazyLoading extends LazyLoadingDisabled ? EagerOrganization : LazyOrganization

export declare const Organization: (new (init: ModelInit<Organization>) => Organization) & {
  copyOf(source: Organization, mutator: (draft: MutableModel<Organization>) => MutableModel<Organization> | void): Organization;
}

type EagerPrivateChats = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PrivateChats, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly benefactorID: string;
  readonly scholarID: string;
  readonly timestamp?: number | null;
  readonly message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPrivateChats = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PrivateChats, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly benefactorID: string;
  readonly scholarID: string;
  readonly timestamp?: number | null;
  readonly message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PrivateChats = LazyLoading extends LazyLoadingDisabled ? EagerPrivateChats : LazyPrivateChats

export declare const PrivateChats: (new (init: ModelInit<PrivateChats>) => PrivateChats) & {
  copyOf(source: PrivateChats, mutator: (draft: MutableModel<PrivateChats>) => MutableModel<PrivateChats> | void): PrivateChats;
}

type EagerSwipes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Swipes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly benefactorID: string;
  readonly scholarID: string;
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
  readonly benefactorID: string;
  readonly scholarID: string;
  readonly isLiked?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Swipes = LazyLoading extends LazyLoadingDisabled ? EagerSwipes : LazySwipes

export declare const Swipes: (new (init: ModelInit<Swipes>) => Swipes) & {
  copyOf(source: Swipes, mutator: (draft: MutableModel<Swipes>) => MutableModel<Swipes> | void): Swipes;
}

type EagerBenefactor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Benefactor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly username?: string | null;
  readonly firstName?: string | null;
  readonly middleName?: string | null;
  readonly lastName?: string | null;
  readonly suffix?: string | null;
  readonly sex?: string | null;
  readonly address?: string | null;
  readonly nationality?: string | null;
  readonly placeOfBirth?: string | null;
  readonly birthDate?: string | null;
  readonly mobileNumber?: string | null;
  readonly sourceIncome?: number | null;
  readonly BenefactorDonation?: (Donation | null)[] | null;
  readonly Verified?: boolean | null;
  readonly BenefactorSwipes?: (Swipes | null)[] | null;
  readonly BenefactorPrivateChats?: (PrivateChats | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBenefactor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Benefactor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly username?: string | null;
  readonly firstName?: string | null;
  readonly middleName?: string | null;
  readonly lastName?: string | null;
  readonly suffix?: string | null;
  readonly sex?: string | null;
  readonly address?: string | null;
  readonly nationality?: string | null;
  readonly placeOfBirth?: string | null;
  readonly birthDate?: string | null;
  readonly mobileNumber?: string | null;
  readonly sourceIncome?: number | null;
  readonly BenefactorDonation: AsyncCollection<Donation>;
  readonly Verified?: boolean | null;
  readonly BenefactorSwipes: AsyncCollection<Swipes>;
  readonly BenefactorPrivateChats: AsyncCollection<PrivateChats>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Benefactor = LazyLoading extends LazyLoadingDisabled ? EagerBenefactor : LazyBenefactor

export declare const Benefactor: (new (init: ModelInit<Benefactor>) => Benefactor) & {
  copyOf(source: Benefactor, mutator: (draft: MutableModel<Benefactor>) => MutableModel<Benefactor> | void): Benefactor;
}

type EagerDonation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly campaignID: string;
  readonly benefactorID: string;
  readonly donatedAt?: string | null;
  readonly amountDonated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDonation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly campaignID: string;
  readonly benefactorID: string;
  readonly donatedAt?: string | null;
  readonly amountDonated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Donation = LazyLoading extends LazyLoadingDisabled ? EagerDonation : LazyDonation

export declare const Donation: (new (init: ModelInit<Donation>) => Donation) & {
  copyOf(source: Donation, mutator: (draft: MutableModel<Donation>) => MutableModel<Donation> | void): Donation;
}

type EagerCampaign = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Campaign, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly scholarID: string;
  readonly campaignName?: string | null;
  readonly description?: string | null;
  readonly amountGoal?: number | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly CampaignDonations?: (Donation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCampaign = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Campaign, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly scholarID: string;
  readonly campaignName?: string | null;
  readonly description?: string | null;
  readonly amountGoal?: number | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly CampaignDonations: AsyncCollection<Donation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Campaign = LazyLoading extends LazyLoadingDisabled ? EagerCampaign : LazyCampaign

export declare const Campaign: (new (init: ModelInit<Campaign>) => Campaign) & {
  copyOf(source: Campaign, mutator: (draft: MutableModel<Campaign>) => MutableModel<Campaign> | void): Campaign;
}

type EagerScholar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Scholar, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly username?: string | null;
  readonly firstName?: string | null;
  readonly middlename?: string | null;
  readonly lastName?: string | null;
  readonly suffix?: string | null;
  readonly sex?: string | null;
  readonly address?: string | null;
  readonly nationality?: string | null;
  readonly placeOfBirth?: string | null;
  readonly birthDate?: string | null;
  readonly mobileNumber?: string | null;
  readonly password?: string | null;
  readonly verified?: boolean | null;
  readonly ScholarInformation?: Information | null;
  readonly ScholarSwipes?: (Swipes | null)[] | null;
  readonly ScholarPrivateChats?: (PrivateChats | null)[] | null;
  readonly Information?: Information | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly scholarScholarInformationId?: string | null;
  readonly scholarInformationId?: string | null;
}

type LazyScholar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Scholar, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly username?: string | null;
  readonly firstName?: string | null;
  readonly middlename?: string | null;
  readonly lastName?: string | null;
  readonly suffix?: string | null;
  readonly sex?: string | null;
  readonly address?: string | null;
  readonly nationality?: string | null;
  readonly placeOfBirth?: string | null;
  readonly birthDate?: string | null;
  readonly mobileNumber?: string | null;
  readonly password?: string | null;
  readonly verified?: boolean | null;
  readonly ScholarInformation: AsyncItem<Information | undefined>;
  readonly ScholarSwipes: AsyncCollection<Swipes>;
  readonly ScholarPrivateChats: AsyncCollection<PrivateChats>;
  readonly Information: AsyncItem<Information | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly scholarScholarInformationId?: string | null;
  readonly scholarInformationId?: string | null;
}

export declare type Scholar = LazyLoading extends LazyLoadingDisabled ? EagerScholar : LazyScholar

export declare const Scholar: (new (init: ModelInit<Scholar>) => Scholar) & {
  copyOf(source: Scholar, mutator: (draft: MutableModel<Scholar>) => MutableModel<Scholar> | void): Scholar;
}