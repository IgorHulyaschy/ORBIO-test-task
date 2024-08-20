# Usage

## Create user request
```bash
curl --location 'localhost:3000/api/v1/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "test@gmail.com",
    "marketingData": {
        "age": 17
    }
}'
```

## Create user response
```json
{ "id": "UUID" }
```

## Create purchase request

```bash
curl --location 'localhost:3000/api/v1/purchases' \
--header 'Content-Type: application/json' \
--data '{
    "offerId": "3",
    "userId": "5e2316a0-2592-45c9-aa17-9f5e1ab2fb9d"
}'
```

## Create purchase response
```json
{
    "id": "UUID",
    "offerId": "1", // in src/infra/db/repositories/OfferRepository.ts there is some seeded data
    "userId": "UUID"
}
```