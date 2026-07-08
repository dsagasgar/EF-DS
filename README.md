# Ejecución
- Construir imagenes:
  ```
  docker build -t gateway-service:1.0 ./gateway-service/
  docker build -t peru-service:1.0 ./peru-service/
  docker build -t extranjero-service:1.0 ./extranjero-service/
  ```
- Ejecutar contenedores usando docker compose
```
docker compose up
```
