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
  data: any,
  id: string
}

class ArticleDetail extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      data: null,
      id: ''
    }
  }

  async getArticleDetailData(id:string) {
    const data = await getArticleDetail(+id)
    this.setState({
      data: data.data
    })
  }

  componentDidMount() {
    const {id} = this.props.match.params
    this.setState({
      id
    })
    this.getArticleDetailData(this.props.match.params.id)
  }

  componentWillReceiveProps(props: any) {
    const newId = props.match.params.id
    if (newId != this.state.id) {
      this.setState({
        id: newId
      })
      this.getArticleDetailData(newId)
    }
  }

  render() {
    const {data} = this.state
    return (
      <div className='wrapper'>
        {
          data ? <ArticleItem data={data} isDetail={true}></ArticleItem> : '该文章不存在'
        }
      </div>
    )
  }
}

export default ArticleDetail