let basicData = {
  count: 10,
  min: 1,
  max: 10,
  divideNumber: 5
}

function exampleOne(count, min, max) {
  //위의 basicData를 참고하여 매개변수를 작성
  let exampleArr = [];
  //count는 랜덤함수를 실행하는 횟수
  //랜덤함수 실행하는 만큼 반복문 실행
  //랜덤함수 실행되어 도출된 결과 값 배열에 추가
  //배열을 리턴하는 로직

  //실수(float)로 도출된 난수, 소수점 두자리까지 표현된 값 배열에 추가

  for (let i = 0; i < count; i++) {
    let randomNum = parseFloat((Math.random() * (max - min) + min).toFixed(2));
    exampleArr.push(randomNum);
  }
  return exampleArr;
}

function exampleTwo(array, divideNumber) {
  let exampleObject = {
    a: [],
    b: []
  }
  //0번째 매개변수 array는 실수(float)로 이루어진 배열
  //1번째 매개변수는 정수만을 입력하도록 타입 제어
  //매개변수 divideNumber보다 작은 수는 a 배열에, 큰 수는 b 배열에 추가하는 로직 작성
  //divideNumber는 basicData 객체의 divideNumber 속성값을 사용
  for (let i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i]) === false) {
      if (array[i] < divideNumber) {
        exampleObject.a.push(parseInt(array[i]));
      }
      else {
        exampleObject.b.push(parseInt(array[i]));
      }
    }
    else {
      if (array[i] < divideNumber) {
        exampleObject.a.push(parseInt(array[i]));
      }
      else {
        exampleObject.b.push(parseInt(array[i]));
      }
    }
  }
  return exampleObject;
}

function exampleThree(array) {
  //매개변수 array의 모든 매개변수를 더하는 로직
  let value = 0; //더한 결과 값을 저장하는 변수
  for (let i = 0; i < array.length; i++) {
    value += array[i];
  }
  return value;
}

function exampleFour(object) {
  //매개변수의 Object의 프로퍼티가 배열인지 검사 후,
  //배열의 요소가 모두 숫자형태인지 검사하는 로직 작성
  let value;//지역변수에 검사결과를 boolean 타입으로 할당 후 리턴

  // 객체의 프로퍼티를 모두 확인하여 배열인지 확인
  for (let prop in object) {
    if (Array.isArray(object[prop])) {
      allNum = true;
      for (let i = 0; i < object[prop].length; i++) {
        if (typeof (object[prop][i]) !== 'number') {
          allNum = false;
          break;
        }
      }
      if (allNum === true) {
        value = true;
      } else {
        value = false;
      }
      return value;
    } else {
      value = false;
      return value;
    }
  }
}

function exampleFive(objectOne, objectTwo) {
  //ObjectOne 매개변수는 최상단 basicData 객체가 인자로 들어올 것을 가정
  //ObjectTwo는 exampleTwo함수의 리턴값이 인자로 들어올 것을 가정
  let value;
  let sum1 = 0;
  let sum2 = 0;
  if (exampleFour(objectOne) === true) {
    for (let prop in objectTwo) {
      sum1 += exampleThree(objectTwo[prop]);
    }
    
  } if(exampleFour(objectOne) === false) {
    for (let prop in objectOne) {
      sum2 += objectOne[prop];
    }
  }
  if (exampleFour(objectTwo) === true) {
    for (let prop in objectTwo) {
      sum1 += exampleThree(objectTwo[prop]);
    }
  } if(exampleFour(objectTwo) === false) {
    for (let prop in objectOne) {
      sum2 += objectOne[prop];
    }
  }
  // for (let prop in objectTwo) {
  //   sum1 += exampleThree(objectTwo[prop]);
  // }

  // for (let prop in objectOne) {
  //   sum2 += objectOne[prop];
  // }
  //여기서 조건문을 어떻게 줘야할지를 모르겠습니다.
  value = sum1 + sum2;
  //ObjectOne, ObjectTwo 모두 각각 프로퍼티의 값을 더한 뒤
  //위의 지역변수 value에 총합을 생성하여 리턴하는 로직을 작성

  return value;
}
// if(typeof(object[prop]) === 'number') {

// }
// let ab = {
// a : [3, 4, 5, 6],
// b : [1, 2, 3, 4]
// }
// let c = 0;
// for (prop in ab) {
//   c += exampleThree(ab[prop]);
// }

//기록

// console.log(c);
// console.log(exampleFour(basicData));
// console.log(Array.isArray(exampleTwo(exampleOne(basicData.count, basicData.min, basicData.max), basicData.divideNumber).a));
// console.log(typeof(exampleOne(basicData.count, basicData.min, basicData.max)));
// console.log(b);
// console.log(typeof(exampleOne(basicData.count, basicData.min, basicData.max)[0]));
// console.log(exampleThree(exampleTwo(exampleOne(basicData.count, basicData.min, basicData.max), basicData.divideNumber)));
// console.log(exampleTwo(exampleOne(basicData.count, basicData.min, basicData.max), basicData.divideNumber));
console.log(exampleFive(basicData, exampleTwo(exampleOne(basicData.count, basicData.min, basicData.max), basicData.divideNumber)));
// console.log(exampleThree(ab.a));