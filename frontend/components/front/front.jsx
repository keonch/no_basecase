import React from 'react';

import QuestionsIndexContainer from '../questions/questions_index_container';

class Front extends React.Component {

  render () {
    return(
      <QuestionsIndexContainer frontPage={true} />
    );
  }
}

export default Front;
