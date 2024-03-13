import Image from "next/image";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
        <Banner/>
        <div style={{margin:"20px", display:"flex", flexDirection:"row",
      flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
          <ProductCard carname='Honda Civic' imgSrc='/img/civic.jpg'/>
          <ProductCard carname='Honda Accord' imgSrc='/img/accord.jpg'/>
          <ProductCard carname='Toyota Fortuner' imgSrc='/img/fortuner.jpg'/>
          <ProductCard carname='Tesla Model 3' imgSrc='/img/tesla.jpg'/>
        </div>
    </main>
  );
}
