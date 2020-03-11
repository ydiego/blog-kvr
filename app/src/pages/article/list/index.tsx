import React, { Component } from "react";
import ArticleItem from "../item";
import '../styles/articleWrapper.css'
import {
  Article,
  ArticleListResponse
} from '../../../types'

interface Props { }

interface State {
  list: Array<Article>
}
class ArticleList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.$http.get('/api/article/list').then((res: ArticleListResponse) => {
      this.setState({
        list: res.data.data
      })
    })
  }

  render() {
    const { list = [] } = this.state
    if (!list.length) return 'this guy was os lazy!'
    return (
      <div className="wrapper">
        <div className="content-list">
          {
            list.map(article => {
              return <ArticleItem key={article.id} data={article}></ArticleItem>
            })
          }
        </div>
      </div>
    );
  }
}

export default ArticleList;
