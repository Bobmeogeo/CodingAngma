export default function() {
    
    function showName(){
        console.log("Ted")
    }

    function showText(e){
        console.log(e.target.value)
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick = {showName}>Show name</button>
            <button onClick = {() => {
                console.log(33);
            }}
            >
                Show age
            </button>
            <input type="text" onChange={showText} />
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