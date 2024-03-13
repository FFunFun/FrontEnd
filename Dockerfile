# 베이스 이미지 설정
FROM node:21 as build

# 작업 디렉토리 설정
WORKDIR /app

# 소스 코드 복사
COPY . .

# 패키지 설치 및 빌드
RUN npm install
RUN npm run build

# Nginx 설정
FROM nginx:latest

# Nginx 설정 복사
COPY --from=build /app/build /usr/share/nginx/html

# 포트 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]