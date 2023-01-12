import { Product } from "@common/types/product";
import { FC } from "react";
import Link from "next/link";
import Image from 'next/legacy/image'
import style from "./ProductCard.module.css";

interface Props {
    product: Product
    variant?: "simple" | "slim"
}

// image src
const placeHolderImage = "/product-image-placeholder.svg"

const ProductCard: FC<Props> = ({ product, variant = "simple" }) => {

    return (
        <>
            <Link href={`/products/${product.slug}`} className={style.root}>
                {variant === "slim" ? (
                    <>
                        <div className={style.productSlimTitleDiv}>
                            <span className={style.productSlimTitleSpan}>
                                {product.name}
                            </span>
                        </div>
                        {product.images && (
                            <Image
                                className={style.productImage}
                                alt={product.name ?? "Product image"}
                                src={product.images[0].url ?? placeHolderImage}
                                height={320}
                                width={320}
                                quality="85"
                                layout="fixed"
                            />
                        )}
                    </>) : (
                    <>
                        <div className={style.productBg}></div>
                        <div className={style.productTag}>
                            <h3 className={style.productTitle}>
                                <span>{product.name}</span>
                            </h3>
                            <span className={style.productPrice}>{product.price.currencyCode} {product.price.value}</span>
                        </div>
                        {product.images && (
                            <Image
                                className={style.productImage}
                                alt={product.name ?? "Product image"}
                                src={product.images[0].url ?? placeHolderImage}
                                height={540}
                                width={540}
                                quality="85"
                                layout="responsive"
                            />
                        )}
                    </>
                )}
            </Link>
        </>
    )
}

export default ProductCard