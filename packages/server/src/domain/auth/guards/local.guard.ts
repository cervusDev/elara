import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JWT } from 'domain/auth/constants/jwt'

@Injectable()
export class LocalGuard extends AuthGuard(JWT.LOCAL) {}
