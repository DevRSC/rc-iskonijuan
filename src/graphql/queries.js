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
        }
        nextToken
      }
      createdAt
      updatedAt
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
          postal
          nationality
          typeOfDisability
          placeOfBirth
          birthDate
          mobileNumber
          verified
          status
          image
          createdAt
          updatedAt
          userUserAdditionalInformationId
        }
        benefactorDonation {
          nextToken
        }
        createdAt
        updatedAt
        benefactorUserBenefactorId
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
          postal
          nationality
          typeOfDisability
          placeOfBirth
          birthDate
          mobileNumber
          verified
          status
          image
          createdAt
          updatedAt
          userUserAdditionalInformationId
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
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      text
      chatroomID
      userID
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const messagesByChatroomID = /* GraphQL */ `
  query MessagesByChatroomID(
    $chatroomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatroomID(
      chatroomID: $chatroomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const messagesByUserID = /* GraphQL */ `
  query MessagesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getUserChatRoom = /* GraphQL */ `
  query GetUserChatRoom($id: ID!) {
    getUserChatRoom(id: $id) {
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
export const listUserChatRooms = /* GraphQL */ `
  query ListUserChatRooms(
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          status
          image
          createdAt
          updatedAt
          userUserAdditionalInformationId
        }
        chatRoom {
          id
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userChatRoomsByUserId = /* GraphQL */ `
  query UserChatRoomsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          status
          image
          createdAt
          updatedAt
          userUserAdditionalInformationId
        }
        chatRoom {
          id
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userChatRoomsByChatRoomId = /* GraphQL */ `
  query UserChatRoomsByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          status
          image
          createdAt
          updatedAt
          userUserAdditionalInformationId
        }
        chatRoom {
          id
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
