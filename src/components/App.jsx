import { Component } from "react"

import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";
import { Section } from "./Section";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback() {
    return Object.values(this.state).reduce((total, el) => {
      return total + el;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    const percentage = this.state.good / this.countTotalFeedback() * 100;
    
    if (this.state.good === 0) {
      return 0;
    } else {
      return Math.floor(percentage);
    }
  }

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    let stats = (
      <p className="title">There's no feedback yet</p>
    );

    if (this.countTotalFeedback() !== 0) {
      stats = (
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
      );
    }

    return (
      <div className="feedback-app">
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedback} />
        </Section>


        <Section title="Statistics">
          {stats}
        </Section>
      </div>
    );
  }
};