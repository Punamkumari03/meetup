 import NewMeetupFrom from '../../components/meetups/NewMeetupForm'
function NewMeetupPage(){

    function addMeetupHandler(enterredMeetupData){
        console.log(enterredMeetupData)
    }
    return <NewMeetupFrom onAddMeetup={addMeetupHandler}/>
}

export default NewMeetupPage;