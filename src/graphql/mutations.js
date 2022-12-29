/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
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
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
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
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
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
export const createMatches = /* GraphQL */ `
  mutation CreateMatches(
    $input: CreateMatchesInput!
    $condition: ModelMatchesConditionInput
  ) {
    createMatches(input: $input, condition: $condition) {
      id
      scholarinformationId
      organizationId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateMatches = /* GraphQL */ `
  mutation UpdateMatches(
    $input: UpdateMatchesInput!
    $condition: ModelMatchesConditionInput
  ) {
    updateMatches(input: $input, condition: $condition) {
      id
      scholarinformationId
      organizationId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteMatches = /* GraphQL */ `
  mutation DeleteMatches(
    $input: DeleteMatchesInput!
    $condition: ModelMatchesConditionInput
  ) {
    deleteMatches(input: $input, condition: $condition) {
      id
      scholarinformationId
      organizationId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createScholarInformation = /* GraphQL */ `
  mutation CreateScholarInformation(
    $input: CreateScholarInformationInput!
    $condition: ModelScholarInformationConditionInput
  ) {
    createScholarInformation(input: $input, condition: $condition) {
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
export const updateScholarInformation = /* GraphQL */ `
  mutation UpdateScholarInformation(
    $input: UpdateScholarInformationInput!
    $condition: ModelScholarInformationConditionInput
  ) {
    updateScholarInformation(input: $input, condition: $condition) {
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
export const deleteScholarInformation = /* GraphQL */ `
  mutation DeleteScholarInformation(
    $input: DeleteScholarInformationInput!
    $condition: ModelScholarInformationConditionInput
  ) {
    deleteScholarInformation(input: $input, condition: $condition) {
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
export const createCampaign = /* GraphQL */ `
  mutation CreateCampaign(
    $input: CreateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    createCampaign(input: $input, condition: $condition) {
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
export const updateCampaign = /* GraphQL */ `
  mutation UpdateCampaign(
    $input: UpdateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    updateCampaign(input: $input, condition: $condition) {
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
export const deleteCampaign = /* GraphQL */ `
  mutation DeleteCampaign(
    $input: DeleteCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    deleteCampaign(input: $input, condition: $condition) {
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
export const createDonation = /* GraphQL */ `
  mutation CreateDonation(
    $input: CreateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    createDonation(input: $input, condition: $condition) {
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
export const updateDonation = /* GraphQL */ `
  mutation UpdateDonation(
    $input: UpdateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    updateDonation(input: $input, condition: $condition) {
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
export const deleteDonation = /* GraphQL */ `
  mutation DeleteDonation(
    $input: DeleteDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    deleteDonation(input: $input, condition: $condition) {
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
export const createBenefactor = /* GraphQL */ `
  mutation CreateBenefactor(
    $input: CreateBenefactorInput!
    $condition: ModelBenefactorConditionInput
  ) {
    createBenefactor(input: $input, condition: $condition) {
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
export const updateBenefactor = /* GraphQL */ `
  mutation UpdateBenefactor(
    $input: UpdateBenefactorInput!
    $condition: ModelBenefactorConditionInput
  ) {
    updateBenefactor(input: $input, condition: $condition) {
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
export const deleteBenefactor = /* GraphQL */ `
  mutation DeleteBenefactor(
    $input: DeleteBenefactorInput!
    $condition: ModelBenefactorConditionInput
  ) {
    deleteBenefactor(input: $input, condition: $condition) {
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
export const createScholar = /* GraphQL */ `
  mutation CreateScholar(
    $input: CreateScholarInput!
    $condition: ModelScholarConditionInput
  ) {
    createScholar(input: $input, condition: $condition) {
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
export const updateScholar = /* GraphQL */ `
  mutation UpdateScholar(
    $input: UpdateScholarInput!
    $condition: ModelScholarConditionInput
  ) {
    updateScholar(input: $input, condition: $condition) {
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
export const deleteScholar = /* GraphQL */ `
  mutation DeleteScholar(
    $input: DeleteScholarInput!
    $condition: ModelScholarConditionInput
  ) {
    deleteScholar(input: $input, condition: $condition) {
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
export const createSwipes = /* GraphQL */ `
  mutation CreateSwipes(
    $input: CreateSwipesInput!
    $condition: ModelSwipesConditionInput
  ) {
    createSwipes(input: $input, condition: $condition) {
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
export const updateSwipes = /* GraphQL */ `
  mutation UpdateSwipes(
    $input: UpdateSwipesInput!
    $condition: ModelSwipesConditionInput
  ) {
    updateSwipes(input: $input, condition: $condition) {
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
export const deleteSwipes = /* GraphQL */ `
  mutation DeleteSwipes(
    $input: DeleteSwipesInput!
    $condition: ModelSwipesConditionInput
  ) {
    deleteSwipes(input: $input, condition: $condition) {
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
export const createAdditionalInformation = /* GraphQL */ `
  mutation CreateAdditionalInformation(
    $input: CreateAdditionalInformationInput!
    $condition: ModelAdditionalInformationConditionInput
  ) {
    createAdditionalInformation(input: $input, condition: $condition) {
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
export const updateAdditionalInformation = /* GraphQL */ `
  mutation UpdateAdditionalInformation(
    $input: UpdateAdditionalInformationInput!
    $condition: ModelAdditionalInformationConditionInput
  ) {
    updateAdditionalInformation(input: $input, condition: $condition) {
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
export const deleteAdditionalInformation = /* GraphQL */ `
  mutation DeleteAdditionalInformation(
    $input: DeleteAdditionalInformationInput!
    $condition: ModelAdditionalInformationConditionInput
  ) {
    deleteAdditionalInformation(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
