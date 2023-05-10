import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner1 from "./Spinner1";
import Footer from "./Footer";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0,

    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)} -NewMonkey`; 
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    this.props.setProgress(30);
    
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
    // console.log(data)
  }
  async componentDidMount() {
    /* let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`
    let data=await fetch(url);
    let parsedData=await data.json()
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
    console.log(data)*/
    this.updateNews();
  }
  handlePreviousClick = async () => {
    /*  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      let data=await fetch(url);
      let parsedData=await data.json()
      this.setState({page:this.state.page-1,articles:parsedData.articles})
   */
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handleNextClick = async () => {
    /*     if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

      }
      else{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      let data=await fetch(url);
      let parsedData=await data.json()
      this.setState({page:this.state.page+1,articles:parsedData.articles})
      }*/
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  fetchMoreData = async() => {
   this.setState({page:this.state.page+1})
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   let data = await fetch(url);
   //this.setState({loading:true})
   let parsedData = await data.json();
  
   setTimeout(() => {
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,

    });
  }, 1500);
  };
  render() {
    return (
      <>
      {this.state.loading && <Spinner1 />}
        <h2 className="text-center" style={{marginTop:"90px"}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} HeadLines</h2>
             <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!=this.state.totalResults}
          loader={<Spinner1 />}
        >
          <div className="container my-4">
        <div className="row">
          {this.state.articles.map((ele) => {
            return (
              <div className="col-md-4" key={ele.url}>
                <NewsItems
                  title={ele.title}
                  description={ele.description}
                  imageurl={ele.urlToImage}
                  newsurl={ele.url}
                  author={ele.author}
                  date={ele.publishedAt}
                  source={ele.source.name}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
       {this.state.loading===false? <Footer /> :"" }
      { /* <div className="container d-flex justify-content-between m-2">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>*/}
      </>
    );
  }
}

export default News;
