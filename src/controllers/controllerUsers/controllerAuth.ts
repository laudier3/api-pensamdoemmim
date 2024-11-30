import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { AppError } from "../../err/AppErros";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

type JwtPayload = {
  id: string
}

export class ControllerAuth {
  async handle(request: Request, response: Response, next: NextFunction) {
    //const { password } = request.body;
    const { authorization } = request.headers;

    if (!authorization) {
      return response.status(401).json({ message: `Token invalido, você não esta autorizado ${authorization}` })
      //return console.log("Token invalido, você não esta autorizado")
    }

    const token = authorization.split(' ')[1]

    const { id } = jwt.verify(token, process.env.APP_KEY ?? '') as JwtPayload

    const user = await prisma.user.findFirst({
      where: {
        id
      }
    })

    if (!user) {
      throw new AppError("Houve um erro")
    }

    const { password: _, ...userLogin } = user

    return response.status(401).json({ message: `Usuario autorizado, acesso liberado`, userLogin })

    next()
  }
}
