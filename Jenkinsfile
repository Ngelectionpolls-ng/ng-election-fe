pipeline {

  agent any

  stages {
    stage('Docker build') {  
      agent any
      steps {
        sh 'cp ~/ng-polls-frontend/.env "$PWD"'
        sh 'ls -al'
        sh 'docker build -t ng-polls-frontend .'
      }
    }

    stage('Deploy') {
      agent any
      steps {
        sh 'docker ps -q --filter "name=ng-polls-frontend" | grep -q . && docker stop ng-polls-frontend'
        sh 'docker run -p 3000:3001 -d --rm --name ng-polls-frontend ng-polls-frontend'
      }
    }
  }

}