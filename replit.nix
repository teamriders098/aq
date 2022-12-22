{ pkgs }: {
	deps = [
		pkgs.gir-rs
  pkgs.nodejs-16_x
     pkgs.libwebp
      pkgs.ffmpeg
      pkgs.nodePackages.typescript-language-server
        pkgs.yarn
        pkgs.replitPackages.jest
	];
}