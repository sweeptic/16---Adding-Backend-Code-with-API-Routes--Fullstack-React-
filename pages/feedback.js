import { buildFeedbackPath, extractFeedback } from './api/feedback';

export default function feedbackPage(props) {
  return (
    <div>
      {props.feedbackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: { feedbackItems: data },
  };
}
