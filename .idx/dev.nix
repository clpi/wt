{ pkgs, ... }: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20,
    pkgs.python3,
  ];
  services.docker.enable = true;
  services.postgres.enable = true;
  services.redis.enable = true;
    
}
