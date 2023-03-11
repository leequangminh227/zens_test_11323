import { Controller, Get, Post, Param, Query, Put } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';

@Controller('jokes')
export class JokesController {
  constructor(private readonly JokesService: JokesService) {}

  //get all jokes
  @Get()
  @ApiOperation({
    summary: 'Get all jokes',
    description: 'Get array of all existing jokes',
  })
  getAll() {
    return this.JokesService.getAll();
  }

  //get one joke
  @Get('/:id')
  @ApiOperation({
    summary: 'Find joke',
    description: 'Get joke by id',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'id of the joke',
    schema: { type: 'integer' },
  })
  getOne(@Param('id') id) {
    return this.JokesService.getOne(id);
  }

  //get not reacted joke
  @Post('new')
  @ApiOperation({
    summary: 'Get new joke',
    description: 'Get one joke that not in the array of id of jokes',
  })
  @ApiQuery({
    name: 'idList',
    description: 'Array of list of id of reacted jokes',
    schema: { type: 'array', items: { type: 'integer' }, default: [] },
  })
  getNew(@Query('idList') idList) {
    return this.JokesService.getNew(idList);
  }

  //react to a joke
  @Put('react/:id')
  @ApiOperation({
    summary: 'React a joke',
    description: 'React a joke and update like/dislike of that joke',
  })
  @ApiParam({
    name: 'id',
    description: 'id of the joke reacted',
    required: true,
    schema: { type: 'integer' },
  })
  @ApiQuery({
    name: 'reaction',
    description: 'Reaction to the joke (like it or not)',
    schema: { type: 'boolean' },
  })
  reactJoke(@Param('id') id, @Query('reaction') reaction) {
    return this.JokesService.reactJoke(id, reaction === 'true');
  }
}
