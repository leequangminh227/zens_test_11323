/* eslint-disable prefer-const */
import { Injectable, Inject } from '@nestjs/common';
import { Joke } from './joke.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JokesService {
  private jokeList: Joke[] = [
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
  getAll(): Joke[] {
    return this.jokeList;
  }
  getOne(id) {
    let rs = null;
    this.jokeList.map((ele, index) => {
      if (parseInt(id) === ele.id) {
        rs = ele;
      }
    });
    return rs;
  }
  getNew(idList) {
    // eslint-disable-next-line prefer-const
    let arr = [];
    for (let i in idList) {
      arr.push(parseInt(idList[i]));
    }
    let rs = {};
    for (let i in this.jokeList) {
      if (!arr.includes(this.jokeList[i].id)) {
        rs = this.jokeList[i];
        break;
      }
    }
    return rs;
  }
  reactJoke(id, reaction) {
    let idx = 0;
    let joke = null;
    this.jokeList.map((ele, index) => {
      if (parseInt(id) === ele.id) {
        joke = ele;
        idx = index;
      }
    });
    if (joke !== null) {
      if (reaction === true) {
        this.jokeList[idx].like += 1;
        return this.jokeList[idx];
      } else if (reaction === false) {
        this.jokeList[idx].dislike += 1;
        return this.jokeList[idx];
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}
