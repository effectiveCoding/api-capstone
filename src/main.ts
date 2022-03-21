import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
  VersioningType
} from '@nestjs/common'
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

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors: ValidationError[]) => {
        throw new BadRequestException(
          errors.map(err => ({
            field: err.property,
            message: Object.values(err.constraints)
          }))
        )
      }
    })
  )

  await app.listen(3000)
}
bootstrap()
