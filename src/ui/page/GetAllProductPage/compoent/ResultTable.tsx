import {Table} from "react-bootstrap";
import ResultTableRow from "./ResultTableRow.tsx";
import type {GetAllProductDto} from "../../../../data/product/product.type.ts";

interface Props{ //create a interface after resultDtoList: GetAllProductDto[] in index.tsx
  resultDtoList: GetAllProductDto[]
}

export default function ResultTable({resultDtoList}:Props){
  return(
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>Pid</th>
        <th>Name</th>
        <th>Image</th>
        <th>Price</th>
        <th>Has Stock?</th>
      </tr>
      </thead>
      <tbody>
      {
        // Array.from({length:10}).map(()=>(   <--used for checking before the real data is created
        //   <ResultTableRow/>
        // ))

        resultDtoList.map((resultDto)=>(
          <ResultTableRow resultDto={resultDto}/>
          ))
      }

      </tbody>
    </Table>

  )

}