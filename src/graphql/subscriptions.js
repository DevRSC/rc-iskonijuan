/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
    $owner: String
  ) {
    onCreateOrganization(filter: $filter, owner: $owner) {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
    $owner: String
  ) {
    onUpdateOrganization(filter: $filter, owner: $owner) {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
    $owner: String
  ) {
    onDeleteOrganization(filter: $filter, owner: $owner) {
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
export const onCreateMatches = /* GraphQL */ `
  subscription OnCreateMatches(
    $filter: ModelSubscriptionMatchesFilterInput
    $owner: String
  ) {
    onCreateMatches(filter: $filter, owner: $owner) {
      id
      scholarinformationId
      organizationId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateMatches = /* GraphQL */ `
  subscription OnUpdateMatches(
    $filter: ModelSubscriptionMatchesFilterInput
    $owner: String
  ) {
    onUpdateMatches(filter: $filter, owner: $owner) {
      id
      scholarinformationId
      organizationId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteMatches = /* GraphQL */ `
  subscription OnDeleteMatches(
    $filter: ModelSubscriptionMatchesFilterInput
    $owner: String
  ) {
    onDeleteMatches(filter: $filter, owner: $owner) {
      id
      scholarinformationId
      organizationId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateScholarInformation = /* GraphQL */ `
  subscription OnCreateScholarInformation(
    $filter: ModelSubscriptionScholarInformationFilterInput
    $owner: String
  ) {
    onCreateScholarInformation(filter: $filter, owner: $owner) {
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
export const onUpdateScholarInformation = /* GraphQL */ `
  subscription OnUpdateScholarInformation(
    $filter: ModelSubscriptionScholarInformationFilterInput
    $owner: String
  ) {
    onUpdateScholarInformation(filter: $filter, owner: $owner) {
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
export const onDeleteScholarInformation = /* GraphQL */ `
  subscription OnDeleteScholarInformation(
    $filter: ModelSubscriptionScholarInformationFilterInput
    $owner: String
  ) {
    onDeleteScholarInformation(filter: $filter, owner: $owner) {
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
export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign(
    $filter: ModelSubscriptionCampaignFilterInput
    $owner: String
  ) {
    onCreateCampaign(filter: $filter, owner: $owner) {
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
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign(
    $filter: ModelSubscriptionCampaignFilterInput
    $owner: String
  ) {
    onUpdateCampaign(filter: $filter, owner: $owner) {
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
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign(
    $filter: ModelSubscriptionCampaignFilterInput
    $owner: String
  ) {
    onDeleteCampaign(filter: $filter, owner: $owner) {
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
export const onCreateDonation = /* GraphQL */ `
  subscription OnCreateDonation(
    $filter: ModelSubscriptionDonationFilterInput
    $owner: String
  ) {
    onCreateDonation(filter: $filter, owner: $owner) {
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
export const onUpdateDonation = /* GraphQL */ `
  subscription OnUpdateDonation(
    $filter: ModelSubscriptionDonationFilterInput
    $owner: String
  ) {
    onUpdateDonation(filter: $filter, owner: $owner) {
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
export const onDeleteDonation = /* GraphQL */ `
  subscription OnDeleteDonation(
    $filter: ModelSubscriptionDonationFilterInput
    $owner: String
  ) {
    onDeleteDonation(filter: $filter, owner: $owner) {
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
export const onCreateBenefactor = /* GraphQL */ `
  subscription OnCreateBenefactor(
    $filter: ModelSubscriptionBenefactorFilterInput
    $owner: String
  ) {
    onCreateBenefactor(filter: $filter, owner: $owner) {
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
export const onUpdateBenefactor = /* GraphQL */ `
  subscription OnUpdateBenefactor(
    $filter: ModelSubscriptionBenefactorFilterInput
    $owner: String
  ) {
    onUpdateBenefactor(filter: $filter, owner: $owner) {
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
export const onDeleteBenefactor = /* GraphQL */ `
  subscription OnDeleteBenefactor(
    $filter: ModelSubscriptionBenefactorFilterInput
    $owner: String
  ) {
    onDeleteBenefactor(filter: $filter, owner: $owner) {
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
export const onCreateScholar = /* GraphQL */ `
  subscription OnCreateScholar(
    $filter: ModelSubscriptionScholarFilterInput
    $owner: String
  ) {
    onCreateScholar(filter: $filter, owner: $owner) {
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
export const onUpdateScholar = /* GraphQL */ `
  subscription OnUpdateScholar(
    $filter: ModelSubscriptionScholarFilterInput
    $owner: String
  ) {
    onUpdateScholar(filter: $filter, owner: $owner) {
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
export const onDeleteScholar = /* GraphQL */ `
  subscription OnDeleteScholar(
    $filter: ModelSubscriptionScholarFilterInput
    $owner: String
  ) {
    onDeleteScholar(filter: $filter, owner: $owner) {
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
export const onCreateSwipes = /* GraphQL */ `
  subscription OnCreateSwipes(
    $filter: ModelSubscriptionSwipesFilterInput
    $owner: String
  ) {
    onCreateSwipes(filter: $filter, owner: $owner) {
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
export const onUpdateSwipes = /* GraphQL */ `
  subscription OnUpdateSwipes(
    $filter: ModelSubscriptionSwipesFilterInput
    $owner: String
  ) {
    onUpdateSwipes(filter: $filter, owner: $owner) {
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
export const onDeleteSwipes = /* GraphQL */ `
  subscription OnDeleteSwipes(
    $filter: ModelSubscriptionSwipesFilterInput
    $owner: String
  ) {
    onDeleteSwipes(filter: $filter, owner: $owner) {
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
export const onCreateAdditionalInformation = /* GraphQL */ `
  subscription OnCreateAdditionalInformation(
    $filter: ModelSubscriptionAdditionalInformationFilterInput
    $owner: String
  ) {
    onCreateAdditionalInformation(filter: $filter, owner: $owner) {
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
export const onUpdateAdditionalInformation = /* GraphQL */ `
  subscription OnUpdateAdditionalInformation(
    $filter: ModelSubscriptionAdditionalInformationFilterInput
    $owner: String
  ) {
    onUpdateAdditionalInformation(filter: $filter, owner: $owner) {
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
export const onDeleteAdditionalInformation = /* GraphQL */ `
  subscription OnDeleteAdditionalInformation(
    $filter: ModelSubscriptionAdditionalInformationFilterInput
    $owner: String
  ) {
    onDeleteAdditionalInformation(filter: $filter, owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
