import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Asset from "../Components/Asset";
// import AssetData from "../Components/SampleAsset"

class submitRequest extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      console.log(param); // yields ['start', '5']
      if (param[0] === "AssetId") {
        //   .then(response => {
        //     if (response.status == 200) {
        this.props.onAssetIdUpdated(param[1]);
        console.log("is it?");
        console.log(this.props.assetId);

        axios
          .get("/SubmitRequest/" + param[1])

          .then(response => {
            console.log("response");
            console.log(response.data);
            console.log(response.data.assetType.problems);
            let problems = response.data.assetType.problems.map(index => {
              console.log(index.problemdescription);
              return { index: index.id, value: index.problemdescription };
            });
            console.log("prob");
            console.log(problems);

            this.props.onResponseReceived(problems, response.data.name);
          })

          .catch(error => {
            console.log(error);
          });
      }
    }
  }

  DropDownChangeHandler =(event) => {
    console.log(event.target.value)
  }

  clickButtonHandler = () => {
    const AssetData = {
      id: 1,
      name: "VI-P-FL2-Colour-3",
      serialnumber: "CNDVJ6H02N",
      shortname: "2a",
      assetType: {
        id: 1,
        name: "Printer",
        description: "",
        problems: [
          {
            id: 1,
            problemdescription: "Paper Jam"
          }
        ]
      }
    };

    let AssetDataPlaceHolder = {
      AssetId: "",
      Status: 0,
      problemId: 0
    };
    console.log("I am clicked");
    console.log();
    AssetDataPlaceHolder.AssetId = this.props.assetId;
    console.log(AssetDataPlaceHolder);
    axios
      .post("/RequestAsset/1/?AssetName=" + this.props.assetName, AssetData)

      .then(response => {
        console.log(response);
      });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div className="formContainer">
          <p>
            Want to report a problem about {this.props.assetName}?
            {/* Please login through your google account. */}
          </p>

          <label id="lblproblem" htmlFor="inputComment">
            Select Problem
          </label>
          {/* {console.log("this.props.problemList")}
          {console.log(this.props.problemList)} */}

          <select id="dd_Problem" onChange={this.DropDownChangeHandler}>
            <option value="-1">Please Select</option>
            {this.props.problemList.map(problemList => (
              <option key={problemList.index} value={problemList.index}>
                {problemList.value}
              </option>
            ))}
          </select>

          <label id="lblMsg" htmlFor="inputComment2">
            Message
          </label>
          <div className="controls">
            <textarea
              rows="5"
              id="inputComment2"
              placeholder="Additional information ( optional ) ..."
            />
          </div>

          <button
            type="submit"
            id="btnsub"
            className="btn"
            onClick={this.clickButtonHandler}
          >
            authorise
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("in map state to props");
  return {
    assetId: state.assetId,
    assetName: state.assetName,
    problemList: state.problems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAssetIdUpdated: (assetId, assetName) =>
      dispatch({ type: "ID_UPDATED", value: assetId, assetName }),
    onResponseReceived: (problems, assetName) =>
      dispatch({ type: "FORM_DATA_UPDATED", value: problems, assetName })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(submitRequest);
