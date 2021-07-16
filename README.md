## Dev-configs
개발에 필요한 configuration 을 관리합니다.

### Installation
```shell
yarn add --dev eslint prettier eslint-config-prettier
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
yarn add --dev @soundgym/eslint-config @soundgym/prettier-config
```

### Package.json scripts
```json
{
    "scripts": {
        "fix": "yarn fix:eslint && yarn fix:prettier",
        "fix:eslint": "eslint --fix src --ext js,jsx,ts,tsx ",
        "fix:prettier": "prettier --write \"src/**/*.{ts,tsx,js}\"",
        "lint": "yarn lint:ts && yarn lint:eslint && yarn lint:prettier",
        "lint:eslint": "eslint src --ext js,jsx,ts,tsx ",
        "lint:prettier": "prettier --check \"src/**/*.{ts,tsx,js}\"",
        "lint:ts": "tsc --noEmit"
    }
}
```

---
### Monorepo 명령어

특정 패키지에 외부 라이브러리 설치 및 제거

-   yarn workspace eslint-config add eslint
-   yarn workspace eslint-config remove eslint

루트에 외부 라이브러리 설치 및 제거

-   yarn add eslint -W

버전 업

-   lerna version patch

배포

-   lerna publish from-package (npm 레지스트리 버전과 비교 후 배포)
-   lerna publish from-git (깃 태그에 포함된 소스 패키지 배포)
