---
title: Deploy Wechaty in AWS ec2
author: charles-wu-chen
image: /assets/2020/deploy-wechaty-in-aws/wechaty-aws.webp
categories: project
tags:
  - nodejs
  - aws
  - devops
---

This article is about to deploy wechaty node.js application into AWS EC2 steps by steps.

## Prerequisites

- padplus token [Way to get a token](https://github.com/juzibot/Welcome/wiki/Support-Developers)
- AWS account.

## Steps

### Step 1 Launch a linux ec2 instance

Follow the AWS official Document to launch a linux instance. [Launching an instance using the Launch Instance Wizard](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/launching-instance.html)

With a successful launch, you shall be able to see the instance status is running as screen below
![EC2 is running](/assets/2020/deploy-wechaty-in-aws/ec2-running.webp)

### Step 2 Connect the ec2 instance by ssh

Follow the AWS documents to connect the ec2 instance by ssh client

- [prerequisites for connecting to your instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connection-prereqs.html)
- [Connecting to your Linux instance using SSH](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html)

With a successful connection, you shall be able to see the console prompt as below:
> [ec2-user@ip-172-31-8-111 ~]$

### Step 3 Install nvm and node

- Install node version manager (nvm) by typing the following at the command line.

```Shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

- Use nvm to install the latest version of Node.js by typing the following at the command line.

```Shell
nvm install node
```

### Step 4 install git and clone wechaty

- To install git, run below commands in the terminal:

```Shell
sudo yum update -y
sudo yum install git -y
```

- Clone wechaty from github

```Shell
git clone https://github.com/wechaty/wechaty-getting-started.git
```

### Step 5 Install wechaty dependencies and set up environment

```Shell
npm install
export WECHATY_PUPPET=wechaty-puppet-padplus
export WECHATY_PUPPET_PADPLUS_TOKEN='xxxxxx'
```

### Step 6

Start Wechaty with logs

```Shell
npm start > output.log 2> error.log
```

## Todo

- Externalize the memory card file into s3.
- For some unknown reason, the nodejs server stops. Need to investigate
