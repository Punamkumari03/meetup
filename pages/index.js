import { useEffect, useState } from 'react';
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

function HomePage(){
    const [loadedMeetups,setLoadedMeetups] = useState([])
    useEffect(()=>{
        //send http request and fetch data
        setLoadedMeetups(DUMMY_MEETUPS);
    },[]);
    return <MeetupList meetups={loadedMeetups}/>

}

export default HomePage;