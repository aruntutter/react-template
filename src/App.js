const App = () => {
  return (
    <div>
      <Head />
      <div className="products">
        <Product
          imgUrl={`https://static.zara.net/photos///2023/I/0/2/p/5679/101/400/2/w/2400/5679101400_1_1_1.jpg?ts=1686233133881`}
          productBrand="ZARA"
          productTitle="VISCOSE - LINEN SHIRT"
          actualPrice={4500}
          discountedPrice={3290}
        />
        <Product
          imgUrl={`https://static.zara.net/photos///2023/I/0/2/p/3057/410/982/2/w/464/3057410982_2_1_1.jpg?ts=1688657662533`}
          productBrand="ZARA"
          productTitle="VISCOSE - LINEN SHIRT"
          actualPrice={3290}
          discountedPrice={3999}
        />
        <Product
          imgUrl={`https://static.zara.net/photos///2023/I/0/2/p/7545/341/400/2/w/464/7545341400_2_1_1.jpg?ts=1685086116291`}
          productBrand="ZARA"
          productTitle="ABSTRACT PRINT SHIRT"
          actualPrice={2290}
          discountedPrice={3800}
        />
        <Product
          imgUrl={`https://static.zara.net/photos///2023/I/0/2/p/6917/489/064/2/w/464/6917489064_2_1_1.jpg?ts=1686124868946`}
          productBrand="ZARA"
          productTitle="CONTRAST CROCHET SHIRT"
          actualPrice={4500}
          discountedPrice={3290}
        />
        <Product
          imgUrl={`https://static.zara.net/photos///2023/I/0/2/p/2688/312/802/2/w/464/2688312802_2_1_1.jpg?ts=1688714839426`}
          productBrand="ZARA"
          productTitle="STRIPED JACQUARD SHIRT"
          actualPrice={4500}
          discountedPrice={3000}
        />
        <Product
          imgUrl={`https://static.zara.net/photos///2023/I/0/2/p/1063/316/505/2/w/464/1063316505_2_1_1.jpg?ts=1691138486421`}
          productBrand="ZARA"
          productTitle="COTTON POPLIN SHIRT"
          actualPrice={3300}
          discountedPrice={2290}
        />
        <Product
          imgUrl={`https://static.zara.net/photos///2023/I/0/2/p/7545/535/104/2/w/464/7545535104_2_1_1.jpg?ts=1691146185382`}
          productBrand="ZARA"
          productTitle="ABSTRACT PRINT STRETCH SHIRT"
          actualPrice={4000}
          discountedPrice={2990}
        />
        <Product
          imgUrl={`https://static.zara.net/photos///2023/I/0/2/p/5669/155/070/2/w/464/5669155070_2_1_1.jpg?ts=1689757426667`}
          productBrand="ZARA"
          productTitle="PALM TREE PRINT SHIRT"
          actualPrice={3500}
          discountedPrice={2590}
        />
        <Product
          imgUrl={`https://static.zara.net/photos///2023/I/0/2/p/5906/811/712/2/w/464/5906811712_2_1_1.jpg?ts=1690358718942`}
          productBrand="ZARA"
          productTitle="STRIPED SHIRT"
          actualPrice={3600}
          discountedPrice={2890}
        />
        <Product
          imgUrl={`https://static.zara.net/photos///2023/I/0/2/p/1063/316/505/2/w/464/1063316505_2_1_1.jpg?ts=1691138486421`}
          productBrand="ZARA"
          productTitle="COTTON POPLIN SHIRT"
          actualPrice={3300}
          discountedPrice={2290}
        />
      </div>
    </div>
  );
};

const Head = () => {
  return (
    <div className="head">
      <Title text="Mens Wear" />
    </div>
  );
};

export default App;

const Title = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};

const Product = (props) => {
  return (
    <article className="product">
      <div>
        <img
          src={props.imgUrl}
          alt={`${props.productBrand}-${props.productTitle}`}
        />
      </div>
      <div className="product-details">
        <h3>{props.productBrand}</h3>
        <p>{props.productTitle}</p>
        <h4>
          ₹.{`${props.discountedPrice}`}&nbsp;&nbsp;
          <del>₹.{`${props.actualPrice}`}</del>
        </h4>
      </div>
    </article>
  );
};
