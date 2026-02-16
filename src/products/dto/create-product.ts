import { IsString, IsOptional, IsUUID, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  name: string;
  description?: string;
  imageUrl?: string;
  categoryId?: string;
  vendorId: string;
}