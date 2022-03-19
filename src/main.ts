import { VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableVersioning({
    type: VersioningType.URI
  })

  app.enableCors({
    origin: process.env.REQUEST_ORIGIN,
    credentials: true
  })

  await app.listen(3000)
}
bootstrap()
