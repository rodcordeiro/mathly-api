import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { Auth } from '@/common/decorators/auth.decorator';

import { questionsService } from '../services/questions.service';
import { CreateAccountDTO } from '../dto/create.dto';

@Auth()
@ApiTags('questions')
@ApiBearerAuth()
@Controller({
  version: '1',
  path: '/questions',
})
export class questionsController {
  constructor(private readonly _service: questionsService) {}

  @Get()
  async index(@Req() req: AuthenticatedRequest) {
    return await this._service.findBy({
      owner: { id: req.user.id },
    });
  }

  @Get('/:id')
  async view(@Param('id') id: string) {
    return this._service.findOneBy({ id });
  }

  @Post()
  async create(
    @Req() req: AuthenticatedRequest,
    @Body() data: CreateAccountDTO,
  ) {
    return this._service.store({ ...data, owner: req.user.id });
  }

  @Put('/:id')
  async update(
    @Req() req: AuthenticatedRequest,
    @Param('id') id: string,
    @Body() data: Partial<CreateAccountDTO>,
  ) {
    return this._service.update(id, { ...data, owner: req.user.id });
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this._service.destroy(id);
  }
}
