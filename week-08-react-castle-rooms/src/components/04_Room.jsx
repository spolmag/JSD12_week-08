import Hall from "./05_Hall";

export default function Room({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-gray-500 w-[85%]">
      <h1>Room</h1>
      {/*question ? question : "Waiting for a message....."*/}
      <Hall question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}
