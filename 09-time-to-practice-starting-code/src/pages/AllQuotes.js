import QuoteList from '../components/quotes/QuoteList';
    

const DUMMY_QUOTES = [
    {
        id:'q1',
        author:'Jurij',
        text:'Wau kako zabavno'
    },
    {
        id:'q2',
        author:'Mih',
        text:'Wau kako ne kul'
    }
]
const AllQuotes = () => {
return <QuoteList quotes={DUMMY_QUOTES}/>
}
export default AllQuotes;