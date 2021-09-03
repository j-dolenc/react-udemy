import { Fragment, useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
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
  const match = useRouteMatch();
  const params = useParams();
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  const { quoteId } = params;
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if(error){
    return <p className='centered'>{error}</p>
  }
  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }
  return (
    <Fragment>
      <h1>Quote detail</h1>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path}>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
      {/* /quotes/:quoteid/.... */}
    </Fragment>
  );
};
export default QuoteDetail;
