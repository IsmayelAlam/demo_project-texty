import { AiOutlineSend } from "react-icons/ai";
import { ImImages } from "react-icons/im";

export default function SendMessage() {
  return (
    <form className="sendText">
      <input
        type="text"
        required
        placeholder="Send messages"
        className="sendInput"
      />
      <div className="attachments">
        <label htmlFor="images">
          <ImImages />
        </label>
        <input type="file" id="images" />

        <button type="submit" className="sendBtn">
          <AiOutlineSend />
        </button>
      </div>
    </form>
  );
}
