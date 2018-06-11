pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run Acceptance Tests') {
      steps {
        sh 'npm run acceptance:tests'
      }
    }
  }
}