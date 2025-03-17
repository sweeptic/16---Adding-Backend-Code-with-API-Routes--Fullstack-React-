import { useState } from 'react';
import { buildFeedbackPath, extractFeedback } from '../api/feedback';

export default function feedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

  async function loadFeedbackHandler(id) {
    const res = await fetch(`api/${id}`);
    const data = await res.json();
    console.log('data', data.feedback);
    setFeedbackData(data.feedback);
  }

  return (
    <>
      {props.feedbackItems.map((item) => (
        <li key={item.id}>
          {item.text} <button onClick={loadFeedbackHandler.bind(null, item.id)}>Show Details</button>
        </li>
      ))}
      {feedbackData && <p key={feedbackData.id}>{feedbackData.text}</p>}
    </>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: { feedbackItems: data },
  };
}
