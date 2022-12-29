/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      organizationMatches {
        items {
          id
          scholarinformationId
          organizationId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      name
      endDate
      eligibilityLocation
      availability
      typeOfScholarship
      website
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        organizationMatches {
          nextToken
        }
        name
        endDate
        eligibilityLocation
        availability
        typeOfScholarship
        website
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMatches = /* GraphQL */ `
  query GetMatches($id: ID!) {
    getMatches(id: $id) {
      id
      scholarinformationId
      organizationId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMatches = /* GraphQL */ `
  query ListMatches(
    $filter: ModelMatchesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        scholarinformationId
        organizationId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getScholarInformation = /* GraphQL */ `
  query GetScholarInformation($id: ID!) {
    getScholarInformation(id: $id) {
      id
      scholarId
      studentId
      corImage
      currentGradeLevel
      cumulativeGPA
      hsYearGraduated
      upcomingCY
      statusOfScholarshipApplication
      scholarMatches {
        items {
          id
          scholarinformationId
          organizationId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listScholarInformations = /* GraphQL */ `
  query ListScholarInformations(
    $filter: ModelScholarInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScholarInformations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        scholarId
        studentId
        corImage
        currentGradeLevel
        cumulativeGPA
        hsYearGraduated
        upcomingCY
        statusOfScholarshipApplication
        scholarMatches {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCampaign = /* GraphQL */ `
  query GetCampaign($id: ID!) {
    getCampaign(id: $id) {
      id
      campaignDonation {
        items {
          id
          campaignId
          benefactorId
          donatedOn
          amountDonated
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      scholarId
      campaignName
      description
      amountGoal
      startDate
      endDate
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCampaigns = /* GraphQL */ `
  query ListCampaigns(
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        campaignDonation {
          nextToken
        }
        scholarId
        campaignName
        description
        amountGoal
        startDate
        endDate
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getDonation = /* GraphQL */ `
  query GetDonation($id: ID!) {
    getDonation(id: $id) {
      id
      campaignId
      benefactorId
      donatedOn
      amountDonated
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listDonations = /* GraphQL */ `
  query ListDonations(
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        campaignId
        benefactorId
        donatedOn
        amountDonated
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getBenefactor = /* GraphQL */ `
  query GetBenefactor($id: ID!) {
    getBenefactor(id: $id) {
      id
      userBenefactor {
        id
        username
        email
        firstName
        middleName
        lastName
        suffix
        sex
        address
        nationality
        typeOfDisability
        placeOfBirth
        birthDate
        mobileNumber
        verified
        userAdditionalInformation {
          id
          currentGeoLocation
          interest
          ethnicity
          fieldOfStudy
          typeOfScholarship
          yearlyIncome
          employmentStatus
          createdAt
          updatedAt
          owner
        }
        userSwipes {
          nextToken
        }
        createdAt
        updatedAt
        userUserAdditionalInformationId
        owner
      }
      benefactorDonation {
        items {
          id
          campaignId
          benefactorId
          donatedOn
          amountDonated
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      benefactorUserBenefactorId
      owner
    }
  }
`;
export const listBenefactors = /* GraphQL */ `
  query ListBenefactors(
    $filter: ModelBenefactorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBenefactors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userBenefactor {
          id
          username
          email
          firstName
          middleName
          lastName
          suffix
          sex
          address
          nationality
          typeOfDisability
          placeOfBirth
          birthDate
          mobileNumber
          verified
          createdAt
          updatedAt
          userUserAdditionalInformationId
          owner
        }
        benefactorDonation {
          nextToken
        }
        createdAt
        updatedAt
        benefactorUserBenefactorId
        owner
      }
      nextToken
    }
  }
`;
export const getScholar = /* GraphQL */ `
  query GetScholar($id: ID!) {
    getScholar(id: $id) {
      id
      userScholar {
        id
        username
        email
        firstName
        middleName
        lastName
        suffix
        sex
        address
        nationality
        typeOfDisability
        placeOfBirth
        birthDate
        mobileNumber
        verified
        userAdditionalInformation {
          id
          currentGeoLocation
          interest
          ethnicity
          fieldOfStudy
          typeOfScholarship
          yearlyIncome
          employmentStatus
          createdAt
          updatedAt
          owner
        }
        userSwipes {
          nextToken
        }
        createdAt
        updatedAt
        userUserAdditionalInformationId
        owner
      }
      scholarCampaign {
        items {
          id
          scholarId
          campaignName
          description
          amountGoal
          startDate
          endDate
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      scholarScholarInformation {
        items {
          id
          scholarId
          studentId
          corImage
          currentGradeLevel
          cumulativeGPA
          hsYearGraduated
          upcomingCY
          statusOfScholarshipApplication
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      scholarUserScholarId
      owner
    }
  }
`;
export const listScholars = /* GraphQL */ `
  query ListScholars(
    $filter: ModelScholarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScholars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userScholar {
          id
          username
          email
          firstName
          middleName
          lastName
          suffix
          sex
          address
          nationality
          typeOfDisability
          placeOfBirth
          birthDate
          mobileNumber
          verified
          createdAt
          updatedAt
          userUserAdditionalInformationId
          owner
        }
        scholarCampaign {
          nextToken
        }
        scholarScholarInformation {
          nextToken
        }
        createdAt
        updatedAt
        scholarUserScholarId
        owner
      }
      nextToken
    }
  }
`;
export const getSwipes = /* GraphQL */ `
  query GetSwipes($id: ID!) {
    getSwipes(id: $id) {
      id
      userId
      targetd
      isLiked
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSwipes = /* GraphQL */ `
  query ListSwipes(
    $filter: ModelSwipesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSwipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        targetd
        isLiked
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAdditionalInformation = /* GraphQL */ `
  query GetAdditionalInformation($id: ID!) {
    getAdditionalInformation(id: $id) {
      id
      currentGeoLocation
      interest
      ethnicity
      fieldOfStudy
      typeOfScholarship
      yearlyIncome
      employmentStatus
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAdditionalInformations = /* GraphQL */ `
  query ListAdditionalInformations(
    $filter: ModelAdditionalInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdditionalInformations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        currentGeoLocation
        interest
        ethnicity
        fieldOfStudy
        typeOfScholarship
        yearlyIncome
        employmentStatus
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      firstName
      middleName
      lastName
      suffix
      sex
      address
      nationality
      typeOfDisability
      placeOfBirth
      birthDate
      mobileNumber
      verified
      userAdditionalInformation {
        id
        currentGeoLocation
        interest
        ethnicity
        fieldOfStudy
        typeOfScholarship
        yearlyIncome
        employmentStatus
        createdAt
        updatedAt
        owner
      }
      userSwipes {
        items {
          id
          userId
          targetd
          isLiked
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userUserAdditionalInformationId
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        firstName
        middleName
        lastName
        suffix
        sex
        address
        nationality
        typeOfDisability
        placeOfBirth
        birthDate
        mobileNumber
        verified
        userAdditionalInformation {
          id
          currentGeoLocation
          interest
          ethnicity
          fieldOfStudy
          typeOfScholarship
          yearlyIncome
          employmentStatus
          createdAt
          updatedAt
          owner
        }
        userSwipes {
          nextToken
        }
        createdAt
        updatedAt
        userUserAdditionalInformationId
        owner
      }
      nextToken
    }
  }
`;
export const matchesByScholarinformationId = /* GraphQL */ `
  query MatchesByScholarinformationId(
    $scholarinformationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMatchesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    matchesByScholarinformationId(
      scholarinformationId: $scholarinformationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        scholarinformationId
        organizationId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const matchesByOrganizationId = /* GraphQL */ `
  query MatchesByOrganizationId(
    $organizationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMatchesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    matchesByOrganizationId(
      organizationId: $organizationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        scholarinformationId
        organizationId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const scholarInformationsByScholarId = /* GraphQL */ `
  query ScholarInformationsByScholarId(
    $scholarId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelScholarInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    scholarInformationsByScholarId(
      scholarId: $scholarId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        scholarId
        studentId
        corImage
        currentGradeLevel
        cumulativeGPA
        hsYearGraduated
        upcomingCY
        statusOfScholarshipApplication
        scholarMatches {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const campaignsByScholarId = /* GraphQL */ `
  query CampaignsByScholarId(
    $scholarId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    campaignsByScholarId(
      scholarId: $scholarId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        campaignDonation {
          nextToken
        }
        scholarId
        campaignName
        description
        amountGoal
        startDate
        endDate
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const donationsByCampaignId = /* GraphQL */ `
  query DonationsByCampaignId(
    $campaignId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    donationsByCampaignId(
      campaignId: $campaignId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        campaignId
        benefactorId
        donatedOn
        amountDonated
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const donationsByBenefactorId = /* GraphQL */ `
  query DonationsByBenefactorId(
    $benefactorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    donationsByBenefactorId(
      benefactorId: $benefactorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        campaignId
        benefactorId
        donatedOn
        amountDonated
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const swipesByUserId = /* GraphQL */ `
  query SwipesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSwipesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    swipesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        targetd
        isLiked
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
