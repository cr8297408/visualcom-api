import { Request, Response } from "express";
import { PredictService } from "../../application";
import { MulterRequest } from "../../domain";

const service = PredictService
class PredictController {
  async predictLetter(req: Request, res: Response): Promise<void> {
    res.send(await service.predictLetter((req as MulterRequest).file.path))
  }
}

export default new PredictController();