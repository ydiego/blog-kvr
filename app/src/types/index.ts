export interface Article{
  author: string
  content: string
  content_md: string
  createdAt: string
  id: number 
  summary: string
  tag: string
  title: string
  updatedAt: string
  visitCount: 7,
  prev?: any
  next?: any
}

export interface ArticleDetailResponse{
  code: string,
  data: Article,
  msg: string
}


export interface ArticleListResponse{
  code: string
  data: {
    currentPage: number
    data: Array<Article>
    pageSize: number,
    total: number,
    totalPage: number
  }
  msg: string
}