pipeline {

  agent any

  stages {
    stage('Docker build') {  
      agent any
      steps {
        sh 'docker build -t ng-polls-frontend .'
      }
    }

    stage('Deploy') {
      agent any
      steps {
        sh 'docker run -p 3000:3000 -d --name ng-polls-frontend --rm ng-polls-frontend'
      }
    }
  }

}
