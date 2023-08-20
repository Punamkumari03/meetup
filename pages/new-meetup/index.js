 import {useRouter} from 'next/router'
 import NewMeetupFrom from '../../components/meetups/NewMeetupForm'
function NewMeetupPage(){
    const router = useRouter()
    async function addMeetupHandler(enterredMeetupData){
        // console.log(enterredMeetupData)
       const response = await fetch('/api/new-meetup',{
        method: 'POST',
        body: JSON.stringify(enterredMeetupData),
        headers: {
            'Content-Type':'application/json'
        }
       });
       const data = await response.json()
       console.log(data)
       router.push('/')
    }
    return <NewMeetupFrom onAddMeetup={addMeetupHandler}/>
}

export default NewMeetupPage;