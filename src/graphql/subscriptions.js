/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onCreateOrganization(filter: $filter) {
      id
      organizationMatches {
        items {
          id
          scholarinformationId
          organizationId
          createdAt
          updatedAt
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
    }
  }
`;
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onUpdateOrganization(filter: $filter) {
      id
      organizationMatches {
        items {
          id
          scholarinformationId
          organizationId
          createdAt
          updatedAt
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
    }
  }
`;
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onDeleteOrganization(filter: $filter) {
      id
      organizationMatches {
        items {
          id
          scholarinformationId
          organizationId
          createdAt
          updatedAt
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
    }
  }
`;
export const onCreateMatches = /* GraphQL */ `
  subscription OnCreateMatches($filter: ModelSubscriptionMatchesFilterInput) {
    onCreateMatches(filter: $filter) {
      id
      scholarinformationId
      organizationId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMatches = /* GraphQL */ `
  subscription OnUpdateMatches($filter: ModelSubscriptionMatchesFilterInput) {
    onUpdateMatches(filter: $filter) {
      id
      scholarinformationId
      organizationId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMatches = /* GraphQL */ `
  subscription OnDeleteMatches($filter: ModelSubscriptionMatchesFilterInput) {
    onDeleteMatches(filter: $filter) {
      id
      scholarinformationId
      organizationId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateScholarInformation = /* GraphQL */ `
  subscription OnCreateScholarInformation(
    $filter: ModelSubscriptionScholarInformationFilterInput
  ) {
    onCreateScholarInformation(filter: $filter) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateScholarInformation = /* GraphQL */ `
  subscription OnUpdateScholarInformation(
    $filter: ModelSubscriptionScholarInformationFilterInput
  ) {
    onUpdateScholarInformation(filter: $filter) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteScholarInformation = /* GraphQL */ `
  subscription OnDeleteScholarInformation(
    $filter: ModelSubscriptionScholarInformationFilterInput
  ) {
    onDeleteScholarInformation(filter: $filter) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign($filter: ModelSubscriptionCampaignFilterInput) {
    onCreateCampaign(filter: $filter) {
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
    }
  }
`;
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign($filter: ModelSubscriptionCampaignFilterInput) {
    onUpdateCampaign(filter: $filter) {
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
    }
  }
`;
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign($filter: ModelSubscriptionCampaignFilterInput) {
    onDeleteCampaign(filter: $filter) {
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
    }
  }
`;
export const onCreateDonation = /* GraphQL */ `
  subscription OnCreateDonation($filter: ModelSubscriptionDonationFilterInput) {
    onCreateDonation(filter: $filter) {
      id
      campaignId
      benefactorId
      donatedOn
      amountDonated
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDonation = /* GraphQL */ `
  subscription OnUpdateDonation($filter: ModelSubscriptionDonationFilterInput) {
    onUpdateDonation(filter: $filter) {
      id
      campaignId
      benefactorId
      donatedOn
      amountDonated
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDonation = /* GraphQL */ `
  subscription OnDeleteDonation($filter: ModelSubscriptionDonationFilterInput) {
    onDeleteDonation(filter: $filter) {
      id
      campaignId
      benefactorId
      donatedOn
      amountDonated
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBenefactor = /* GraphQL */ `
  subscription OnCreateBenefactor(
    $filter: ModelSubscriptionBenefactorFilterInput
  ) {
    onCreateBenefactor(filter: $filter) {
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
        postal
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
        }
        userSwipes {
          nextToken
        }
        status
        image
        Messages {
          nextToken
        }
        ChatRooms {
          nextToken
        }
        createdAt
        updatedAt
        userUserAdditionalInformationId
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
        }
        nextToken
      }
      createdAt
      updatedAt
      benefactorUserBenefactorId
    }
  }
`;
export const onUpdateBenefactor = /* GraphQL */ `
  subscription OnUpdateBenefactor(
    $filter: ModelSubscriptionBenefactorFilterInput
  ) {
    onUpdateBenefactor(filter: $filter) {
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
        postal
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
        }
        userSwipes {
          nextToken
        }
        status
        image
        Messages {
          nextToken
        }
        ChatRooms {
          nextToken
        }
        createdAt
        updatedAt
        userUserAdditionalInformationId
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
        }
        nextToken
      }
      createdAt
      updatedAt
      benefactorUserBenefactorId
    }
  }
`;
export const onDeleteBenefactor = /* GraphQL */ `
  subscription OnDeleteBenefactor(
    $filter: ModelSubscriptionBenefactorFilterInput
  ) {
    onDeleteBenefactor(filter: $filter) {
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
        postal
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
        }
        userSwipes {
          nextToken
        }
        status
        image
        Messages {
          nextToken
        }
        ChatRooms {
          nextToken
        }
        createdAt
        updatedAt
        userUserAdditionalInformationId
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
        }
        nextToken
      }
      createdAt
      updatedAt
      benefactorUserBenefactorId
    }
  }
`;
export const onCreateScholar = /* GraphQL */ `
  subscription OnCreateScholar($filter: ModelSubscriptionScholarFilterInput) {
    onCreateScholar(filter: $filter) {
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
        postal
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
        }
        userSwipes {
          nextToken
        }
        status
        image
        Messages {
          nextToken
        }
        ChatRooms {
          nextToken
        }
        createdAt
        updatedAt
        userUserAdditionalInformationId
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
        }
        nextToken
      }
      createdAt
      updatedAt
      scholarUserScholarId
    }
  }
`;
export const onUpdateScholar = /* GraphQL */ `
  subscription OnUpdateScholar($filter: ModelSubscriptionScholarFilterInput) {
    onUpdateScholar(filter: $filter) {
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
        postal
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
        }
        userSwipes {
          nextToken
        }
        status
        image
        Messages {
          nextToken
        }
        ChatRooms {
          nextToken
        }
        createdAt
        updatedAt
        userUserAdditionalInformationId
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
        }
        nextToken
      }
      createdAt
      updatedAt
      scholarUserScholarId
    }
  }
`;
export const onDeleteScholar = /* GraphQL */ `
  subscription OnDeleteScholar($filter: ModelSubscriptionScholarFilterInput) {
    onDeleteScholar(filter: $filter) {
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
        postal
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
        }
        userSwipes {
          nextToken
        }
        status
        image
        Messages {
          nextToken
        }
        ChatRooms {
          nextToken
        }
        createdAt
        updatedAt
        userUserAdditionalInformationId
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
        }
        nextToken
      }
      createdAt
      updatedAt
      scholarUserScholarId
    }
  }
`;
export const onCreateSwipes = /* GraphQL */ `
  subscription OnCreateSwipes($filter: ModelSubscriptionSwipesFilterInput) {
    onCreateSwipes(filter: $filter) {
      id
      userId
      targetd
      isLiked
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSwipes = /* GraphQL */ `
  subscription OnUpdateSwipes($filter: ModelSubscriptionSwipesFilterInput) {
    onUpdateSwipes(filter: $filter) {
      id
      userId
      targetd
      isLiked
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSwipes = /* GraphQL */ `
  subscription OnDeleteSwipes($filter: ModelSubscriptionSwipesFilterInput) {
    onDeleteSwipes(filter: $filter) {
      id
      userId
      targetd
      isLiked
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAdditionalInformation = /* GraphQL */ `
  subscription OnCreateAdditionalInformation(
    $filter: ModelSubscriptionAdditionalInformationFilterInput
  ) {
    onCreateAdditionalInformation(filter: $filter) {
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
    }
  }
`;
export const onUpdateAdditionalInformation = /* GraphQL */ `
  subscription OnUpdateAdditionalInformation(
    $filter: ModelSubscriptionAdditionalInformationFilterInput
  ) {
    onUpdateAdditionalInformation(filter: $filter) {
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
    }
  }
`;
export const onDeleteAdditionalInformation = /* GraphQL */ `
  subscription OnDeleteAdditionalInformation(
    $filter: ModelSubscriptionAdditionalInformationFilterInput
  ) {
    onDeleteAdditionalInformation(filter: $filter) {
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
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      username
      email
      firstName
      middleName
      lastName
      suffix
      sex
      address
      postal
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
      }
      userSwipes {
        items {
          id
          userId
          targetd
          isLiked
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      image
      Messages {
        items {
          id
          text
          chatroomID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      ChatRooms {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      userUserAdditionalInformationId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      username
      email
      firstName
      middleName
      lastName
      suffix
      sex
      address
      postal
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
      }
      userSwipes {
        items {
          id
          userId
          targetd
          isLiked
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      image
      Messages {
        items {
          id
          text
          chatroomID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      ChatRooms {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      userUserAdditionalInformationId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      username
      email
      firstName
      middleName
      lastName
      suffix
      sex
      address
      postal
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
      }
      userSwipes {
        items {
          id
          userId
          targetd
          isLiked
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      image
      Messages {
        items {
          id
          text
          chatroomID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      ChatRooms {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      userUserAdditionalInformationId
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
      id
      Messages {
        items {
          id
          text
          chatroomID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      LastMessage {
        id
        text
        chatroomID
        userID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
      id
      Messages {
        items {
          id
          text
          chatroomID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      LastMessage {
        id
        text
        chatroomID
        userID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
      id
      Messages {
        items {
          id
          text
          chatroomID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      LastMessage {
        id
        text
        chatroomID
        userID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      text
      chatroomID
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      text
      chatroomID
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      text
      chatroomID
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserChatRoom = /* GraphQL */ `
  subscription OnCreateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onCreateUserChatRoom(filter: $filter) {
      id
      userId
      chatRoomId
      user {
        id
        username
        email
        firstName
        middleName
        lastName
        suffix
        sex
        address
        postal
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
        }
        userSwipes {
          nextToken
        }
        status
        image
        Messages {
          nextToken
        }
        ChatRooms {
          nextToken
        }
        createdAt
        updatedAt
        userUserAdditionalInformationId
      }
      chatRoom {
        id
        Messages {
          nextToken
        }
        users {
          nextToken
        }
        LastMessage {
          id
          text
          chatroomID
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserChatRoom = /* GraphQL */ `
  subscription OnUpdateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onUpdateUserChatRoom(filter: $filter) {
      id
      userId
      chatRoomId
      user {
        id
        username
        email
        firstName
        middleName
        lastName
        suffix
        sex
        address
        postal
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
        }
        userSwipes {
          nextToken
        }
        status
        image
        Messages {
          nextToken
        }
        ChatRooms {
          nextToken
        }
        createdAt
        updatedAt
        userUserAdditionalInformationId
      }
      chatRoom {
        id
        Messages {
          nextToken
        }
        users {
          nextToken
        }
        LastMessage {
          id
          text
          chatroomID
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserChatRoom = /* GraphQL */ `
  subscription OnDeleteUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onDeleteUserChatRoom(filter: $filter) {
      id
      userId
      chatRoomId
      user {
        id
        username
        email
        firstName
        middleName
        lastName
        suffix
        sex
        address
        postal
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
        }
        userSwipes {
          nextToken
        }
        status
        image
        Messages {
          nextToken
        }
        ChatRooms {
          nextToken
        }
        createdAt
        updatedAt
        userUserAdditionalInformationId
      }
      chatRoom {
        id
        Messages {
          nextToken
        }
        users {
          nextToken
        }
        LastMessage {
          id
          text
          chatroomID
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      createdAt
      updatedAt
    }
  }
`;
