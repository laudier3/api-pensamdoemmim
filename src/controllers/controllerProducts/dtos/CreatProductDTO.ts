import { Decimal } from "@prisma/client/runtime";

export interface CreatProductDTO {
    name: string;
    price: string;
    bar_code: string;
    size: string;
    color: string;
    description: string;
    image: string;
    frete: string;
    quantity: string;
    amount: Decimal;
    slug: string;
    url_product: string;
}