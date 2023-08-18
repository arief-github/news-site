import {NextApiResponse, NextApiRequest} from "next";
import {Category} from "../../../shared/types";
import categoriesSource from '../../../server/categories.json';

export default function categoriesHandler(
    req: NextApiRequest,
    res: NextApiResponse<Category[]>
) {
    const categories = categoriesSource as Category[];
    return res.status(200).json(categories);
}