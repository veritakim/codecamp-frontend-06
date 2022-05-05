FROM node:14

# RUN mkdir class_build 굳이 따로 해주지 않아도 됨.
# . 모두 카피하겠다.  
COPY . /class_build/

# 커서를 깜빡 깜빡 거릴 위치
WORKDIR /class_build/
# 밑의 명령어들을 실행시켜줘
RUN yarn install
RUN yarn build:ssr
CMD yarn start

# RUN, CMD 둘다 사용 가능
# RUN과 CMD의 차이. 
# 도커 파일을 빌드하면 하나의 이미지 형태로.. 어쩌고 저쩌고 CMD는 한번밖에 안된다.