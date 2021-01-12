import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeQuote, downvoteQuote, upvoteQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    const {quotes, removeQuote, upvoteQuote, downvoteQuote} = this.props
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
              {quotes.map(quote => <QuoteCard quote={quote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, {upvoteQuote, downvoteQuote, removeQuote})(Quotes);
