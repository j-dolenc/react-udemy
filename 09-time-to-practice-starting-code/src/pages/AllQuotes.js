import QuoteList from '../components/quotes/QuoteList';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import { useEffect } from 'react';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import NoQutoesFound from '../components/quotes/NoQuotesFound';
// const DUMMY_QUOTES = [
//     {
//         id:'q1',
//         author:'Jurij',
//         text:'Wau kako zabavno'
//     },
//     {
//         id:'q2',
//         author:'Mih',
//         text:'Wau kako ne kul'
//     }
// ]
const AllQuotes = () => {
    const {sendRequest,status,data:loadedQuotes,error}=useHttp(getAllQuotes,true);


    useEffect(()=>{
        sendRequest();
    },[sendRequest]);
    if(status === 'pending'){
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        )
    }
    if(error){
        return (<p className='centered focused'>{error}</p>)
    }

    if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)){
        return <NoQutoesFound/>
    }
return <QuoteList quotes={loadedQuotes}/>
}
export default AllQuotes;