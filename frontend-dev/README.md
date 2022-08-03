# Frontend Local Development

`frontend-dev` is to support frontend local development experience. Please follow the steps below:

(1) Intall nginx locally. For mac, run `brew install nginx`.

(2) Run `nginx -c <absolute path to this nginx.conf file>`.

For example: 

```bash
nginx -c "$PWD/nginx.conf"
# or just type out whole path
nginx -c "/Users/xyao/ws/BulletJournal/frontend-dev/nginx.conf"
```

(3) Use the latest backend image in https://github.com/singerdmx/BulletJournal/blob/master/deployment/docker-compose.yml#L53 by updating https://github.com/singerdmx/BulletJournal/blob/master/frontend-dev/docker-compose.yml#L4 and use the `docker-compose.yml` file under `frontend-dev` folder to start all containers needed.


(4) Go to folder `../frontend` to start the frontend application in the development mode
```bash
cd ../frontend
npm start
```

(5) Open the browser and enter `http://localhost` to see the UI interface.
Open the browser and enter `http://localhost:8080/swagger-ui.html` to see the API documentation.

(6) Run `nginx -s stop` to stop nginx when you are done.
