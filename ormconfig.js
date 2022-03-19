// @ts-check

/**
 * @type { import('typeorm').ConnectionOptions }
 */
const config = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: 5432,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  entities: ['dist/**/*.entity.{ts,js}'],
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV !== 'production'
}

module.exports = config
