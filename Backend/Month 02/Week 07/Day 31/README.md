CI/CD
>> Click EC2
>> Change region to Singapore (Beside next right to your name)
>> Network & security >> Security groups 
>> create new
>> inbound SSH & HTTP >> source type: anywhere
>> outbond : all trafic 
>> create

instances
>> launch instances
>> Choose amazon machine image
>> choose ubuntu (because we use ubuntu)
>> free, next, next
>> 8 Gb for storage, next
>> on configure security group, choose select,

run ke server
>> ssh -i DarwinAWS.pem ubuntu@13.212.230.191

install Gitlab Runner di server aws
>> sudo curl -L --output /usr/local/bin/gitlab-runner "https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64"
>> sudo chmod +x /usr/local/bin/gitlab-runner
>> sudo useradd --comment 'GitLab Runner' --create-home gitlab-runner --shell /bin/bash
>> sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner
>> sudo gitlab-runner start

install nodejs di server aws
>> curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
>> sudo apt-get install -y nodejs
cek 
>> node -v
>> npm -v

install
>> sudo npm install -g forever

Buat Project
>> sudo mkdir -p /var/www/project-ci
And make gitlab-runner user has permission able to read/write/execute the folder!
>> sudo setfacl -m user:gitlab-runner:rwx /var/www/project-ci
