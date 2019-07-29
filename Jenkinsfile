#!/usr/bin/env groovy

library identifier: 'apm@current',
retriever: modernSCM(
  [$class: 'GitSCMSource',
  credentialsId: 'f94e9298-83ae-417e-ba91-85c279771570',
  id: '37cf2c00-2cc7-482e-8c62-7bbffef475e2',
  remote: 'git@github.com:elastic/apm-pipeline-library.git'])

pipeline {
  agent {
    label 'docker && immutable'
  }

  environment {
    REPO = 'elasticsearch-js'
    BASE_DIR = "src/github.com/elastic/${env.REPO}"
  }

  options {
    timeout(time: 1, unit: 'HOURS')
    buildDiscarder(logRotator(numToKeepStr: '20', artifactNumToKeepStr: '20', daysToKeepStr: '30'))
    timestamps()
    ansiColor('xterm')
    disableResume()
    durabilityHint('PERFORMANCE_OPTIMIZED')
  }

  triggers {
    issueCommentTrigger('(?i).*(?:jenkins\\W+)?run\\W+(?:the\\W+)?tests(?:\\W+please)?.*')
  }

  stages {
    stage('Checkout') {
      options { skipDefaultCheckout() }
      steps {
        deleteDir()
        gitCheckout(basedir: "${BASE_DIR}", githubNotifyFirstTimeContributor: false)
        stash allowEmpty: true, name: 'source', useDefaultExcludes: false
      }
    }

    stage('Install dependencies') {
      options { skipDefaultCheckout() }
      environment {
        HOME = "${env.WORKSPACE}"
        npm_config_cache = 'npm-cache'
      }
      steps {
        deleteDir()
        unstash 'source'
        script {
          docker.image('node:10-alpine').inside(){
            dir("${BASE_DIR}"){
              sh '''node --version
                    npm --version'''
              sh 'npm install'
            }
          }
        }
        stash allowEmpty: true, name: 'source-dependencies', useDefaultExcludes: false
      }
    }

    stage('License check') {
      options { skipDefaultCheckout() }
      environment {
        HOME = "${env.WORKSPACE}"
        npm_config_cache = 'npm-cache'
      }
      steps {
        deleteDir()
        unstash 'source-dependencies'
        script {
          docker.image('node:10-alpine').inside(){
            dir("${BASE_DIR}"){
              sh 'npm run license-checker'
            }
          }
        }
      }
    }

    stage('Linter') {
      options { skipDefaultCheckout() }
      environment {
        HOME = "${env.WORKSPACE}"
        npm_config_cache = 'npm-cache'
      }
      steps {
        deleteDir()
        unstash 'source-dependencies'
        script {
          docker.image('node:10-alpine').inside(){
            dir("${BASE_DIR}"){
              sh 'npm run lint'
            }
          }
        }
      }
    }

    stage('Unit test') {
      options { skipDefaultCheckout() }
      environment {
        HOME = "${env.WORKSPACE}"
        npm_config_cache = 'npm-cache'
      }
      steps {
        deleteDir()
        unstash 'source-dependencies'
        script {
          docker.image('node:10-alpine').inside(){
            dir("${BASE_DIR}"){
              sh 'npm run test:unit'
              sh 'npm run test:behavior'
              sh 'npm run test:types'
            }
          }
        }
      }
    }

    stage('OSS integration test') {
      options { skipDefaultCheckout() }
      environment {
        HOME = "${env.WORKSPACE}"
        npm_config_cache = 'npm-cache'
        TEST_ES_SERVER = 'http://elasticsearch:9200'
      }
      steps {
        deleteDir()
        unstash 'source-dependencies'
        dir("${BASE_DIR}"){
          sh(label: 'Start Elasticsearch', script: './scripts/es-docker.sh --detach')
        }
        script {
          docker.image('node:10-alpine').inside('--network=elastic --user=root'){
            dir("${BASE_DIR}"){
              sh(label: 'Installing git', script: 'apk --no-cache add git')
              sh(label: 'Integration test', script: 'npm run test:integration')
            }
          }
        }
        sh(label: 'Stop Elasticsearch', script: 'docker kill $(docker ps -q)')
      }
    }

    stage('xPack integration test') {
      options { skipDefaultCheckout() }
      environment {
        HOME = "${env.WORKSPACE}"
        npm_config_cache = 'npm-cache'
        TEST_ES_SERVER = 'https://elastic:changeme@localhost:9200'
      }
      steps {
        deleteDir()
        unstash 'source-dependencies'
        dir("${BASE_DIR}"){
          sh(label: 'Start Elasticsearch', script: './scripts/es-docker-platinum.sh --detach')
        }
        script {
          docker.image('node:10-alpine').inside('--network=elastic --user=root'){
            dir("${BASE_DIR}"){
              sh(label: 'Installing git', script: 'apk --no-cache add git')
              sh(label: 'Integration test', script: 'npm run test:integration')
            }
          }
        }
        sh(label: 'Stop Elasticsearch', script: 'docker kill $(docker ps -q)')
      }
    }
  }
}
