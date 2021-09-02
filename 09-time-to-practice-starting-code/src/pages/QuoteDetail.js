import { Fragment } from "react";
import { Route, useParams } from "react-router";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from '../components/quotes/NoQuotesFound';
const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Jurij",
    text: "Wau kako zabavno",
  },
  {
    id: "q2",
    author: "Mih",
    text: "Wau kako ne kul",
  },
];
const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
  if(!quote){
      return <NoQuotesFound />
  }
  return (
    <Fragment>
      <h1>Quote detail</h1>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <div className='centered'></div>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
      {/* /quotes/:quoteid/.... */}
    </Fragment>
  );
};
export default QuoteDetail;
