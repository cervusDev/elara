import { Injectable} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JWT } from 'domain/auth/constants/jwt'
@Injectable()
export class JwtGuard extends AuthGuard(JWT.TOKEN) {}
