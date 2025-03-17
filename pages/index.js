import { useRef } from 'react';

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
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
          <label htmlFor="feedback" ref={feedbackInputRef}>
            Your feedback
          </label>
          <textarea id="email" rows="5"></textarea>
        </div>

        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
