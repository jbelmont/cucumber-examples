pipeline {
  agent any
  stages {
    stage('Cucumber Steps') {
      steps {
        sh '''npm install
npm run acceptance:tests'''
      }
    }
  }
}