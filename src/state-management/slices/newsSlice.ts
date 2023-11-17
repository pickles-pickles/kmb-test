import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { newsType } from '../../types/types'
import { getAllNews } from '../../services/newsService'

// Define a type for the slice state
interface newsState {
  newsList: newsType[]
  isLoading: boolean
  error: any
  success: boolean
}

// Define the initial state using that type
const initialState: newsState = {
  newsList: [],
  isLoading: false,
  error: null,
  success: false
}

export const fetchAllNews = createAsyncThunk('news/fetchAllNews', async () => {
  const response = await getAllNews()
  const data = await response.data.articles
  console.log(data)
  return data
})

export const newsSlice = createSlice({
  name: 'news',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setNewsList: (state, action: PayloadAction<newsType[]>) => {
      state.newsList = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllNews.pending, state => {
        state.isLoading = true
        state.success = false
      })
      .addCase(fetchAllNews.rejected, (state, action) => {
        state.isLoading = false
        state.newsList = []
        state.error = action.error
      })

      .addCase(fetchAllNews.fulfilled, (state, action) => {
        console.log('action payload is', action.payload)
        state.newsList = action.payload.map((n: newsType) => ({
          source: n.source ? n.source : '-',
          author: n.author ? n.author : '-',
          title: n.title || '-',

          description: n.description || '-',
          url: n.url || '-',
          urlToImage: n.urlToImage || '-',
          publishedAt: n.publishedAt || '-',
          content: n.content || '-'
        }))

        state.isLoading = false
        state.success = true
      })
  }
})

export const { setNewsList } = newsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const newsListSelector = (state: RootState) => state.news.newsList
export const newsListIsLoadingSelector = (state: RootState) =>
  state.news.isLoading
export const newsListErrorSelector = (state: RootState) => state.news.error
export const newsListSuccessSelector = (state: RootState) => state.news.success

export default newsSlice.reducer
