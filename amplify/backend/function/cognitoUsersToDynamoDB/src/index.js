var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()

exports.handler = async (event, context) => {
    let date = new Date()
    if (event.request.userAttributes.sub) {
        let params = {
            Item: {
                'id': {S: event.request.userAttributes.sub},
                'userType': {S: 'null'},
                'username': {S: event.userName},
                'email': {S: event.request.userAttributes.email},
                'firstName': {S: event.request.userAttributes.given_name},
                'middleName': {S: 'null'},
                'lastName': {S: event.request.userAttributes.family_name},
                'sex': {S: 'null'},
                'address': {S: 'null'},
                'postal': {S: 'null'},
                'nationality': {S: 'null'},
                'typeOfDisability': {S: 'null'},
                'placeOfBirth': {S: 'null'},
                'birthDate': {S: 'null'},
                'mobileNumber': {S: event.request.userAttributes.phone_number},
                'createdAt': {S: date.toISOString()},
                'updatedAt': {S: date.toISOString()},
            },
            TableName: process.env.USERTABLE
        }

        try {
            await ddb.putItem(params).promise()
            console.log("Success")
        } catch (err) {
            console.log("Error", err)
        }

        console.log("Success: Everything executed correctly")
        context.done(null, event)

    } else {
        console.log("Error: Nothing was written to DynamoDB")
        context.done(null, event)
    }
};