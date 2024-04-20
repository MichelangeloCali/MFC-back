import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  Param,
  // Delete,
} from '@nestjs/common';
import { HealthFacilityService } from './health-facility.service';
// import { CreateHealthFacilityDto } from './dto/create-health-facility.dto';
// import { UpdateHealthFacilityDto } from './dto/update-health-facility.dto';

@Controller('health-facility')
export class HealthFacilityController {
  constructor(private readonly healthFacilityService: HealthFacilityService) {}

  /**
 * 
  Tela Login
  -> POST /auth
  -> Chamar o POST após conseguir os dados do login com o Google
  -> Retornar um JWT e armazenar local para evitar login toda hora

  Home
  -> GET /health-units
  -> Lista dos health units

  Tela dos turnos de um health unit
  -> GET /health-units/{healthUnitId}/shifts
  -> Lista dos turnos do health unit
  -> Mostrar quais estão disponíveis e quais estão ocupados

  -> POST /shifts ~ Passar no body o shiftId
  -> Quando clicar em se candidatar

  Tela MEUS TURNOS
  -> GET /me/shifts
  -> Lista dos turnos em que se candidatou

  -> DELETE /shifts/{shiftId}
  -> Quando clicar em se retirar

  Tela Perfil
  -> GET /me
  -> Mostrar informações do usuário
 */

  // @Post()
  // create(@Body() createHealthFacilityDto: CreateHealthFacilityDto) {
  //   return this.healthFacilityService.create(createHealthFacilityDto);
  // }

  @Get()
  findAll() {
    return this.healthFacilityService.findAll();
  }

  @Get(':id/shifts')
  findOne(@Param('id') id: number) {
    return this.healthFacilityService.findHealthFacilityShifts(id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateHealthFacilityDto: UpdateHealthFacilityDto,
  // ) {
  //   return this.healthFacilityService.update(+id, updateHealthFacilityDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.healthFacilityService.remove(+id);
  // }
}
