import { useRef, useState } from 'react';

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  const [feedbackItems, setFeedbackItems] = useState([]);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch('api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => console.log('data', data));
  }

  function loadFeedbackHandler() {
    fetch('api/feedback', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then(({ feedback }) => {
        setFeedbackItems(feedback);
      });
  }

  return (
    <div>
      <h1>The Home Page</h1>

      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="mail">Your email address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>

        <button>Send Feedback</button>
      </form>
      <div>
        <button onClick={loadFeedbackHandler}>Load data</button>
        <ul>
          {feedbackItems.map((item) => (
            <li key={item.id}>
              {item.id} - {item.email} - {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
