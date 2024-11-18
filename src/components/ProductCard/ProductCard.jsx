import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.slug}` ?? ""}
      className="flex flex-col max-w-[370px] p-[16px] bg-gradient-to-b from-gray-500 via-yellow-700 to-gray-900 rounded-lg shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl"
    >
      <img
        src={product?.imageUrl ?? ""}
        alt={product?.name ?? "No Title"}
        className="block h-[220px] w-full rounded-t-lg object-cover"
      />

      <div className="flex flex-col gap-3 mt-4 px-2 flex-grow">
        <h4 className="font-semibold text-[22px] text-white line-clamp-2">
          {product?.name ?? "No Title"}
        </h4>

        <span className="block font-medium text-[14px] text-[#a1a1a1]">
          {product?.category ?? "Uncategorized"}
        </span>

        <span className="block font-bold text-[22px] text-[#F8E71C]">
          {product?.price > 0
            ? formatToIDRCurrency(product.price)
            : "Not For Sale"}
        </span>

        <div className="flex-grow"></div>

        <div className="mt-auto">
          {product.stock <= 0 ? (
            <p className="text-lg mb-14 font-semibold text-end text-red-500">
              Out of Stock
            </p>
          ) : product.stock <= 25 ? (
            <>
              <p className="text-lg font-semibold text-end text-yellow-500">
                Almost Sold Out
              </p>
              <Button
                type="button"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#4CAF50] text-center hover:bg-[#449d44] text-white active:bg-[#3c8d3c] rounded-xl shadow-md"
              >
                <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                <span>Add to Cart</span>
              </Button>
            </>
          ) : (
            <Button
              type="button"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#4CAF50] text-center hover:bg-[#449d44] text-white active:bg-[#3c8d3c] rounded-xl shadow-md"
            >
              <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
              <span>Add to Cart</span>
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
}

ProductCard.prototypes = {
  product: PropTypes.object.isRequired,
};
