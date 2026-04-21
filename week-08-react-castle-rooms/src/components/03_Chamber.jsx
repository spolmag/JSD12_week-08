import Room from "./04_Room";

export default function Chamber({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-amber-400 w-[90%]">
      <h1>Chamber</h1>
      {/*question ? question : "Waiting for a message....."*/}
      <Room question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}
