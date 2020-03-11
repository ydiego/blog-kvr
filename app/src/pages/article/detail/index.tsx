import React, {Component} from 'react'
import ArticleItem from "../item";
import {getArticleDetail} from '../../../api/api'
import {
  Article, 
  ArticleDetailResponse
} from '../../../types'
import '../styles/articleWrapper.css'

interface ArticleDetailInterface {
  id: number,
  params?: object
}

interface Props {
  match: any
}

interface State {
  data: any
}

class ArticleDetail extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      data: null
    }
  }

  async getArticleDetailData() {
    const data = await getArticleDetail(this.props.match.params.id)
    this.setState({
      data: data.data
    })
  }

  componentDidMount() {
    this.getArticleDetailData()
  }

  render() {
    const {data} = this.state

    if (!data) {
      return (
        <div className='wrapper'>
          '该文章不存在'
        </div>
      )
    }

    return (
      <div className='wrapper'>
        <ArticleItem data={data} isDetail={true}></ArticleItem>
      </div>
    )
  }
}

export default ArticleDetail