pipeline {
    agent any

    stages {
        stage("Deploy Prod") {
            when {
                branch "main"
            }
            steps {
                echo "Deploying and Building..."
                sh "docker compose build"
                echo "Starting new containers..."
                sh "docker compose up -d"
                echo "Deployed!"
            }
        }
    }
}