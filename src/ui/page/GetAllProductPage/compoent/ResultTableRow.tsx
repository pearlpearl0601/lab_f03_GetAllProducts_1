import type {GetAllProductDto} from "../../../../data/product/product.type.ts";

interface Props{    //create this because the same is created in Result Table
  resultDto: GetAllProductDto

}

export default function ResultTableRow({resultDto}:Props){
  return(
    <tr>
      <td>{resultDto.pid}</td>
      <td>{resultDto.name}</td>
      <td>
        <img
          height={160}
          src = {resultDto.imageUrl}/>
      </td>
      <td>${resultDto.price}</td>
      <td>{resultDto.hasStock? "Yes": "Out of Stock"}</td>
    </tr>
  );
}