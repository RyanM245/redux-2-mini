import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';
import {connect}from 'react-redux'
import {requestArticles} from '../../redux/hackerNewsReduce'

class HackerNews extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], loading: true }
  }

  componentDidMount(){
    this.props.requestArticles()
    
  }

  render() {
    const articles = this.props.hackerNews.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img style={styles.logo} src="./hackerNews.jpeg" alt="" />
        {this.props.hackerNews.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

const mapStateToProps = state => state


export default connect(mapStateToProps, {requestArticles})(HackerNews)


const styles = {
  logo: {
    width: '250px',
    margin: '50px 0px'
  }
}