import {Component} from "react";
import {Container} from "react-bootstrap";
import ResultTable from "./compoent/ResultTable.tsx";
import mockData from "./response.json";

import type {GetAllProductDto} from "../../../data/product/product.type.ts";

interface Props{


}

interface State{
  resultDtoList: GetAllProductDto[] | undefined  //not yet call api is undefined

}

export default class GetAllProductPage extends Component<Props, State>{
  constructor(props: Props) {
    super(props);

    this.state ={
      resultDtoList: undefined
    }
  }

  componentDidMount() {
    this.setState({
      resultDtoList: mockData
    })
  }


  render(){
    return(
      <Container>
        <h1>Get All Products</h1>
        {
          this.state.resultDtoList &&
            <ResultTable resultDtoList={this.state.resultDtoList}
            />
        }
      </Container>
    );

  }

}