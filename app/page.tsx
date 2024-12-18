'use client';

import { useState } from 'react';
import { questions } from './data/questions';

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const question = questions.find(q => q.id === currentQuestion);

  const handleQuestionNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem('questionNumber') as HTMLInputElement;
    const number = parseInt(input.value);
    if (number >= 1 && number <= 50) {
      setCurrentQuestion(number);
      resetState();
    }
  };

  const handleAnswerSubmit = (selectedIndex: number) => {
    setSelectedAnswer(selectedIndex);
    if (question && selectedIndex === question.correctAnswer) {
      setFeedback('Correct! ✅');
    } else {
      setFeedback('Incorrect! ❌');
    }
  };

  const resetState = () => {
    setSelectedAnswer(null);
    setShowAnswer(false);
    setFeedback(null);
  };

  const nextQuestion = () => {
    if (currentQuestion < 50) {
      setCurrentQuestion(prev => prev + 1);
      resetState();
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(prev => prev - 1);
      resetState();
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(1);
    resetState();
  };

  if (!question) return <div>Question not found</div>;

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
            Interactive Quiz
          </h1>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                  Progress
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-purple-600">
                  {Math.round((currentQuestion / 50) * 100)}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-purple-200">
              <div
                style={{ width: `${(currentQuestion / 50) * 100}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500"
              ></div>
            </div>
          </div>
        </div>

        {/* Question Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 transform transition-all duration-300 hover:shadow-xl">
          <form onSubmit={handleQuestionNavigation} className="flex gap-3 justify-center mb-6">
            <input
              type="number"
              name="questionNumber"
              min="1"
              max="50"
              className="w-24 px-4 py-2 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-all duration-300"
              placeholder="1-50"
            />
            <button 
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Jump to Question
            </button>
          </form>

          {/* Question Display */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Question {currentQuestion}: {question.question}
            </h2>
            <div className="grid gap-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSubmit(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 transform hover:scale-[1.01] ${
                    selectedAnswer === index 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                      : 'bg-white border-2 border-purple-100 hover:border-purple-300 shadow-sm'
                  }`}
                >
                  <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
                </button>
              ))}
            </div>
          </div>

          {/* Feedback */}
          {feedback && (
            <div className="mt-6 p-4 rounded-xl bg-opacity-20 text-center animate-fade-in">
              <p className="text-xl font-semibold mb-2">
                {feedback}
              </p>
              {showAnswer && (
                <p className="text-purple-600 font-medium">
                  Correct answer: {question.options[question.correctAnswer]}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center gap-4 mt-8">
          <button
            onClick={previousQuestion}
            disabled={currentQuestion === 1}
            className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            ← Previous
          </button>
          <div className="space-x-4">
            <button
              onClick={() => setShowAnswer(true)}
              className="px-6 py-3 rounded-lg bg-yellow-100 text-yellow-700 font-semibold hover:bg-yellow-200 transition-all duration-300"
            >
              Show Answer
            </button>
            <button
              onClick={restartQuiz}
              className="px-6 py-3 rounded-lg bg-red-100 text-red-700 font-semibold hover:bg-red-200 transition-all duration-300"
            >
              Restart Quiz
            </button>
          </div>
          <button
            onClick={nextQuestion}
            disabled={currentQuestion === 50}
            className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            Next →
          </button>
        </div>
      </div>
    </main>
  );
}
