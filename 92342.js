const list = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
const result = [];

function pwc(items, index, pick) {
  if (items.length === pick) {
    result.push(items);
    return;
  }

  for (let i = index; i < list.length; i++) {
    pwc(`${items}${list[i]}`, i, pick);
  }
}

function solution(n, info) {
  var answer = [];
  info = info.reverse();

  pwc("", 0, n);

  var maxLion = 0;
  for (var i = 0; i < result.length; i++) {
    var peach = 0;
    var lion = 0;
    for (var score = 1; score <= 10; score++) {
      var searchChar = list[score];
      var count = 0;
      var pos = result[i].indexOf(searchChar);
      while (pos !== -1) {
        count++;
        pos = result[i].indexOf(searchChar, pos + 1);
      }
      if (!info[score] && !count) {
      } else if (info[score] >= count) {
        peach = peach + score;
      } else lion = lion + score;
    }

    if (lion > peach) {
      if (maxLion < lion-peach) {
        answer = [];
        answer.push(result[i]);
        maxLion = lion-peach;
      } else if (maxLion === lion-peach) {
        answer.push(result[i]);
      }
    }
  }
  if (!answer.length) return [-1];

  var answerArray = [];
  for (var i = 0; i < 11; i++) {
    var searchChar = list[i];
    var count = 0;
    var pos = answer[0].indexOf(searchChar);
    while (pos !== -1) {
      count++;
      pos = answer[0].indexOf(searchChar, pos + 1);
    }
    answerArray.push(count);
  }
  return answerArray.reverse();
}
