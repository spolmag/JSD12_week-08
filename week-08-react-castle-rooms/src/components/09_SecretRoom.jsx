export default function SecretRoom({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-black w-[60%]">
      <h1>Secret Room</h1>
      <p>
        Message from outside:
        <span className="text-yellow-300">
          {question ? question : "Waiting for a message....."}
        </span>
      </p>
      Reply to the outside.
      <p className="text-yellow-300">
        {answer ? answer : " Waiting for a reply....."}
      </p>
      <textarea
        value={answer} //Get value from 'answer'
        onChange={handleAnswer} //Send data user input in this textArea to function 'handleAnswer - e'
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />
    </div>
  );
}
