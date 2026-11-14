import {Component} from "react";
import {Container} from "react-bootstrap";
import ResultTable from "./compoent/ResultTable.tsx";
import type {GetAllProductDto} from "../../../data/product/product.type.ts";
import axios from "axios";

interface Props{


}

interface State{
  resultDtoList: GetAllProductDto[] | undefined  //not yet call api is undefined
  isError: boolean;
}

export default class GetAllProductPage extends Component<Props, State>{
  constructor(props: Props) {
    super(props);

    this.state ={
      resultDtoList: undefined,
      isError: false
    }
  }

  componentDidMount() {
    /*this.setState({
      resultDtoList: mockData
    })*/

    /*we now dont use mockData and call api*/
    /*<GetAllProductDto[]> this is the type*/
    axios.get<GetAllProductDto[]>("http://localhost:8080/public/products")
      .then(
        (response)=>{
          this.setState({  /*data = the Json , we put the response into the State*/
            resultDtoList: response.data
          })
        }
      )
      .catch(
        ()=>{
          this.setState({
              isError: true
          })
        }
      )
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

        {
          this.state.isError &&
          <img
            src="https://thumb.ac-illust.com/61/61ad2ff2ef945abd168b4c70310c099f_t.jpeg"
            />
        }

      </Container>
    );

  }

}