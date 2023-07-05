import axios from "axios";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Bars } from "react-loader-spinner";

export class News extends Component {
  constructor(props) {
    super();
    this.state = {
      articles: [],
      district: props.category,
      loading: false,
    };
    document.title = `${props.category} - NewsApp`;
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let url = "http://localhost:5000/fetchallnews";
    if (this.state.district !== "general") {
      url = `http://localhost:5000/fetchallnews/${this.state.district}`;
    }
    const response = await axios.get(url);
    this.setState({ articles: response.data });
    this.setState({ loading: false });
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="my-3 text-center">
            News - {this.props.category} Headlines
          </h1>

          <div className="container">
            {
              <Bars
                height="80"
                width="80"
                color="black"
                ariaLabel="bars-loading"
                visible={this.state.loading}
                wrapperStyle={{ marginLeft: "37vw", marginTop: "50px" }}
              />
            }
            <div className="row">
              {this.state.articles.map((element, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      photo={element.photo}
                      newsUrl={`details/${element._id}`}
                      createdAt={element.createdAt}
                    ></NewsItem>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
