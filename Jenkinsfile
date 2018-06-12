pipeline {
  agent {
    docker {
      image '10.4.0-slim'
      args '-v /Users/jean-marcelbelmont/jenkins_data'
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