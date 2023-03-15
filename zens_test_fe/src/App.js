import "./App.css";
import logo from "./img/logo.png";
import avatar from "./img/avatar.png";
import { useEffect, useState } from "react";

function App() {
  const jokeList = [
    {
      id: 1,
      like: 0,
      dislike: 0,
      content:
        'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."',
    },
    {
      id: 2,
      like: 0,
      dislike: 0,
      content:
        'Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"',
    },
    {
      id: 3,
      like: 0,
      dislike: 0,
      content:
        'The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, \'I am going to eat that pussy once Jimmy leaves for school today!\'"',
    },
    {
      id: 4,
      like: 0,
      dislike: 0,
      content:
        'A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it\'s either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"',
    },
  ];
  const [id, setId] = useState(1);
  const [idList, setIdList] = useState([]);

  const getJoke = () => {
    let joke = "That's all the jokes for today! Come back another day!";
    jokeList.map((ele, index) => {
      if (ele.id === id) {
        joke = ele.content;
      }
    });
    return joke;
  };

  const reactJoke = () => {
    let newJokeId = 0;
    for (let i = 0; i < jokeList.length; i++) {
      if (!idList.includes(jokeList[i].id)) {
        newJokeId = jokeList[i].id;
        setIdList([...idList, jokeList[i].id]);
      }
    }
    setId(newJokeId);
  };

  return (
    <div className="app">
      <header className="appContainer">
        <div className="navbar">
          <img className="logo" alt='logo' src={logo} />
          <div className="avatarBlock">
            <div className="userInfo">
              <div className="text1">Handicrafted by</div>
              <div className="text2">Jim HLS</div>
            </div>
            <div>
              <img className="avatar" alt='avatar' src={avatar}/>
            </div>
          </div>
        </div>
      </header>
      <body>
        <div className="bodyContainer">
          <div className="title">
            <div className="titleContent">
              <h1>A joke a day keeps the doctor away</h1>
              <h5>If you joke wrong way, your teeth have to pay. (Serious)</h5>
            </div>
          </div>
          <div className="jokeBlock">
            <div className="jokeContent">{getJoke()}</div>
            <hr className="endJokeLine" />
            <div className="reactBlock">
              <div className="reactButton blue">
                <button
                  onClick={() => {
                    reactJoke();
                  }}
                >
                  This is Funny!
                </button>
              </div>
              <div className="reactButton green">
                <button
                  onClick={() => {
                    reactJoke();
                  }}
                >
                  This is not funny.
                </button>
              </div>
            </div>
          </div>
          <div className="footerBlock">
            <hr className="footerLine" />
            <div className="footerInfo">
              <div className="text grey" id="footerDetail">
                This website is created as part of Hlsolutions program. The
                materials contained on this website are provided for general
                information only and do not constitute any form of advice. HLS
                assumes no responsibility for the accuracy of any particular
                statement and accepts no liability for any loss or damage which
                may arise from reliance on the information contained on this
                site.
              </div>
              <div className="text">Copyright 2021 HLS</div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
