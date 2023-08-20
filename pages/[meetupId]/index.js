
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/Meetupdetail";

function MeetupDetails() {
  
  return (
    <Fragment>
      <MeetupDetail
        image="https://images.pexels.com/photos/3855951/pexels-photo-3855951.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        title="A First Meetup"
        address="Some Street 5 ,Some City"
        description="The meetup description"
      />
    </Fragment>
  );
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://images.pexels.com/photos/3855951/pexels-photo-3855951.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        id: meetupId,
        title: "A First Meetup",
        address: "Some Street 5 ,Some City",
        description: "The meetup description",
      },
    },
  };
}
export default MeetupDetails;
