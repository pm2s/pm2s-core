Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision "shell", path: "etc/vagrant/provision.sh"
  config.vm.network "forwarded_port", guest: 5432, host: 5432
end
