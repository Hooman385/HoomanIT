import NewComment from "./NewComment";
import ProductComment from "./ProductComment";

function ProductComments({ productComments, id }) {
  return (
    <div>
      <NewComment productId={id} />
      <div className="vertical-divider"></div>
      {!productComments[0] && (
        <p className="text-center my-5">دیدگاهی برای این محصول ثبت نشده است</p>
      )}
      {productComments && (
        <>
          {productComments.map((comment, index) => (
            <ProductComment comment={comment} key={index} />
          ))}
        </>
      )}
    </div>
  );
}

export default ProductComments;
