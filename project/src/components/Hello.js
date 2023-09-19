import { useState } from "react";

export default function Hello() {
    const [ name, setName ] = useState('Mike'); //구조 분해 할당 참조

    function changeName() {
        const newName = name === "Mike" ? "Jane" : "Mike";
        setName(newName);
    }

    return (
        <div>
            <h1>state</h1>
            <h2>{name}</h2>
            <button onClick = {changeName}>Change</button>
        </div>
    );
}


// 다른 컴포넌트를 한 컴포넌트 안에서도 사용할 수 있다.

// 특별한 일이 아니라면 인라인으로 css를 활용하지 않는다.

/* 이벤트를 거는 방법
1. 함수를 만들어 놓고 전달해주기
2. onClick 안에 직접 함수를 작성하기 - 매개변수 전달이 쉽다.
3. e.target.value를 사용하기
*/

/* 
state: 컴포넌트의 속성값, 리액트는 속성값이 변하면 자동으로 UI를 변경해준다.
DOM을 업데이트 하는 과정이라고 볼 수 있달까.
*/

/* useState 사용하기 
1. useState는 배열을 반환한다.
const [변수명, state를 변경해주는 함수] = useState('초기값');
*/