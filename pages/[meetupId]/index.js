import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/Meetupdetail";


function MeetupDetails(){
    return <Fragment>
    <MeetupDetail
    image='https://images.pexels.com/photos/3855951/pexels-photo-3855951.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    title='A First Meetup'
    address='Some Street 5 ,Some City'
    description='The meetup description' />
    </Fragment>
      
}

export default MeetupDetails;