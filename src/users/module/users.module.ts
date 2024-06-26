import { Module } from '@nestjs/common'
import { UsersService } from '../services/users.service'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersSchema } from '../schema/users.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UsersSchema }])],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
