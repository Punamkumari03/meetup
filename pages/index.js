// import { useEffect, useState } from 'react';
import { MongoClient } from 'mongodb'

import MeetupList from '../components/meetups/MeetupList'


const DUMMY_MEETUPS = [
    {
        id:'m1',
        title:'A First Meetup',
        image:'https://images.pexels.com/photos/3855951/pexels-photo-3855951.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        address:'Some address 5,12345 some city',
        description:'This is a first meetup!'
    },
    {
        id:'m2',
        title:'A Second Meetup',
        image:'https://images.pexels.com/photos/2041928/pexels-photo-2041928.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        address:'Some address 10,12345 some city',
        description:'This is a Second meetup!'
    },
]

function HomePage(props){
   
  
    return <MeetupList meetups={props.meetups}/>


}
// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;
//     //fetch data from api
//     return {
//         props:{
//             meetups: DUMMY_MEETUPS
//     }

//     }
// }


export async function getStaticProps(){
    //fetch data from api
    const client = await MongoClient.connect('mongodb+srv://punamgupta250602:punam123@cluster0.vicanvy.mongodb.net/?retryWrites=true&w=majority');
      const db = client.db();

      const meetupsCollection = db.collection('meetups')
      const meetups  = await meetupsCollection.find().toArray();

      client.close();
   
    return {
        props: {
            meetups: meetups.map(meetup => ({
                title:meetup.title,
                address:meetup.address,
                image:meetup.image,
                id:meetup._id.toString(),
            }))
        },
        revalidate: 10
    }
}
export default HomePage;