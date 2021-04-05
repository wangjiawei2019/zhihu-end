/*
 * @Date: 2021-04-05 15:21:11
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-04-05 15:36:30
 * @FilePath: /zhihu-end/src/guards/guth/auth.guard.ts
 */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) return true;
    return true;
  }
}
