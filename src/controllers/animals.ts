import { NextFunction, Request, Response } from 'express';

const handleAnimals = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({


        message: 'hello world'
    });
};

export default { handleAnimals };