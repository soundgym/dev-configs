특정 패키지에 외부 라이브러리 설치 및 제거
- yarn workspace eslint-config add eslint
- yarn workspace eslint-config remove eslint

루트에 외부 라이브러리 설치 및 제거
- yarn add eslint -W

버전 업
- lerna version patch

배포
- lerna publish from-package (npm 레지스트리 버전과 비교 후 배포)
- lerna publish from-git (깃 태그에 포함된 소스 패키지 배포)
