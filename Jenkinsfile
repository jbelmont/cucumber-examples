pipeline {
  agent {
    docker {
      args '-v /Users/jean-marcelbelmont/jenkins_data'
      image 'node:10-alpine'
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