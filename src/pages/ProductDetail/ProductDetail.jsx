import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllProducts } from "../../services/getAllProducts";
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faCartShopping, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const allProducts = getAllProducts();
    const product = allProducts.find((prod) => prod.slug === slug);
    setProduct(product);
  }, []);

  console.log(product)

  return (
    <>
      <Navbar />
      <div className="flex px-24 py-4 gap-[48px] items-center">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeftLong} className="mb-0 text-[40px]" />
        </Link>
        <h4 className="text-[32px] font-medium">{product.name ?? "No Label"}</h4>
      </div>
      <div className="flex gap-[30px] px-24">
        <div>
          <img
            src={product.imageUrl ?? (product.name ?? "No Name")}
            alt={product.name ?? "No Name"}
            className="block w-[700px] h-[500px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          <span className="text-[40px] font-medium">
            {formatToIDRCurrency(product.price) ?? `Not For Sale`}
          </span>
          {product.stock > 0 ? (
            product.stock <= 25 ? (
              <span className="font-medium text-yellow-500">
                Available, almost out of stock
              </span>
            ) : (
              <span className="font-medium text-green-500">Available</span>
            )
          ) : (
            <span className="font-medium text-red-500">Out of stock</span>
          )}

          <span className="text-grey-800">{product.category ?? "Uncategorized"}</span>

          {product.stock > 0 ? (
            <div>
              <Button
                type="button"
                className="inline-flex items-center justify-center gap-2 p-4 bg-[#4CAF50] text-center hover:bg-[#449d44] text-white active:bg-[#3c8d3c] rounded-xl shadow-md"
              >
                <FontAwesomeIcon icon={faCartShopping} className="mb-0 text-white" />
                <span className="text-white">Add to cart</span>
              </Button>
            </div>
          ) : (
            <div>
              <div
                type="button"
                className="inline-flex items-center justify-center gap-2 p-4 bg-gray-400 text-center  text-white  rounded-xl shadow-md"
              >
                <FontAwesomeIcon icon={faTimes} className="mb-0 text-white" />
                <span className="text-white">Out of stock</span>
              </div>
            </div>
          )}


          <span className="font-medium">Description</span>
          <div
            className="max-w-[500px] text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: product.description ?? "No description." }}
          />
        </div>
      </div>
    </>
  );
}
