import { createServer, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
    let server = createServer({
        environment,

        models: {
            property: Model,
        },

        seeds(server) {
            server.create("property", {
                "id": 1,
                "created_at": "2022-01-01 09:00:00",
                "updated_at": "2022-01-02 09:00:00",
                "rented_at": "2021-11-30",
                "name": "Maison Principale",
                "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
                "address": {
                    "number": 15,
                    "street": "rue du Paradis",
                    "postcode": 75010,
                    "city": "Paris"
                },
                "surface": 56.77,
                "amount": 1280,
                "status": "available",
                "tenants": [
                    {
                        "id": 1,
                        "firstname": "John",
                        "lastname": "DOE"
                    },
                    {
                        "id": 2,
                        "firstname": "Bob",
                        "lastname": "MORANE"
                    }
                ]
            })
            server.create("property", {
                "id": 2,
                "created_at": "2022-01-01 09:00:00",
                "updated_at": "2022-01-02 09:00:00",
                "rented_at": "2021-11-30",
                "name": "Maison Secondaire",
                "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
                "address": {
                    "number": 15,
                    "street": "rue du Paradisss",
                    "postcode": 33000,
                    "city": "Paris"
                },
                "surface": 65.77,
                "amount": 13280,
                "status": "available",
                "tenants": [
                    {
                        "id": 1,
                        "firstname": "John",
                        "lastname": "DOE"
                    }
                ]
            })
        },

        routes() {
            this.namespace = "api"

            this.get("/properties", (schema) => {
                return schema.properties.all()
            })
        },
    })

    return server
}