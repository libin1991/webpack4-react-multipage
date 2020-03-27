import mimes from './mime'
const { join, extname } = require('path')
const { existsSync, createReadStream } = require('fs')


const static2 = (public2 = '') => async (ctx, next) => {



    console.log('2222');



    if (['HEAD', 'GET'].includes(ctx.method)) {


        console.log(ctx.method);


        const path = ctx.path === '/' ? '/index.html' : ctx.path
        const name = join(public2, path)

        console.log({ name });
        console.log(existsSync(name));


        if (existsSync(name)) {
            try {

                console.log('----')
                console.log(name);
                console.log(extname(name))
                console.log('----')



                ctx.body = createReadStream(name)
                ctx.type = mimes[extname(name)] || 'text/plain'
            } catch (e) {
                console.error(e)
            }
        }
    }

    await next()

}

export default static2