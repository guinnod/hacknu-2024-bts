# Opticash

Подсвечиваем лучшую карту для максимальной экономии в магазинах и ресторанах.

## Архитектура

Продукт состоит из 5 сервисов.

```
Backend - Django
Frontend - Next.js
Веб парсер - Fastapi, selenium, redis
ИИ обработчик - Express.js
Планировщик - Flask
```

## Демонстрация

Вебсайт доступен по этой [ссылке](https://opticash-front.vercel.app/). Так как мы используем gpt api для обработки, selenium driver for amd64 для парсинга локальный запуск требует апи ключи и определенную архитектуру процессора. Все сервисы работают в google cloud и онлайн доступны.

## Установка

Для запуска требуется docker, node.js и python

## Запуск

```bash
git clone https://github.com/guinnod/hacknu-2024-bts
cd hacknu-2024-bts
```

```bash
cd back
docker build -t back .
docker run -d -p 8000:8000 back
cd ../
```

```bash
cd front
npm install
npm run dev
cd ../
```

```bash
cd scraper
docker compose up
cd ../
```
