#!/bin/sh

echo "Esperando base de datos..."

npx prisma migrate deploy

echo "Ejecutando seed..."

npx prisma db seed

echo "Iniciando peru-service..."

npm start