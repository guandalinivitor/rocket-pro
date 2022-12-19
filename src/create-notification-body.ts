import { IsNotEmpty, IsUUID, Length, UUIDVersion } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: UUIDVersion;

  @IsNotEmpty()
  @Length(5, 100)
  content: string;

  @IsNotEmpty()
  category: string;
}
