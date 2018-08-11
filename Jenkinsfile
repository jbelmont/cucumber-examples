pipeline {
  agent {
    docker {
      image 'node:10-alpine'
      args '-v /Users/jean-marcelbelmont/jenkins_data:/home'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh '''node --version

npm install'''
      }
    }
    stage('Cucumber Tests') {
      steps {
        sh 'npm run acceptance:tests'
      }
    }
  }
}