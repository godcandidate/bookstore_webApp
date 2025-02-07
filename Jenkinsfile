pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                //git 'https://github.com/godcandidate/bookstore_webApp.git'
                checkout scm 
            }
        }

        stage('Build') {
            steps {
                script {
                   // sh 'npm install'  // Install dependencies
                   // sh 'npm run build'  // Build the app
                   echo "Building dependencies"
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    //sh 'npm test'  // Run tests
                    echo "Testing"
                }
            }
        }
    }

    post {
        success {
            echo 'CI Pipeline successful! ✅'
        }
        failure {
            echo 'CI Pipeline failed! ❌'
        }
    }
}
