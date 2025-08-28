import { validate, ValidationError } from 'class-validator';
import { ClassConstructor, plainToInstance } from 'class-transformer';

export async function validateDto<T extends object>(
  DtoClass: ClassConstructor<T>,
  plainObject: any,
): Promise<{ errors: ValidationError[]; dto?: T }> {
  const dto = plainToInstance(DtoClass, plainObject);
  const errors = await validate(dto);

  if (errors.length > 0) {
    return { errors };
  }

  return { errors: [], dto };
}

export const safeJsonParse = async <T extends object>(
  DtoClass: ClassConstructor<T>,
  str: string,
) => {
  const { dto } = await validateDto(DtoClass, JSON.parse(str));
  return dto;
};
