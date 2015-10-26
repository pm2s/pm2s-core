#!/usr/bin/env bash
sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
apt-get update
apt-get install -y postgresql-9.4
sudo -u postgres psql -c "create database pm2s"
sudo -u postgres psql -c "create user vagrant with password 'vagrant'";
sudo -u postgres psql -c "grant all privileges on database pm2s to vagrant"
