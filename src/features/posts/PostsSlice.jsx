import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts")
	const data = await res.json()

	// I am creating an artifical delay of  5 seconds
	await new Promise((resolve) => setTimeout(resolve, 5000))

	return data
})

const postsSlice = createSlice({
	name: "posts",
	initialState: {
		allPosts: [],
		status: "idle",
		currentPage: 1,
		postsPerPage: 6,
	},
	reducers: {
		setPage: (state, action) => {
			state.currentPage = action.payload
		},
		deletePost: (state, action) => {
			state.allPosts = state.allPosts.filter(
				(post) => post.id !== action.payload,
			)
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.status = "loading"
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = "succeeded"
				state.allPosts = action.payload
			})
	},
})

export const { setPage, deletePost } = postsSlice.actions
export default postsSlice.reducer
