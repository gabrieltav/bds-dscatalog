FROM ubuntu:latest AS build

RUN apt-get update
RUN apt-get install openjdk-11-jdk -y
COPY . .

RUN apt-get install maven -y
RUN mvn clean package

FROM openjdk:11

EXPOSE 8080

ADD ./target/dscatalog-0.0.1-SNAPSHOT.jar dscatalog.jar

ENTRYPOINT ["java","-jar","/dscatalog.jar"]