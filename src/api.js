import ApiBro from 'api-bro'

export default new ApiBro(
    process.env.API_HOST,
    {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
)
