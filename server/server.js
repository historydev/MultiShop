const gql = require('fastify-gql')
const schema = require("./shema")

const fastify = require('fastify')({
    logger: {
        prettyPrint: {
            translateTime: 'SYS:HH:MM:ss Z'
        }
    }
})

const VerifyUser = (auth) => {
    console.log(auth)

    return auth
}


// Run the server!

async function StartWebServer() {

    fastify.register(gql, {
        schema,
        graphiql: true,
        context: async (_, req) => ({ user: await VerifyUser(req.headers["Authorization"]) })
    })

    await fastify.listen(4000, '0.0.0.0', function (err, address) {
        if (err) {
            fastify.log.error(err)
            process.exit(1)
        }
        fastify.log.info(`Server listening on ${address}`)
    })

};

StartWebServer()