export default defineEventHandler(async (event) => {
    try {
        const posts = await queryCollection('blog').all()
        return {
            status: 'success',
            count: posts.length,
            posts
        }
    } catch (error) {
        return {
            status: 'error',
            message: error.message,
            stack: error.stack
        }
    }
})
