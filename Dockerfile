FROM openjdk:19-jdk

WORKDIR /app

COPY target/mizdooni.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]