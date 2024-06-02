import { useState } from "react";

import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
// import Section from "../section/Section";
import Notification from "../Notification/Notification";
import Descriptions from "../Descriptions/Descriptions";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackBtnClick = (option) => {
    switch (option) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedbacks = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedbacks();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  return (
    <div>
      <Descriptions
        title="Sip Happens Café
"
        description="Please leave your feedback about our service by selecting one of the options below.
"
      ></Descriptions>
      <FeedbackOptions
        options={["good", "neutral", "bad"]}
        onLeaveFeedback={handleFeedbackBtnClick}
      />
      <Descriptions title="Statistics"></Descriptions>
      {countTotalFeedbacks() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedbacks()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback yet" />
      )}
    </div>
  );
}
