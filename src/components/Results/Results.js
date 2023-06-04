import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../Spinner/Spinner';

import { mapExpressionToEmoji } from '../../helpers/emojis';
import { mapExpressionToEmosi } from '../../helpers/emosi';

import './Results.css';

const Results = ({ results, processing }) => {
  if (processing && results) {
    return <Spinner />;
  }
  if (!processing && results && results.length > 0) {
    return (
      <div className="results">
        {results.length > 1 ? (
          <div>
            {results.map((result, i) => (
              <div className="results__wrapper" key={i}>
                <div style={{ width: '300px' }}>
                  <p>
                    saya rasa salah satu dari kalian adalah seorang {mapExpressionToEmoji(results[0].gender)} dan sedang mapExpressionToEmosi(result.expressions.asSortedArray()[0].expression)}
                  </p>
                </div>
                <FontAwesomeIcon icon={mapExpressionToEmoji(result.expressions.asSortedArray()[0].expression)} size="2x" />
              </div>
            ))}
          </div>
        ) : (
          <div className="results__wrapper">
            <div>
              <p>dari hasil analisa saya, anda adalah seorang {mapExpressionToEmoji(results[0].gender)} dan saya rasa emosi anda sekarang adalah mapExpressionToEmosi(results[0].expressions.asSortedArray()[0].expression)}</p>
            </div>
            <div className="results__emoji">
              <FontAwesomeIcon icon={mapExpressionToEmoji(results[0].expressions.asSortedArray()[0].expression)} size="2x" />
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="results">
        <Spinner />
      </div>
    );
  }
};

export default Results;
