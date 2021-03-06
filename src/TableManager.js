import {Component} from "react";
import axios from "axios";
import {Button} from "reactstrap";
import React from "react";


class TableManager extends Component {

  addTemplate = () => {
    axios.post(`${process.env.REACT_APP_OPERATIONS_API_URL}/api/v1/modelform/templates`, this.props.requestHeader)
      .then(res => {
        return this.props.toggleTemplateAdding(res.data);
      })
      .catch(error => {
        console.log(error.response);
        return this.props.toggleTemplateAdding(null);
      });
  };

  render() {
    return (
      <div className={'page-header'}>
        <h2>
          Templates Table
        </h2>
        <Button
          color='primary'
          onClick={this.addTemplate}
        >
          {'Add Template'}
        </Button>
      </div>
    )
  }
}

export default TableManager;