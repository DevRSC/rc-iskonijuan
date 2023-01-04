import { FlatList } from 'react-native';
import ContactListItem from '../components/ContactListItem';
import React, { useState, useEffect} from 'react'
import {API, graphqlOperation} from 'aws-amplify';
import { listUsers } from '../graphql/queries';

const ContactsScreen = () => {
  const [users, setUsers] = useState([]);
	
	useEffect(() => {
      API.graphql(graphqlOperation(listUsers)).then((res) => {
      setUsers(res?.data?.listUsers?.items);
      //console.warn(users)
    });
	}, []);

  
  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <ContactListItem user={item} />}
      style={{ backgroundColor: 'white' }}
    />
  );
};

export default ContactsScreen;