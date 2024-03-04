FROM openjdk:11

RUN apt-get update
COPY . .

RUN mvn clean package

EXPOSE 8080

COPY --from=build /target/dscatalog-0.0.1-SNAPSHOT.jar dscatalog.jar

ENTRYPOINT ["java","-jar","/dscatalog.jar"]