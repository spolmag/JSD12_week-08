import Corridor from "./06_Corridor";

export default function Hall({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-pink-300 w-[80%]">
      <h1>Hall</h1>
      {/*question ? question : "Waiting for a message....."*/}
      <Corridor
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
      />
    </div>
  );
}
