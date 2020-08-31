## DMS Frontend with React

## Install HTTPS on localhost by using self-signed certificate
- install mkcert by brew install mkcert
- mkcert -install
- mkdir -p .cert (create .cert folder)
- mkcert -key-file ./.cert/key.pem -cert-file ./.cert/cert.pem "localhost"
- change "start script" to " "start": "HTTPS=true SSL_CRT_FILE=./.cert/cert.pem SSL_KEY_FILE=./.cert/key.pem react-scripts start"
- change Controllers at backend to allow https://localhost:3000