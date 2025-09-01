# ---------- Build Stage ----------
FROM gradle:8-jdk21-alpine AS build
WORKDIR /app

# Gradle 캐시 활용
COPY build.gradle settings.gradle ./
COPY gradle gradle
RUN gradle dependencies --no-daemon || return 0

# 나머지 소스 복사 후 빌드
COPY . .

# Gradle 빌드 시 JVM 메모리 옵션 추가
RUN ./gradlew clean build -x test --no-daemon -Dorg.gradle.jvmargs="-Xmx1024m"

# ---------- Run Stage ----------
FROM eclipse-temurin:21-jdk
WORKDIR /app

# 빌드된 JAR 복사
COPY --from=build /app/build/libs/*.jar app.jar

# Spring Boot 기본 포트
EXPOSE 8080

# 컨테이너 실행 시 JAR 실행
ENTRYPOINT ["java", "-jar", "app.jar"]