const questions = [
  { disagree: 'E', agree: 'I', text: `다이어트는 주변인의 시선보다는 자기만족을 위해 하는 거라고 생각한다.` },
  { disagree: 'S', agree: 'N', text: `다이어트에 성공한 미래의 내 모습을 상상해보면 동기부여가 된다.` },
  { disagree: 'T', agree: 'F', text: `살쪘다고 고민하는 친구들을 보면 나만 그런 게 아니구나 싶어 위로가 된다.` },
  { disagree: 'J', agree: 'P', text: `다이어트 방법을 고를 때 선택지가 다양한 편이 좋다.` },
  { disagree: 'E', agree: 'I', text: `사람이 붐비는 맛집에 가는 것보다 집에서 배달 음식을 시켜먹는 게 좋다.` },
  { disagree: 'S', agree: 'N', text: `다이어트를 할 때 세세한 식단 계획은 별로 중요하지 않다고 생각한다.` },
  { disagree: 'T', agree: 'F', text: `다이어트 중이지만 지인이 음식을 권하면 미안한 마음에 거절하기가 어렵다.` },
  { disagree: 'J', agree: 'P', text: `그때그때 즉흥적으로 끌리는 메뉴를 선택해서 식사하는 게 좋다.` },
];

const calculateMBTI = (responses) => {
  const scores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  responses.forEach((response, index) => {
    const question = questions[index];

    switch (response) {
      case 0:
        scores[question.disagree] += 2;
        break;
      case 1:
        scores[question.disagree] += 1;
        break;
      case 3:
        scores[question.agree] += 1;
        break;
      case 4:
        scores[question.agree] += 2;
        break;
    }
  });

  const mbti = 
    (scores.E >= scores.I ? 'E' : 'I') +
    (scores.N >= scores.S ? 'N' : 'S') +
    (scores.F >= scores.T ? 'F' : 'T') +
    (scores.P >= scores.J ? 'P' : 'J');

  console.log(`MBTI 결과: ${mbti}`);
};

calculateMBTI([2, 2, 2, 2, 2, 2, 2, 2]); // ENFP