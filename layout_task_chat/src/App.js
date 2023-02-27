import "./App.css";
import { Messages } from "./data.js";
function App() {
  return (
    <div className="App">
      <div className="messages">
        <div className="messages_scroll">
          {Messages.map((i) => (
            <>
              {i.position === 1 && !i.day && (
                <div className="left-mes">
                  <img src={i.img} alt="img" />
                  <p>{i.text}</p>
                </div>
              )}
              {i.position === 2 && !i.day && (
                <div className="right-mes">
                  <img src={i.img} alt="img" />
                  <p>{i.text}</p>
                </div>
              )}
            </>
          ))}
          <div className="new-mes">
            <div className="line">
              <div></div>
              <p>21 октября 2017</p>
              <div></div>
            </div>
            {Messages.map((i) => (
              <>
                {i.position === 1 && i.day && (
                  <div className="left-mes">
                    <img src={i.img} alt="img" />
                    <p>{i.text}</p>
                  </div>
                )}
                {i.position === 2 && i.day && (
                  <div className="right-mes">
                    <img src={i.img} alt="img" />
                    <p>{i.text}</p>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="message_input">
        <textarea className="textarea" />
        <bottom className="bottom">
          <p>Отправить</p>
        </bottom>
      </div>
    </div>
  );
}

export default App;
