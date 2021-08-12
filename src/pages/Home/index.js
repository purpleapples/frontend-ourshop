// 모든 features/screens/pages 가 pages 폴더에 정의된다. 
// 각 screen은 index.js 파일을 가지며 container을 screen 이 functional component로써 이용가능한
// default 모듈로 export 한다.
// 각각의 page는 components dir을 가지고 해당 page에만 필요한 components를 가진다.
// 일반적 규칙으로, 만약 module(utility, component, etc)이 또 다른 module에서만 사용된다면,
// 위에 보이는 것처럼 디렉토리 구조안에 nest 한다.

export {HomeContainer as default} from "./HomeContainer";